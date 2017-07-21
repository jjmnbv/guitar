package ${root.javaPackageName}.${moduleName}.mgt.protocol;

import java.io.Serializable;
<#list fields as field>
  <#if field.type == 'BigDecimal'>
import java.math.BigDecimal;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.type == 'Date'>
import java.util.Date;
    <#break/>
  </#if>
</#list>

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import com.xukaiqiang.shared.protocol.OutputMessage;
import com.xukaiqiang.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class ${entityName}Response extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

  <#list primaryKeys as field>
	private ${field.type} ${field.name};
  </#list>
  <#list fields as field>
    <#if !field.ptype?has_content>
	private ${field.type} ${field.name};
    </#if>
  </#list>
  <#list primaryKeys as field>

	/**
	 * @return ${field.description}
	 */
	public ${field.type} get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(${field.type} ${field.name}) {
		this.${field.name} = ${field.name};
	}
  </#list>
  <#list fields as field>
    <#if !field.ptype?has_content>

	/**
	 * @return ${field.description}
	 */
	public ${field.type} get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(${field.type} ${field.name}) {
		this.${field.name} = ${field.name};
	}
    </#if>
  </#list>

	public static <E> ${entityName}Response buildResponse(${entityName}Response response, E e) {
		CopierUtils.copy(e, response);
		return response;
	}

}
