package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuUsPostSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsPostS;
import com.xukaiqiang.gu.orm.entity.CuUsPostS_;
import com.xukaiqiang.gu.orm.entity.id.CuUPostSId;
import com.xukaiqiang.gu.orm.entity.id.CuUPostSId_;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuUsPostSRepository extends JpaRepository<CuUsPostS, Long>,
		JpaSpecificationExecutor<CuUsPostS> {

	public static class Executor {
		private CuUsPostSRepository repository;

		public Executor(CuUsPostSRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsPostS> findAll(final CuUsPostSFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<CuUsPostS>() {
				@Override
				public Predicate toPredicate(Root<CuUsPostS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					));
				}
			}, pageable);
		}

		public List<CuUsPostS> findAll(final CuUsPostSFilterRequest filter) {
			return repository.findAll(new Specification<CuUsPostS>() {
				@Override
				public Predicate toPredicate(Root<CuUsPostS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(
							eq(cb,
									root.get(CuUsPostS_.id).get(
											CuUPostSId_.postNo),
									filter.getPostNo()),
							eq(cb, root.get(CuUsPostS_.id)
									.get(CuUPostSId_.usId), filter.getUsId())

					));
				}
			});
		}

		public CuUsPostS findOne(final CuUsPostSFilterRequest filter) {
			return repository.findOne(new Specification<CuUsPostS>() {
				@Override
				public Predicate toPredicate(Root<CuUsPostS> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							eq(cb,
									root.get(CuUsPostS_.id).get(
											CuUPostSId_.postNo),
									filter.getPostNo()),
							eq(cb, root.get(CuUsPostS_.id)
									.get(CuUPostSId_.usId), filter.getUsId())));
				}
			});
		}

	}

	/**
	 * 通过联合主键查询
	 * 
	 * @param postSId
	 * @return
	 */
	CuUsPostS findById(CuUPostSId cuUPostSId);

	/**
	 * 通过用户id查询
	 * 
	 * @return
	 */
	List<CuUsPostS> findByIdUsId(long id);

	/**
	 * 通过岗位id查询
	 * 
	 * @return
	 */
	List<CuUsPostS> findByIdPostNo(String id);

}
