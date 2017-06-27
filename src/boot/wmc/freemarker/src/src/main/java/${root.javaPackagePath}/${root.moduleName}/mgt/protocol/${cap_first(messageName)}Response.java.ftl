package ${root.javaPackageName}.${root.moduleName}.mgt.protocol;

import java.io.Serializable;
<#if responseGroups?has_content>
import java.util.List;
</#if>

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import net.zkbc.shared.protocol.OutputMessage;

/**
 * ${messageDesc}.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonInclude(Include.NON_NULL)
public class ${messageName?cap_first}Response extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;
<#list responseGroups as group>

	/**
	 * @see ${root.javaPackageName}.${root.moduleName}.mgt.protocol.${messageName?cap_first}Response#get${group.id?cap_first}
	 */
	@JsonInclude(Include.NON_NULL)
	public static class ${group.id?cap_first} implements Serializable {
		private static final long serialVersionUID = 1L;

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
		/**
		 * @param ${field.id} ${field.description}
		 */
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
	private List<${group.id?cap_first}> ${group.id};
</#list>
<#list responseFields as field>

	/**
	 * @return ${field.description}
	 */
	public String get${field.id?cap_first}() {
		return ${field.id};
	}
	/**
	 * @param ${field.id} ${field.description}
	 */
	public void set${field.id?cap_first}(String ${field.id}) {
		this.${field.id} = ${field.id};
	}
</#list>
<#list responseGroups as group>

	/**
	 * @return ${group.description!}
	 */
	public List<${group.id?cap_first}> get${group.id?cap_first}() {
		return ${group.id};
	}
	/**
	 * @param ${group.id} ${group.description!}
	 */
	public void set${group.id?cap_first}(List<${group.id?cap_first}> ${group.id}) {
		this.${group.id} = ${group.id};
	}
</#list>

}