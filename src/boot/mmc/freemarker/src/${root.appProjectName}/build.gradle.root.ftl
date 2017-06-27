apply plugin: 'war'
apply plugin: 'org.akhikhl.gretty'

dependencies {
  compile project(":shared")
  compile project(":${root.apiProjectName}")

  compile "cglib:cglib:$cglibVersion"
  compile "com.caucho:hessian:$hessianVersion"
  compile "commons-codec:commons-codec:$commonsCodecVersion"
  compile "commons-fileupload:commons-fileupload:$commonsFileuploadVersion"
  compile "com.fasterxml.jackson.core:jackson-annotations:$jacksonVersion"
  compile "com.fasterxml.jackson.core:jackson-core:$jacksonVersion"
  compile "com.fasterxml.jackson.core:jackson-databind:$jacksonVersion"
  compile "com.google.guava:guava:$guavaVersion"
  compile "com.google.code.findbugs:jsr305:$findbugsVersion"
  compile "javax.el:javax.el-api:$javaxElApiVersion"
  compile "org.apache.commons:commons-lang3:$commonsLang3Version"
  compile "org.apache.logging.log4j:log4j-slf4j-impl:$log4jVersion"
  compile "org.apache.logging.log4j:log4j-core:$log4jVersion"
  compile "org.apache.logging.log4j:log4j-web:$log4jVersion"
  compile "org.apache.shiro:shiro-core:$shiroVersion"
  compile "org.apache.shiro:shiro-spring:$shiroVersion"
  compile "org.aspectj:aspectjweaver:$aspectjVersion"
  compile "org.hibernate:hibernate-validator:$hibernateValidatorVersion"
  compile "org.slf4j:jcl-over-slf4j:$slf4jVersion"
  compile "org.slf4j:log4j-over-slf4j:$slf4jVersion"
  compile "org.slf4j:slf4j-api:$slf4jVersion"
  compile "org.springframework.data:spring-data-commons:$springDataCommonsVersion"
  compile "org.springframework.data:spring-data-redis:$springDataRedisVersion"
  compile "org.springframework:spring-context-support:$springVersion"
  compile "org.springframework:spring-context:$springVersion"
  compile "org.springframework:spring-test:$springVersion"
  compile "org.springframework:spring-tx:$springVersion"
  compile "org.springframework:spring-webmvc:$springVersion"
  compile("org.owasp.esapi:esapi:2.1.0") {
    exclude(module: 'log4j')
  }
  compile("org.owasp.encoder:encoder-esapi:1.2") {
    exclude(module: 'esapi')
  }
  compile "redis.clients:jedis:$jedisVersion"
  compile "com.jhlabs:filters:2.0.235"
  compile "com.octo.captcha:jcaptcha-api:1.0"
  compile files(new File(GLOBAL.lib, 'jcaptcha/jcaptcha-2.0-alpha-1-SNAPSHOT.jar'))

  runtime "jstl:jstl:$jstlVersion"
  testCompile "junit:junit:$junitVersion"
  providedCompile "javax.servlet:javax.servlet-api:$javaxServletVersion"
  
  modules {
    module('log4j:log4j') {
      replacedBy('org.slf4j:log4j-over-slf4j')
    }
    module('commons-logging:commons-logging') {
      replacedBy('org.slf4j:jcl-over-slf4j')
    }
  }

  gretty configurations.jdbc
}

gretty {
  systemProperty 'spring.profiles.active', System.properties['spring.profiles.active']
  // extraResourceBase 'directory1'
  // extraResourceBase 'directory2'
  // 'jetty7', 'jetty8', 'jetty9', 'tomcat7', 'tomcat8'
  servletContainer = 'jetty9'
  httpPort = 10080
  contextPath = '/'
  debugPort = 10000
  debugSuspend = true
  interactiveMode = 'restartOnKeyPress'
  inplaceMode = 'hard'
  scanInterval = 0
}
