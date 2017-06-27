<#macro fieldValue field>
  <#if field.type == 'Integer' || field.type == 'Long' || field.type == 'Float' || field.type == 'Double' || field.type == 'BigDecimal'>
  "${field.name}":1,
  <#elseif field.type == 'Boolean'>
  "${field.name}":true,
  <#elseif field.type == 'Date'>
  "${field.name}":"2016-11-14",
  <#else>
  "${field.name}":"${field.description}",
  </#if>
</#macro>
{
  <#list primaryKeys as field>
  "${field.name}":1,
  </#list>
  "resultCode": "SUCCESS",
  "errors": []
}