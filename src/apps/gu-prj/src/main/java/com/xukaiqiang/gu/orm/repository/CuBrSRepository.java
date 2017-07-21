package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuBrS;
import com.xukaiqiang.gu.orm.entity.CuBrS_;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuBrSRepository extends JpaRepository<CuBrS, String>,
		JpaSpecificationExecutor<CuBrS> {

	public static class Executor {
		private CuBrSRepository repository;

		public Executor(CuBrSRepository repository) {
			this.repository = repository;
		}

		public Page<CuBrS> findAll(final CuBrSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuBrS>() {
				@Override
				public Predicate toPredicate(Root<CuBrS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuBrS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(
								like(cb, root.get(CuBrS_.brNa), filter.getQueryAllParamString()),
								like(cb, root.get(CuBrS_.brNo), filter.getQueryAllParamString()),
								like(cb, root.get(CuBrS_.st), filter.getQueryAllParamString())));
					} else{
					return cb.and(merge(

					eq(cb, root.get(CuBrS_.brLevQt), filter.getBrLevQt()),
							like(cb, root.get(CuBrS_.brNa), filter.getBrNa()),
							eq(cb, root.get(CuBrS_.brNo), filter.getBrNo()),
							eq(cb, root.get(CuBrS_.st), filter.getSt())));
				   }
				}
			}, pageable);
		}

		public List<CuBrS> findAll(final CuBrSFilterRequest filter) {
			return repository.findAll(new Specification<CuBrS>() {
				@Override
				public Predicate toPredicate(Root<CuBrS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuBrS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(
								like(cb, root.get(CuBrS_.brNa), filter.getQueryAllParamString()),
								like(cb, root.get(CuBrS_.brNo), filter.getQueryAllParamString()),
								like(cb, root.get(CuBrS_.st), filter.getQueryAllParamString())));
					} else{
					return cb.and(merge(

					eq(cb, root.get(CuBrS_.brLevQt), filter.getBrLevQt()),
							like(cb, root.get(CuBrS_.brNa), filter.getBrNa()),
							eq(cb, root.get(CuBrS_.brNo), filter.getBrNo()),
							eq(cb, root.get(CuBrS_.st), filter.getSt())));
				   }
				}
			});
		}

		public CuBrS findOne(final CuBrSFilterRequest filter) {
			return repository.findOne(new Specification<CuBrS>() {
				@Override
				public Predicate toPredicate(Root<CuBrS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					eq(cb, root.get(CuBrS_.brLevQt), filter.getBrLevQt()),
							eq(cb, root.get(CuBrS_.brNa), filter.getBrNa())

					));
				}
			});
		}

	}

	/**
	 * 通过主键查找机构的名称
	 * 
	 * @param brNo
	 * @return
	 */
	public CuBrS findByBrNo(String brNo);

	/**
	 * 通过机构的名称查找机构
	 * 
	 * @param brNa
	 * @return
	 */
	public CuBrS findByBrNa(String brNa);

	/**
	 * 获取最大id
	 * 
	 * @return
	 */
	public CuBrS findTop1ByOrderByBrNoDesc();

}
