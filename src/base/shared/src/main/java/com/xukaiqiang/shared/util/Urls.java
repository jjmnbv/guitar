package com.xukaiqiang.shared.util;

public abstract class Urls {

	/**
	 * 文件传输（字节）
	 */
	public static final String FILE_TRANSFER = "/fileTransfer/{bizType}/{originalFilename}";

	/**
	 * 文件上传（表单）
	 */
	public static final String FILE_UPLOAD = "/fileUpload/{bizType}";

	/**
	 * 文件下载（不带扩展名）
	 */
	public static final String FILE_DOWNLOAD = "/fileDownload/{bizType}/{name:[^\\.]+}";

	/**
	 * 文件下载（带扩展名）
	 */
	public static final String FILE_DOWNLOADX = "/fileDownload/{bizType}/{id}.{extension}";

}
