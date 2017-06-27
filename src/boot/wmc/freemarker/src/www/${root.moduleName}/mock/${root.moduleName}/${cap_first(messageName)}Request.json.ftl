{
<#list requestGroups as group>
  "${group.id}":{
  <#list group.fields as field>
    "${field.id}":"${field.valueExample!}"<#if field_has_next>,</#if>
  </#list>
  }<#if group_has_next || requestFields?has_content>,</#if>
</#list>
<#list requestFields as field>
  "${field.id}":"${field.valueExample!}"<#if field_has_next>,</#if>
</#list>
}