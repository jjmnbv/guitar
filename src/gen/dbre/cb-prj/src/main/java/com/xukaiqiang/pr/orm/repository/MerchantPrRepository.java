package com.xukaiqiang.pr.orm.repository;

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

import com.xukaiqiang.pr.orm.entity.MerchantPr;
import com.xukaiqiang.pr.orm.protocol.MerchantPrFilterRequest;

public interface MerchantPrRepository extends JpaRepository<MerchantPr, Long>, JpaSpecificationExecutor<MerchantPr> {

	public static class Executor {
		private MerchantPrRepository repository;

		public Executor(MerchantPrRepository repository) {
			this.repository = repository;
		}

		public Page<MerchantPr> findAll(final MerchantPrFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<MerchantPr>() {
				@Override
				public Predicate toPredicate(Root<MerchantPr> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			}, pageable);
		}

		public List<MerchantPr> findAll(final MerchantPrFilterRequest filter) {
			return repository.findAll(new Specification<MerchantPr>() {
				@Override
				public Predicate toPredicate(Root<MerchantPr> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO

					));
				}
			});
		}

		public MerchantPr findOne(final MerchantPrFilterRequest filter) {
			return repository.findOne(new Specification<MerchantPr>() {
				@Override
				public Predicate toPredicate(Root<MerchantPr> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
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
