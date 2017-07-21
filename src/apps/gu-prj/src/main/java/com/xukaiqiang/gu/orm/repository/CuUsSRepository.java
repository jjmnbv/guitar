package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuUsSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuBrS_;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.entity.CuUsS_;

import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuUsSRepository extends JpaRepository<CuUsS, Long>,
		JpaSpecificationExecutor<CuUsS> {

	public static class Executor {
		private CuUsSRepository repository;

		public Executor(CuUsSRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsS> findAll(final CuUsSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuUsS>() {
				@Override
				public Predicate toPredicate(Root<CuUsS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuUsS_.laUpDt)),cb.asc(root.get(CuUsS_.crDt)));
					if (StringUtils.isNotEmpty(filter.getQueryAllParamString())) {
						return cb.or(merge(

								like(cb, root.get(CuUsS_.loginNa), filter.getQueryAllParamString()),
								like(cb, root.get(CuUsS_.usNa), filter.getQueryAllParamString()),
								like(cb, root.get(CuUsS_.paNo), filter.getQueryAllParamString()),
								like(cb, root.get(CuUsS_.moNo), filter.getQueryAllParamString()),
								like(cb, root.join(CuUsS_.cubrs, JoinType.LEFT).get(CuBrS_.brNo), filter.getQueryAllParamString())));
					} else {
					return cb.and(merge(

							like(cb, root.get(CuUsS_.loginNa),filter.getLoginNa()),
							like(cb, root.get(CuUsS_.usNa), filter.getUsNa()),
							eq(cb, root.get(CuUsS_.paNo), filter.getPaNo()),
							eq(cb, root.get(CuUsS_.exeYn), filter.getExeYn()),
							eq(cb, root.get(CuUsS_.moNo), filter.getMoNo()),
							eq(cb, root.get(CuUsS_.st), filter.getSt()),
							eq(cb, root.join(CuUsS_.cubrs, JoinType.LEFT).get(CuBrS_.brNo), filter.getBrNo())
							));
					}
				}}, pageable);
		}

		public List<CuUsS> findAll(final CuUsSFilterRequest filter) {
			return repository.findAll(new Specification<CuUsS>() {
				@Override
				public Predicate toPredicate(Root<CuUsS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuUsS_.crDt)),cb.asc(root.get(CuUsS_.crTm)));
					return cb.and(merge(

							like(cb, root.get(CuUsS_.loginNa),filter.getLoginNa()),
							like(cb, root.get(CuUsS_.usNa), filter.getUsNa()),
							eq(cb, root.get(CuUsS_.paNo), filter.getPaNo()),
							eq(cb, root.get(CuUsS_.moNo), filter.getMoNo()),
							eq(cb, root.get(CuUsS_.st), filter.getSt()),
							eq(cb, root.get(CuUsS_.cuMaYn), filter.getCuMaYn()),
							eq(cb, root.join(CuUsS_.cubrs, JoinType.LEFT).get(
											CuBrS_.brNo), filter.getBrNo())));
				}
			});
		}

		public CuUsS findOne(final CuUsSFilterRequest filter) {
			return repository.findOne(new Specification<CuUsS>() {
				@Override
				public Predicate toPredicate(Root<CuUsS> root,
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

		public List<CuUsS> findCuFaExe(final CuUsSFilterRequest filter) {
			return repository.findAll(new Specification<CuUsS>() {

				@Override
				public Predicate toPredicate(Root<CuUsS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					return cb.and(merge(
							like(cb, root.get(CuUsS_.loginNa),filter.getLoginNa()),
							like(cb, root.get(CuUsS_.usNa), filter.getUsNa()),
							eq(cb, root.get(CuUsS_.moNo), filter.getMoNo()),
							eq(cb, root.get(CuUsS_.exeYn), filter.getExeYn()),
							eq(cb, root.get(CuUsS_.loginNa),
									filter.getLoginNa()),
							eq(cb, root.get(CuUsS_.st), filter.getSt()),
							eq(cb,
									root.join(CuUsS_.cubrs, JoinType.LEFT).get(
											CuBrS_.brNo), filter.getBrNo())));
				}

			});
		}

	}

	/**
	 * 通过主键查找用户的名称
	 * 
	 * @param id
	 * @return
	 */
	public CuUsS findById(long id);

	/**
	 * 通过登录名查找
	 * 
	 * @param username
	 * @return
	 */
	public CuUsS findByLoginNa(String username);

	/**
	 * 通过机构编号查找
	 * 
	 * @param username
	 * @return
	 */
	public List<CuUsS> findByCubrsBrNo(String username);

	/**
	 * 获取最大id
	 * 
	 * @return
	 */
	public CuUsS findTop1ByOrderByIdDesc();

}
