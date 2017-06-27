package ${root.javaPackageName}.${moduleName}.orm.entity.id;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="${.now?string.iso_ms_nz}+0800")
@StaticMetamodel(${entityName}Id.class)
public class ${entityName}Id_ {
  <#list primaryKeys as field>
	public static volatile SingularAttribute<${entityName}Id, ${field.type}> ${field.name};
  </#list>
}
