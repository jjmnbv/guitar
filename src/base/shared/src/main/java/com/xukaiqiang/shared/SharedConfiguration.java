package com.xukaiqiang.shared;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.ui.freemarker.FreeMarkerConfigurationFactoryBean;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import com.xukaiqiang.shared.service.SequenceService;
import com.xukaiqiang.shared.service.impl.MemorySequenceServiceImpl;
import com.xukaiqiang.shared.service.impl.RedisSequenceServiceImpl;
import com.xukaiqiang.shared.util.IdWorker;

@Configuration
public class SharedConfiguration {

	@Bean
	@Autowired
	public ReloadableResourceBundleMessageSource messageSource(SharedVars appVars) {
		ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
		messageSource.setDefaultEncoding(appVars.defaultEncoding);
		messageSource.setBasenames(appVars.basenames.split(","));
		return messageSource;
	}

	@Bean
	public Validator validator() {
		Validator validator = new LocalValidatorFactoryBean();
		return validator;
	}

	@Bean
	@Autowired
	public IdWorker idWorker(SharedVars appVars) {
		return new IdWorker(appVars.wordkerId, appVars.dataCenterId);
	}

	@Bean
	@Autowired
	public FreeMarkerConfigurationFactoryBean freemarkerConfiguration(SharedVars appVars) {
		FreeMarkerConfigurationFactoryBean factoryBean = new FreeMarkerConfigurationFactoryBean();
		factoryBean.setTemplateLoaderPath(appVars.freemarkerLoaderPath);
		factoryBean.setDefaultEncoding(appVars.freemarkerDefaultEncoding);

		return factoryBean;
	}

	@Bean
	@Autowired
	public JavaMailSender mailSender(SharedVars appVars) {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setDefaultEncoding(appVars.mailDefaultEncoding);
		mailSender.setHost(appVars.mailSmtpHost);
		mailSender.setUsername(appVars.mailSmtpUsername);
		mailSender.setPassword(appVars.mailSmtpPassword);

		Properties javaMailProperties = new Properties();
		javaMailProperties.setProperty("mail.smtp.auth", appVars.mailSmtpAuth);
		javaMailProperties.setProperty("mail.smtp.starttls.enable", appVars.mailSmtpStarttlsEnable);
		mailSender.setJavaMailProperties(javaMailProperties);

		return mailSender;
	}

	@Profile("production")
	@Bean
	public SequenceService redisSequenceService() {
		SequenceService sequenceService = new RedisSequenceServiceImpl();
		return sequenceService;
	}

	@Profile(value = {"development","test"})
	@Bean
	public SequenceService memorySequenceService() {
		SequenceService sequenceService = new MemorySequenceServiceImpl();
		return sequenceService;
	}

}
