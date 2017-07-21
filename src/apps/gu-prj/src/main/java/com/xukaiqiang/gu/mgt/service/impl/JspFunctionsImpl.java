package com.xukaiqiang.gu.mgt.service.impl;

import com.xukaiqiang.gu.mgt.service.JspFunctions;
import com.xukaiqiang.shiro.web.PathFilter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service("FN_CU")
public class JspFunctionsImpl implements JspFunctions {
	@Autowired
	private PathFilter pathFilter;
	private static Logger LOG = LoggerFactory.getLogger(JspFunctionsImpl.class);

	private ObjectMapper objectMapper = new ObjectMapper();

	private String toJSON(Object obj, ObjectMapper mapper) {
		try {
			return mapper.writeValueAsString(obj);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}

		return "";
	}

	@Override
	public String toJSON(Object obj) {
		return toJSON(obj, objectMapper);
	}

	@Override
	public boolean checkPath(String path) {
		return pathFilter.isAccessAllowed(path);
	}

}
