package ${root.javaPackageName}.message.protocol;

import java.io.Serializable;
<#if responseGroups?has_content>

import java.util.List;
</#if>

//import com.fasterxml.jackson.annotation.JsonInclude;
//import com.fasterxml.jackson.annotation.JsonInclude.Include;

import ${root.corpJavaPackageName}.shared.protocol.MobileResponse;

/**
 * ${description}.服务端响应
 * 
 * @author 代码生成器v1.0
 * 
 */
//@JsonInclude(Include.NON_NULL)
public class ${name}Response extends MobileResponse implements Serializable{

	private static final long serialVersionUID = 1L;

<#list responseGroups as group>

	/**
	 * @see ${root.javaPackageName}.message.protocol.${name}Response#get${group.id?cap_first}
	 * 
	 */
	//@JsonInclude(Include.NON_NULL)
	public static class Element${group.id?cap_first} {

	<#list group.fields as field>
		private String ${field.id};
	</#list>
	<#list group.fields as field>

		/**
		 * @return ${field.description}
		 */
		public String get${field.id?cap_first}() {
			return ${field.id};
		}

		public void set${field.id?cap_first}(String ${field.id}) {
			this.${field.id} = ${field.id};
		}
	</#list>
	}
</#list>

<#list responseFields as field>
	private String ${field.id};
</#list>
<#list responseGroups as group>
	private List<Element${group.id?cap_first}> ${group.id};
</#list>

<#list responseFields as field>

	/**
	 * @return ${field.description}
	 */
	public String get${field.id?cap_first}() {
		return ${field.id};
	}

	public void set${field.id?cap_first}(String ${field.id}) {
		this.${field.id} = ${field.id};
	}
</#list>
<#list responseGroups as group>

	/**
	 * @return ${group.description}
	 */
	public List<Element${group.id?cap_first}> get${group.id?cap_first}() {
		return ${group.id};
	}

	public void set${group.id?cap_first}(List<Element${group.id?cap_first}> ${group.id}) {
		this.${group.id} = ${group.id};
	}
</#list>
}