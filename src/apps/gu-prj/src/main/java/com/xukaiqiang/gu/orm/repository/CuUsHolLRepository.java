package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.*;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.xukaiqiang.gu.mgt.protocol.CuUsHolLFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsHolL;
import com.xukaiqiang.gu.orm.entity.CuUsHolL_;

public interface CuUsHolLRepository extends JpaRepository<CuUsHolL, Long>, JpaSpecificationExecutor<CuUsHolL> {

	public static class Executor {
		private CuUsHolLRepository repository;

		public Executor(CuUsHolLRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsHolL> findAll(final CuUsHolLFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<CuUsHolL>() {
				@Override
				public Predicate toPredicate(Root<CuUsHolL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuUsHolL_.crDt)),cb.asc(root.get(CuUsHolL_.crDt)));
					return cb.and(merge(
							ne(cb, root.get(CuUsHolL_.holCd),filter.getHolCd())
							//TODO
					));
				}
			}, pageable);
		}

		public List<CuUsHolL> findAll(final CuUsHolLFilterRequest filter) {
			return repository.findAll(new Specification<CuUsHolL>() {
				@Override
				public Predicate toPredicate(Root<CuUsHolL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuUsHolL_.crDt)),cb.asc(root.get(CuUsHolL_.crDt)));
					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public CuUsHolL findOne(final CuUsHolLFilterRequest filter) {
			return repository.findOne(new Specification<CuUsHolL>() {
				@Override
				public Predicate toPredicate(Root<CuUsHolL> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

	}
/**
 * 通过用户编号查询最近的记录
 * @param id 
 * @return
 */
	CuUsHolL findTop1ByUsIdOrderByTrDesc(Long id);

}
