<#function isJpaEntity className>
  <#return className?matches(r".*\.orm.entity\.\w+[^_]$") />
</#function>

<#function getAnnotationElemValue annotations annoType elemName>
  <#list annotations as annotation>
    <#if annotation.annotationType().simpleTypeName() == annoType>
      <#list annotation.elementValues() as pair>
        <#if pair.element().name() == elemName>
          <#return pair.value().value() />
        </#if>
      </#list>
    </#if>
  </#list>
  <#return "" />
</#function>

<#function containsAnnotation annotations annoType>
  <#list annotations as annotation>
    <#if annotation.annotationType().simpleTypeName() == annoType>
      <#return true />
    </#if>
  </#list>
  <#return false />
</#function>

<#function getTableName class>
  <#if isJpaEntity(class.qualifiedTypeName())>
    <#return getAnnotationElemValue(class.annotations(), "Table", "name") />
  </#if>
  <#return "" />
</#function>

<#function getTableCommentText class>
  <#return class.commentText() />
</#function>

<#function getColumnName field>
  <#if field.isStatic() || containsAnnotation(field.annotations(), "Transient") || containsAnnotation(field.annotations(), "OneToMany") || containsAnnotation(field.annotations(), "ManyToMany")>
    <#return "" />
  </#if>
  <#if containsAnnotation(field.annotations(), "OneToOne") || containsAnnotation(field.annotations(), "ManyToOne")>
    <#local columnName = getAnnotationElemValue(field.annotations(), "JoinColumn", "name") />
    <#if columnName?has_content>
      <#return columnName?replace("([a-z])([A-Z])", "$1_$2", "r") />
    </#if>
    <#return "" />
  </#if>
  <#local columnName = getAnnotationElemValue(field.annotations(), "Column", "name") />
  <#if columnName?has_content>
    <#return columnName />
  </#if>
  <#return field.name()?replace("([a-z])([A-Z])", "$1_$2", "r") />
</#function>

<#function getColumnCommentText class field>
  <#local methodName = "get${field.name()?cap_first}" />
  <#list class.methods() as method>
    <#if method.name() == methodName>
      <#list method.tags("return") as tag>
        <#if tag.text()?has_content>
          <#return tag.text() />
        </#if>
      </#list>
      <#local columnCommentText = method.commentText() />
      <#if columnCommentText?has_content>
        <#return columnCommentText />
      </#if>
    </#if>
  </#list>
  <#return field.commentText() />
</#function>

<#macro printDatabaseComments>
  <#list classes() as class>
    <#local tableName = getTableName(class) />
    <#if tableName?has_content>
<@printTableComment tableName="${tableName}" commentText="${getTableCommentText(class)}" />
      <#list class.fields(false) as field>
        <#local columnName = getColumnName(field) />
        <#if columnName?has_content>
<@printColumnComment tableName="${tableName}" columnName="${columnName?lower_case}" commentText="${getColumnCommentText(class, field.name())}" />
        </#if>
      </#list>
    </#if>
  </#list>
</#macro>

<@printDatabaseComments />
