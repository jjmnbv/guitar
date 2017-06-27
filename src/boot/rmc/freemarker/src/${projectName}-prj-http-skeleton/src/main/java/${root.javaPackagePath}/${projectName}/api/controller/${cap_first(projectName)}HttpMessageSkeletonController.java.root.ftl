package ${root.javaPackageName}.${root.projectName}.api.controller;

import java.util.Locale;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

<#list messages as message>
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Request;
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Response;
</#list>
import ${root.javaPackageName}.${projectName}.api.service.MessageService;
import ${root.javaPackageName}.${projectName}.api.util.Urls;
import net.zkbc.shared.util.Executor;

@Controller
public class ${projectName?cap_first}HttpMessageSkeletonController {

	@Autowired
	private MessageService service;
	@Autowired
	private MessageSource messageSource;
<#list messages as message>

	@RequestMapping(value = Urls.${message.messageName?upper_case}, method = RequestMethod.POST)
	@ResponseBody
	public ${message.messageName?cap_first}Response ${message.messageName}(@Valid @RequestBody final ${message.messageName?cap_first}Request request,
			BindingResult result, Locale locale) {
		return Executor.execute(new Executor() {
			@Override
			protected Object execute() {
				return service.${message.messageName}(request);
			}
		}, messageSource, result, locale, ${message.messageName?cap_first}Response.class);
	}
</#list>

}
