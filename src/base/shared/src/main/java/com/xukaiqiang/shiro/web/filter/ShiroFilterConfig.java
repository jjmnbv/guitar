package com.xukaiqiang.shiro.web.filter;

import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.CollectionUtils;
import org.apache.shiro.util.StringUtils;

import com.google.common.collect.LinkedHashMultimap;
import com.google.common.collect.Lists;
import com.google.common.collect.Sets;

public class ShiroFilterConfig {

	/**
	 * 合并配置串
	 * 
	 * <pre>
	 * LinkedHashSet&lt;String&gt; configSettings = Sets
	 * 		.newLinkedHashSet(Lists.newArrayList(&quot;roles[foo1,foo2,bar1]&quot;, &quot;roles[foo1,bar1,bar2]&quot;));
	 * assertEquals(&quot;roles[foo1,foo2,bar1,bar2]&quot;, ShiroFilterConfig.merge(configSettings));
	 * </pre>
	 * 
	 * @param configStrings
	 * @return
	 */
	public static String merge(Collection<String> configStrings) {
		LinkedHashMultimap<String, String> cache = LinkedHashMultimap.create();
		for (String configString : configStrings) {
			ShiroFilterConfig config = new ShiroFilterConfig(configString);
			if (config.params == null) {
				cache.put(config.name, null);
			} else {
				for (String param : StringUtils.split(config.params)) {
					cache.put(config.name, param);
				}
			}
		}

		List<String> configList = Lists.newArrayList();

		for (String name : cache.keySet()) {
			Set<String> params = Sets.newHashSet(cache.get(name));
			params.remove(null);
			if (params.isEmpty()) {
				configList.add(name);
			} else {
				configList.add(name + "[" + StringUtils.toDelimitedString(params, ",") + "]");
			}
		}
		return StringUtils.toDelimitedString(configList, ",");
	}

	public static boolean matches(String permission, Subject subject) {
		String[] configStrings = buildConfigStrings(permission);

		for (String configString : configStrings) {
			ShiroFilterConfig config = new ShiroFilterConfig(configString);

			if (!config.matches(subject)) {
				return false;
			}
		}
		return true;
	}

	public static boolean matches(String permission, PrincipalCollection principal) {
		String[] configStrings = buildConfigStrings(permission);

		for (String configString : configStrings) {
			ShiroFilterConfig config = new ShiroFilterConfig(configString);

			if (!config.matches(principal)) {
				return false;
			}
		}
		return true;
	}

	public static String[] buildConfigStrings(String permission) {
		return StringUtils.split(permission, StringUtils.DEFAULT_DELIMITER_CHAR, '[', ']', true, true);
	}

	private String name;
	private String params;

	public ShiroFilterConfig(String str) {

		String[] pair = str.split("\\[", 2);

		name = StringUtils.clean(pair[0]);
		if (name == null || pair.length != 2) {
			return;
		}

		params = StringUtils.clean(pair[1]);
		if (params == null) {
			return;
		}

		params = params.substring(0, params.length() - 1);
		if (params == null) {
			return;
		}

		params = StringUtils.clean(params);
		if (params == null) {
			return;
		}

		if (params.startsWith("\"") && params.endsWith("\"")) {
			String stripped = params.substring(1, params.length() - 1);
			stripped = StringUtils.clean(stripped);

			if (stripped != null && stripped.indexOf('"') == -1) {
				params = stripped;
			}
		}
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getParams() {
		return params;
	}

	public void setParams(String params) {
		this.params = params;
	}

	public boolean matches(Subject subject) {
		switch (ShiroFilter.valueOf(name)) {
		case perms:
			return hasAllPerms(subject);
		case roles:
			return hasAllRoles(subject);
		case user:
			return subject.getPrincipal() != null;
		case anyRoles:
			return hasAnyRoles(subject);
		default:
			break;
		}
		return true;
	}

	public boolean matches(PrincipalCollection principal) {
		switch (ShiroFilter.valueOf(name)) {
		case perms:
			return hasAllPerms(principal);
		case roles:
			return hasAllRoles(principal);
		case user:
			return principal != null;
		case anyRoles:
			return hasAnyRoles(principal);
		default:
			break;
		}
		return true;
	}

	private boolean hasAllPerms(Subject subject) {
		if (params == null) {
			return true;
		}

		String[] perms = StringUtils.split(params);
		if (perms == null || perms.length == 0) {
			return true;
		}

		if (perms.length == 1) {
			return subject.isPermitted(perms[0]);
		}

		return subject.isPermittedAll(perms);
	}

	private boolean hasAllPerms(PrincipalCollection principal) {
		if (params == null) {
			return true;
		}

		String[] perms = StringUtils.split(params);
		if (perms == null || perms.length == 0) {
			return true;
		}

		if (perms.length == 1) {
			return SecurityUtils.getSecurityManager().isPermitted(principal, perms[0]);
		}

		return SecurityUtils.getSecurityManager().isPermittedAll(principal, perms[0]);
	}

	private boolean hasAllRoles(Subject subject) {
		if (params == null) {
			return true;
		}

		String[] roles = StringUtils.split(params);
		if (roles == null || roles.length == 0) {
			return true;
		}

		return subject.hasAllRoles(CollectionUtils.asSet(roles));
	}

	private boolean hasAllRoles(PrincipalCollection principal) {
		if (params == null) {
			return true;
		}
		
		String[] roles = StringUtils.split(params);
		if (roles == null || roles.length == 0) {
			return true;
		}

		return SecurityUtils.getSecurityManager().hasAllRoles(principal, CollectionUtils.asSet(roles));
	}

	private boolean hasAnyRoles(Subject subject) {
		if (params == null) {
			return true;
		}

		String[] roles = StringUtils.split(params);
		if (roles == null || roles.length == 0) {
			return true;
		}

		for (String role : roles) {
			if (subject.hasRole(role)) {
				return true;
			}
		}

		return false;
	}

	private boolean hasAnyRoles(PrincipalCollection principal) {
		if (params == null) {
			return true;
		}
		
		String[] roles = StringUtils.split(params);
		if (roles == null || roles.length == 0) {
			return true;
		}

		for (String role : roles) {
			if (SecurityUtils.getSecurityManager().hasRole(principal, role)) {
				return true;
			}
		}

		return false;
	}

}