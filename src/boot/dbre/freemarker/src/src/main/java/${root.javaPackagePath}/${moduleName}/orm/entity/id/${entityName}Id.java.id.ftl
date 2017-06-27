package ${root.javaPackageName}.${moduleName}.orm.entity.id;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import ${root.javaPackageName}.${moduleName}.orm.dialect.Abstract${entityName}.Columns;

@Embeddable
public class ${entityName}Id implements Serializable {
	private static final long serialVersionUID = 1L;

  <#list primaryKeys as field>
	@Column(name = Columns.${entityName?upper_case}_${field.name?upper_case})
	private ${field.type} ${field.name};
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

}
