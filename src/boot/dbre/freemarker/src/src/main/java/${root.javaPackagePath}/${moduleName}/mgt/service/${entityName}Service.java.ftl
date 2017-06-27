package ${root.javaPackageName}.${moduleName}.mgt.service;

import java.util.List;

import org.springframework.data.domain.Page;

import ${root.javaPackageName}.${moduleName}.orm.entity.${entityName};
import ${root.javaPackageName}.${moduleName}.orm.protocol.${entityName}FilterRequest;

public interface ${entityName}Service {

	/**
	 * 分页筛选${entityDescription}
	 * 
	 * @param pageNumber
	 * @param pageSize
	 * @param filter
	 * @return
	 */
	Page<${entityName}> find${entityName}Page(Integer pageNumber, Integer pageSize, ${entityName}FilterRequest filter);

	/**
	 * 筛选${entityDescription}列表
	 * 
	 * @param filter
	 * @return
	 */
	List<${entityName}> find${entityName}s(${entityName}FilterRequest filter);

	/**
	 * 使用唯一标识查询${entityDescription}对象
	 * 
    <#list primaryKeys as field>
	 * @param ${field.name}
    </#list>
	 * @return
	 */
	${entityName} find${entityName}(<#list primaryKeys as field>${field.type} ${field.name}<#if field_has_next>, </#if></#list>);

	/**
	 * 新建${entityDescription}
	 * 
	 * @param ${entityName?lower_case}
	 * @return
	 */
	${entityName} create${entityName}(${entityName} ${entityName?lower_case});

	/**
	 * 修改${entityDescription}
	 * 
	 * @param ${entityName?lower_case}
	 * @return
	 */
	${entityName} update${entityName}(${entityName} ${entityName?lower_case});

	/**
	 * 删除${entityDescription}
	 * 
    <#list primaryKeys as field>
	 * @param ${field.name}
    </#list>
	 */
	void remove${entityName}(<#list primaryKeys as field>${field.type} ${field.name}<#if field_has_next>, </#if></#list>);

}
