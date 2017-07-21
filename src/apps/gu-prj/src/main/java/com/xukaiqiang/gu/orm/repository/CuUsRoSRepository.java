package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuUsRoSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsRoS;
import com.xukaiqiang.gu.orm.entity.CuUsRoS_;
import com.xukaiqiang.gu.orm.entity.id.CuUsRoSId;
import com.xukaiqiang.gu.orm.entity.id.CuUsRoSId_;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuUsRoSRepository extends JpaRepository<CuUsRoS, CuUsRoSId>,
		JpaSpecificationExecutor<CuUsRoS> {

	public static class Executor {
		private CuUsRoSRepository repository;

		public Executor(CuUsRoSRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsRoS> findAll(final CuUsRoSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuUsRoS>() {
				@Override
				public Predicate toPredicate(Root<CuUsRoS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO
							eq(cb,
									root.get(CuUsRoS_.cuUsRoSId).get(
											CuUsRoSId_.usId), filter.getUsId())));
				}
			}, pageable);
		}

		public List<CuUsRoS> findAll(final CuUsRoSFilterRequest filter) {
			return repository.findAll(new Specification<CuUsRoS>() {
				@Override
				public Predicate toPredicate(Root<CuUsRoS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							// TODO
							eq(cb,
									root.get(CuUsRoS_.cuUsRoSId).get(
											CuUsRoSId_.usId), filter.getUsId()),
							eq(cb,
									root.get(CuUsRoS_.cuUsRoSId).get(
											CuUsRoSId_.roNo), filter.getRoNo())

					));
				}
			});
		}

		public CuUsRoS findOne(final CuUsRoSFilterRequest filter) {
			return repository.findOne(new Specification<CuUsRoS>() {
				@Override
				public Predicate toPredicate(Root<CuUsRoS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO
							eq(cb,
									root.get(CuUsRoS_.cuUsRoSId).get(
											CuUsRoSId_.usId), filter.getUsId())));
				}
			});
		}

		public CuUsRoS findOne(final Long usId, final String roNo) {
			return repository.findOne(new Specification<CuUsRoS>() {
				@Override
				public Predicate toPredicate(Root<CuUsRoS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					return cb.and(merge(

					eq(cb, root.get(CuUsRoS_.cuUsRoSId).get(CuUsRoSId_.usId),
							usId)));
				}
			});
		}

	}

	/**
	 * 通过id查询所有角色
	 * 
	 * @param id
	 * @return
	 */
	CuUsRoS findByCuUsRoSId(Long id);

	/**
	 * 通过用户id查询所有角色
	 * 
	 * @param id
	 * @return
	 */
	List<CuUsRoS> findByCuUsRoSIdUsId(Long id);

}
