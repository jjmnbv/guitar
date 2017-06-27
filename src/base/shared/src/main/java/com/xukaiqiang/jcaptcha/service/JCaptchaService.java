package com.xukaiqiang.jcaptcha.service;

import java.awt.image.BufferedImage;

import com.xukaiqiang.shiro.service.ShiroCaptchaService;

public interface JCaptchaService extends ShiroCaptchaService {

	public BufferedImage getImage(String ID);

}
