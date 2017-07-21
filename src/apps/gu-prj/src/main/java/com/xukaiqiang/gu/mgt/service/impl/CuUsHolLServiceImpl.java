package com.xukaiqiang.gu.mgt.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import com.xukaiqiang.gu.mgt.protocol.CuUsHolLFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuUsHolLService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuUsHolL;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuUsHolLRepository;
import com.xukaiqiang.gu.orm.repository.CuUsHolLRepository.Executor;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository;
import com.xukaiqiang.gu.orm.util.CuUsHoLEnum;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

@Transactional(readOnly = true)
@Service
public class CuUsHolLServiceImpl implements CuUsHolLService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuUsHolLServiceImpl.class);

	@Autowired
	private CuUsHolLRepository cuushollRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private CuUsSRepository cuussRepos;
	@Autowired
	private CuUsSService cuUsSService;

	@Override
	public Page<CuUsHolL> findCuUsHolLPage(Integer pageNumber,
			Integer pageSize, CuUsHolLFilterRequest filter) {
		if(filter == null){
			filter=new CuUsHolLFilterRequest();
		}
		filter.setHolCd(CuUsHoLEnum.SB.name());
		return new Executor(cuushollRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuUsHolL> findCuUsHolLs(CuUsHolLFilterRequest filter) {
		return new Executor(cuushollRepos).findAll(filter);
	}

	@Override
	public CuUsHolL findCuUsHolL(Long tr) {
		if (ObjectUtils.isEmpty(tr)) {
			LOG.warn("tr is empty.");
			return null;
		}
		return cuushollRepos.findOne(tr);
	}

	@Transactional
	@Override
	public CuUsHolL createCuUsHolL(CuUsHolL cuusholl) {

		String dateRange = cuusholl.getRangeDate();
		// 截取日期范围
		String[] split = dateRange.split(" ~ ");
		// 填充休假开始日期
		cuusholl.setHolBeDt(split[0]);
		// 填充休假结束日期
		cuusholl.setHolEnDt(split[1]);
		// 设置用户ID
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		String loginNa = userMessage.getLoginNa();
		cuusholl.setUsId(id);
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
		String str1 = sdf1.format(rightNow.getTime());
		String tm = sdf2.format(rightNow.getTime());
		cuusholl.setCrDt(str1);
		cuusholl.setCrTm(tm);
		cuusholl.setEfDt(str1);
		// 暂定：申请请假流水
		long tr = System.nanoTime();
		cuusholl.setLaUpUsId(id);
		cuusholl.setLaUpDt(str1);
		cuusholl.setLoginNa(loginNa);
		// TODO:登录流水ID
		cuusholl.setLoginTrId(tr + "");
		return cuushollRepos.save(cuusholl);
	}

	@Transactional
	@Override
	public CuUsHolL updateCuUsHolL(CuUsHolL cuusholl) {
		if (cuusholl.getTr() == null) {
			LOG.warn("cuusholl.tr is null.");
			return null;
		}

		CuUsHolL target = cuushollRepos.findOne(cuusholl.getTr());
		if (target == null) {
			LOG.warn("target is null");
			return null;
		}
		Calendar rightNow = Calendar.getInstance();
		int hour = rightNow.get(Calendar.HOUR_OF_DAY);
		int minutes = rightNow.get(Calendar.MINUTE);
		int seconds = rightNow.get(Calendar.SECOND);
		String tm = hour + ":" + minutes + ":" + seconds;
		// 设置销假时间
		cuusholl.setWoTm(tm);
		CuUsS userMessage = cuUsSService.userMessage();
		Long id = userMessage.getId();
		CuUsS usS = cuussRepos.findOne(id);
		if (usS != null) {
			usS.setHolYn(YnState.CODE_YN_NUMBER_Y);
			cuussRepos.save(usS);
		}
		cuusholl.setHolCd(CuUsHoLEnum.SB.name());
		return cuushollRepos.save(cuusholl);
	}

	@Transactional
	@Override
	public void removeCuUsHolL(Long tr) {
		if (ObjectUtils.isEmpty(tr)) {
			LOG.warn("tr is empty.");
			return;
		}

		CuUsHolL cuusholl = cuushollRepos.findOne(tr);
		if (cuusholl == null) {
			LOG.warn("cuusholl is null.");
			return;
		}
		cuushollRepos.delete(cuusholl);
	}

	@Override
	public CuUsHolL date() {
		CuUsHolL cuUsHolL = new CuUsHolL();
		Calendar rightNow = Calendar.getInstance();
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
		String str1 = sdf1.format(rightNow.getTime());
		cuUsHolL.setWoDt(str1);
		return cuUsHolL;
	}

}
