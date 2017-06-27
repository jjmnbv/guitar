package com.xukaiqiang.shared.util;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.cglib.beans.BeanCopier;
import net.sf.cglib.core.Converter;

public class CopierUtils {

	private static final Map<Object, BeanCopier> CACHE = new HashMap<Object, BeanCopier>();

	private static final Converter CONVERTER = new Converter() {
		@SuppressWarnings("rawtypes")
		@Override
		public Object convert(Object value, Class target, Object context) {
			if (value != null && !value.getClass().equals(target)) {
				String value_;
				try {
					value_ = (String) value;
				} catch (Exception e) {
					value_ = value.toString();
				}
				if (target.equals(String.class)) {
					return value_;
				}
				if (target.equals(Short.class)) {
					return Short.parseShort(value_);
				}
				if (target.equals(Integer.class)) {
					return Integer.parseInt(value_);
				}
				if (target.equals(Long.class)) {
					return Long.parseLong(value_);
				}
				if (target.equals(Float.class)) {
					return Float.parseFloat(value_);
				}
				if (target.equals(Double.class)) {
					return Double.parseDouble(value_);
				}
				if (target.equals(BigDecimal.class)) {
					return new BigDecimal(value_);
				}
			}
			return value;
		}
	};

	public static void copy(Object src, Object dest) {
		createCopier(src, dest, false).copy(src, dest, null);
	}

	public static BeanCopier createCopier(Object src, Object dest, boolean useConverter) {
		Object key = Arrays.asList(src.getClass(), dest.getClass());

		if (CACHE.containsKey(key)) {
			return CACHE.get(key);
		}

		BeanCopier copier = BeanCopier.create(src.getClass(), dest.getClass(), useConverter);
		CACHE.put(key, copier);
		return copier;
	}

	public static <T> T convert(Object src, Class<T> destClass) {
		try {
			T dest = destClass.newInstance();
			createCopier(src, dest, true).copy(src, dest, CONVERTER);
			return dest;
		} catch (Exception e) {
			return null;
		}
	}

	public static <T> List<T> convert(List<?> src, Class<T> elementClass) {
		List<T> dest = new ArrayList<T>(src.size());
		for (Object elem : src) {
			dest.add(convert(elem, elementClass));
		}
		return dest;
	}

}
