package ${root.javaPackageName}.${root.moduleName}.mgt.util;

/**
 * 报文Url
 * 
 * @author 代码生成器v1.0
 */
public abstract class Urls {

<#list messages as message>
	/**
	 * ${message.messageDesc}
	 * @see ${root.javaPackageName}.${root.moduleName}.mgt.controller.${message.messageName?cap_first}Controller#${message.messageName?uncap_first}(<#list message.requestFields as field><#if field.requestType!?starts_with('PATH_VARIABLE')>String, </#if></#list><#list message.requestFields as field><#if field.requestType!?starts_with('REQUEST_PARAM')>String, </#if></#list>${root.javaPackageName}.${root.moduleName}.mgt.protocol.${message.messageName?cap_first}Request, org.springframework.validation.BindingResult, java.util.Locale)
	 */
	public static final String ${message.messageName?upper_case} = "${message.messageUrl}";
</#list>

}
