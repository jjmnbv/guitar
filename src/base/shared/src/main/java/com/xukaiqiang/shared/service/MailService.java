package com.xukaiqiang.shared.service;

import java.util.Locale;

public interface MailService {

	public void send(String from, String[] toRecipients, String subject, String templateName, Locale locale,
			Object context);

	public void send(String from, String[] toRecipients, String subject, String text);

}
