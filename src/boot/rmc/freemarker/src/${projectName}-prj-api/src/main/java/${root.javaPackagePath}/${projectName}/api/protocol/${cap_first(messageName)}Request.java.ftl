<#assign validatorImportMap = {
	"AssertFalse": "javax.validation.constraints.AssertFalse",
	"AssertTrue": "javax.validation.constraints.AssertTrue",
	"DecimalMax": "javax.validation.constraints.DecimalMax",
	"DecimalMin": "javax.validation.constraints.DecimalMin",
	"Digits": "javax.validation.constraints.Digits",
	"Future": "javax.validation.constraints.Future",
	"Max": "javax.validation.constraints.Max",
	"Min": "javax.validation.constraints.Min",
	"NotNull": "javax.validation.constraints.NotNull",
	"Null": "javax.validation.constraints.Null",
	"Past": "javax.validation.constraints.Past",
	"Pattern": "javax.validation.constraints.Pattern",
	"Size": "javax.validation.constraints.Size",
	"Email": "org.hibernate.validator.constraints.Email",
	"Length": "org.hibernate.validator.constraints.Length",
	"NotEmpty": "org.hibernate.validator.constraints.NotEmpty",
	"Range": "org.hibernate.validator.constraints.Range"
} />
<#macro addValidaator field space>
  <#if field.required == 'Y'>
    <#if field.type == 'String'>
${space}@NotEmpty
    </#if>
    <#if field.type != 'String'>
${space}@NotNull
    </#if>
  </#if>
  <#if field.minlength?has_content || field.maxlength?has_content>
${space}@Length(<#if field.minlength?has_content>min=${field.minlength}, </#if><#if field.maxlength?has_content>max=${field.maxlength}</#if>)
  </#if>
  <#if field.minvalue?has_content>
${space}@Min(${field.minvalue})
  </#if>
  <#if field.maxvalue?has_content>
${space}@Max(${field.maxvalue})
  </#if>
  <#if field.digit == 'Y'>
${space}@Digits
  </#if>
  <#if field.email == 'Y'>
${space}@Email
  </#if>
  <#if field.zipcode == 'Y'>
${space}@Pattern(regexp = Validators.REGEXP_ZIP)
  </#if>
  <#if field.phonenumber == 'Y'>
${space}@Pattern(regexp = Validators.REGEXP_PHONENUMBER)
  </#if>
  <#if field.idcardno == 'Y'>
${space}@Pattern(regexp = Validators.REGEXP_IDCARD)
  </#if>
  <#if field.bankcardno == 'Y'>
${space}@Pattern(regexp = Validators.REGEXP_BANKCARD)
  </#if>
  <#if field.qq == 'Y'>
${space}@Pattern(regexp = Validators.REGEXP_QQ)
  </#if>
</#macro>
package ${root.javaPackageName}.${projectName}.api.protocol;

import java.io.Serializable;
<#list requestFields as field>
  <#if field.type == 'BigDecimal'>
import java.math.BigDecimal;
    <#break/>
  </#if>
</#list>
<#list requestFields as field>
  <#if field.type == 'Date'>
import java.util.Date;
    <#break/>
  </#if>
</#list>
<#if requestGroups?has_content>
import java.util.List;

import javax.validation.Valid;
</#if>
<#if requestFields?has_content || requestGroups?has_content>
  <#if requestValids?has_content>

  </#if>
  <#list requestValids as va>
import ${validatorImportMap[va]};
  </#list>
</#if>

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
<#if requestValids?has_content && requestValids?seq_contains('Pattern')>

import net.zkbc.shared.util.Validators;
</#if>

/**
 * ${messageDesc}.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class ${messageName?cap_first}Request implements Serializable {
	private static final long serialVersionUID = 1L;
<#list requestGroups as group>

	/**
	 * @see ${root.javaPackageName}.${projectName}.mgt.protocol.${messageName?cap_first}Request#get${group.id?cap_first}
	 */
	public static class ${group.id?cap_first} implements Serializable {
		private static final long serialVersionUID = 1L;

  <#list group.fields as field>

    <@addValidaator field = field space = '		' />
		private ${field.type} ${field.id};
  </#list>
  <#list group.fields as field>

		/**
		 * @return ${field.description}
		 */
		public ${field.type} get${field.id?cap_first}() {
			return ${field.id};
		}
		/**
		 * @param ${field.id} ${field.description}
		 */
		public void set${field.id?cap_first}(${field.type} ${field.id}) {
			this.${field.id} = ${field.id};
		}
	</#list>
	}
</#list>

<#list requestFields as field>
  <@addValidaator field = field space = '	'/>
	private ${field.type} ${field.id};
</#list>
<#list requestGroups as group>
	@Valid
	private List<${group.id?cap_first}> ${group.id};
</#list>
<#list requestFields as field>

	/**
	 * @return ${field.description}
	 */
	public ${field.type} get${field.id?cap_first}() {
		return ${field.id};
	}
	/**
	 * @param ${field.id} ${field.description}
	 */
	public void set${field.id?cap_first}(${field.type} ${field.id}) {
		this.${field.id} = ${field.id};
	}
</#list>
<#list requestGroups as group>

	/**
	 * @return ${group.description!}
	 */
	public List<${group.id?cap_first}> get${group.id?cap_first}() {
		return ${group.id};
	}
	/**
	 * @param ${group.id} ${group.description!}
	 */
	public void set${group.id?cap_first}(List<${group.id?cap_first}> ${group.id}) {
		this.${group.id} = ${group.id};
	}
</#list>

}