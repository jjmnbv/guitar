package com.xukaiqiang.shared.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.Serializable;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.xukaiqiang.shared.service.FileUploadService;
import com.xukaiqiang.shared.util.HttpServletUtils;
import com.xukaiqiang.shared.util.Urls;

@Controller
public class FileUploadController {
	@Autowired
	private FileUploadService[] services;

	@RequestMapping(value = Urls.FILE_TRANSFER, method = RequestMethod.POST)
	@ResponseBody
	public String transfer(@PathVariable("bizType") String bizType,
			@PathVariable("originalFilename") String originalFilename, @RequestBody byte[] bytes) {
		if (StringUtils.isEmpty(bizType)) {
			return "";
		}

		FileUploadService service = getService(bizType);
		if (service == null) {
			return "";
		}

		return service.saveUploadedFile(bizType, originalFilename, bytes);
	}

	@RequestMapping(value = Urls.FILE_UPLOAD, method = RequestMethod.POST)
	@ResponseBody
	public Serializable upload(@PathVariable("bizType") String bizType, @RequestParam("file") MultipartFile file) {
		if (StringUtils.isEmpty(bizType)) {
			return "";
		}

		FileUploadService service = getService(bizType);
		if (service == null) {
			return "";
		}

		return service.saveUploadedFile(bizType, file);
	}

	@RequestMapping(value = Urls.FILE_DOWNLOADX, method = RequestMethod.GET)
	public void downloadx(@PathVariable("bizType") String bizType, @PathVariable("id") String id,
			@PathVariable("extension") String extension, HttpServletResponse response) throws IOException {
		download(bizType, id + "." + extension, response);
	}

	@RequestMapping(value = Urls.FILE_DOWNLOAD, method = RequestMethod.GET)
	public void download(@PathVariable("bizType") String bizType, @PathVariable("name") String name,
			HttpServletResponse response) throws IOException {
		if (StringUtils.isEmpty(bizType)) {
			return;
		}

		FileUploadService service = getService(bizType);
		if (service == null) {
			return;
		}

		File file = service.findUploadedFile(bizType, name);
		String originalFilename = service.findUploadedOriginalFilename(bizType, name);

		response.setContentLength((int) file.length());
		response.setContentType("application/octet-stream");
		HttpServletUtils.setContentDisposition(response, originalFilename);
		FileCopyUtils.copy(new FileInputStream(file), response.getOutputStream());
	}

	private FileUploadService getService(String bizType) {
		for (FileUploadService service : services) {
			if (service.support(bizType)) {
				return service;
			}
		}
		return null;
	}
}
