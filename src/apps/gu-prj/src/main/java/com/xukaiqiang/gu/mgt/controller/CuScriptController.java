package com.xukaiqiang.gu.mgt.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.xukaiqiang.gu.mgt.protocol.DictTree;
import com.xukaiqiang.gu.mgt.service.CuResSService;
import com.xukaiqiang.gu.mgt.service.DictionaryService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.oauth2.auth.protocol.OAuthRsMenuinfo;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.HttpServletUtils;
import com.xukaiqiang.shared.util.MessageCode;
import com.xukaiqiang.shared.util.MessageError;

@Controller
public class CuScriptController {
	private static Logger LOG = LoggerFactory.getLogger(CuScriptController.class);

	@Autowired
	private DictionaryService dictionaryService;
	@Autowired
	private CuResSService curesSService;

	private ObjectMapper objectMapper = new ObjectMapper();

	private String toJSON(Object obj) {
		try {
			return objectMapper.writeValueAsString(obj);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}

		return "\"\":\"\"";
	}

	@RequestMapping(value = Urls.SCRIPT_DICTS, method = RequestMethod.GET)
	public void dicts(@RequestParam("ids") List<Long> ids,
			HttpServletResponse response) {
		List<DictTree> dicts = new ArrayList<DictTree>();
		for (Long id : ids) {
			dicts.add(dictionaryService.findDictTree(id));
		}
		String text = String
				.format("window.app = window.app || {};window.app.dicts = window.app.dicts || {};\n +function ($, app) {\n$.extend(app.dicts, %s);\n} (window.jQuery, window.app);",
						toJSON(DictTree.buildDictsMap(dicts)));
		HttpServletUtils.writeText(text, response);
	}

	@RequestMapping(value = Urls.OAUTH_CHECKLOGIN, method = RequestMethod.GET)
	@ResponseBody
	public OutputMessage checkLogin() {
		OutputMessage out = new OutputMessage();
		Subject subject = SecurityUtils.getSubject();
		if (!subject.isAuthenticated()) {
			out.setErrorCode(MessageError.ERROR_NOAUTH);
			out.setResultCode(MessageCode.FAIL);
		}
		return out;
	}

	/**
	 * 获取当前登录用户可用菜单
	 * 
	 * @param response
	 */
	@RequestMapping(value = Urls.SCRIPT_AVAILABLEMENUS, method = RequestMethod.GET)
	public void availableMenus(HttpServletResponse response) {
		OAuthRsMenuinfo menu = curesSService.findMyTopMenus();
		String text = "window.app = window.app || {};window.app.mainMenus = window.app.mainMenus || {};\n +function ($, app) {\n$.extend(app.mainMenus, %s);\n} (window.jQuery, window.app);";
		if (menu != null) {
			text = String.format(text, toJSON(menu.getChildren()));
		} else {
			text = String.format(text, "[]");
		}
		HttpServletUtils.writeText(text, response);
	}

	@RequestMapping(value = Urls.SCRIPT_APP, method = RequestMethod.GET)
	public String app() {
		return Views.SCRIPT_APP;
	}

}
