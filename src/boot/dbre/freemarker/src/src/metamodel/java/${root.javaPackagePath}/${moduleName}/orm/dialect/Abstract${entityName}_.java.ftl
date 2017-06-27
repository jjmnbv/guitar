package ${root.javaPackageName}.${moduleName}.orm.dialect;

import javax.annotation.Generated;
<#if (primaryKeys?size=1)>
import javax.persistence.metamodel.SingularAttribute;
</#if>
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="${.now?string.iso_ms_nz}+0800")
@StaticMetamodel(Abstract${entityName}.class)
public class Abstract${entityName}_ {
  <#if (primaryKeys?size=1)>
	public static volatile SingularAttribute<Abstract${entityName}, ${primaryKeys[0].type}> ${primaryKeys[0].name};
  </#if>
}
