package ${root.javaPackageName}.${root.moduleName}.mgt.controller;

import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
<#list requestFields as field>
  <#if field.requestType!?starts_with('PATH_VARIABLE')>
import org.springframework.web.bind.annotation.PathVariable;
    <#break/>
  </#if>
</#list>
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
<#list requestFields as field>
  <#if field.requestType!?starts_with('REQUEST_PARAM')>
import org.springframework.web.bind.annotation.RequestParam;
    <#break/>
  </#if>
</#list>
import org.springframework.web.bind.annotation.ResponseBody;

import ${root.javaPackageName}.${root.moduleName}.mgt.protocol.${messageName?cap_first}Request;
import ${root.javaPackageName}.${root.moduleName}.mgt.protocol.${messageName?cap_first}Response;
import ${root.javaPackageName}.${root.moduleName}.mgt.util.Urls;
import net.zkbc.shared.util.Executor;

/**
 * ${messageDesc}
 * 
 * @author 代码生成器v1.0
 */
@Controller
public class ${messageName?cap_first}Controller {

	@Autowired
	private MessageSource messageSource;

	/**
	 * ${messageDesc}
	 * 
<#list requestFields as field>
  <#if field.requestType!?starts_with('PATH_VARIABLE')>
	 * @param ${field.id}
  </#if>
</#list>
<#list requestFields as field>
  <#if field.requestType!?starts_with('REQUEST_PARAM')>
	 * @param ${field.id}
  </#if>
</#list>
	 * @param request
	 * @param result
	 * @param locale
	 * @return
	 */
	@RequestMapping(value = Urls.${messageName?upper_case}, method = RequestMethod.POST)
	@ResponseBody
	public ${messageName?cap_first}Response ${messageName?uncap_first}(<#list requestFields as field><#if field.requestType!?starts_with('PATH_VARIABLE')>@PathVariable("${field.id}") final String ${field.id}, </#if></#list><#list requestFields as field><#if field.requestType!?starts_with('REQUEST_PARAM')>@RequestParam(value = "${field.id}", required = false) final String ${field.id}, </#if></#list>@Valid final ${messageName?cap_first}Request request, BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				//TODO 具体业务处理调用
				return null;
			}
		}, messageSource, result, locale, ${messageName?cap_first}Response.class);
	}

}
