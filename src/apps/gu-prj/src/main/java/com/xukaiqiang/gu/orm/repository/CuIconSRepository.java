package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuIconSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuIconS;
import com.xukaiqiang.gu.orm.entity.CuIconS_;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
public interface CuIconSRepository extends JpaRepository<CuIconS, String>,
		JpaSpecificationExecutor<CuIconS> {

	public static class Executor {
		private CuIconSRepository repository;

		public Executor(CuIconSRepository repository) {
			this.repository = repository;
		}

		public Page<CuIconS> findAll(final CuIconSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuIconS>() {
				@Override
				public Predicate toPredicate(Root<CuIconS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuIconS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(
								like(cb, root.get(CuIconS_.iconNo), filter.getQueryAllParamString()),
								like(cb, root.get(CuIconS_.iconNa), filter.getQueryAllParamString())));
					} else{
					return cb.and(merge(

							eq(cb, root.get(CuIconS_.iconNo),
									filter.getIconNo()),
							like(cb, root.get(CuIconS_.iconNa),
									filter.getIconNa())

					));
					}
				}
			}, pageable);
		}

		public List<CuIconS> findAll(final CuIconSFilterRequest filter) {
			return repository.findAll(new Specification<CuIconS>() {
				@Override
				public Predicate toPredicate(Root<CuIconS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuIconS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(
								like(cb, root.get(CuIconS_.iconNo), filter.getQueryAllParamString()),
								like(cb, root.get(CuIconS_.iconNa), filter.getQueryAllParamString())));
					} else{
					return cb.and(merge(

							eq(cb, root.get(CuIconS_.iconNo),
									filter.getIconNo()),
							like(cb, root.get(CuIconS_.iconNa),
									filter.getIconNa())

					));
					}
				}
			});
		}

		public CuIconS findOne(final CuIconSFilterRequest filter) {
			return repository.findOne(new Specification<CuIconS>() {
				@Override
				public Predicate toPredicate(Root<CuIconS> root,
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

	public CuIconS findTop1ByOrderByIconNo();

	public CuIconS findTop1ByOrderByIconNoDesc();

}
