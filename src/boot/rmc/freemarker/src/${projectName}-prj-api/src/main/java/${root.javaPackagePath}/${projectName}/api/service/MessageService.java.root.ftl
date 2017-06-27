package ${root.javaPackageName}.${projectName}.api.service;

<#list messages as message>
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Request;
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Response;
</#list>

/**
 * 报文Service接口
 * 
 * @author 代码生成器v1.0
 */
public interface MessageService {

<#list messages as message>
	/**
	 * ${message.description}
	 */
	public ${message.messageName?cap_first}Response ${message.messageName}(${message.messageName?cap_first}Request request);
</#list>

}
