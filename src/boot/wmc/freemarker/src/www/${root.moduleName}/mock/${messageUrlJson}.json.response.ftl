{
<#list responseGroups as group>
  "${group.id}":[{
  <#list group.fields as field>
    "${field.id}":"${field.valueExample!}"<#if field_has_next>,</#if>
  </#list>
  }],
</#list>
<#list responseFields as field>
  "${field.id}":"${field.valueExample!}",
</#list>
  "pages":[1],
  "resultCode": "SUCCESS",
  "errors": []
}