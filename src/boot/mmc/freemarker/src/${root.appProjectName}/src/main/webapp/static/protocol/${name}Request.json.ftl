<#function buildJson fields groups messageId>
  <#local json>
{<#list fields as field>"${field.id}":"${field.valueExample!}"<#if field_has_next || groups?has_content>,</#if></#list><#list groups as group>"${group.id}":[{<#list group.fields as field>"${field.id}":"${field.valueExample!}"<#if field_has_next>,</#if></#list>}]<#if group_has_next>,</#if></#list>}
  </#local>
  <#return json>
</#function>
${buildJson(requestFields, requestGroups, id)}