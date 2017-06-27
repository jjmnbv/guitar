<#function isMessageService className>
  <#return className?matches(r".*\.api.service\.MessageService$") />
</#function>

<#function containsAnnotation annotations annoType>
  <#list annotations as annotation>
    <#if annotation.annotationType().simpleTypeName() == annoType>
      <#return true />
    </#if>
  </#list>
  <#return false />
</#function>

<#macro printFields class space>
  <#local fields = [] />
  <#list class.fields(false) as field>
    <#if !field.isStatic() && field.type().typeName() != 'List'>
      <#local fields = fields + [field] />
    </#if>
  </#list>
  <#list fields as field>
${space}{
${space}  "id":"${field.name()}",
${space}  "type":"${field.type().typeName()}",
          <#if containsAnnotation(field.annotations(), "NotEmpty")>
${space}  "required":"Y"
          <#else>
${space}  "required":"N"
          </#if>
${space}}<#if field_has_next>,</#if>
  </#list>
</#macro>

<#macro printGroups class>
  <#local innerClasses = [] />
  <#list class.innerClasses(false) as innerClass>
      {
        "id":"${innerClass.simpleTypeName()?lower_case}",
        "fields":[
<@printFields class = innerClass space = '          ' />
        ]
      }<#if innerClass_has_next>,</#if>
  </#list>
</#macro>

<#macro printApiJson>
[
  <#list classes() as class>
    <#if isMessageService(class.qualifiedTypeName())>
      <#list class.methods(false) as method>
  {
    "requestFields": [
<@printFields class = method.parameters()[0].type().asClassDoc() space = '      ' />
    ],
    "requestGroups": [
<@printGroups class = method.parameters()[0].type().asClassDoc() />
    ],
    "responseFields": [
<@printFields class = method.returnType().asClassDoc() space = '      ' />
    ],
    "responseGroups": [
<@printGroups class = method.returnType().asClassDoc() />
    ],
    "messageName":"${method.name()}",
    "messageDesc":"${method.commentText()}",
    "description":"${method.commentText()}"
  }<#if method_has_next>,</#if>
      </#list>
      <#break/>
    </#if>
  </#list>
]
</#macro>
<@printApiJson />
