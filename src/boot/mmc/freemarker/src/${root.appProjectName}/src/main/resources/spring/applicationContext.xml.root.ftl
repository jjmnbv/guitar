<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns:aop="http://www.springframework.org/schema/aop"
  xmlns:context="http://www.springframework.org/schema/context"
  xsi:schemaLocation="
    http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
    http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd"
  default-lazy-init="true">

  <context:component-scan base-package="${root.corpJavaPackageName}">
    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller" />
    <context:exclude-filter type="annotation" expression="org.springframework.web.bind.annotation.ControllerAdvice" />
    <context:exclude-filter type="regex" expression=".*ForHessianExporter"/>
  </context:component-scan>

  <bean id="messageSource" class="org.springframework.context.support.ReloadableResourceBundleMessageSource">
    <property name="defaultEncoding" value="UTF-8" />
    <property name="basenames">
      <list>
        <value>classpath:messages</value>
        <value>classpath:errors</value>
      </list>
    </property>
  </bean>

  <beans profile="production">
    <context:property-placeholder ignore-unresolvable="true" ignore-resource-not-found="true" file-encoding="UTF-8"
      location="classpath:application.properties" />
  </beans>

  <beans profile="development">
    <context:property-placeholder ignore-unresolvable="true" ignore-resource-not-found="true" file-encoding="UTF-8"
      location="classpath:application.properties,
                classpath:application.development.properties" />
  </beans>

  <beans profile="test">
    <context:property-placeholder ignore-unresolvable="true" ignore-resource-not-found="true" file-encoding="UTF-8"
      location="classpath:application.properties,
                classpath:application.test.properties" />
  </beans>

</beans>
