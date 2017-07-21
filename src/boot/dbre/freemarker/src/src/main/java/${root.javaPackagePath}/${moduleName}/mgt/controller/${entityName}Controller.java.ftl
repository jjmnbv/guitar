package ${root.javaPackageName}.${moduleName}.mgt.controller;

import java.util.List;
import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.controller.BaseController;
import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.Executor;
import ${root.javaPackageName}.${moduleName}.mgt.protocol.${entityName}CreateRequest;
import ${root.javaPackageName}.${moduleName}.mgt.protocol.${entityName}ListResponse;
import ${root.javaPackageName}.${moduleName}.mgt.protocol.${entityName}PageResponse;
import ${root.javaPackageName}.${moduleName}.mgt.protocol.${entityName}Response;
import ${root.javaPackageName}.${moduleName}.mgt.protocol.${entityName}UpdateRequest;
import ${root.javaPackageName}.${moduleName}.mgt.service.${entityName}Service;
import ${root.javaPackageName}.${moduleName}.mgt.util.Urls;
import ${root.javaPackageName}.${moduleName}.mgt.util.Views;
import ${root.javaPackageName}.${moduleName}.orm.entity.${entityName};
import ${root.javaPackageName}.${moduleName}.orm.protocol.${entityName}FilterRequest;

/**
 * ${entityDescription}管理控制器
 */
@Controller
public class ${entityName}Controller extends BaseController {

	private static final String BINDING = "${entityName?upper_case}_BINDING";

	@Autowired
	private ${entityName}Service ${entityName?lower_case}Service;
	@Autowired
	private MessageSource messageSource;
	@Autowired
	private SharedVars appVars;

	/**
	 * 所有进入该控制器的请求都先执行此方法，用于数据二次绑定
	 * 
    <#list primaryKeys as field>
	 * @param ${field.name}
    </#list>
	 * @return
	 */
	@ModelAttribute(BINDING)
	public ${entityName} getBinding(<#list primaryKeys as field>@RequestParam(value = "${field.name}", <#if field.type == 'Long'>defaultValue = SharedVars.INVALID_IDSTRING<#else>required = false</#if>) ${field.type} ${field.name}<#if field_has_next>, </#if></#list>) {
		if (!isBindingRequest()) {
			return new ${entityName}();
		}
		return ${entityName?lower_case}Service.find${entityName}(<#list primaryKeys as field>${field.name}<#if field_has_next>, </#if></#list>);
	}

	/**
	 * ${entityDescription}管理首页
	 * 
	 * @param filter
	 * @param model
	 * @return
	 */
	@RequestMapping(value = Urls.${entityName?upper_case}_INDEX, method = RequestMethod.GET)
	public String index() {
		return Views.${entityName?upper_case}_INDEX;
	}

	/**
	 * ${entityDescription}首页／首屏数据
	 * 
	 * @param model
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.SCRIPT_${entityName?upper_case}, method = RequestMethod.GET)
	public String index(Model model, Locale locale) {
		listPage(null, null, null, locale).addAttributeTo(model);

		return Views.SCRIPT_${entityName?upper_case};
	}

	/**
	 * ${entityDescription}列表分页
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.${entityName?upper_case}_PAGE, method = RequestMethod.GET)
	@ResponseBody
	public ${entityName}PageResponse listPage(@PathVariable("pageNumber") final Integer pageNumber,
			@RequestParam(value = "pageSize", required = false) final Integer pageSize, final ${entityName}FilterRequest filter, Locale locale) {
		${entityName}PageResponse pageResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return ${entityName?lower_case}Service.find${entityName}Page(pageNumber, pageSize, filter);
			}
		}, messageSource, null, locale, ${entityName}PageResponse.class);

		if (!pageResponse.isSuccess()) {
			return pageResponse;
		}

		Page<${entityName}> payload = (Page<${entityName}>) pageResponse.getPayload();
		if(payload == null) {
			return pageResponse;
		}

		pageResponse.setPayload(null);
		return ${entityName}PageResponse.buildPageResponse(pageResponse, payload, appVars.displayPages);
	}

	/**
	 * ${entityDescription}列表
	 * 
	 * @param filter
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping(value = Urls.${entityName?upper_case}_LIST, method = RequestMethod.GET)
	@ResponseBody
	public ${entityName}ListResponse list(final ${entityName}FilterRequest filter, Locale locale) {
		${entityName}ListResponse listResponse = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return ${entityName?lower_case}Service.find${entityName}s(filter);
			}
		}, messageSource, null, locale, ${entityName}ListResponse.class);

		if (!listResponse.isSuccess()) {
			return listResponse;
		}

		List<${entityName}> payload = (List<${entityName}>) listResponse.getPayload();
		if(payload == null) {
			return listResponse;
		}

		listResponse.setPayload(null);
		return ${entityName}ListResponse.buildListResponse(listResponse, payload);
	}

	/**
	 * 查看${entityDescription}
	 * 
    <#list primaryKeys as field>
	 * @param ${field.name}
    </#list>
	 * @return
	 */
	@RequestMapping(value = Urls.${entityName?upper_case}_VIEW, method = RequestMethod.GET)
	@ResponseBody
  <#if (primaryKeys?size>1)>
	public ${entityName}Response view(<#list primaryKeys as field>@RequestParam("${field.name}") final ${field.type} ${field.name}, </#list>Locale locale) {
  <#else>
	public ${entityName}Response view(@PathVariable("${(primaryKeys[0].name)!}") final ${(primaryKeys[0].type)!} ${(primaryKeys[0].name)!}, Locale locale) {
  </#if>
		${entityName}Response ${entityName?lower_case}Response = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return ${entityName?lower_case}Service.find${entityName}(<#list primaryKeys as field>${field.name}<#if field_has_next>, </#if></#list>);
			}
		}, messageSource, null, locale, ${entityName}Response.class);

		if (!${entityName?lower_case}Response.isSuccess()) {
			return ${entityName?lower_case}Response;
		}

		${entityName} payload = (${entityName}) ${entityName?lower_case}Response.getPayload();
		if(payload == null) {
			return ${entityName?lower_case}Response;
		}

		${entityName?lower_case}Response.setPayload(null);
		return ${entityName}Response.buildResponse(${entityName?lower_case}Response, payload);
	}

	/**
	 * 创建${entityDescription}
	 * 
	 * @param ${entityName?lower_case}
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.${entityName?upper_case}_CREATE, method = RequestMethod.POST)
	@ResponseBody
	public ${entityName}Response create(@Valid ${entityName}CreateRequest createRequtest, BindingResult result, final ${entityName} ${entityName?lower_case}, Locale locale) {
		${entityName}Response ${entityName?lower_case}Response = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return ${entityName?lower_case}Service.create${entityName}(${entityName?lower_case});
			}
		}, messageSource, result, locale, ${entityName}Response.class);

		if (!${entityName?lower_case}Response.isSuccess()) {
			return ${entityName?lower_case}Response;
		}

		${entityName} payload = (${entityName}) ${entityName?lower_case}Response.getPayload();
		if(payload == null) {
			return ${entityName?lower_case}Response;
		}

    <#list primaryKeys as field>
		${entityName?lower_case}Response.set${field.name?cap_first}(payload.get${field.name?cap_first}());
    </#list>
		${entityName?lower_case}Response.setPayload(null);
		return ${entityName?lower_case}Response;
	}

	/**
	 * 修改${entityDescription}
	 * 
	 * @param ${entityName?lower_case}
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.${entityName?upper_case}_UPDATE, method = RequestMethod.POST)
	@ResponseBody
	public ${entityName}Response update(@Valid ${entityName}UpdateRequest updateRequtest, BindingResult result, @ModelAttribute(BINDING) final ${entityName} ${entityName?lower_case}, Locale locale) {
		${entityName}Response ${entityName?lower_case}Response = Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return ${entityName?lower_case}Service.update${entityName}(${entityName?lower_case});
			}
		}, messageSource, result, locale, ${entityName}Response.class);

		if (!${entityName?lower_case}Response.isSuccess()) {
			return ${entityName?lower_case}Response;
		}

		${entityName} payload = (${entityName}) ${entityName?lower_case}Response.getPayload();
		if(payload == null) {
			return ${entityName?lower_case}Response;
		}

    <#list primaryKeys as field>
		${entityName?lower_case}Response.set${field.name?cap_first}(payload.get${field.name?cap_first}());
    </#list>
		${entityName?lower_case}Response.setPayload(null);
		return ${entityName?lower_case}Response;
	}

	/**
	 * 删除${entityDescription}
	 * 
    <#list primaryKeys as field>
	 * @param ${field.name}
    </#list>
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.${entityName?upper_case}_REMOVE, method = RequestMethod.POST)
	@ResponseBody
  <#if (primaryKeys?size>1)>
	public OutputMessage remove(<#list primaryKeys as field>@RequestParam("${field.name}") final ${field.type} ${field.name}, </#list>Locale locale) {
  <#else>
	public OutputMessage remove(@PathVariable("${(primaryKeys[0].name)!}") final ${(primaryKeys[0].type)!} ${(primaryKeys[0].name)!}, Locale locale) {
  </#if>
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				${entityName?lower_case}Service.remove${entityName}(<#list primaryKeys as field>${field.name}<#if field_has_next>, </#if></#list>);
				return null;
			}
		}, messageSource, null, locale);
	}

}
