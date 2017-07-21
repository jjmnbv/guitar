package com.xukaiqiang.gu.mgt.controller;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletResponse;

import com.xukaiqiang.gu.mgt.protocol.CuIconSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuIconSListResponse;
import com.xukaiqiang.gu.mgt.protocol.CuIconSPageResponse;
import com.xukaiqiang.gu.mgt.protocol.CuIconSResponse;
import com.xukaiqiang.gu.mgt.service.CuIconSService;
import com.xukaiqiang.gu.mgt.util.Urls;
import com.xukaiqiang.gu.mgt.util.Views;
import com.xukaiqiang.gu.orm.entity.CuIconS;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 * 系统资源管理控制器
 */
@Controller
public class CuIconSController {
	private static final Logger LOG = LoggerFactory.getLogger(CuIconSController.class);

	@Autowired
	private CuIconSService cuiconsService;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 系统资源管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.CUICONS_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.CUICONS_INDEX;
	}

	/**
	 * 系统资源首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_CUICONS, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);
		return Views.SCRIPT_CUICONS;
	}

	/**
	 * 系统资源首页／添加首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_ADDCUICONS, method = RequestMethod.GET)
	public String addIndex(Model model, Locale locale) {
		return Views.SCRIPT_ADDCUICONS;
	}
	
	/**
	 * 系统资源首页／修改首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_UPDATECUICONS, method = RequestMethod.GET)
	public String updateIndex(Model model, Locale locale) {
		return Views.SCRIPT_UPDATECUICONS;
	}
	
	/**
	 * 系统资源列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUICONS_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public CuIconSPageResponse listPage(
			@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize,
			final CuIconSFilterRequest filter, Locale locale) {
		CuIconSPageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuiconsService.findCuIconSPage(pageNumber, pageSize,
						filter);
			}
		}, messageSource, null, locale, CuIconSPageResponse.class);
		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}
		Page<CuIconS> payload = (Page<CuIconS>) pageResponse.getPayload();
		if (payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return CuIconSPageResponse.buildPageResponse(pageResponse, payload,
				appVars.displayPages);
	}

	/**
	 * 系统资源列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.CUICONS_LIST, method = RequestMethod.GET)
	@ResponseBody
	public CuIconSListResponse list(final CuIconSFilterRequest filter,
			Locale locale) {
		CuIconSListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuiconsService.findCuIconSs(filter);
			}
		}, messageSource, null, locale, CuIconSListResponse.class);
		if (!listResponse.isSuccess()) {
			return listResponse;
		}
		List<CuIconS> payload = (List<CuIconS>) listResponse.getPayload();
		if (payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return CuIconSListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看系统资源
	 * 
	 * @param iconNo
	 * @return
	 */
	@RequestMapping(value = Urls.CUICONS_VIEW, method = RequestMethod.GET)
	@ResponseBody
	public CuIconSResponse view(@PathVariable("iconNo") final String iconNo,
			Locale locale) {
		CuIconSResponse cuiconsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuiconsService.findCuIconS(iconNo);
			}
		}, messageSource, null, locale, CuIconSResponse.class);
		if (!cuiconsResponse.isSuccess()) {
			return cuiconsResponse;
		}
		CuIconS payload = (CuIconS) cuiconsResponse.getPayload();
		if (payload == null) {
			return cuiconsResponse;
		}

		cuiconsResponse.setPayload(null);
		return CuIconSResponse.buildResponse(cuiconsResponse, payload);
	}

	/**
	 * 创建系统资源
	 * 
	 * @param cuicons
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUICONS_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public CuIconSResponse create(
			@RequestParam("file") final MultipartFile file, Locale locale) {
		CuIconSResponse cuiconsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuiconsService.createCuIconS("default", file);
			}
		}, messageSource, null, locale, CuIconSResponse.class);
		if (!cuiconsResponse.isSuccess()) {
			return cuiconsResponse;
		}
		CuIconS payload = (CuIconS) cuiconsResponse.getPayload();
		if (payload == null) {
			return cuiconsResponse;
		}
		cuiconsResponse.setIconNo(payload.getIconNo());
		cuiconsResponse.setPayload(null);
		return cuiconsResponse;
	}

	/**
	 * 修改系统资源
	 * 
	 * @param cuicons
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUICONS_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public CuIconSResponse update(@PathVariable("iconNo") final String iconNo,
			@RequestParam("file") final MultipartFile file, Locale locale) {
		CuIconSResponse cuiconsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuiconsService.updateCuIconS("default", file, iconNo);
			}
		}, messageSource, null, locale, CuIconSResponse.class);
		if (!cuiconsResponse.isSuccess()) {
			return cuiconsResponse;
		}
		CuIconS payload = (CuIconS) cuiconsResponse.getPayload();
		if (payload == null) {
			return cuiconsResponse;
		}

		cuiconsResponse.setIconNo(payload.getIconNo());
		cuiconsResponse.setPayload(null);
		return cuiconsResponse;
	}

	/**
	 * 删除系统资源
	 * 
	 * @param iconNo
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUICONS_REMOVE, method = RequestMethod.POST)
	@ResponseBody
	public OutputMessage remove(@PathVariable("iconNo") final String iconNo,
			Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				cuiconsService.removeCuIconS(iconNo);
				return null;
			}
		}, messageSource, null, locale);
	}

	/**
	 * 删除菜单图标
	 * 
	 * @param iconNo
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.CUICONS_DELETEPIC, method = RequestMethod.POST)
	@ResponseBody
	public CuIconSResponse deletePic(
			@PathVariable("iconNo") final String iconNo, BindingResult result,
			Locale locale) {
		CuIconSResponse cuiconsResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return cuiconsService.deletePic(iconNo);
			}
		}, messageSource, result, locale, CuIconSResponse.class);
		if (!cuiconsResponse.isSuccess()) {
			return cuiconsResponse;
		}
		CuIconS payload = (CuIconS) cuiconsResponse.getPayload();
		if (payload == null) {
			return cuiconsResponse;
		}

		cuiconsResponse.setIconNo(payload.getIconNo());
		cuiconsResponse.setPayload(null);
		return cuiconsResponse;
	}

	/**
	 * 图片流形式响应前台
	 * 
	 * @param iconNo
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping(value = Urls.CUICONS_LOADIMAGE, method = RequestMethod.GET)
	public void loadImage(@RequestParam("iconNo") String iconNo,
			HttpServletResponse response) throws Exception {
		try {
			String iconAdCa = cuiconsService.findCuIconsUrl(iconNo);
			File file = new File(iconAdCa);
			response.setContentLength((int) file.length());
			response.setContentType("application/octet-stream");
			FileCopyUtils.copy(new FileInputStream(file),
					response.getOutputStream());
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			LOG.info("获取默认图片");
			File file = ResourceUtils.getFile("classpath:/nav/default.png");
			response.setContentLength((int) file.length());
			response.setContentType("application/octet-stream");
			FileCopyUtils.copy(new FileInputStream(file), response.getOutputStream());
		}
	}

}
