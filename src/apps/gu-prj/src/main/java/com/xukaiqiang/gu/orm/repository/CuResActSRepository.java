package com.xukaiqiang.gu.orm.repository;

import static com.xukaiqiang.shared.util.JpaSpecUtils.eq;
import static com.xukaiqiang.shared.util.JpaSpecUtils.merge;

import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import com.xukaiqiang.gu.mgt.protocol.CuResActSFilterRequest;
import com.xukaiqiang.gu.orm.entity.CuResActS;
import com.xukaiqiang.gu.orm.entity.CuResActS_;
import com.xukaiqiang.gu.orm.entity.id.CuResActSId;
import com.xukaiqiang.gu.orm.entity.id.CuResActSId_;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CuResActSRepository extends JpaRepository<CuResActS, CuResActSId>, JpaSpecificationExecutor<CuResActS> {

	public static class Executor {
		private CuResActSRepository repository;

		public Executor(CuResActSRepository repository) {
			this.repository = repository;
		}

		public Page<CuResActS> findAll(final CuResActSFilterRequest filter, Pageable pageable) {
			return repository.findAll(new Specification<CuResActS>() {
				@Override
				public Predicate toPredicate(Root<CuResActS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO
							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.resNo), filter.getResNo()),
							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.suId), filter.getSuId())

					));
				}
			}, pageable);
		}

		public List<CuResActS> findAll(final CuResActSFilterRequest filter) {
			return repository.findAll(new Specification<CuResActS>() {
				@Override
				public Predicate toPredicate(Root<CuResActS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO
							eq(cb, root.get(CuResActS_.resActCd), filter.getResActCd()),
							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.resNo), filter.getResNo()),
							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.suId), filter.getSuId())

					));
				}
			});
		}

		public CuResActS findOne(final CuResActSFilterRequest filter) {
			return repository.findOne(new Specification<CuResActS>() {
				@Override
				public Predicate toPredicate(Root<CuResActS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					if (filter == null) {
						return cb.conjunction();
					}

					return cb.and(merge(

							//TODO
							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.resNo), filter.getResNo()),
							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.suId), filter.getSuId())

					));
				}
			});
		}

		public CuResActS findOne(final String resNo, final Short suId) {
			return repository.findOne(new Specification<CuResActS>() {
				@Override
				public Predicate toPredicate(Root<CuResActS> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
					return cb.and(merge(

							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.resNo), resNo),
							eq(cb, root.get(CuResActS_.cuResActSId).get(CuResActSId_.suId), suId)

					));
				}
			});
		}

	}
/**
 * 通过资源编号查询资源
 * @param resNo
 * @return
 */
	List<CuResActS> findByCuResActSIdResNo(String resNo);
	/**
	 * 查询最大的usid
	 * @return
	 */
   CuResActS findTop1ByOrderByCuResActSIdSuIdDesc();
   /**
	 * 查询最大的ResActCD
	 * @return
	 */
	CuResActS findTop1ByOrderByResActCdDesc();
	/**
	 * 通过资源编号和操作码查询唯一数据
	 * @param string
	 * @param string2
	 * @return
	 */
	CuResActS findByCuResActSIdResNoAndResActCd(String string, String string2);
	/**
	 * 通过资源编号和链接地址查询
	 * @param resNo
	 * @param url
	 * @return
	 */
	CuResActS findByCuResActSIdResNoAndUrl(String resNo, String url);
	/**
	 * 通过操作码查询
	 * @param codeCuresBasecd
	 * @return
	 */
	List<CuResActS> findByResActCd(String codeCuresBasecd);
	/**
	 * 通过资源编号和预授权查询
	 * @param resNo
	 * @param codeYnYinY
	 * @return
	 */
	List<CuResActS> findByCuResActSIdResNoAndDefRiYn(String resNo,
			String codeYnYinY);
	/**
	 * 通过url查询
	 * @param url
	 * @return
	 */
	CuResActS findByUrl(String url);

}
