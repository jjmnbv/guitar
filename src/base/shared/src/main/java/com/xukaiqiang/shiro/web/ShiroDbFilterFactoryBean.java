package com.xukaiqiang.shiro.web;

import java.io.IOException;
import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.Filter;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.commons.lang3.reflect.FieldUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.SimplePrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.AntPathMatcher;
import org.apache.shiro.util.PatternMatcher;
import org.apache.shiro.web.filter.PathMatchingFilter;
import org.apache.shiro.web.filter.mgt.FilterChainManager;
import org.apache.shiro.web.filter.mgt.FilterChainResolver;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.mgt.WebSecurityManager;
import org.apache.shiro.web.servlet.AbstractShiroFilter;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.BeanInitializationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.google.common.collect.LinkedHashMultimap;
import com.xukaiqiang.shiro.ShiroVars;
import com.xukaiqiang.shiro.entity.ShiroResource;
import com.xukaiqiang.shiro.realm.ShiroDbRealm;
import com.xukaiqiang.shiro.service.ShiroResourceService;
import com.xukaiqiang.shiro.web.filter.ShiroFilterConfig;

public class ShiroDbFilterFactoryBean extends ShiroFilterFactoryBean implements PathFilter {

	private static transient final Logger log = LoggerFactory.getLogger(ShiroDbFilterFactoryBean.class);

	private PatternMatcher pathMatcher = new AntPathMatcher();
	private AbstractShiroFilter instance;
	private String defaultChainDefinitions;

	@Autowired
	private ShiroVars appVars;
	@Autowired(required = false)
	private ShiroResourceService resourceService;
	@Autowired
	private ShiroDbRealm shiroDbRealm;

	@Override
	public boolean isAccessAllowed(String path) {
		if (path == null) {
			return false;
		}
		Subject subject = SecurityUtils.getSubject();

		Map<String, String> filterChainDefinitionMap = getFilterChainDefinitionMap();
		for (Entry<String, String> entry : filterChainDefinitionMap.entrySet()) {
			if (pathMatcher.matches(entry.getKey(), path)) {
				return ShiroFilterConfig.matches(entry.getValue(), subject);
			}
		}
		return false;
	}

	@Override
	public boolean isAccessAllowed(String path, String username) {
		if (path == null) {
			return false;
		}

		if (StringUtils.isEmpty(username)) {
			return false;
		}

		PrincipalCollection principal = new SimplePrincipalCollection(username, shiroDbRealm.getName());

		Map<String, String> filterChainDefinitionMap = getFilterChainDefinitionMap();
		for (Entry<String, String> entry : filterChainDefinitionMap.entrySet()) {
			if (pathMatcher.matches(entry.getKey(), path)) {
				return ShiroFilterConfig.matches(entry.getValue(), principal);
			}
		}
		return false;
	}

	@Override
	public void reload() {
		if (instance == null) {
			return;
		}
		loadFilterChainDefinitions();
		clearFilterAppliedPaths();
		PathMatchingFilterChainResolver chainResolver = new PathMatchingFilterChainResolver();
		chainResolver.setFilterChainManager(createFilterChainManager());
		instance.setFilterChainResolver(chainResolver);

	}

	@Override
	public void setFilterChainDefinitions(String defaultChainDefinitions) {
		this.defaultChainDefinitions = defaultChainDefinitions;
		loadFilterChainDefinitions();
	}

	@Override
	public Object getObject() throws Exception {
		if (instance == null) {
			instance = createInstance();
		}
		return instance;
	}

	@SuppressWarnings("rawtypes")
	public Class getObjectType() {
		return SpringShiroFilter.class;
	}

	protected AbstractShiroFilter createInstance() throws Exception {

		log.debug("Creating Shiro Filter instance.");

		SecurityManager securityManager = getSecurityManager();
		if (securityManager == null) {
			String msg = "SecurityManager property must be set.";
			throw new BeanInitializationException(msg);
		}

		if (!(securityManager instanceof WebSecurityManager)) {
			String msg = "The security manager does not implement the WebSecurityManager interface.";
			throw new BeanInitializationException(msg);
		}

		FilterChainManager manager = createFilterChainManager();

		// Expose the constructed FilterChainManager by first wrapping it in a
		// FilterChainResolver implementation. The AbstractShiroFilter
		// implementations
		// do not know about FilterChainManagers - only resolvers:
		PathMatchingFilterChainResolver chainResolver = new PathMatchingFilterChainResolver();
		chainResolver.setFilterChainManager(manager);

		// Now create a concrete ShiroFilter instance and apply the acquired
		// SecurityManager and built
		// FilterChainResolver. It doesn't matter that the instance is an
		// anonymous inner class
		// here - we're just using it because it is a concrete
		// AbstractShiroFilter instance that accepts
		// injection of the SecurityManager and FilterChainResolver:
		SpringShiroFilter springShiroFilter = new SpringShiroFilter((WebSecurityManager) securityManager,
				chainResolver);
		if (!StringUtils.isEmpty(appVars.includes)) {
			springShiroFilter.includes = appVars.includes.split(",");
		}
		if (!StringUtils.isEmpty(appVars.excludes)) {
			springShiroFilter.excludes = appVars.excludes.split(",");
		}
		return springShiroFilter;
	}

	private void loadFilterChainDefinitions() {
		StringBuffer buf = new StringBuffer(defaultChainDefinitions);
		if (resourceService != null) {
			LinkedHashMultimap<String, String> cache = LinkedHashMultimap.create();
			try {
				for (ShiroResource resource : resourceService.findAll()) {
					String[] configStrings = ShiroFilterConfig.buildConfigStrings(resource.getPermission());
					for (String configString : configStrings) {
						cache.put(resource.getPattern(), configString);
					}
				}
			} catch (Exception e) {
				log.error(e.getMessage(), e);
			}

			String sep = System.getProperty("line.separator");
			for (String pattern : cache.keySet()) {
				String permission = ShiroFilterConfig.merge(cache.get(pattern));
				buf.append(sep).append(pattern).append("=").append(permission);
			}
		}
		super.setFilterChainDefinitions(buf.toString());
	}

	@SuppressWarnings("unchecked")
	private void clearFilterAppliedPaths() {
		Map<String, Filter> filters = getFilters();
		if (filters == null) {
			return;
		}

		for (Map.Entry<String, Filter> entry : filters.entrySet()) {
			Filter filter = entry.getValue();
			if (filter instanceof PathMatchingFilter) {
				try {
					((Map<String, Object>) FieldUtils.readField(filter, "appliedPaths", true)).clear();
				} catch (IllegalAccessException e) {
					// ignore
				}
			}
		}
	}

	private static final class SpringShiroFilter extends AbstractShiroFilter {

		private String[] includes;
		private String[] excludes;
		private PatternMatcher pathMatcher = new AntPathMatcher();

		protected SpringShiroFilter(WebSecurityManager webSecurityManager, FilterChainResolver resolver) {
			super();
			if (webSecurityManager == null) {
				throw new IllegalArgumentException("WebSecurityManager property cannot be null.");
			}
			setSecurityManager(webSecurityManager);
			if (resolver != null) {
				setFilterChainResolver(resolver);
			}
		}

		@Override
		protected boolean isEnabled(ServletRequest request, ServletResponse response)
				throws ServletException, IOException {
			String requestURI = WebUtils.getPathWithinApplication(WebUtils.toHttp(request));

			for (String pattern : excludes) {
				if (pathMatcher.matches(pattern, requestURI)) {
					return false;
				}
			}

			if (includes.length > 0) {
				for (String pattern : includes) {
					if (pathMatcher.matches(pattern, requestURI)) {
						return true;
					}
				}
				return false;
			}

			return super.isEnabled(request, response);
		}

	}

}
