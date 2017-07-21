package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.ge;
import static com.xukaiqiang.shared.util.JpaSpecUtils.le;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.orm.entity.CuSyOpL;
import com.xukaiqiang.gu.orm.entity.CuSyOpL_;
import com.xukaiqiang.gu.orm.protocol.CuSyOpLFilterRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuSyOpLRepository extends JpaRepository<CuSyOpL, Long>, JpaSpecificationExecutor<CuSyOpL> {

	public static class Executor {
		private CuSyOpLRepository repository;

		public Executor(CuSyOpLRepository repository) {
			this.repository = repository;
		}

		public Page<CuSyOpL> findAll(final CuSyOpLFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<CuSyOpL>() {
				@Override
				public Predicate toPredicate(Root<CuSyOpL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuSyOpL_.crDt)),cb.asc(root.get(CuSyOpL_.crTm)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(
								like(cb, root.get(CuSyOpL_.syOpCd), filter.getSyOpCd()),
								like(cb, root.get(CuSyOpL_.usLoginNa), filter.getUsLoginNa()),
								like(cb, root.get(CuSyOpL_.syCd), filter.getSyCd())));
					} else{
					return cb.and(merge(
							ge(cb, root.get(CuSyOpL_.crDt),filter.getCrDt()),
							le(cb, root.get(CuSyOpL_.crDt),filter.getCrdtEnd()),
							like(cb, root.get(CuSyOpL_.syOpCd), filter.getSyOpCd()),
							like(cb, root.get(CuSyOpL_.syCd), filter.getSyCd())));
					}
				}
			}, pageable);
		}

		public List<CuSyOpL> findAll(final CuSyOpLFilterRequest filter) {
			return repository.findAll(new Specification<CuSyOpL>() {
				@Override
				public Predicate toPredicate(Root<CuSyOpL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public CuSyOpL findOne(final CuSyOpLFilterRequest filter) {
			return repository.findOne(new Specification<CuSyOpL>() {
				@Override
				public Predicate toPredicate(Root<CuSyOpL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
