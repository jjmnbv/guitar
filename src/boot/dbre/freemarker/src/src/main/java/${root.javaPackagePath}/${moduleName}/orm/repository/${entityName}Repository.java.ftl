package ${root.javaPackageName}.${moduleName}.orm.repository;

import static net.zkbc.shared.util.JpaSpecUtils.*;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import ${root.javaPackageName}.${moduleName}.orm.entity.${entityName};
<#if (primaryKeys?size>1)>
import ${root.javaPackageName}.${moduleName}.orm.entity.${entityName}_;
import ${root.javaPackageName}.${moduleName}.orm.entity.id.${entityName}Id;
import ${root.javaPackageName}.${moduleName}.orm.entity.id.${entityName}Id_;
</#if>
import ${root.javaPackageName}.${moduleName}.orm.protocol.${entityName}FilterRequest;

public interface ${entityName}Repository extends JpaRepository<${entityName}, <#if (primaryKeys?size>1)>${entityName}Id<#else>${(primaryKeys[0].type)!}</#if>>, JpaSpecificationExecutor<${entityName}> {

	public static class Executor {
		private ${entityName}Repository repository;

		public Executor(${entityName}Repository repository) {
			this.repository = repository;
		}

		public Page<${entityName}> findAll(final ${entityName}FilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<${entityName}>() {
				@Override
				public Predicate toPredicate(Root<${entityName}> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO
              <#if (primaryKeys?size>1)>
                <#list primaryKeys as field>
							eq(cb, root.get(${entityName}_.${entityName?uncap_first}Id).get(${entityName}Id_.${field.name}), filter.get${field.name?cap_first}())<#if field_has_next>,</#if>
                </#list>
              </#if>

					));
				}
			}, pageable);
		}

		public List<${entityName}> findAll(final ${entityName}FilterRequest filter) {
			return repository.findAll(new Specification<${entityName}>() {
				@Override
				public Predicate toPredicate(Root<${entityName}> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO
              <#if (primaryKeys?size>1)>
                <#list primaryKeys as field>
							eq(cb, root.get(${entityName}_.${entityName?uncap_first}Id).get(${entityName}Id_.${field.name}), filter.get${field.name?cap_first}())<#if field_has_next>,</#if>
                </#list>
              </#if>

					));
				}
			});
		}

		public ${entityName} findOne(final ${entityName}FilterRequest filter) {
			return repository.findOne(new Specification<${entityName}>() {
				@Override
				public Predicate toPredicate(Root<${entityName}> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO
              <#if (primaryKeys?size>1)>
                <#list primaryKeys as field>
							eq(cb, root.get(${entityName}_.${entityName?uncap_first}Id).get(${entityName}Id_.${field.name}), filter.get${field.name?cap_first}())<#if field_has_next>,</#if>
                </#list>
              </#if>

					));
				}
			});
		}
    <#if (primaryKeys?size>1)>

		public ${entityName} findOne(<#list primaryKeys as field>final ${field.type} ${field.name}<#if field_has_next>, </#if></#list>) {
			return repository.findOne(new Specification<${entityName}>() {
				@Override
				public Predicate toPredicate(Root<${entityName}> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					return cb.and(merge(

              <#list primaryKeys as field>
							eq(cb, root.get(${entityName}_.${entityName?uncap_first}Id).get(${entityName}Id_.${field.name}), ${field.name})<#if field_has_next>,</#if>
              </#list>

					));
				}
			});
		}
    </#if>

	}

}
