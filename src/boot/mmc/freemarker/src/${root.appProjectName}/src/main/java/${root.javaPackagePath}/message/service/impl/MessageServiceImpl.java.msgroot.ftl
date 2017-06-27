package ${root.javaPackageName}.message.service.impl;

<#list messages as message>
  <#if message.responseGroups?has_content>
import java.util.ArrayList;
import java.util.List;

    <#break/>
  </#if>
</#list>
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;

<#list messages as message>
import ${root.javaPackageName}.message.protocol.${message.name}Request;
import ${root.javaPackageName}.message.protocol.${message.name}Response;
  <#list message.responseGroups as group>
import ${root.javaPackageName}.message.protocol.${message.name}Response.${group.id?cap_first};
  </#list>
</#list>
import ${root.javaPackageName}.message.service.MessageService;

@Service("mockMessageService")
public class MessageServiceImpl implements MessageService {
	private static final Logger LOG = LoggerFactory.getLogger(MessageServiceImpl.class);

	private ObjectMapper objectMapper = new ObjectMapper();

<#list messages as message>
	@Override
	public ${message.name}Response ${message.id}(${message.name}Request request, ${message.name}Response response) {
		debug(request);
  <#list message.responseFields as field>
		response.set${field.id?cap_first}("${field.valueExample?j_string}");
  </#list>
  <#list message.responseGroups as group>
		response.set${group.id?cap_first}(get${group.id?cap_first}());
  </#list>
		debug(response);

		return response;
	}

  <#list message.responseGroups as group>
	private List<${group.id?cap_first}> get${group.id?cap_first}() {
		List<${group.id?cap_first}> elems = new ArrayList<${group.id?cap_first}>();
		${group.id?cap_first} elem = new ${group.id?cap_first}();
		elems.add(elem);

    <#list group.fields as field>
		elem.set${field.id?cap_first}("${field.valueExample?j_string}");
    </#list>

		return elems;
	}

  </#list>
</#list>
	private void debug(Object obj) {
		try {
			if (LOG.isDebugEnabled()) {
				LOG.debug(objectMapper.writeValueAsString(obj));
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
	}

}
