package ${root.javaPackageName}.${moduleName}.mgt.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import ${root.javaPackageName}.${moduleName}.mgt.service.${entityName}Service;
import ${root.javaPackageName}.${moduleName}.orm.entity.${entityName};
import ${root.javaPackageName}.${moduleName}.orm.protocol.${entityName}FilterRequest;
import ${root.javaPackageName}.${moduleName}.orm.repository.${entityName}Repository;
import ${root.javaPackageName}.${moduleName}.orm.repository.${entityName}Repository.Executor;
import net.zkbc.shared.service.PageService;

@Transactional(readOnly = true)
@Service
public class ${entityName}ServiceImpl implements ${entityName}Service {
	private static final Logger LOG = LoggerFactory.getLogger(${entityName}ServiceImpl.class);

	@Autowired
	private ${entityName}Repository ${entityName?lower_case}Repos;
	@Autowired
	private PageService pageService;

	@Override
	public Page<${entityName}> find${entityName}Page(Integer pageNumber, Integer pageSize, ${entityName}FilterRequest filter) {
		return new Executor(${entityName?lower_case}Repos).findAll(filter, pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<${entityName}> find${entityName}s(${entityName}FilterRequest filter) {
		return new Executor(${entityName?lower_case}Repos).findAll(filter);
	}

	@Override
	public ${entityName} find${entityName}(<#list primaryKeys as field>${field.type} ${field.name}<#if field_has_next>, </#if></#list>) {
    <#list primaryKeys as field>
		if (ObjectUtils.isEmpty(${field.name})) {
			LOG.warn("${field.name} is empty.");
			return null;
		}
    </#list>
    <#if (primaryKeys?size>1)>
		return new Executor(${entityName?lower_case}Repos).findOne(<#list primaryKeys as field>${field.name}<#if field_has_next>, </#if></#list>);
    <#else>
		return ${entityName?lower_case}Repos.findOne(${(primaryKeys[0].name)!});
    </#if>
	}

	@Transactional
	@Override
	public ${entityName} create${entityName}(${entityName} ${entityName?lower_case}) {
		//TODO 主键处理
		return ${entityName?lower_case}Repos.save(${entityName?lower_case});
	}

	@Transactional
	@Override
	public ${entityName} update${entityName}(${entityName} ${entityName?lower_case}) {
		if (${entityName?lower_case}.get<#if (primaryKeys?size>1)>${entityName}Id<#else>${(primaryKeys[0].name)!?cap_first}</#if>() == null) {
			LOG.warn("${entityName?lower_case}.<#if (primaryKeys?size>1)>${entityName}Id<#else>${(primaryKeys[0].name)!}</#if> is null.");
			return null;
		}

		${entityName} target = ${entityName?lower_case}Repos.findOne(${entityName?lower_case}.get<#if (primaryKeys?size>1)>${entityName}Id<#else>${(primaryKeys[0].name)!?cap_first}</#if>());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}

		return ${entityName?lower_case}Repos.save(${entityName?lower_case});
	}

	@Transactional
	@Override
	public void remove${entityName}(<#list primaryKeys as field>${field.type} ${field.name}<#if field_has_next>, </#if></#list>) {
    <#list primaryKeys as field>
		if (ObjectUtils.isEmpty(${field.name})) {
			LOG.warn("${field.name} is empty.");
			return;
		}
    </#list>

    <#if (primaryKeys?size>1)>
		${entityName} ${entityName?lower_case} = new Executor(${entityName?lower_case}Repos).findOne(<#list primaryKeys as field>${field.name}<#if field_has_next>, </#if></#list>);
    <#else>
		${entityName} ${entityName?lower_case} = ${entityName?lower_case}Repos.findOne(${(primaryKeys[0].name)!});
    </#if>
		if (${entityName?lower_case} == null) {
			LOG.warn("${entityName?lower_case} is null.");
			return;
		}
		${entityName?lower_case}Repos.delete(${entityName?lower_case});
	}

}
