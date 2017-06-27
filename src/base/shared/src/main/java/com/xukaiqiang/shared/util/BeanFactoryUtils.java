package com.xukaiqiang.shared.util;

import org.springframework.beans.MutablePropertyValues;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.PropertySourcesPropertyResolver;

public abstract class BeanFactoryUtils {

	/**
	 * 解密数据库连接用户名及密码
	 */
	public static void decryptDataSourceProperties(ConfigurableListableBeanFactory beanFactory, byte[] key) {
		PropertySourcesPropertyResolver propertyResolver = new PropertySourcesPropertyResolver(
				beanFactory.getBean(PropertySourcesPlaceholderConfigurer.class).getAppliedPropertySources());

		String encrypt = propertyResolver.resolvePlaceholders("${jdbc.encrypt:0}");
		if ("0".equals(encrypt)) {
			return;
		}

		String username = Cryptos.aesDecrypt(propertyResolver.resolvePlaceholders("${jdbc.username}"), key);
		String password = Cryptos.aesDecrypt(propertyResolver.resolvePlaceholders("${jdbc.password}"), key);

		BeanDefinition bd = beanFactory.getBeanDefinition("dataSource");
		MutablePropertyValues pvs = bd.getPropertyValues();
		switch (bd.getBeanClassName()) {
		case "com.mchange.v2.c3p0.ComboPooledDataSource":
			pvs.add("user", username);
			pvs.add("password", password);
			break;
		case "org.springframework.jdbc.datasource.SimpleDriverDataSource":
			pvs.add("username", username);
			pvs.add("password", password);
			break;
		default:
			break;
		}
	}

}
