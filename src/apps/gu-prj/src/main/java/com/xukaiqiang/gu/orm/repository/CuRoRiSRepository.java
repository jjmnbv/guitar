package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuRoRiSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuRoRiS;
import com.xukaiqiang.gu.orm.entity.CuRoRiS_;
import com.xukaiqiang.gu.orm.entity.id.CuRoRiSId;
import com.xukaiqiang.gu.orm.entity.id.CuRoRiSId_;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuRoRiSRepository extends JpaRepository<CuRoRiS, CuRoRiSId>,
		JpaSpecificationExecutor<CuRoRiS> {

	public static class Executor {
		private CuRoRiSRepository repository;

		public Executor(CuRoRiSRepository repository) {
			this.repository = repository;
		}

		public Page<CuRoRiS> findAll(final CuRoRiSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuRoRiS>() {
				@Override
				public Predicate toPredicate(Root<CuRoRiS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							// TODO
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.roNo), filter.getRoNo()),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resNo),
									filter.getResNo()),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resActCd),
									filter.getResActCd())

					));
				}
			}, pageable);
		}

		public List<CuRoRiS> findAll(final CuRoRiSFilterRequest filter) {
			return repository.findAll(new Specification<CuRoRiS>() {
				@Override
				public Predicate toPredicate(Root<CuRoRiS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							// TODO
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.roNo), filter.getRoNo()),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resNo),
									filter.getResNo()),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resActCd),
									filter.getResActCd())

					));
				}
			});
		}

		public CuRoRiS findOne(final CuRoRiSFilterRequest filter) {
			return repository.findOne(new Specification<CuRoRiS>() {
				@Override
				public Predicate toPredicate(Root<CuRoRiS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							// TODO
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.roNo), filter.getRoNo()),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resNo),
									filter.getResNo()),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resActCd),
									filter.getResActCd())

					));
				}
			});
		}

		public CuRoRiS findOne(final String roNo, final String resNo,
				final String resActCd) {
			return repository.findOne(new Specification<CuRoRiS>() {
				@Override
				public Predicate toPredicate(Root<CuRoRiS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					return cb.and(merge(

							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.roNo), roNo),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resNo), resNo),
							eq(cb,
									root.get(CuRoRiS_.cuRoRiSId).get(
											CuRoRiSId_.resActCd), resActCd)

					));
				}
			});
		}

	}

	List<CuRoRiS> findByCuRoRiSIdResNoAndCuRoRiSIdRoNo(String string,
			String string2);

	/**
	 * 通过资源编号查询
	 * 
	 * @param resNo
	 * @return
	 */
	List<CuRoRiS> findByCuRoRiSIdResNo(String resNo);

	/**
	 * 通过角色编号查询角色权限
	 * 
	 * @param roNo
	 * @return
	 */
	List<CuRoRiS> findByCuRoRiSIdRoNo(String roNo);

	/**
	 * 通过资源编号和资源操作码查询角色权限
	 * 
	 * @param resNo
	 * @param resActCd
	 * @return
	 */
	List<CuRoRiS> findByCuRoRiSIdResNoAndCuRoRiSIdResActCd(String resNo,
			String resActCd);
	/**
	 * 获取角色所有菜单的访问权限
	 * @param codeCuresResactcd
	 * @return
	 */
	List<CuRoRiS> findByCuRoRiSIdResActCdAndCuRoRiSIdRoNo(String codeCuresResactcd,String roNo);

}
