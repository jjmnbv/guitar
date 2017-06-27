package com.xukaiqiang.script.util;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.context.ContextLoader;

public class ApplicationContextUtils {

	private static ApplicationContext ctx;

	public static <T> T getBean(Class<T> requiredType) {
		return getContext().getBean(requiredType);
	}

	public static <T> T getBeanByName(String beanName, Class<T> requiredType) {
		return getContext().getBean(beanName, requiredType);
	}

	public static void setActiveProfiles(String profiles) {
		String key = "spring.profiles.active";
		if (System.getProperty(key) == null) {
			System.setProperty(key, profiles);
		}
	}

	private static ApplicationContext getContext() {

		if (ctx == null) {
			ctx = ContextLoader.getCurrentWebApplicationContext();
			if (ctx == null) {
				ctx = new ClassPathXmlApplicationContext("classpath*:/net/zkbc/spring/*.xml",
						"classpath:/spring/*.xml");
			}
		}

		return ctx;
	}

}
