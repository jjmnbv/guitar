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

import com.xukaiqiang.gb.orm.entity.Education;
import com.xukaiqiang.gb.orm.protocol.EducationFilterRequest;

public interface EducationRepository extends JpaRepository<Education, Integer>, JpaSpecificationExecutor<Education> {

	public static class Executor {
		private EducationRepository repository;

		public Executor(EducationRepository repository) {
			this.repository = repository;
		}

		public Page<Education> findAll(final EducationFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<Education>() {
				@Override
				public Predicate toPredicate(Root<Education> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<Education> findAll(final EducationFilterRequest filter) {
			return repository.findAll(new Specification<Education>() {
				@Override
				public Predicate toPredicate(Root<Education> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public Education findOne(final EducationFilterRequest filter) {
			return repository.findOne(new Specification<Education>() {
				@Override
				public Predicate toPredicate(Root<Education> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
