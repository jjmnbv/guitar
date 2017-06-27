package ${root.javaPackageName}.message.util;

/**
 * 报文Url
 * 
 * @author 代码生成器v1.0
 */
public abstract class Urls {
	private static final String PREFIX = "<#if root.client == 'm'>app<#else>h5</#if>";

<#list messages as message>
	/**
	 * ${message.description}
	 */
	public static final String ${message.name?upper_case} = PREFIX + "/${message.id}";
</#list>

}
