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

import com.xukaiqiang.gb.orm.entity.Job;
import com.xukaiqiang.gb.orm.protocol.JobFilterRequest;

public interface JobRepository extends JpaRepository<Job, Integer>, JpaSpecificationExecutor<Job> {

	public static class Executor {
		private JobRepository repository;

		public Executor(JobRepository repository) {
			this.repository = repository;
		}

		public Page<Job> findAll(final JobFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<Job>() {
				@Override
				public Predicate toPredicate(Root<Job> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<Job> findAll(final JobFilterRequest filter) {
			return repository.findAll(new Specification<Job>() {
				@Override
				public Predicate toPredicate(Root<Job> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public Job findOne(final JobFilterRequest filter) {
			return repository.findOne(new Specification<Job>() {
				@Override
				public Predicate toPredicate(Root<Job> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
