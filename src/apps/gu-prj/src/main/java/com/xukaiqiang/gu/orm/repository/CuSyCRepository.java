package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.*;

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

import com.xukaiqiang.gu.mgt.protocol.CuSyCFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuSyC;

public interface CuSyCRepository extends JpaRepository<CuSyC, String>, JpaSpecificationExecutor<CuSyC> {

	public static class Executor {
		private CuSyCRepository repository;

		public Executor(CuSyCRepository repository) {
			this.repository = repository;
		}

		public Page<CuSyC> findAll(final CuSyCFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<CuSyC>() {
				@Override
				public Predicate toPredicate(Root<CuSyC> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<CuSyC> findAll(final CuSyCFilterRequest filter) {
			return repository.findAll(new Specification<CuSyC>() {
				@Override
				public Predicate toPredicate(Root<CuSyC> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public CuSyC findOne(final CuSyCFilterRequest filter) {
			return repository.findOne(new Specification<CuSyC>() {
				@Override
				public Predicate toPredicate(Root<CuSyC> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
