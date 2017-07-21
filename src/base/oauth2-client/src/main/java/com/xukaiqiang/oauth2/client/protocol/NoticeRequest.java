package com.xukaiqiang.oauth2.client.protocol;

import java.io.Serializable;

public class NoticeRequest implements Serializable {
	private static final long serialVersionUID = 1L;

	private String clientId;
	private String noticeType;

	public NoticeRequest() {
		super();
	}

	public NoticeRequest(String clientId, String noticeType) {
		super();
		this.clientId = clientId;
		this.noticeType = noticeType;
	}

	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getNoticeType() {
		return noticeType;
	}

	public void setNoticeType(String noticeType) {
		this.noticeType = noticeType;
	}

}
