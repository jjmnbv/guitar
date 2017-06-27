package com.xukaiqiang.shared.util;

import org.springframework.remoting.caucho.HessianProxyFactoryBean;
import org.springframework.remoting.caucho.HessianServiceExporter;

public abstract class HessianUtils {

	public static final String URI_REMOTING = "/remoting/";

	public static HessianProxyFactoryBean buildHessianProxyFactoryBean(String server, String serviceName,
			Class<?> serviceInterface) {
		HessianProxyFactoryBean factory = new HessianProxyFactoryBean();
		factory.setServiceInterface(serviceInterface);
		factory.setOverloadEnabled(true);
		factory.setServiceUrl(server + URI_REMOTING + serviceName);

		return factory;
	}

	public static HessianServiceExporter buildHessianServiceExporter(Class<?> serviceInterface, Object service) {
		HessianServiceExporter exporter = new HessianServiceExporter();
		exporter.setServiceInterface(serviceInterface);
		exporter.setService(service);
		return exporter;
	}

}
