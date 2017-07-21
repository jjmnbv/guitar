package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuPostS;
import com.xukaiqiang.gu.orm.entity.CuPostS_;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuPostSRepository extends JpaRepository<CuPostS, String>,
		JpaSpecificationExecutor<CuPostS> {

	public static class Executor {
		private CuPostSRepository repository;

		public Executor(CuPostSRepository repository) {
			this.repository = repository;
		}

		public Page<CuPostS> findAll(final CuPostSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuPostS>() {
				@Override
				public Predicate toPredicate(Root<CuPostS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuPostS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(

								like(cb, root.get(CuPostS_.postNa), filter.getQueryAllParamString()),
								like(cb, root.get(CuPostS_.postNo), filter.getQueryAllParamString())));
					} else {
					return cb.and(merge(
							like(cb, root.get(CuPostS_.postNa),
									filter.getPostNa()),
							eq(cb, root.get(CuPostS_.postNo),
									filter.getPostNo()),
							eq(cb, root.get(CuPostS_.auPostYn),
									filter.getAuPostYn()),
							eq(cb, root.get(CuPostS_.st), filter.getSt())));
					}
				}
			}, pageable);
		}

		public List<CuPostS> findAll(final CuPostSFilterRequest filter) {
			return repository.findAll(new Specification<CuPostS>() {
				@Override
				public Predicate toPredicate(Root<CuPostS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuPostS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(

								like(cb, root.get(CuPostS_.postNa), filter.getQueryAllParamString()),
								like(cb, root.get(CuPostS_.postNo), filter.getQueryAllParamString())));
					} else {
					return cb.and(merge(

							eq(cb, root.get(CuPostS_.postNa),
									filter.getPostNa()),
							eq(cb, root.get(CuPostS_.postNo),
									filter.getPostNo()),
							eq(cb, root.get(CuPostS_.auPostYn),
									filter.getAuPostYn()),
							eq(cb, root.get(CuPostS_.st), filter.getSt())

					));
					}
				}
			});
		}

		public CuPostS findOne(final CuPostSFilterRequest filter) {
			return repository.findOne(new Specification<CuPostS>() {
				@Override
				public Predicate toPredicate(Root<CuPostS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					eq(cb, root.get(CuPostS_.postNa), filter.getPostNa())));
				}
			});
		}

	}

	/**
	 * 通过主键查找岗位的名称
	 * 
	 * @param postNo
	 * @return
	 */

	public CuPostS findByPostNo(String postNo);

	/**
	 * 通过名称查找岗位的名称
	 * 
	 * @param postNa
	 * @return
	 */
	public CuPostS findBypostNa(String postNa);

	/**
	 * 获取最大id
	 * 
	 * @return
	 */
	public CuPostS findTop1ByOrderByPostNoDesc();

}
