package ${root.javaPackageName}.${moduleName}.mgt.protocol;

import java.io.Serializable;

public class ${entityName}CreateRequest implements Serializable {
	private static final long serialVersionUID = 1L;

  <#list primaryKeys as field>
	private String ${field.name};
  </#list>
  <#list fields as field>
    <#if !field.ptype?has_content>
	private String ${field.name};
    </#if>
  </#list>
  <#list primaryKeys as field>

	/**
	 * @return ${field.description}
	 */
	public String get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(String ${field.name}) {
		this.${field.name} = ${field.name};
	}
  </#list>
  <#list fields as field>
    <#if !field.ptype?has_content>

	/**
	 * @return ${field.description}
	 */
	public String get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(String ${field.name}) {
		this.${field.name} = ${field.name};
	}
    </#if>
  </#list>

}
