package com.xukaiqiang.shiro.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.cache.Cache;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.SimplePrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import com.xukaiqiang.jcaptcha.util.JCaptchaUtils;
import com.xukaiqiang.shiro.authc.IncorrectCaptchaException;
import com.xukaiqiang.shiro.authc.UsernamePasswordCaptchaToken;
import com.xukaiqiang.shiro.entity.ShiroUser;
import com.xukaiqiang.shiro.service.ShiroCaptchaService;
import com.xukaiqiang.shiro.service.ShiroUserService;

public class ShiroDbRealm extends AuthorizingRealm {

	@Autowired(required = false)
	protected ShiroCaptchaService captchaService;
	@Autowired
	protected ShiroUserService shiroUserService;

	public void clearCachedAuthorizationInfo(Object principal) {
		clearCachedAuthorizationInfo(new SimplePrincipalCollection(principal, getName()));
	}

	public void clearAllCachedAuthorizationInfo() {
		Cache<Object, AuthorizationInfo> cache = getAuthorizationCache();
		if (cache != null) {
			cache.clear();
		}
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken)
			throws AuthenticationException {

		if (authcToken instanceof UsernamePasswordCaptchaToken) {
			if (!captchaService.validate(JCaptchaUtils.getLoginCaptchaID(),
					((UsernamePasswordCaptchaToken) authcToken).getCaptcha(), true)) {
				throw new IncorrectCaptchaException();
			}
		}

		String loginName = ((UsernamePasswordToken) authcToken).getUsername();

		ShiroUser loginUser = shiroUserService.findUserByLoginName(loginName);

		if (loginUser == null) {
			throw new UnknownAccountException();
		}

		if (loginUser.isDisabled()) {
			throw new DisabledAccountException();
		}

		ByteSource salt = ByteSource.Util.bytes(shiroUserService.getSaltBytes(loginUser));

		return new SimpleAuthenticationInfo(loginName, loginUser.getPassword(), salt, getName());

	}

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {

		SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();

		String loginName = (String) principals.getPrimaryPrincipal();

		ShiroUser loginUser = shiroUserService.findUserByLoginName(loginName);

		if (loginUser.getRoleNames() != null) {
			info.addRoles(loginUser.getRoleNames());
		}

		if (loginUser.getPermissionNames() != null) {
			info.addStringPermissions(loginUser.getPermissionNames());
		}

		return info;
	}

}
