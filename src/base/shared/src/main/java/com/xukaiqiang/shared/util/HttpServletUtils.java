package com.xukaiqiang.shared.util;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.StringUtils;

public abstract class HttpServletUtils {

	public static void writeJson(String json, HttpServletResponse response) {
		setJSONContentType(response);
		try {
			write(json, response.getWriter());
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	public static void writeText(String text, HttpServletResponse response) {
		setTEXTContentType(response);
		try {
			write(text, response.getWriter());
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	public static void setContentDisposition(HttpServletResponse response, String filename)
			throws UnsupportedEncodingException {
		String encodedFilename = URLEncoder.encode(filename, "UTF-8");
		response.setHeader("Content-Disposition",
				"attachment; filename=\"" + encodedFilename + "\"; filename*=utf-8''" + encodedFilename);
	}

	public static void setJSONContentType(HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
	}

	public static void setTEXTContentType(HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		response.setContentType(MediaType.TEXT_PLAIN_VALUE);
	}

	public static boolean isJSONRequest(HttpServletRequest request) {
		MediaType contentType = parseMediaType(request.getHeader(HttpHeaders.CONTENT_TYPE));
		if (contentType == null) {
			contentType = parseMediaType(request.getContentType());
		}

		if (MediaType.APPLICATION_JSON.equals(contentType) || MediaType.APPLICATION_JSON_UTF8.equals(contentType)) {
			return true;
		}

		return "XMLHttpRequest".equalsIgnoreCase(request.getHeader("X-Requested-With"));
	}

	private static MediaType parseMediaType(String mediaType) {
		if (!StringUtils.hasLength(mediaType)) {
			return null;
		}
		return MediaType.parseMediaType(mediaType);
	}

	private static void write(String text, PrintWriter out) {
		try {
			out.print(text);
			out.flush();
		} finally {
			out.close();
		}
	}

}
