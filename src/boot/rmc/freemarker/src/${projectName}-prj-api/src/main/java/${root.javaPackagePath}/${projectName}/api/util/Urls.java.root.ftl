package ${root.javaPackageName}.${projectName}.api.util;

/**
 * 报文Url
 * 
 * @author 代码生成器v1.0
 */
public abstract class Urls {

	private static final String PREFIX = "${projectName}/api";

<#list messages as message>
	/**
	 * ${message.messageDesc}
	 */
	public static final String ${message.messageName?upper_case} = PREFIX + "/${message.messageName}";
</#list>

}
