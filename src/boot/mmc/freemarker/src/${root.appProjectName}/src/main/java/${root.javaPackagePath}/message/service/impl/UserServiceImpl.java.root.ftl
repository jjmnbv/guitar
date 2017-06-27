package ${root.javaPackageName}.message.service.impl;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.remoting.RemoteConnectFailureException;
import org.springframework.stereotype.Service;

import ${root.corpJavaPackageName}.shared.entity.MobileUser;
import ${root.corpJavaPackageName}.shared.service.MobileUserService;
import ${root.corpJavaPackageName}.shiro.service.AbstractShiroUserService;
import ${root.corpJavaPackageName}.shiro.service.ShiroUserService;

@Service
public class UserServiceImpl extends AbstractShiroUserService implements ShiroUserService {

	private MobileUserService mobileUserService;

	@Autowired
	private BeanFactory factory;

	@Override
	public MobileUser findUserByLoginName(String loginName) {
		try {
			if (mobileUserService == null) {
				mobileUserService = factory.getBean(MobileUserService.class);
			}
			return mobileUserService.findByLoginName(loginName);
		} catch (RemoteConnectFailureException e) {
			LOG.error(e.getMessage(), e);
			MobileUser user = new MobileUser();
			user.setLoginName(loginName);
			// sha1("888888")
			user.setPassword("1f82c942befda29b6ed487a51da199f78fce7f05");
			return user;
		}
	}

}
