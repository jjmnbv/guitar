package com.xukaiqiang.shared.util;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.validation.BindingResult;

import com.xukaiqiang.shared.protocol.OutputMessage;

public abstract class Executor {

	public static OutputMessage execute(Executor executor, MessageSource messageSource, BindingResult result,
			Locale locale) {
		return execute(executor, messageSource, result, locale, OutputMessage.class);
	}

	@SuppressWarnings("unchecked")
	public static <T extends OutputMessage> T execute(Executor executor, MessageSource messageSource,
			BindingResult result, Locale locale, Class<T> clazz) {
		try {
			T output = clazz.newInstance();

			if (result != null && result.hasErrors()) {
				Validators.addParameterErrors(output, result, messageSource, locale);
				return output;
			}

			try {
				Object value = executor.execute();
				if (value != null && clazz.isAssignableFrom(value.getClass())) {
					return (T) value;
				}
				output.setPayload(value);
			} catch (ParameterException e) {
				Validators.addParameterErrors(output, e.getMessage(), messageSource, locale);
			} catch (Exception e) {
				executor.LOG.error(e.getMessage(), e);
				output.setSystemError();
			}
			return output;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	protected final Logger LOG = LoggerFactory.getLogger(getClass());

	protected abstract Object execute();

}
