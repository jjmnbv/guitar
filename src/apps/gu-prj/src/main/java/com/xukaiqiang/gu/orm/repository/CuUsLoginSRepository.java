package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuUsLoginSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS;
import com.xukaiqiang.gu.orm.entity.CuUsLoginS_;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuUsLoginSRepository extends JpaRepository<CuUsLoginS, Long>,
		JpaSpecificationExecutor<CuUsLoginS> {

	public static class Executor {
		private CuUsLoginSRepository repository;

		public Executor(CuUsLoginSRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsLoginS> findAll(final CuUsLoginSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuUsLoginS>() {
				@Override
				public Predicate toPredicate(Root<CuUsLoginS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

							));
				}
			}, pageable);
		}

		public List<CuUsLoginS> findAll(final CuUsLoginSFilterRequest filter) {
			return repository.findAll(new Specification<CuUsLoginS>() {
				@Override
				public Predicate toPredicate(Root<CuUsLoginS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

							));
				}
			});
		}

		public CuUsLoginS findOne(final CuUsLoginSFilterRequest filter) {
			return repository.findOne(new Specification<CuUsLoginS>() {
				@Override
				public Predicate toPredicate(Root<CuUsLoginS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					eq(cb, root.get(CuUsLoginS_.loginNa), filter.getLoginNa())

					));
				}
			});
		}

	}

	CuUsLoginS findByLoginNa(String loginName);

}
