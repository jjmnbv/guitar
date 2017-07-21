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

import com.xukaiqiang.gu.mgt.protocol.CuUsCFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsC;

public interface CuUsCRepository extends JpaRepository<CuUsC, Long>, JpaSpecificationExecutor<CuUsC> {

	public static class Executor {
		private CuUsCRepository repository;

		public Executor(CuUsCRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsC> findAll(final CuUsCFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<CuUsC>() {
				@Override
				public Predicate toPredicate(Root<CuUsC> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<CuUsC> findAll(final CuUsCFilterRequest filter) {
			return repository.findAll(new Specification<CuUsC>() {
				@Override
				public Predicate toPredicate(Root<CuUsC> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public CuUsC findOne(final CuUsCFilterRequest filter) {
			return repository.findOne(new Specification<CuUsC>() {
				@Override
				public Predicate toPredicate(Root<CuUsC> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
