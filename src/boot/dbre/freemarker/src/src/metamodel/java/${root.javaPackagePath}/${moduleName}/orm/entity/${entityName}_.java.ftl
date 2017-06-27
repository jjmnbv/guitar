package ${root.javaPackageName}.${moduleName}.orm.entity;

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
import javax.annotation.Generated;
<#list fields as field>
  <#if field.joinType?has_content && field.fieldType?contains('List<T>')>
import javax.persistence.metamodel.ListAttribute;
    <#break/>
  </#if>
</#list>
<#list fields as field>
  <#if field.joinType?has_content && field.fieldType?contains('Set<T>')>
import javax.persistence.metamodel.SetAttribute;
    <#break/>
  </#if>
</#list>
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import ${root.javaPackageName}.${moduleName}.orm.dialect.Abstract${entityName}_;
<#if (primaryKeys?size>1)>
import ${root.javaPackageName}.${moduleName}.orm.entity.id.${entityName}Id;
</#if>
<#-- 导入其他模块的类型 -->
<#list fields as field>
  <#if field.joinModule?has_content && field.joinModule != moduleName>
import ${root.javaPackageName}.${field.joinModule}.orm.entity.${field.ptype};
  </#if>
</#list>

@Generated(value="Dali", date="${.now?string.iso_ms_nz}+0800")
@StaticMetamodel(${entityName}.class)
public class ${entityName}_ extends Abstract${entityName}_ {
  <#-- 需要持久存储的简单类型字段 -->
  <#list fields as field>
    <#if !field.ptype?has_content>
	public static volatile SingularAttribute<${entityName}, ${field.type}> ${field.name};
    </#if>
  </#list>
  <#-- 需要持久存储的引用类型字段 -->
  <#list fields as field>
    <#if field.joinType?has_content && field.fieldType == 'T'>
	public static volatile SingularAttribute<${entityName}, ${field.ptype}> ${field.name};
    </#if>
  </#list>
  <#list fields as field>
    <#if field.joinType?has_content && field.fieldType?contains('<T>')>
      <#if field.fieldType?contains('List')>
	public static volatile ListAttribute<${entityName}, ${field.ptype}> ${field.name};
      <#elseif field.fieldType?contains('Set')>
	public static volatile SetAttribute<${entityName}, ${field.ptype}> ${field.name};
      </#if>
    </#if>
  </#list>
  <#-- 联合主键字段 -->
  <#if (primaryKeys?size>1)>
	public static volatile SingularAttribute<${entityName}, ${entityName}Id> ${entityName?uncap_first}Id;
  </#if>
}
