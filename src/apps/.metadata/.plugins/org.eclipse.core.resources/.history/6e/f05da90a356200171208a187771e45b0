package com.xukaiqiang.g.orm.repository;

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

import com.xukaiqiang.g.orm.entity.Role;
import com.xukaiqiang.g.orm.protocol.RoleFilterRequest;

public interface RoleRepository extends JpaRepository<Role, Integer>, JpaSpecificationExecutor<Role> {

	public static class Executor {
		private RoleRepository repository;

		public Executor(RoleRepository repository) {
			this.repository = repository;
		}

		public Page<Role> findAll(final RoleFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<Role>() {
				@Override
				public Predicate toPredicate(Root<Role> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<Role> findAll(final RoleFilterRequest filter) {
			return repository.findAll(new Specification<Role>() {
				@Override
				public Predicate toPredicate(Root<Role> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public Role findOne(final RoleFilterRequest filter) {
			return repository.findOne(new Specification<Role>() {
				@Override
				public Predicate toPredicate(Root<Role> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

	}

}
