window.app.metadata = {
  "path": "<#if root.client == 'm'>app<#else>h5</#if>",
  "messages":[<#list messages as message>{"id":"${message.id}","desc":"${message.description}(${message.id})"}<#if message_has_next>,</#if></#list>]
};