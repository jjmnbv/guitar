package ${root.javaPackageName}.${moduleName}.mgt.protocol;

import java.io.Serializable;
<#list fields as field>
  <#if field.type == 'BigDecimal'>
import java.math.BigDecimal;
    <#break/>
  </#if>
</#list>
import java.util.ArrayList;
<#list fields as field>
  <#if field.type == 'Date'>
import java.util.Date;
    <#break/>
  </#if>
</#list>
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import net.zkbc.shared.protocol.OutputMessage;
import net.zkbc.shared.util.CopierUtils;

@JsonInclude(Include.NON_NULL)
public class ${entityName}ListResponse extends OutputMessage implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Element implements Serializable {
		private static final long serialVersionUID = 1L;

    <#list primaryKeys as field>
		private ${field.type} ${field.name};
    </#list>
    <#list fields as field>
      <#if !field.ptype?has_content>
		private ${field.type} ${field.name};
      </#if>
    </#list>
    <#list primaryKeys as field>

		/**
		 * @return ${field.description}
		 */
		public ${field.type} get${field.name?cap_first}() {
			return ${field.name};
		}

		/**
		 * ${field.description}
		 *
		 * @param ${field.name}
		 */
		public void set${field.name?cap_first}(${field.type} ${field.name}) {
			this.${field.name} = ${field.name};
		}
    </#list>
    <#list fields as field>
      <#if !field.ptype?has_content>

		/**
		 * @return ${field.description}
		 */
		public ${field.type} get${field.name?cap_first}() {
			return ${field.name};
		}

		/**
		 * ${field.description}
		 *
		 * @param ${field.name}
		 */
		public void set${field.name?cap_first}(${field.type} ${field.name}) {
			this.${field.name} = ${field.name};
		}
      </#if>
    </#list>

	}

	private List<Element> content = new ArrayList<Element>();

	/**
	 * 记录列表
	 * 
	 * @return
	 */
	public List<Element> getContent() {
		return content;
	}

	/**
	 * 记录列表
	 *
	 * @param content
	 */
	public void setContent(List<Element> content) {
		this.content = content;
	}

	public static <E> ${entityName}ListResponse buildListResponse(${entityName}ListResponse pageResponse, List<E> list) {
		for(E e : list) {
			Element element = new Element();
			CopierUtils.copy(e, element);
			pageResponse.getContent().add(element);
		}

		return pageResponse;
	}

}
