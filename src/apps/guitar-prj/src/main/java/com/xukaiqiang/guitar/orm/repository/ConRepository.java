package com.xukaiqiang.guitar.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

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

import com.xukaiqiang.guitar.orm.entity.Con;
import com.xukaiqiang.guitar.orm.protocol.ConFilterRequest;

public interface ConRepository extends JpaRepository<Con, Integer>, JpaSpecificationExecutor<Con> {

	public static class Executor {
		private ConRepository repository;

		public Executor(ConRepository repository) {
			this.repository = repository;
		}

		public Page<Con> findAll(final ConFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<Con>() {
				@Override
				public Predicate toPredicate(Root<Con> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

					));
				}
			}, pageable);
		}

		public List<Con> findAll(final ConFilterRequest filter) {
			return repository.findAll(new Specification<Con>() {
				@Override
				public Predicate toPredicate(Root<Con> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

					));
				}
			});
		}

		public Con findOne(final ConFilterRequest filter) {
			return repository.findOne(new Specification<Con>() {
				@Override
				public Predicate toPredicate(Root<Con> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

					));
				}
			});
		}

	}

}
