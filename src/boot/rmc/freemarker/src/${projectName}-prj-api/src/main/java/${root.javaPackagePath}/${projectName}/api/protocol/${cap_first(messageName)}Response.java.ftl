package ${root.javaPackageName}.${projectName}.api.protocol;

import java.io.Serializable;
<#list requestFields as field>
  <#if field.type == 'BigDecimal'>
import java.math.BigDecimal;
    <#break/>
  </#if>
</#list>
<#list requestFields as field>
  <#if field.type == 'Date'>
import java.util.Date;
    <#break/>
  </#if>
</#list>
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
	 * @see ${root.javaPackageName}.${projectName}.mgt.protocol.${messageName?cap_first}Response#get${group.id?cap_first}
	 */
	@JsonInclude(Include.NON_NULL)
	public static class ${group.id?cap_first} implements Serializable {
		private static final long serialVersionUID = 1L;

	<#list group.fields as field>
		private ${field.type} ${field.id};
	</#list>
	<#list group.fields as field>

		/**
		 * @return ${field.description}
		 */
		public ${field.type} get${field.id?cap_first}() {
			return ${field.id};
		}
		/**
		 * @param ${field.id} ${field.description}
		 */
		public void set${field.id?cap_first}(${field.type} ${field.id}) {
			this.${field.id} = ${field.id};
		}
	</#list>
	}
</#list>

<#list responseFields as field>
	private ${field.type} ${field.id};
</#list>
<#list responseGroups as group>
	private List<${group.id?cap_first}> ${group.id};
</#list>
<#list responseFields as field>

	/**
	 * @return ${field.description}
	 */
	public ${field.type} get${field.id?cap_first}() {
		return ${field.id};
	}
	/**
	 * @param ${field.id} ${field.description}
	 */
	public void set${field.id?cap_first}(${field.type} ${field.id}) {
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