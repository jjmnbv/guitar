package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.ge;
import static com.xukaiqiang.shared.util.JpaSpecUtils.le;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuUsLoginLFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL;
import com.xukaiqiang.gu.orm.entity.CuUsLoginL_;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuUsLoginLRepository extends JpaRepository<CuUsLoginL, Long>,
		JpaSpecificationExecutor<CuUsLoginL> {

	public static class Executor {
		private CuUsLoginLRepository repository;

		public Executor(CuUsLoginLRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsLoginL> findAll(final CuUsLoginLFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuUsLoginL>() {
				@Override
				public Predicate toPredicate(Root<CuUsLoginL> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(
								like(cb, root.get(CuUsLoginL_.loginNa),filter.getQueryAllParamString()),
								like(cb, root.get(CuUsLoginL_.loginIp),filter.getQueryAllParamString())));
					} else{
					return cb.and(merge(
							like(cb, root.get(CuUsLoginL_.loginNa),filter.getLoginNa()),
							like(cb, root.get(CuUsLoginL_.loginIp),filter.getLoginIp()),
							ge(cb, root.get(CuUsLoginL_.crDt),filter.getCrDt()),
							le(cb, root.get(CuUsLoginL_.crDt),filter.getCtdtEnd())));
					}
				}
			}, pageable);
		}

		public List<CuUsLoginL> findAll(final CuUsLoginLFilterRequest filter) {
			Sort sort = new Sort(
					new Order(Direction.DESC, CuUsLoginL_.crDt.getName()),
					new Order(Direction.DESC, CuUsLoginL_.crTm.getName()));
			return repository.findAll(new Specification<CuUsLoginL>() {
				@Override
				public Predicate toPredicate(Root<CuUsLoginL> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

						eq(cb, root.get(CuUsLoginL_.loginId), filter.getLoginId())
					// TODO
					));
				}
			}, sort);
		}

		public CuUsLoginL findOne(final CuUsLoginLFilterRequest filter) {
			return repository.findOne(new Specification<CuUsLoginL>() {
				@Override
				public Predicate toPredicate(Root<CuUsLoginL> root,
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

	}

}
