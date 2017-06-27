package com.xukaiqiang.shared.service.impl;

import java.io.IOException;
import java.util.Locale;

import javax.mail.Address;
import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.xukaiqiang.shared.service.MailService;
import com.xukaiqiang.shared.util.FreemarkerUtils;

import freemarker.template.Configuration;

@Service
public class MimeMailServiceImpl implements MailService {

	private static Logger LOG = LoggerFactory.getLogger(MimeMailServiceImpl.class);

	@Autowired
	private JavaMailSender mailSender;
	@Autowired
	private Configuration freemarkerConfiguration;

	@Async
	@Override
	public void send(String from, String[] toRecipients, String subject, String templateName, Locale locale,
			Object context) {
		try {
			String text = FreemarkerUtils.renderTemplate(
					freemarkerConfiguration.getTemplate(
							new StringBuffer().append("mail/").append(templateName).append(".ftl").toString(), locale),
					context);
			send(from, toRecipients, subject, text);
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
		}
	}

	@Async
	@Override
	public void send(final String from, final String[] toRecipients, final String subject, final String text) {
		try {
			mailSender.send(new MimeMessagePreparator() {
				@Override
				public void prepare(MimeMessage mimeMessage) throws Exception {
					Address[] recipients = new Address[toRecipients.length];
					for (int i = 0; i < toRecipients.length; i++) {
						recipients[i] = new InternetAddress(toRecipients[i]);
					}
					mimeMessage.setRecipients(Message.RecipientType.TO, recipients);
					mimeMessage.setFrom(new InternetAddress(from));
					mimeMessage.setText(text);
					mimeMessage.setSubject(subject);
				}
			});
		} catch (MailException e) {
			LOG.error(e.getMessage(), e);
		}
	}

}
