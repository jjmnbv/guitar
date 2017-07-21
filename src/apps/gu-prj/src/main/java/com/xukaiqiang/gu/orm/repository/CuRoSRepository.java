package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuRoSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuRoS;
import com.xukaiqiang.gu.orm.entity.CuRoS_;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuRoSRepository extends JpaRepository<CuRoS, String>,
		JpaSpecificationExecutor<CuRoS> {

	public static class Executor {
		private CuRoSRepository repository;

		public Executor(CuRoSRepository repository) {
			this.repository = repository;
		}

		public Page<CuRoS> findAll(final CuRoSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuRoS>() {
				@Override
				public Predicate toPredicate(Root<CuRoS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuRoS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(

								like(cb, root.get(CuRoS_.roNo), filter.getQueryAllParamString()),
								like(cb, root.get(CuRoS_.roNa), filter.getQueryAllParamString())));
					} else {
					return cb.and(merge(
							eq(cb, root.get(CuRoS_.roNo), filter.getRoNo()),
							like(cb, root.get(CuRoS_.roNa), filter.getRoNa()),
							eq(cb, root.get(CuRoS_.st), filter.getSt())

					   ));
					}
				}
			}, pageable);
		}

		public List<CuRoS> findAll(final CuRoSFilterRequest filter) {
			return repository.findAll(new Specification<CuRoS>() {
				@Override
				public Predicate toPredicate(Root<CuRoS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuRoS_.laUpDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(

								like(cb, root.get(CuRoS_.roNo), filter.getQueryAllParamString()),
								like(cb, root.get(CuRoS_.roNa), filter.getQueryAllParamString())));
					} else {
					return cb.and(merge(

					eq(cb, root.get(CuRoS_.roNo), filter.getRoNo()),
							eq(cb, root.get(CuRoS_.roNa), filter.getRoNa()),
							eq(cb, root.get(CuRoS_.st), filter.getSt())

						));
					}
				}
			});
		}

		public CuRoS findOne(final CuRoSFilterRequest filter) {
			return repository.findOne(new Specification<CuRoS>() {
				@Override
				public Predicate toPredicate(Root<CuRoS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					eq(cb, root.get(CuRoS_.roNa), filter.getRoNa())

					));
				}
			});
		}

	}

	/**
	 * 通过主键查询名称
	 * 
	 * @param roNo
	 * @return
	 */
	public CuRoS findByRoNo(String roNo);

	/**
	 * 通过名称查询名称
	 * 
	 * @param roNa
	 * @return
	 */
	public CuRoS findByRoNa(String roNa);

	/**
	 * 获取最大id
	 * 
	 * @return
	 */
	public CuRoS findTop1ByOrderByRoNoDesc();

}
