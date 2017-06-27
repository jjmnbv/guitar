package ${root.javaPackageName}.message.remoting.hessian;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.remoting.caucho.HessianProxyFactoryBean;

import ${root.javaPackageName}.message.service.MessageService;
import net.zkbc.shared.SharedVars;
import net.zkbc.shared.service.MobileUserService;
import net.zkbc.shared.util.HessianUtils;

@Configuration
public class MobileAppConfigForHessianProxy {

	@Bean
	@Autowired
	public HessianProxyFactoryBean mobileUserService(SharedVars appVars) {
		return HessianUtils.buildHessianProxyFactoryBean(appVars.messageServer, "mobileUserService",
				MobileUserService.class);
	}

	@Bean
	@Autowired
	public HessianProxyFactoryBean messageService(SharedVars appVars) {
		return HessianUtils.buildHessianProxyFactoryBean(appVars.messageServer, "messageService", MessageService.class);
	}

}
