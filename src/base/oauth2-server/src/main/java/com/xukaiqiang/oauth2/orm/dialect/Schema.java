package com.xukaiqiang.oauth2.orm.dialect;

public abstract class Schema {
	/**
	 * 表名
	 */
	public static interface Tables {
		/**
		 * 统一认证客户端
		 */
		public static final String CLIENTINFO = "OAUTH_CLIENTINFO";
		/**
		 * 服务端通知消息
		 */
		public static final String NOTICEINFO = "SERVER_NOTICEINFO";
	}

}
