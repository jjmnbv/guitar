package com.xukaiqiang.guitar.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

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

import com.xukaiqiang.guitar.orm.entity.User;
import com.xukaiqiang.guitar.orm.protocol.UserFilterRequest;

public interface UserRepository extends JpaRepository<User, Integer>, JpaSpecificationExecutor<User> {

	public static class Executor {
		private UserRepository repository;

		public Executor(UserRepository repository) {
			this.repository = repository;
		}

		public Page<User> findAll(final UserFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<User>() {
				@Override
				public Predicate toPredicate(Root<User> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

					));
				}
			}, pageable);
		}

		public List<User> findAll(final UserFilterRequest filter) {
			return repository.findAll(new Specification<User>() {
				@Override
				public Predicate toPredicate(Root<User> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

					));
				}
			});
		}

		public User findOne(final UserFilterRequest filter) {
			return repository.findOne(new Specification<User>() {
				@Override
				public Predicate toPredicate(Root<User> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

					// TODO

					));
				}
			});
		}

	}

}
