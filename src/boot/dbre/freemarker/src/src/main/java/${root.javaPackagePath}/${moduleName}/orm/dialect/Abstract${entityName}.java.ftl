package ${root.javaPackageName}.${moduleName}.orm.dialect;

import java.io.Serializable;

<#if (primaryKeys?size=1)>
import javax.persistence.Column;
  <#if primaryKeys[0].isAutoincrement == 'YES'>
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
  </#if>
import javax.persistence.Id;
</#if>
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Abstract${entityName} implements Serializable {
	private static final long serialVersionUID = 1L;
  <#if (primaryKeys?size=1)>

	@Id
    <#if primaryKeys[0].isAutoincrement == 'YES'>
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    </#if>
	@Column(name = Columns.${entityName?upper_case}_${primaryKeys[0].name?upper_case})
	private ${primaryKeys[0].type} ${primaryKeys[0].name};

	/**
	 * @return ${primaryKeys[0].description}
	 */
	public ${primaryKeys[0].type} get${primaryKeys[0].name?cap_first}() {
		return ${primaryKeys[0].name};
	}

	public void set${primaryKeys[0].name?cap_first}(${primaryKeys[0].type} ${primaryKeys[0].name}) {
		this.${primaryKeys[0].name} = ${primaryKeys[0].name};
	}
  </#if>

	/**
	 * 列名
	 */
	public static interface Columns {
    <#list primaryKeys as field>
		/**
		 * ${entityName?upper_case}.${field.name?upper_case}
		 */
		public static final String ${entityName?upper_case}_${field.name?upper_case} = "${field.columnName}";
    </#list>
    <#list fields as field>
      <#if field.joinType == 'ManyToMany'>
		/**
		 * ${entityName?upper_case}${field.ptype?upper_case}.${entityName?upper_case}ID
		 */
		public static final String ${entityName?upper_case}${field.ptype?upper_case}_${entityName?upper_case}ID = "${field.joinColumn}";
		/**
		 * ${entityName?upper_case}${field.ptype?upper_case}.${field.ptype?upper_case}ID
		 */
		public static final String ${entityName?upper_case}${field.ptype?upper_case}_${field.ptype?upper_case}ID = "${field.inverseJoinColumn}";
      <#elseif field.joinType != 'OneToMany'>
		/**
		 * ${entityName?upper_case}.${field.name?upper_case}
		 */
		public static final String ${entityName?upper_case}_${field.name?upper_case} = "${field.columnName}";
      </#if>
    </#list>
	}

}
