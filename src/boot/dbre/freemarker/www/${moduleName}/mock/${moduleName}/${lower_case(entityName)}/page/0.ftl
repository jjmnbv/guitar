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
  "resultCode": "SUCCESS",
  "errors": [],
  "number":0,
  "size":20,
  "totalPages":6,
  "totalElements":105,
  "pages": [1, 2, 3, 4, 5, 6],
  "content":[{
    <#list primaryKeys as field>
    "${field.name}":1,
    </#list>
    <#list fields as field>
    <@fieldValue field=field/>
    </#list>
    "resultCode": "SUCCESS"
  }]
}