package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.like;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.DictionaryFilterRequest;
import com.xukaiqiang.gu.orm.entity.Dictionary;
import com.xukaiqiang.gu.orm.entity.Dictionary_;
import com.xukaiqiang.gu.orm.entity.id.DictionaryId;
import com.xukaiqiang.gu.orm.entity.id.DictionaryId_;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DictionaryRepository extends
		JpaRepository<Dictionary, DictionaryId>,
		JpaSpecificationExecutor<Dictionary> {

	public static class Executor {
		private DictionaryRepository repository;

		public Executor(DictionaryRepository repository) {
			this.repository = repository;
		}

		public List<Dictionary> findAll(final DictionaryFilterRequest filter) {
			return repository.findAll(new Specification<Dictionary>() {
				@Override
				public Predicate toPredicate(Root<Dictionary> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.id), filter.getId()),
							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.code),
									filter.getCode()),
							like(cb, root.get(Dictionary_.name),
									filter.getName()),
							eq(cb, root.get(Dictionary_.status),
									filter.getStatus()),
							eq(cb, root.get(Dictionary_.ciCode),
									filter.getCiCode())

					));
				}
			},
					new Sort(new Order(Sort.Direction.DESC,
							Dictionary_.dispOrder.getName())));
		}

		public Page<Dictionary> findAll(final DictionaryFilterRequest filter,
				Pageable pageable) {
			return repository.findAll(new Specification<Dictionary>() {
				@Override
				public Predicate toPredicate(Root<Dictionary> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.id), filter.getId()),
							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.code),
									filter.getCode()),
							like(cb, root.get(Dictionary_.name),
									filter.getName()),
							eq(cb, root.get(Dictionary_.status),
									filter.getStatus()),
							eq(cb, root.get(Dictionary_.ciCode),
									filter.getCiCode())

					));
				}
			}, pageable);
		}

		public Dictionary findOne(final DictionaryFilterRequest filter) {
			return repository.findOne(new Specification<Dictionary>() {
				@Override
				public Predicate toPredicate(Root<Dictionary> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.id), filter.getId()),
							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.code),
									filter.getCode()),
							like(cb, root.get(Dictionary_.name),
									filter.getName()),
							eq(cb, root.get(Dictionary_.status),
									filter.getStatus()),
							eq(cb, root.get(Dictionary_.ciCode),
									filter.getCiCode())

					));
				}
			});
		}

		public Dictionary findOne(final Long id, final String code) {
			return repository.findOne(new Specification<Dictionary>() {
				@Override
				public Predicate toPredicate(Root<Dictionary> root,
						CriteriaQuery<?> query, CriteriaBuilder cb) {

					return cb.and(merge(

							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.id), id),
							eq(cb,
									root.get(Dictionary_.dictionaryId).get(
											DictionaryId_.code), code)

					));
				}
			});
		}

	}

}
