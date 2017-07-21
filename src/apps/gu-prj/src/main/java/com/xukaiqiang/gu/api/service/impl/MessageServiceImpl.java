package com.xukaiqiang.gu.api.service.impl;

import static com.xukaiqiang.shared.util.CopierUtils.convert;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.xukaiqiang.gu.api.protocol.FindCuBrSToCuUsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuBrSToCuUsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuBrsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuBrsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMaYnsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMaYnsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuBrSRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuBrSResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuUsRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnCuUsResponse;
import com.xukaiqiang.gu.api.protocol.FindCuMnYnRequest;
import com.xukaiqiang.gu.api.protocol.FindCuMnYnResponse;
import com.xukaiqiang.gu.api.protocol.FindCuPostSRequest;
import com.xukaiqiang.gu.api.protocol.FindCuPostSResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsByIdRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsByIdResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByLoginNaRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByLoginNaResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByPostNoRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsSByPostNoResponse;
import com.xukaiqiang.gu.api.protocol.FindCuUsToWorkOrderRequest;
import com.xukaiqiang.gu.api.protocol.FindCuUsToWorkOrderResponse;
import com.xukaiqiang.gu.api.protocol.FindMnCuUsCuBrSRequest;
import com.xukaiqiang.gu.api.protocol.FindMnCuUsCuBrSResponse;
import com.xukaiqiang.gu.api.protocol.FindTopCuBrsRequest;
import com.xukaiqiang.gu.api.protocol.FindTopCuBrsResponse;
import com.xukaiqiang.gu.api.service.MessageService;
import com.xukaiqiang.gu.mgt.protocol.CuBrSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuPostSFilterRequest;
import com.xukaiqiang.gu.mgt.protocol.CuUsSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuBrSService;
import com.xukaiqiang.gu.mgt.service.CuPostSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuBrS;
import com.xukaiqiang.gu.orm.entity.CuPostS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository;
import com.xukaiqiang.gu.orm.repository.CuUsSRepository.Executor;
import com.xukaiqiang.gu.orm.util.SateEnum;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.PageService;

@Service
public class MessageServiceImpl implements MessageService {
	@Autowired
	private CuBrSService cuBrSService;
	@Autowired
	private CuUsSService cuUsSService;
	@Autowired
	private CuPostSService cuPostSService;
	@Autowired
	private CuUsSRepository cuussRepos;
	@Autowired
	private PageService pageService;

	@Override
	public FindCuBrsResponse findCuBrs(FindCuBrsRequest request) {
		CuBrSFilterRequest filter = convert(request, CuBrSFilterRequest.class);
		FindCuBrsResponse response = new FindCuBrsResponse();
		String brNo = filter.getBrNo();
		List<CuBrS> findCuBrs = cuBrSService.findCuBrs(brNo);
		response.setContent(convert(findCuBrs, FindCuBrsResponse.Content.class));
		return response;
	}

	@Override
	public FindCuMaYnsResponse findCuMaYns(FindCuMaYnsRequest request) {
		CuUsSFilterRequest filter = convert(request, CuUsSFilterRequest.class);
		FindCuMaYnsResponse response = new FindCuMaYnsResponse();
		String brNo = filter.getBrNo();
		List<CuUsS> findCuMaYns = cuUsSService.findByBrNo(brNo);
		response.setContent(convert(findCuMaYns, FindCuMaYnsResponse.Content.class));
		return response;
	}

	@Override
	public FindCuPostSResponse findCuPostS(FindCuPostSRequest request) {
		FindCuPostSResponse response = new FindCuPostSResponse();
		CuPostSFilterRequest filterRequest = new CuPostSFilterRequest();
		filterRequest.setSt(SateEnum.JH.name());
		if (request != null) {
			filterRequest.setAuPostYn(request.getAuPostYn());
		}
		List<CuPostS> findCuMaYns = cuPostSService.findCuPostSs(filterRequest);
		response.setContent(convert(findCuMaYns, FindCuPostSResponse.Content.class));
		return response;
	}

	@Override
	public FindCuUsSByPostNoResponse findCuUsSByPostNo(FindCuUsSByPostNoRequest request) {
		CuPostSFilterRequest filter = convert(request, CuPostSFilterRequest.class);
		FindCuUsSByPostNoResponse response = new FindCuUsSByPostNoResponse();
		String postNo = filter.getPostNo();
		List<CuUsS> cuuss = cuUsSService.findBypostNo(postNo);
		response.setContent(convert(cuuss, FindCuUsSByPostNoResponse.Content.class));
		return response;
	}

	@Override
	public FindCuUsSByLoginNaResponse findCuUsSByLoginNa(FindCuUsSByLoginNaRequest request) {
		CuUsSFilterRequest filter = convert(request, CuUsSFilterRequest.class);
		FindCuUsSByLoginNaResponse response = new FindCuUsSByLoginNaResponse();
		String loginNa = filter.getLoginNa();
		CuUsS cuus = cuUsSService.findByloginNa(loginNa);
		List<CuUsS> cuuss = new ArrayList<>();
		if (cuus != null) {
			cuuss.add(cuus);
		}
		response.setContent(convert(cuuss, FindCuUsSByLoginNaResponse.Content.class));
		return response;
	}

	@Override
	public FindTopCuBrsResponse findTopCuBrs(FindTopCuBrsRequest request) {
		FindTopCuBrsResponse response = new FindTopCuBrsResponse();
		List<CuBrS> findTopCuBrs = cuBrSService.checkCuBrSList();
		response.setContent(convert(findTopCuBrs, FindTopCuBrsResponse.Content.class));
		return response;
	}

	@Override
	public FindCuBrSToCuUsResponse findCuBrSToCuUs(FindCuBrSToCuUsRequest request) {
		CuUsSFilterRequest filter = convert(request, CuUsSFilterRequest.class);
		filter.setSt(SateEnum.JH.name());
		FindCuBrSToCuUsResponse response = new FindCuBrSToCuUsResponse();
		List<CuUsS> findAll = new Executor(cuussRepos).findAll(filter);
		response.setContent(convert(findAll, FindCuBrSToCuUsResponse.Content.class));
		return response;
	}

	@Override
	public FindMnCuUsCuBrSResponse findMnCuUsCuBrS(FindMnCuUsCuBrSRequest request) {
		FindMnCuUsCuBrSResponse response = new FindMnCuUsCuBrSResponse();
		CuUsSFilterRequest filter = new CuUsSFilterRequest();
		filter.setSt(SateEnum.JH.name());
		filter.setCuMaYn(YnState.CODE_YN_YIN_Y);
		List<CuUsS> findAll = new Executor(cuussRepos).findAll(filter);
		Set<CuBrS> set = new HashSet<CuBrS>();
		for (CuUsS cuUsS : findAll) {
			CuBrS cubrs = cuUsS.getCubrs();
			if (cubrs != null && SateEnum.JH.name().equals(cubrs.getSt())) {
				set.add(cubrs);
			}
		}
		ArrayList<CuBrS> list = new ArrayList<CuBrS>();
		list.addAll(set);
		response.setContent(convert(list, FindMnCuUsCuBrSResponse.Content.class));
		return response;
	}

	@Override
	public FindCuMnCuUsResponse findCuMnCuUs(FindCuMnCuUsRequest request) {
		FindCuMnCuUsResponse response = new FindCuMnCuUsResponse();
		CuUsSFilterRequest filter = new CuUsSFilterRequest();
		filter.setSt(SateEnum.JH.name());
		filter.setCuMaYn(YnState.CODE_YN_YIN_Y);
		List<CuUsS> findAll = new Executor(cuussRepos).findAll(filter);
		response.setContent(convert(findAll, FindCuMnCuUsResponse.Content.class));
		return response;
	}

	@Override
	public FindCuMnCuBrSResponse findCuMnCuBrS(FindCuMnCuBrSRequest request) {
		FindCuMnCuBrSResponse response = new FindCuMnCuBrSResponse();
		CuUsS cuUsS = cuussRepos.findByLoginNa(request.getLoginNa());
		CuBrS cubrs = cuUsS.getCubrs();
		ArrayList<CuBrS> list = new ArrayList<CuBrS>();
		if (cubrs != null) {
			cubrs.setConTelNo(cuUsS.getMoNo());
			list.add(cubrs);
		}
		response.setContent(convert(list, FindCuMnCuBrSResponse.Content.class));
		return response;
	}

	@Override
	public FindCuMnYnResponse findCuMnYn(FindCuMnYnRequest request) {
		FindCuMnYnResponse response = new FindCuMnYnResponse();
		CuUsS cuUsS = cuussRepos.findOne(request.getId());
		response.setCuMaYn(cuUsS.getCuMaYn());
		return response;
	}

	@Override
	public FindCuUsByIdResponse findCuUsById(FindCuUsByIdRequest request) {
		CuUsS cuUsS = cuussRepos.findOne(request.getId());
		if (cuUsS != null) {
			FindCuUsByIdResponse response = convert(cuUsS, FindCuUsByIdResponse.class);
			return response;
		}
		return null;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public FindCuUsToWorkOrderResponse findCuUsToWorkOrder(FindCuUsToWorkOrderRequest request) {
		FindCuUsToWorkOrderResponse response = new FindCuUsToWorkOrderResponse();
		String postNo = request.getPostNo();
		CuUsSFilterRequest filter = convert(request, CuUsSFilterRequest.class);
		filter.setSt(SateEnum.JH.name());
		// Page<CuUsS> cuUsSPage =
		// cuUsSService.findCuUsSPage(request.getPageNumber(),
		// request.getPageSize(),
		// filter);
		List<CuUsS> findAll = new Executor(cuussRepos).findAll(filter);
		Iterator<CuUsS> iterator = findAll.iterator();
		ArrayList<CuUsS> cuusList = new ArrayList<CuUsS>();
		while (iterator.hasNext()) {
			CuUsS cuUsS = iterator.next();
			Set<CuPostS> postSet = cuUsS.getPostSet();
			if (!StringUtils.isEmpty(postNo)) {
				String postNa = null;
				int i = 0;
				boolean trag = false;
				for (CuPostS cuPostS : postSet) {
					postNa = (postNa == null ? "" : postNa + ",") + cuPostS.getPostNa();
					if (postNo.equals(cuPostS.getPostNo())) {
						trag = true;
					}
					if (++i == postSet.size() && trag) {
						cuUsS.setPostNa(postNa);
						cuusList.add(cuUsS);
					}
				}
			} else {
				String postNa = null;
				int i = 0;
				for (CuPostS cuPostS : postSet) {
					postNa = (postNa == null ? "" : postNa + ",") + cuPostS.getPostNa();
					if (++i == postSet.size()) {
						cuUsS.setPostNa(postNa);
						cuusList.add(cuUsS);
					}
				}
			}
		}
		Pageable pageable = pageService.getPageable(request.getPageNumber(), null, null);
		PageImpl pageImpl = new PageImpl(cuusList, pageable, Integer.parseInt(cuusList.size() + ""));
		response.setContent(convert(pageImpl.getContent(), FindCuUsToWorkOrderResponse.Content.class));
		response.setTotalPages(cuusList.size() % pageable.getPageSize() == 0
				? (cuusList.size() / pageable.getPageSize()) : (cuusList.size() / pageable.getPageSize()) + 1);
		response.setTotalElements((cuusList.size()));
		response.setNumber(request.getPageNumber());
		response.setSize(pageable.getPageSize());
		return response;
	}

}
