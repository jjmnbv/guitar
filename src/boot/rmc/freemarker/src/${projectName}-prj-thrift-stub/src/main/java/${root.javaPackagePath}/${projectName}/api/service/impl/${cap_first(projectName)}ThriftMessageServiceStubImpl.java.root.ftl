package ${root.javaPackageName}.${projectName}.api.service.impl;

import static net.zkbc.shared.util.CopierUtils.convert;

import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.transport.TTransport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<#list messages as message>
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Request;
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Response;
</#list>
import ${root.javaPackageName}.${projectName}.api.service.MessageService;
import ${root.javaPackageName}.${projectName}.api.thrift.InvalidOperation;
<#list messages as message>
import ${root.javaPackageName}.${projectName}.api.thrift.T${message.messageName?cap_first}Request;
  <#list message.requestGroups as group>
import ${root.javaPackageName}.${projectName}.api.thrift.T${message.messageName?cap_first}Request${group.id?cap_first};
  </#list>
import ${root.javaPackageName}.${projectName}.api.thrift.T${message.messageName?cap_first}Response;
</#list>
import ${root.javaPackageName}.${projectName}.api.thrift.TMessageService.Client;
import net.zkbc.shared.SharedVars;
import net.zkbc.shared.util.ThriftUtils;

@Service
public class ${projectName?cap_first}ThriftMessageServiceStubImpl implements MessageService {
	private static final Logger LOG = LoggerFactory.getLogger(${projectName?cap_first}ThriftMessageServiceStubImpl.class);

	@Autowired
	private SharedVars appVars;
  <#list messages as message>

	@Override
	public ${message.messageName?cap_first}Response ${message.messageName}(final ${message.messageName?cap_first}Request request) {
		return ThriftUtils.sendRequest(appVars, new ThriftUtils.Executor<${message.messageName?cap_first}Response>() {
			@Override
			public ${message.messageName?cap_first}Response execute(TTransport transport) throws TException {
				try {
					T${message.messageName?cap_first}Request tRequest = convert(request, T${message.messageName?cap_first}Request.class);
          <#list message.requestGroups as group>
					tRequest.set${group.id?cap_first}(convert(request.get${group.id?cap_first}(), T${message.messageName?cap_first}Request${group.id?cap_first}.class));
          </#list>

					T${message.messageName?cap_first}Response tResponse = getClient(transport).${message.messageName}(tRequest);

					${message.messageName?cap_first}Response response = convert(tResponse, ${message.messageName?cap_first}Response.class);
          <#list message.responseGroups as group>
					response.set${group.id?cap_first}(convert(tResponse.get${group.id?cap_first}(), ${message.messageName?cap_first}Response.${group.id?cap_first}.class));
          </#list>

					return response;
				} catch (InvalidOperation e) {
					LOG.error(e.getWhy(), e);
					${message.messageName?cap_first}Response response = new ${message.messageName?cap_first}Response();
					response.setParameterErrors(e.getWhy());
					return response;
				}
			}
		}, ${message.messageName?cap_first}Response.class);
	}
  </#list>

	private Client getClient(TTransport transport) {
		return new Client(new TBinaryProtocol(transport));
	}

}
