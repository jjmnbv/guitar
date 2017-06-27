package ${root.javaPackageName}.${moduleName}.orm.protocol;

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

public class ${entityName}FilterRequest implements Serializable {
	private static final long serialVersionUID = 1L;

  <#list primaryKeys as field>
	private ${field.type} ${field.name};
  </#list>
  <#list fields as field>
    <#if !field.ptype?has_content>
      <#if field.type == 'Date' || (field.typeName?has_content && field.typeName?contains('dt'))>
	private ${field.type} ${field.name}From;
	private ${field.type} ${field.name}To;
      <#else>
	private ${field.type} ${field.name};
      </#if>
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
      <#if field.type == 'Date' || (field.typeName?has_content && field.typeName?contains('dt'))>

	/**
	 * @return ${field.description} from
	 */
	public ${field.type} get${field.name?cap_first}From() {
		return ${field.name}From;
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}From(${field.type} ${field.name}From) {
		this.${field.name}From = ${field.name}From;
	}

	/**
	 * @return ${field.description} to
	 */
	public ${field.type} get${field.name?cap_first}To() {
		return ${field.name}To;
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}To(${field.type} ${field.name}To) {
		this.${field.name}To = ${field.name}To;
	}
      <#else>

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
    </#if>
  </#list>

}
