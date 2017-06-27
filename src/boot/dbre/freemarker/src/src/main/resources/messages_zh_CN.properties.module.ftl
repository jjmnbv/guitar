<#macro addMesages entity field>
  <#if field.required?has_content && field.required == 'Y'>
NotEmpty.${entity}.${field.id}=${field.description}不能为空
  </#if>
  <#if field.minlength?has_content || field.maxlength?has_content>
Length.${entity}.${field.id}=${field.description}长度必须介于{2}与{1}之间
  </#if>
  <#if field.minvalue?has_content>
Min.${entity}.${field.id}=${field.description}最小值不能小于{1}
  </#if>
  <#if field.maxvalue?has_content>
Max.${entity}.${field.id}=${field.description}最大值不能大于{1}
  </#if>
  <#if field.digit?has_content && field.digit == 'Y'>
Digits.${entity}.${field.id}=${field.description}必须是整数
  </#if>
  <#if field.email?has_content && field.email == 'Y'>
Email.${entity}.${field.id}=${field.description}格式不正确
  </#if>
  <#if field.zipcode?has_content && field.zipcode == 'Y'>
Pattern.${entity}.${field.id}=${field.description}格式不正确
  </#if>
  <#if field.phonenumber?has_content && field.phonenumber == 'Y'>
Pattern.${entity}.${field.id}=${field.description}格式不正确
  </#if>
  <#if field.idcardno?has_content && field.idcardno == 'Y'>
Pattern.${entity}.${field.id}=${field.description}格式不正确
  </#if>
  <#if field.bankcardno?has_content && field.bankcardno == 'Y'>
Pattern.${entity}.${field.id}=${field.description}格式不正确
  </#if>
  <#if field.qq?has_content && field.qq == 'Y'>
Pattern.${entity}.${field.id}=${field.description}格式不正确
  </#if>
</#macro>
<#list models as model>

</#list>
