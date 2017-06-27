package ${root.javaPackageName}.${moduleName}.orm.dialect;

public abstract class Schema {

	/**
	 * 表名
	 */
	public static interface Tables {
    <#list models as model>
		/**
		 * ${model.entityDescription}
		 */
		public String ${model.entityName?upper_case} = "${model.tableName}";
      <#list model.fields as field>
        <#if field.joinType == 'ManyToMany'>
		/**
		 * ${field.description}
		 */
		public String ${model.entityName?upper_case}${field.ptype?upper_case} = "${field.joinTable}";
        </#if>
      </#list>
    </#list>
	}

}
