package ${root.javaPackageName}.${projectName}.api.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<#list messages as message>
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Request;
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Response;
</#list>
import ${root.javaPackageName}.${projectName}.api.service.MessageService;
import ${root.javaPackageName}.${projectName}.api.util.Urls;
import net.zkbc.shared.SharedVars;
import net.zkbc.shared.util.HttpUtils;

@Service
public class ${projectName?cap_first}HttpMessageServiceStubImpl implements MessageService {

	@Autowired
	private SharedVars appVars;
<#list messages as message>

	@Override
	public ${message.messageName?cap_first}Response ${message.messageName}(${message.messageName?cap_first}Request request) {
		return HttpUtils.sendRequest(appVars, Urls.${message.messageName?upper_case}, request, ${message.messageName?cap_first}Response.class);
	}
</#list>

}
