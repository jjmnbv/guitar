<#macro transitionType field hasNext><#if !field.required?has_content || field.required == 'N'>optional </#if><#switch field.type><#case 'Boolean'>bool<#break><#case 'Byte'>byte<#break><#case 'Short'>i16<#break><#case 'Integer'>i32<#break><#case 'Long'>i64<#break><#case 'Double'>double<#break><#default>string</#switch> ${field.id}<#if hasNext>,</#if></#macro>
namespace java ${root.javaPackageName}.${projectName}.api.thrift

exception InvalidOperation {
  1: i32 what,
  2: string why
}

<#list messages as message>
<#list message.requestGroups as group>

struct T${message.messageName?cap_first}Request${group.id?cap_first} {
  <#list group.fields as field>
  ${field_index+1}: <@transitionType field = field hasNext = field_has_next/>
  </#list>
}
</#list>

struct T${message.messageName?cap_first}Request {
  <#list message.requestFields as field>
  ${field_index+1}: <@transitionType field = field hasNext = (field_has_next || message.requestGroups?has_content)/>
  </#list>
  <#list message.requestGroups as group>
  ${group_index+message.requestFields?size+1}: list<T${message.messageName?cap_first}Request${group.id?cap_first}> ${group.id}<#if group_has_next>,</#if>
  </#list>
}
<#list message.responseGroups as group>

struct T${message.messageName?cap_first}Response${group.id?cap_first} {
  <#list group.fields as field>
  ${field_index+1}: <@transitionType field = field hasNext = field_has_next/>
  </#list>
}
</#list>

struct T${message.messageName?cap_first}Response {
  <#list message.responseFields as field>
  ${field_index+1}: <@transitionType field = field hasNext = (field_has_next || message.responseGroups?has_content)/>
  </#list>
  <#list message.responseGroups as group>
  ${group_index+message.responseFields?size+1}: list<T${message.messageName?cap_first}Response${group.id?cap_first}> ${group.id}<#if group_has_next>,</#if>
  </#list>
}
</#list>

service TMessageService {
<#list messages as message>

   T${message.messageName?cap_first}Response ${message.messageName}(1: T${message.messageName?cap_first}Request tRequest) throws (1:InvalidOperation e)<#if message_has_next>,</#if>
</#list>

}
