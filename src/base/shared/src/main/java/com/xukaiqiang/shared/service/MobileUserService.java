package com.xukaiqiang.shared.service;

import com.xukaiqiang.shared.entity.MobileUser;

public interface MobileUserService {

	MobileUser findByLoginName(String loginName);

}
