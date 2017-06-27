package com.xukaiqiang.shared.service.impl;

import java.io.File;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.xukaiqiang.shared.service.FileSystemService;
import com.xukaiqiang.shared.service.FileUploadService;

@Service
public class FileUploadServiceImpl implements FileUploadService {

	@Autowired
	private FileSystemService fileSystemService;

	@Override
	public boolean support(String bizType) {
		return bizType.startsWith("default");
	}

	@Override
	public String saveUploadedFile(String bizType, MultipartFile file) {
		UUID uuid = UUID.randomUUID();
		fileSystemService.save(file, uuid, bizType);

		return uuid.toString();
	}

	@Override
	public String saveUploadedFile(String bizType, String originalFilename, byte[] bytes) {
		UUID uuid = UUID.randomUUID();
		fileSystemService.save(bytes, originalFilename, uuid, bizType);

		return uuid.toString();
	}

	@Override
	public File findUploadedFile(String bizType, String name) {
		return fileSystemService.get(name, bizType);
	}

	@Override
	public String findUploadedOriginalFilename(String bizType, String name) {
		return name;
	}

	@Override
	public long saveUploadedFileForDate(String bizType, MultipartFile file) {
		long targetName = System.currentTimeMillis();
		fileSystemService.save(file, targetName, bizType);

		return targetName;
	}

}
