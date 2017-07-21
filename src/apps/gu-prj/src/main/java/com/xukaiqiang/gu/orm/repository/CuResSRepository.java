package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;
import static com.xukaiqiang.shared.util.JpaSpecUtils.ne;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuResSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.gu.orm.entity.CuResS_;
import com.xukaiqiang.gu.orm.entity.CuSyC_;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuResSRepository extends JpaRepository<CuResS, String>,
		JpaSpecificationExecutor<CuResS> {

	public static class Executor {
		private CuResSRepository repository;

		public Executor(CuResSRepository repository) {
			this.repository = repository;
		}

		public Page<CuResS> findAll(final CuResSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuResS>() {
				@Override
				public Predicate toPredicate(Root<CuResS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuResS_.laUpDt)),cb.asc(root.get(CuResS_.crDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(

								like(cb, root.get(CuResS_.resUrlCa), filter.getQueryAllParamString()),
								like(cb, root.join(CuResS_.cusyc, JoinType.LEFT)
										.get(CuSyC_.syCd), filter.getQueryAllParamString()),
								like(cb, root.get(CuResS_.resNa), filter.getQueryAllParamString())));
					} else {
					return cb.and(merge(
							ne(cb, root.get(CuResS_.resUrlCa),
									filter.getResUrlCa()),
							eq(cb, root.get(CuResS_.resNa), filter.getResNa()),
							eq(cb,
									root.join(CuResS_.cusyc, JoinType.LEFT)
											.get(CuSyC_.syCd), filter
											.getResSyCd())

							));
					}
				}
			}, pageable);
		}

		public List<CuResS> findAll(final CuResSFilterRequest filter) {
			return repository.findAll(new Specification<CuResS>() {
				@Override
				public Predicate toPredicate(Root<CuResS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuResS_.crDt)),cb.asc(root.get(CuResS_.crTm)));
					return cb.and(merge(eq(cb, root.get(CuResS_.resNa),
							filter.getResNa())
					// TODO

							));
				}
			});
		}

		public CuResS findOne(final CuResSFilterRequest filter) {
			return repository.findOne(new Specification<CuResS>() {
				@Override
				public Predicate toPredicate(Root<CuResS> root,
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

	List<CuResS> findAllByOrderByDispOrAsc();

	/**
	 * 通过上级资源编码查询
	 * 
	 * @param resNo
	 * @return
	 */
	List<CuResS> findByParentResNo(String resNo);

	/**
	 * 通过菜单名称查询
	 * 
	 * @param resNa
	 * @return
	 */
	CuResS findByResNa(String resNa);

	/**
	 * 通过菜单编号查询
	 * 
	 * @param resNo
	 * @return
	 */
	CuResS findByResNo(String resNo);

	/**
	 * 通过菜单图标编号查询
	 * 
	 * @param resNo
	 * @return
	 */
	List<CuResS> findBycuicosIconNo(String resIconNo);

	CuResS findTop1ByOrderByResNoDesc();

}
