package com.xukaiqiang.oauth2.orm.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import com.xukaiqiang.oauth2.orm.entity.OAuthClientInfo;

public interface OAuthClientInfoRepository extends Repository<OAuthClientInfo, Long> {

	public OAuthClientInfo findByClientId(String clientId);

	public List<OAuthClientInfo> findAll();

}
