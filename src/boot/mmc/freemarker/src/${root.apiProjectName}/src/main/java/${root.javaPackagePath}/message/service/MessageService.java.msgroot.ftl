package ${root.javaPackageName}.message.service;

<#list messages as message>
import ${root.javaPackageName}.message.protocol.${message.name}Request;
import ${root.javaPackageName}.message.protocol.${message.name}Response;
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
	public ${message.name}Response ${message.id}(${message.name}Request request, ${message.name}Response response);
</#list>

}
