package ${root.javaPackageName}.message.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;

<#list messages as message>
import ${root.javaPackageName}.message.protocol.${message.name}Request;
import ${root.javaPackageName}.message.protocol.${message.name}Response;
</#list>
import ${root.javaPackageName}.message.service.MessageService;

/**
 * 代理报文Service实现，将报文处理分为多个类，避免多人同时编辑一个文件
 * 
 * @author 代码生成器v1.0
 */
public abstract class DelegateMessageService implements MessageService {

<#list messages as message>
	public interface ${message.name}Service {
		public ${message.name}Response ${message.id}(${message.name}Request request, ${message.name}Response response);
	}
</#list>

	private static final Logger LOG = LoggerFactory.getLogger(DelegateMessageService.class);

	private ObjectMapper objectMapper = new ObjectMapper();

<#list messages as message>
	@Override
	public ${message.name}Response ${message.id}(${message.name}Request request, ${message.name}Response response) {
		debug(request);
		response = getDelegateService(${message.name}Service.class).${message.id}(request, response);
		debug(response);

		return response;
	}
</#list>

	protected abstract <T> T getDelegateService(Class<T> clazz);

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
