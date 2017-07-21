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

import com.xukaiqiang.gb.orm.entity.Contract;
import com.xukaiqiang.gb.orm.protocol.ContractFilterRequest;

public interface ContractRepository extends JpaRepository<Contract, Integer>, JpaSpecificationExecutor<Contract> {

	public static class Executor {
		private ContractRepository repository;

		public Executor(ContractRepository repository) {
			this.repository = repository;
		}

		public Page<Contract> findAll(final ContractFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<Contract>() {
				@Override
				public Predicate toPredicate(Root<Contract> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<Contract> findAll(final ContractFilterRequest filter) {
			return repository.findAll(new Specification<Contract>() {
				@Override
				public Predicate toPredicate(Root<Contract> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public Contract findOne(final ContractFilterRequest filter) {
			return repository.findOne(new Specification<Contract>() {
				@Override
				public Predicate toPredicate(Root<Contract> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
