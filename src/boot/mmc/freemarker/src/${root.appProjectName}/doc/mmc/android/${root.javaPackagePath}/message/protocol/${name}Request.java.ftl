package ${root.javaPackageName}.message.protocol;

import java.io.Serializable;
<#if requestGroups?has_content>

import java.util.List;
</#if>

import ${root.corpJavaPackageName}.shared.protocol.MobileRequest;
import ${root.corpJavaPackageName}.shared.protocol.MobileResponse;

/**
 * ${description}.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
public class ${name}Request extends MobileRequest implements Serializable{

	private static final long serialVersionUID = 1L;

<#list requestGroups as group>

	/**
	 * @see ${root.javaPackageName}.message.protocol.${name}Request#get${group.id?cap_first}
	 * 
	 */
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

<#list requestFields as field>
	private String ${field.id};
</#list>
<#list requestGroups as group>
	private List<Element${group.id?cap_first}> ${group.id};
</#list>

	public ${name}Request() {
		super();
	}	
<#list requestFields as field>

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
<#list requestGroups as group>

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

	@Override
	public  Class<? extends MobileResponse> getResponseClass(){
		return ${name}Response.class;
	}
}