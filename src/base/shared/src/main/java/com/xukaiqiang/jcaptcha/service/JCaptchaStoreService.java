package com.xukaiqiang.jcaptcha.service;

import java.util.Collection;

import com.octo.captcha.service.captchastore.CaptchaAndLocale;

public interface JCaptchaStoreService {

	public CaptchaAndLocale get(String id);

	public CaptchaAndLocale put(String id, CaptchaAndLocale captchaAndLocale);

	public void remove(String id);

	public void clear();

	public Collection<Object> getKeys();

}
