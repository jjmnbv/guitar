package com.xukaiqiang.oauth2.client.protocol;

import java.io.Serializable;

import com.xukaiqiang.oauth2.auth.util.NoticeType;

public class NoticeResponse implements Serializable {
	private static final long serialVersionUID = 1L;

	private NoticeType noticeType;

	public NoticeType getNoticeType() {
		return noticeType;
	}

	public void setNoticeType(NoticeType noticeType) {
		this.noticeType = noticeType;
	}

}
