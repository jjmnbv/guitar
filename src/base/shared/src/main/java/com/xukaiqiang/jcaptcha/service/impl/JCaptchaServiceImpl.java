package com.xukaiqiang.jcaptcha.service.impl;

import java.awt.Color;
import java.awt.Font;
import java.awt.image.BufferedImage;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.jhlabs.image.PinchFilter;
import com.jhlabs.math.ImageFunction2D;
import com.octo.captcha.Captcha;
import com.octo.captcha.component.image.backgroundgenerator.UniColorBackgroundGenerator;
import com.octo.captcha.component.image.color.RandomListColorGenerator;
import com.octo.captcha.component.image.deformation.ImageDeformation;
import com.octo.captcha.component.image.deformation.ImageDeformationByBufferedImageOp;
import com.octo.captcha.component.image.fontgenerator.RandomFontGenerator;
import com.octo.captcha.component.image.textpaster.GlyphsPaster;
import com.octo.captcha.component.image.textpaster.glyphsvisitor.GlyphsVisitors;
import com.octo.captcha.component.image.textpaster.glyphsvisitor.OverlapGlyphsUsingShapeVisitor;
import com.octo.captcha.component.image.textpaster.glyphsvisitor.TranslateAllToRandomPointVisitor;
import com.octo.captcha.component.image.textpaster.glyphsvisitor.TranslateGlyphsVerticalRandomVisitor;
import com.octo.captcha.component.image.wordtoimage.DeformedComposedWordToImage;
import com.octo.captcha.component.word.wordgenerator.RandomWordGenerator;
import com.octo.captcha.engine.image.ListImageCaptchaEngine;
import com.octo.captcha.image.gimpy.GimpyFactory;
import com.octo.captcha.service.CaptchaServiceException;
import com.octo.captcha.service.captchastore.CaptchaAndLocale;
import com.octo.captcha.service.captchastore.CaptchaStore;
import com.octo.captcha.service.image.DefaultManageableImageCaptchaService;
import com.xukaiqiang.jcaptcha.service.JCaptchaService;
import com.xukaiqiang.jcaptcha.service.JCaptchaStoreService;

@Component
public class JCaptchaServiceImpl extends DefaultManageableImageCaptchaService implements JCaptchaService {

	@Autowired
	public JCaptchaServiceImpl(final JCaptchaStoreService jcaptchaStoreService) {
		super(new CaptchaStore() {
			@Override
			public void cleanAndShutdown() {
				jcaptchaStoreService.clear();
			}

			@Override
			public void empty() {
				jcaptchaStoreService.clear();
			}

			@Override
			public Captcha getCaptcha(String id) throws CaptchaServiceException {
				CaptchaAndLocale captchaAndLocale = jcaptchaStoreService.get(id);
				if (captchaAndLocale == null) {
					return null;
				}
				return captchaAndLocale.getCaptcha();
			}

			@Override
			public Collection<Object> getKeys() {
				return jcaptchaStoreService.getKeys();
			}

			@Override
			public Locale getLocale(String id) throws CaptchaServiceException {
				CaptchaAndLocale captchaAndLocale = jcaptchaStoreService.get(id);
				if (captchaAndLocale == null) {
					return null;
				}
				return captchaAndLocale.getLocale();
			}

			@Override
			public int getSize() {
				return getKeys().size();
			}

			@Override
			public boolean hasCaptcha(String id) {
				return getKeys().contains(id);
			}

			@Override
			public void initAndStart() {
			}

			@Override
			public boolean removeCaptcha(String id) {
				if (jcaptchaStoreService.get(id) == null) {
					return false;
				}
				jcaptchaStoreService.remove(id);
				return true;
			}

			@Override
			public void storeCaptcha(String id, Captcha captcha) throws CaptchaServiceException {
				jcaptchaStoreService.put(id, new CaptchaAndLocale(captcha));
			}

			@Override
			public void storeCaptcha(String id, Captcha captcha, Locale locale) throws CaptchaServiceException {
				jcaptchaStoreService.put(id, new CaptchaAndLocale(captcha, locale));
			}
		}, new ListImageCaptchaEngine() {
			protected void buildInitialFactories() {
				Font[] fonts = {

						new Font("nyala", Font.BOLD, 30),

						new Font("Bell MT", Font.PLAIN, 30),

						new Font("Credit valley", Font.BOLD, 30)

				};
				Color[] colors = {

						new Color(23, 170, 27),

						new Color(220, 34, 11),

						new Color(23, 67, 172)

				};
				GlyphsVisitors[] visitors = new GlyphsVisitors[] {

						new TranslateGlyphsVerticalRandomVisitor(1),

						new OverlapGlyphsUsingShapeVisitor(3),

						new TranslateAllToRandomPointVisitor()

				};

				PinchFilter pinch = new PinchFilter();
				pinch.setAmount(-.1f);
				pinch.setRadius(10);
				pinch.setAngle((float) (Math.PI / 16));
				pinch.setCentreX(0.1f);
				pinch.setCentreY(-0.01f);
				pinch.setEdgeAction(ImageFunction2D.WRAP);

				List<ImageDeformation> textDef = new ArrayList<ImageDeformation>();
				textDef.add(new ImageDeformationByBufferedImageOp(pinch));

				this.addFactory(new GimpyFactory(new RandomWordGenerator("0123456789abcdefghijklmnopqrstuvwxyz"),
						new DeformedComposedWordToImage(false, new RandomFontGenerator(30, 30, fonts, false),
								new UniColorBackgroundGenerator(80, 30, Color.white),
								new GlyphsPaster(4, 4, new RandomListColorGenerator(colors), visitors),
								new ArrayList<ImageDeformation>(), textDef, new ArrayList<ImageDeformation>()),
						false));
			}
		}, 180, 100000, 75000);
	}

	@Override
	public BufferedImage getImage(String ID) {
		Captcha captcha = generateAndStoreCaptcha(Locale.getDefault(), ID);
		Object challenge = getChallengeClone(captcha);
		captcha.disposeChallenge();

		return (BufferedImage) challenge;
	}

	@Override
	public Boolean validate(String ID, Object response, boolean last) {
		if (last) {
			return super.validateResponseForID(ID, response);
		}

		Captcha captcha = store.getCaptcha(ID);
		boolean valid = super.validateResponseForID(ID, response);
		store.storeCaptcha(ID, captcha, store.getLocale(ID));

		return valid;
	}

}
