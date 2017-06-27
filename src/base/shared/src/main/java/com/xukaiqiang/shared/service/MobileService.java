package com.xukaiqiang.shared.service;

import com.xukaiqiang.shared.protocol.MobileRequest;
import com.xukaiqiang.shared.protocol.MobileResponse;

public interface MobileService {

	public <REQUEST extends MobileRequest, RESPONSE extends MobileResponse> RESPONSE serviceForAuthcForm(
			String loginName, String password, REQUEST request, RESPONSE response);

	public <REQUEST extends MobileRequest, RESPONSE extends MobileResponse> RESPONSE serviceForAuthc(REQUEST request,
			RESPONSE response);

	public void bindSubject(String sessionId);

	public String getLoginName();

}
