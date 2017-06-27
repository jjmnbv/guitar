package com.xukaiqiang.jcaptcha.controller;

import java.awt.image.BufferedImage;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.xukaiqiang.jcaptcha.service.JCaptchaService;
import com.xukaiqiang.jcaptcha.util.JCaptchaUtils;
import com.xukaiqiang.jcaptcha.util.Urls;

@Controller
public class JCaptchaController {

	@Autowired(required = false)
	private JCaptchaService captchaService;

	@RequestMapping(value = Urls.JCAPTCHA, method = RequestMethod.GET)
	public void getCaptcha(@PathVariable(value = "type") String captchaType, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		outputCaptcha(captchaType, request, response);
	}

	private void outputCaptcha(String captchaType, HttpServletRequest request, HttpServletResponse response)
			throws IOException {
		response.setDateHeader("Expires", 0L);
		response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
		response.addHeader("Cache-Control", "post-check=0, pre-check=0");
		response.setHeader("Pragma", "no-cache");
		response.setContentType("image/jpeg");

		BufferedImage img = captchaService.getImage(JCaptchaUtils.getCaptchaID(captchaType));

		ServletOutputStream out = response.getOutputStream();
		try {
			ImageIO.write(img, "jpg", out);
			out.flush();
		} finally {
			out.close();
		}
	}

}
