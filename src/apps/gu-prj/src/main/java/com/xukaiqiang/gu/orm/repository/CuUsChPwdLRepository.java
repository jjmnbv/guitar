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

import com.xukaiqiang.gu.mgt.protocol.CuUsChPwdLFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsChPwdL;

public interface CuUsChPwdLRepository extends JpaRepository<CuUsChPwdL, Long>, JpaSpecificationExecutor<CuUsChPwdL> {

	public static class Executor {
		private CuUsChPwdLRepository repository;

		public Executor(CuUsChPwdLRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsChPwdL> findAll(final CuUsChPwdLFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<CuUsChPwdL>() {
				@Override
				public Predicate toPredicate(Root<CuUsChPwdL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<CuUsChPwdL> findAll(final CuUsChPwdLFilterRequest filter) {
			return repository.findAll(new Specification<CuUsChPwdL>() {
				@Override
				public Predicate toPredicate(Root<CuUsChPwdL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public CuUsChPwdL findOne(final CuUsChPwdLFilterRequest filter) {
			return repository.findOne(new Specification<CuUsChPwdL>() {
				@Override
				public Predicate toPredicate(Root<CuUsChPwdL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
