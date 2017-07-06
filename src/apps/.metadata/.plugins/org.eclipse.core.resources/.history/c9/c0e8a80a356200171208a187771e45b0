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

import com.xukaiqiang.g.orm.entity.Edu;
import com.xukaiqiang.g.orm.protocol.EduFilterRequest;

public interface EduRepository extends JpaRepository<Edu, Integer>, JpaSpecificationExecutor<Edu> {

	public static class Executor {
		private EduRepository repository;

		public Executor(EduRepository repository) {
			this.repository = repository;
		}

		public Page<Edu> findAll(final EduFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<Edu>() {
				@Override
				public Predicate toPredicate(Root<Edu> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<Edu> findAll(final EduFilterRequest filter) {
			return repository.findAll(new Specification<Edu>() {
				@Override
				public Predicate toPredicate(Root<Edu> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public Edu findOne(final EduFilterRequest filter) {
			return repository.findOne(new Specification<Edu>() {
				@Override
				public Predicate toPredicate(Root<Edu> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
