package ${root.javaPackageName}.${moduleName}.orm.entity;

import java.io.Serializable;
<#list fields as field>
  <#if field.type == 'BigDecimal'>
import java.math.BigDecimal;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.type == 'Date' || (field.typeName?has_content && field.typeName?contains('dt'))>
import java.util.Date;
    <#break/>
  </#if>
</#list>
<#-- 导入需要的集合类型 -->
<#list fields as field>
  <#if field.fieldType?has_content && field.fieldType?contains('List')>
    <#if field.joinType?has_content>
import java.util.ArrayList;
    </#if>
import java.util.List;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.fieldType?has_content && field.fieldType?contains('Set')>
    <#if field.joinType?has_content>
import java.util.HashSet;
    </#if>
import java.util.Set;
    <#break/>
  </#if>
</#list>

<#list fields as field>
  <#if field.joinType == 'OneToMany'>
import javax.persistence.CascadeType;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if !field.ptype?has_content>
import javax.persistence.Column;
    <#break/>
  </#if>
</#list>
<#if (primaryKeys?size>1)>
import javax.persistence.EmbeddedId;
</#if>
import javax.persistence.Entity;
<#list fields as field>
  <#if field.joinType == 'ManyToOne'>
import javax.persistence.FetchType;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType == 'OneToOne' || field.joinType == 'ManyToOne' || field.joinType == 'ManyToMany'>
import javax.persistence.JoinColumn;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType == 'ManyToMany'>
import javax.persistence.JoinTable;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.typeName?has_content && (field.typeName == 'LONGTEXT' || field.typeName?contains('bigmessage'))>
import javax.persistence.Lob;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType == 'ManyToMany'>
import javax.persistence.ManyToMany;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType == 'ManyToOne'>
import javax.persistence.ManyToOne;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType == 'OneToMany'>
import javax.persistence.OneToMany;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType == 'OneToOne'>
import javax.persistence.OneToOne;
    <#break/>
  </#if>
</#list>
import javax.persistence.Table;
<#if (primaryKeys?size>1)>
import javax.persistence.Transient;
<#else>
  <#list fields as field>
    <#if field.typeName?has_content && field.typeName?contains('dt')>
import javax.persistence.Transient;
      <#break/>
    </#if>
  </#list>
</#if>
<#list fields as field>
  <#if field.type == 'Date' || (field.typeName?has_content && field.typeName?contains('dt')) || field.joinType == 'ManyToOne' || field.joinType == 'ManyToMany'>

    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.type == 'Date' || (field.typeName?has_content && field.typeName?contains('dt'))>
import com.fasterxml.jackson.annotation.JsonFormat;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType == 'ManyToOne' || field.joinType == 'ManyToMany'>
import com.fasterxml.jackson.annotation.JsonIgnore;
    <#break/>
  </#if>
</#list>

<#list fields as field>
  <#if field.type == 'Date' || (field.typeName?has_content && field.typeName?contains('dt'))>
import ${root.javaPackageName}.${moduleName}.${moduleName?cap_first}Vars;
    <#break/>
  </#if>
</#list>
import ${root.javaPackageName}.${moduleName}.orm.dialect.Abstract${entityName};
import ${root.javaPackageName}.${moduleName}.orm.dialect.Schema.Tables;
<#if (primaryKeys?size>1)>
import ${root.javaPackageName}.${moduleName}.orm.entity.id.${entityName}Id;
</#if>
<#-- 导入其他模块的类型 -->
<#list fields as field>
  <#if field.joinModule?has_content && field.joinModule != moduleName>

    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinModule?has_content && field.joinModule != moduleName>
import ${root.javaPackageName}.${field.joinModule}.orm.entity.${field.ptype};
  </#if>
</#list>

/**
 * ${entityDescription}
 *
 */
@Entity
@Table(name = Tables.${entityName?upper_case})
public class ${entityName} extends Abstract${entityName} implements Serializable {
	private static final long serialVersionUID = 1L;
  <#-- 联合主键字段 -->
  <#if (primaryKeys?size>1)>

	@EmbeddedId
	private ${entityName}Id ${entityName?uncap_first}Id;

    <#list primaryKeys as field>
	@Transient
	private ${field.type} ${field.name};
    </#list>
  </#if>

  <#-- 需要持久存储的简单类型字段 -->
  <#list fields as field>
    <#if !field.ptype?has_content>
      <#if field.typeName == 'LONGTEXT' || field.typeName?contains('bigmessage')>
	@Lob
      <#elseif field.type == 'Date'>
	@JsonFormat(locale = ${moduleName?cap_first}Vars.JSON_FMT_LOCALE, timezone = ${moduleName?cap_first}Vars.JSON_FMT_TIMEZONE, pattern = ${moduleName?cap_first}Vars.JSON_FMT_DATETIME)
      </#if>
	@Column(name = Columns.${entityName?upper_case}_${field.name?upper_case})
	private ${field.type} ${field.name};
      <#if field.typeName?has_content && field.typeName?contains('dt')>
	@Transient
	@JsonFormat(locale = ${moduleName?cap_first}Vars.JSON_FMT_LOCALE, timezone = ${moduleName?cap_first}Vars.JSON_FMT_TIMEZONE, pattern = ${moduleName?cap_first}Vars.FORM_FMT_DATE)
	private Date ${field.name}At;
      </#if>
    </#if>
  </#list>
  <#-- OneToOne关联字段 -->
  <#list fields as field>
    <#if field.joinType == 'OneToOne'>

	@OneToOne
	@JoinColumn(name = Columns.${entityName?upper_case}_${field.name?upper_case})
	private ${field.ptype} ${field.name};
	  </#if>
	</#list>
  <#-- OneToMany关联字段 -->
  <#list fields as field>
    <#if field.joinType == 'OneToMany'>

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "${field.mappedBy}")
      <#if field.fieldType?contains('List')>
	private List<${field.ptype}> ${field.name} = new ArrayList<${field.ptype}>();
      <#elseif field.fieldType?contains('Set')>
	private Set<${field.ptype}> ${field.name} = new HashSet<${field.ptype}>();
      </#if>
    </#if>
  </#list>
  <#-- ManyToOne关联字段 -->
  <#list fields as field>
    <#if field.joinType == 'ManyToOne'>

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = Columns.${entityName?upper_case}_${field.name?upper_case})
	@JsonIgnore
	private ${field.ptype} ${field.name};
    </#if>
  </#list>
  <#-- ManyToMany关联字段 -->
  <#list fields as field>
    <#if field.joinType == 'ManyToMany'>

	@ManyToMany
	@JoinTable(name = Tables.${entityName?upper_case}${field.ptype?upper_case}, joinColumns = @JoinColumn(name = Columns.${entityName?upper_case}${field.ptype?upper_case}_${entityName?upper_case}ID) , inverseJoinColumns = @JoinColumn(name = Columns.${entityName?upper_case}${field.ptype?upper_case}_${field.ptype?upper_case}ID) )
	@JsonIgnore
      <#if field.fieldType?contains('List')>
	private List<${field.ptype}> ${field.name} = new ArrayList<${field.ptype}>();
      <#elseif field.fieldType?contains('Set')>
	private Set<${field.ptype}> ${field.name} = new HashSet<${field.ptype}>();
      </#if>
    </#if>
  </#list>
  <#-- 联合主键字段 -->
  <#if (primaryKeys?size>1)>

	/**
	 * @return 主键
	 */
	public ${entityName}Id get${entityName}Id() {
		return ${entityName?uncap_first}Id;
	}

	/**
	 * 主键
	 *
	 * @param ${entityName?uncap_first}Id
	 */
	public void set${entityName}Id(${entityName}Id ${entityName?uncap_first}Id) {
		this.${entityName?uncap_first}Id = ${entityName?uncap_first}Id;
	}

    <#list primaryKeys as field>
	/**
	 * @return ${field.description}
	 */
	public ${field.type} get${field.name?cap_first}() {
		if(${field.name} == null && get${entityName}Id() != null) {
			${field.name} = get${entityName}Id().get${field.name?cap_first}();
		}
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(${field.type} ${field.name}) {
		if(${field.name} != null) {
			if(get${entityName}Id() == null) {
				set${entityName}Id(new ${entityName}Id());
			}
			get${entityName}Id().set${field.name?cap_first}(${field.name});
		}
		this.${field.name} = ${field.name};
	}
    </#list>
  </#if>
  <#-- 需要持久存储的简单类型字段 getter/setter -->
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
      <#if field.typeName?has_content && field.typeName?contains('dt')>

	/**
	 * @return ${field.description}
	 */
	public Date get${field.name?cap_first}At() {
		if(${field.name}At == null && get${field.name?cap_first}() != null) {
			set${field.name?cap_first}At(${moduleName?cap_first}Vars.getDateFormDb(get${field.name?cap_first}()));
		}
		return ${field.name}At;
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}At
	 */
	public void set${field.name?cap_first}At(Date ${field.name}At) {
		this.${field.name}At = ${field.name}At;
	}
      </#if>
    </#if>
  </#list>
  <#-- OneToOne关联字段 getter/setter -->
  <#list fields as field>
    <#if field.joinType == 'OneToOne'>

	/**
	 *
	 * @return ${field.description}
	 */
	public ${field.ptype} get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(${field.ptype} ${field.name}) {
		this.${field.name} = ${field.name};
	}
    </#if>
  </#list>
  <#-- OneToMany关联字段 getter/setter -->
  <#list fields as field>
    <#if field.joinType == 'OneToMany'> 

	/**
	 *
	 * @return ${field.description}
	 */
	public ${field.fieldType?replace('T',field.ptype)} get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(${field.fieldType?replace('T',field.ptype)} ${field.name}) {
		this.${field.name} = ${field.name};
	}
    </#if>
  </#list>
  <#-- ManyToOne关联字段 getter/setter -->
  <#list fields as field>
    <#if field.joinType == 'ManyToOne'> 

	/**
	 *
	 * @return ${field.description}
	 */
	public ${field.ptype} get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(${field.ptype} ${field.name}) {
		this.${field.name} = ${field.name};
	}
    </#if>
  </#list>
  <#-- ManyToMany关联字段 getter/setter -->
  <#list fields as field>
    <#if field.joinType == 'ManyToMany'> 

	/**
	 *
	 * @return ${field.description}
	 */
	public ${field.fieldType?replace('T',field.ptype)} get${field.name?cap_first}() {
		return ${field.name};
	}

	/**
	 * ${field.description}
	 *
	 * @param ${field.name}
	 */
	public void set${field.name?cap_first}(${field.fieldType?replace('T',field.ptype)} ${field.name}) {
		this.${field.name} = ${field.name};
	}
    </#if>
  </#list>

}
