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
<#macro addValidaator field>
  <#if field.required == 'Y'>
@NotEmpty
  </#if>
  <#if field.minlength?has_content || field.maxlength?has_content>
@Length(<#if field.minlength?has_content>min=${field.minlength?number?round}, </#if><#if field.maxlength?has_content>max=${field.maxlength?number?round}</#if>)
  </#if>
  <#if field.minvalue?has_content>
@Min(${field.minvalue?number?round})
  </#if>
  <#if field.maxvalue?has_content>
@Max(${field.maxvalue?number?round})
  </#if>
  <#if field.digit == 'Y'>
@Digits
  </#if>
  <#if field.email == 'Y'>
@Email
  </#if>
  <#if field.zipcode == 'Y'>
@Pattern(regexp = Validators.REGEXP_ZIP)
  </#if>
  <#if field.phonenumber == 'Y'>
@Pattern(regexp = Validators.REGEXP_PHONENUMBER)
  </#if>
  <#if field.idcardno == 'Y'>
@Pattern(regexp = Validators.REGEXP_IDCARD)
  </#if>
  <#if field.bankcardno == 'Y'>
@Pattern(regexp = Validators.REGEXP_BANKCARD)
  </#if>
  <#if field.qq == 'Y'>
@Pattern(regexp = Validators.REGEXP_QQ)
  </#if>
</#macro>
package ${root.javaPackageName}.message.protocol;

import java.io.Serializable;
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
<#if requestValids?has_content && requestValids?seq_contains('Pattern')>

import ${root.corpJavaPackageName}.shared.util.Validators;
</#if>
import ${root.corpJavaPackageName}.shared.protocol.MobileRequest;

/**
 * ${description}.客户端请求
 * 
 * @author 代码生成器v1.0
 * 
 */
public class ${name}Request extends MobileRequest implements Serializable {
	private static final long serialVersionUID = 1L;
<#list requestGroups as group>

	/**
	 * @see ${root.javaPackageName}.message.entity.${name}Request#get${group.id?cap_first}
	 */
	public static class ${group.id?cap_first} implements Serializable {
		private static final long serialVersionUID = 1L;

	<#list group.fields as field>

		<@addValidaator field = field />
		private String ${field.id};
	</#list>
	<#list group.fields as field>

		/**
		 * @return ${field.description}
		 */
		public String get${field.id?cap_first}() {
			return ${field.id};
		}
		/**
		 * @param ${field.id} ${field.description}
		 */
		public void set${field.id?cap_first}(String ${field.id}) {
			this.${field.id} = ${field.id};
		}
	</#list>
	}
</#list>

<#list requestFields as field>
	<@addValidaator field = field />
	private String ${field.id};
</#list>
<#if anon == 'N'>
	private String loginName;
</#if>
<#list requestGroups as group>
	@Valid
	private List<${group.id?cap_first}> ${group.id};
</#list>
<#list requestFields as field>

	/**
	 * @return ${field.description}
	 */
	public String get${field.id?cap_first}() {
		return ${field.id};
	}
	/**
	 * @param ${field.id} ${field.description}
	 */
	public void set${field.id?cap_first}(String ${field.id}) {
		this.${field.id} = ${field.id};
	}
</#list>
<#if anon == 'N'>

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
</#if>
<#list requestGroups as group>

	/**
	 * @return ${group.description}
	 */
	public List<${group.id?cap_first}> get${group.id?cap_first}() {
		return ${group.id};
	}
	/**
	 * @param ${group.id} ${group.description}
	 */
	public void set${group.id?cap_first}(List<${group.id?cap_first}> ${group.id}) {
		this.${group.id} = ${group.id};
	}
</#list>

}