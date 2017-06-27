package ${root.javaPackageName}.${moduleName}.mgt.util;

public abstract class Urls {
  <#list models as model>

	/** 
	 * ${model.entityDescription}管理首页
	 *
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#index()
	 */
	public static final String ${model.entityName?upper_case}_INDEX = "/${moduleName}/${model.entityName?lower_case}/index";
	/** 
	 * ${model.entityDescription}首页／首屏数据
	 *
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_${model.entityName?upper_case} = "/script/${moduleName}/${model.entityName?lower_case}";
	/** 
	 * ${model.entityDescription}列表分页
	 * 
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#listPage(Integer, Integer, ${root.javaPackageName}.${moduleName}.mgt.protocol.${model.entityName}FilterRequest, java.util.Locale)
	 */
	public static final String ${model.entityName?upper_case}_PAGE = "/${moduleName}/${model.entityName?lower_case}/page/{pageNumber}";
	/** 
	 * ${model.entityDescription}列表
	 * 
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#list(${root.javaPackageName}.${moduleName}.mgt.protocol.${model.entityName}FilterRequest, java.util.Locale)
	 */
	public static final String ${model.entityName?upper_case}_LIST = "/${moduleName}/${model.entityName?lower_case}/list";
	/** 
	 * 查看${model.entityDescription}
	 * 
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#view(<#list model.primaryKeys as field>${field.type}, </#list>java.util.Locale)
	 */
	public static final String ${model.entityName?upper_case}_VIEW = "/${moduleName}/${model.entityName?lower_case}/view<#if (model.primaryKeys?size=1)>/{${model.primaryKeys[0].name}}</#if>";
	/** 
	 * 创建${model.entityDescription}
	 * 
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#create(${root.javaPackageName}.${moduleName}.mgt.protocol.${model.entityName}CreateRequest, org.springframework.validation.BindingResult, ${root.javaPackageName}.${moduleName}.orm.entity.${model.entityName}, java.util.Locale)
	 */
	public static final String ${model.entityName?upper_case}_CREATE = "/${moduleName}/${model.entityName?lower_case}/create";
	/** 
	 * 修改${model.entityDescription}
	 * 
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#update(${root.javaPackageName}.${moduleName}.mgt.protocol.${model.entityName}UpdateRequest, org.springframework.validation.BindingResult, ${root.javaPackageName}.${moduleName}.orm.entity.${model.entityName}, java.util.Locale)
	 */
	public static final String ${model.entityName?upper_case}_UPDATE = "/${moduleName}/${model.entityName?lower_case}/update";
	/** 
	 * 删除${model.entityDescription}
	 * 
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#remove(<#list model.primaryKeys as field>${field.type}, </#list>java.util.Locale)
	 */
	public static final String ${model.entityName?upper_case}_REMOVE = "/${moduleName}/${model.entityName?lower_case}/remove<#if (model.primaryKeys?size=1)>/{${model.primaryKeys[0].name}}</#if>";
  </#list>

}
