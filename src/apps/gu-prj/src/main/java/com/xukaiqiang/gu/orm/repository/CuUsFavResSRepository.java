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

import com.xukaiqiang.gu.mgt.protocol.CuUsFavResSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuUsFavResS;
import com.xukaiqiang.gu.orm.entity.CuUsFavResS_;
import com.xukaiqiang.gu.orm.entity.id.CuUsFavResSId;
import com.xukaiqiang.gu.orm.entity.id.CuUsFavResSId_;

public interface CuUsFavResSRepository extends JpaRepository<CuUsFavResS, CuUsFavResSId>, JpaSpecificationExecutor<CuUsFavResS> {

	public static class Executor {
		private CuUsFavResSRepository repository;

		public Executor(CuUsFavResSRepository repository) {
			this.repository = repository;
		}

		public Page<CuUsFavResS> findAll(final CuUsFavResSFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<CuUsFavResS>() {
				@Override
				public Predicate toPredicate(Root<CuUsFavResS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuUsFavResS_.crDt)),cb.asc(root.get(CuUsFavResS_.crTm)));
					return cb.and(merge(

							//TODO
							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.usId), filter.getUsId()),
							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.resNo), filter.getResNo())

					));
				}
			}, pageable);
		}

		public List<CuUsFavResS> findAll(final CuUsFavResSFilterRequest filter) {
			return repository.findAll(new Specification<CuUsFavResS>() {
				@Override
				public Predicate toPredicate(Root<CuUsFavResS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}
					query.orderBy(cb.asc(root.get(CuUsFavResS_.crDt)),cb.asc(root.get(CuUsFavResS_.crTm)));
					return cb.and(merge(

							//TODO
							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.usId), filter.getUsId()),
							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.resNo), filter.getResNo())

					));
				}
			});
		}

		public CuUsFavResS findOne(final CuUsFavResSFilterRequest filter) {
			return repository.findOne(new Specification<CuUsFavResS>() {
				@Override
				public Predicate toPredicate(Root<CuUsFavResS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO
							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.usId), filter.getUsId()),
							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.resNo), filter.getResNo())

					));
				}
			});
		}

		public CuUsFavResS findOne(final Long usId, final String resNo) {
			return repository.findOne(new Specification<CuUsFavResS>() {
				@Override
				public Predicate toPredicate(Root<CuUsFavResS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					return cb.and(merge(

							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.usId), usId),
							eq(cb, root.get(CuUsFavResS_.cuUsFavResSId).get(CuUsFavResSId_.resNo), resNo)

					));
				}
			});
		}

	}

}
