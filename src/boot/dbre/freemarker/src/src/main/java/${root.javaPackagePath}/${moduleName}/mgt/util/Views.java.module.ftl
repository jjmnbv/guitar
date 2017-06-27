package ${root.javaPackageName}.${moduleName}.mgt.util;

public abstract class Views {
  <#list models as model>

	/**
	 * ${model.entityDescription}管理/首页
	 *
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#index()
	 */
	public static final String ${model.entityName?upper_case}_INDEX = "${moduleName}/${model.entityName?lower_case}/index";
	/**
	 * ${model.entityDescription}首页／首屏数据
	 *
	 * @see ${root.javaPackageName}.${moduleName}.mgt.controller.${model.entityName}Controller#index(org.springframework.ui.Model, java.util.Locale)
	 */
	public static final String SCRIPT_${model.entityName?upper_case} = "${moduleName}/script/${model.entityName?lower_case}";
  </#list>

}
