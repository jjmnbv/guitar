package com.xukaiqiang.gb.orm.repository;

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

import com.xukaiqiang.gb.orm.entity.Store;
import com.xukaiqiang.gb.orm.protocol.StoreFilterRequest;

public interface StoreRepository extends JpaRepository<Store, Integer>, JpaSpecificationExecutor<Store> {

	public static class Executor {
		private StoreRepository repository;

		public Executor(StoreRepository repository) {
			this.repository = repository;
		}

		public Page<Store> findAll(final StoreFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<Store>() {
				@Override
				public Predicate toPredicate(Root<Store> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<Store> findAll(final StoreFilterRequest filter) {
			return repository.findAll(new Specification<Store>() {
				@Override
				public Predicate toPredicate(Root<Store> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public Store findOne(final StoreFilterRequest filter) {
			return repository.findOne(new Specification<Store>() {
				@Override
				public Predicate toPredicate(Root<Store> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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

}
