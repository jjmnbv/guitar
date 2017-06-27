package ${root.javaPackageName}.${projectName}.api.thrift;

import static net.zkbc.shared.util.CopierUtils.convert;

import java.util.ArrayList;
import java.util.List;

import org.apache.thrift.TException;
import org.apache.thrift.transport.TTransportException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.SmartLifecycle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

<#list messages as message>
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Request;
import ${root.javaPackageName}.${projectName}.api.protocol.${message.messageName?cap_first}Response;
</#list>
import ${root.javaPackageName}.${projectName}.api.service.MessageService;
import ${root.javaPackageName}.${projectName}.api.thrift.TMessageService.Iface;
import ${root.javaPackageName}.${projectName}.api.thrift.TMessageService.Processor;
import net.zkbc.shared.SharedVars;
import net.zkbc.shared.util.ThriftUtils;;

@Configuration
public class ${projectName?cap_first}ThriftConfiguration {

	@Bean
	@Autowired
	public SmartLifecycle thriftServer(SharedVars appVars, final MessageSource messageSource, final Validator validator, MessageService messageService) throws TTransportException {
		final MessageService service = messageService;

		return ThriftUtils.createThriftServer(appVars, new Processor<Iface>(new Iface() {
      <#list messages as message>

			@Override
			public T${message.messageName?cap_first}Response ${message.messageName}(T${message.messageName?cap_first}Request tRequest) throws InvalidOperation, TException {
				${message.messageName?cap_first}Request request = convert(tRequest, ${message.messageName?cap_first}Request.class);
        <#list message.requestGroups as group>
				request.set${group.id?cap_first}(convert(tRequest.get${group.id?cap_first}(), ${message.messageName?cap_first}Request.${group.id?cap_first}.class));
        </#list>
				validator(request);

				${message.messageName?cap_first}Response response = service.${message.messageName}(request);

				T${message.messageName?cap_first}Response tResponse = convert(response, T${message.messageName?cap_first}Response.class);
        <#list message.responseGroups as group>
				tResponse.set${group.id?cap_first}(convert(response.get${group.id?cap_first}(), T${message.messageName?cap_first}Response${group.id?cap_first}.class));
        </#list>

				return tResponse;
			}
      </#list>

			private <T> void validator(T request) throws InvalidOperation {
				BindingResult result = new BeanPropertyBindingResult(request, StringUtils.uncapitalize(request.getClass().getSimpleName()));
				ValidationUtils.invokeValidator(validator, request, result);
				if (result.hasErrors()) {
					List<String> errors = new ArrayList<String>();
					for (FieldError error : result.getFieldErrors()) {
						errors.add(messageSource.getMessage(error, null));
					}
					throw new InvalidOperation(errors.size(), errors.toString());
				}
			}

		}));
	}

}
