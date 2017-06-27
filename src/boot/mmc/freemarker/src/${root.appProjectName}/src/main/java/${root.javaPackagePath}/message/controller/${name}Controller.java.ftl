package ${root.javaPackageName}.message.controller;

import java.util.Locale;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.MessageSource;
import org.springframework.remoting.RemoteConnectFailureException;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

<#if root.client == 'm'>
import ${root.corpJavaPackageName}.shared.service.MobileService;
</#if>
import ${root.corpJavaPackageName}.shared.util.ParameterException;
import ${root.corpJavaPackageName}.shared.util.Validators;
import ${root.javaPackageName}.message.protocol.${name}Request;
import ${root.javaPackageName}.message.protocol.${name}Response;
import ${root.javaPackageName}.message.service.MessageService;
import ${root.javaPackageName}.message.util.Urls;

/**
 * ${description}
 * 
 * @author 代码生成器v1.0
 */
@Controller
public class ${name}Controller {
	private static final Logger LOG = LoggerFactory.getLogger(${name}Controller.class);

	@Qualifier("messageService")
	@Autowired(required = false)
	private MessageService messageService;

	@Qualifier("mockMessageService")
	@Autowired
	private MessageService mockMessageService;

<#if root.client == 'm'>
	@Autowired
	private MobileService mobileService;
</#if>
	@Autowired
	private MessageSource messageSource;

	@RequestMapping(value = Urls.${name?upper_case}, method = RequestMethod.POST)
	@ResponseBody
	public ${name}Response ${id}(@Valid @RequestBody ${name}Request request, BindingResult result, Locale locale) {
		${name}Response response = new ${name}Response();
		if (result.hasErrors()) {
			Validators.addParameterErrors(response, result, messageSource, locale);
			return response;
		}

		try {
<#if root.client == 'm'>
			mobileService.bindSubject(request.getSessionId());
  <#if requestType?starts_with('LOGIN')>
			mobileService.serviceForAuthcForm(getLoginName(request), getPassword(request), request, response);
			if(response.getErrorCode() != null) {
				return response;
			}
	<#elseif anon == 'N'>
			mobileService.serviceForAuthc(request, response);
			if(response.getErrorCode() != null) {
				return response;
			}
			request.setLoginName(mobileService.getLoginName());
  </#if>

</#if>
			response = messageService.${id}(request, response);
		} catch (RemoteConnectFailureException e) {
			LOG.error(e.getMessage(), e);
			response = mockMessageService.${id}(request, response);
		} catch (ParameterException e) {
			Validators.addParameterErrors(response, e.getMessage(), messageSource, locale);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			response.error();
		}
		return response;
	}
<#if requestType?starts_with('LOGIN')>

	private String getLoginName(${name}Request request) {
		<#list requestFields as field><#if field.type == 'LOGIN_NAME'>return request.get${field.id?cap_first}();<#break/></#if></#list>
	}

	private String getPassword(${name}Request request) {
		<#list requestFields as field><#if field.type == 'LOGIN_PASSWORD'>return request.get${field.id?cap_first}();<#break/></#if></#list>
	}
</#if>
}
