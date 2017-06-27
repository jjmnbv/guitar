package com.xukaiqiang.shared.service.impl;

import java.io.File;
import java.io.IOException;
import java.io.Serializable;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.google.common.io.Files;
import com.xukaiqiang.shared.SharedVars;
import com.xukaiqiang.shared.service.FileSystemService;

@Service
public class FileSystemServiceImpl implements FileSystemService {

	private static Logger LOG = LoggerFactory.getLogger(FileSystemServiceImpl.class);

	@Autowired
	private SharedVars appVars;

	@Override
	public File get(String name, String targetDir) {
		return getTargetFile(name, targetDir);
	}

	@Override
	public File save(MultipartFile src, Serializable targetName, String targetDir) {
		File target = getTargetFile(src.getOriginalFilename(), targetName, targetDir);
		try {
			Files.createParentDirs(target);
			src.transferTo(target);
			return target;
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			throw new RuntimeException(e);
		}
	}

	@Override
	public File save(File src, String originalFilename, Serializable targetName, String targetDir) {
		File target = getTargetFile(originalFilename, targetName, targetDir);

		return save(src, target);
	}

	@Override
	public File save(File src, String targetPath) {
		File target = getTargetPath(targetPath);
		return save(src, target);
	}

	@Override
	public File save(byte[] bytes, String originalFilename, Serializable targetName, String targetDir) {
		File target = getTargetFile(originalFilename, targetName, targetDir);
		return save(bytes, target);
	}

	private File save(byte[] bytes, File target) {
		try {
			Files.createParentDirs(target);
			FileCopyUtils.copy(bytes, target);
			return target;
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			throw new RuntimeException(e);
		}
	}

	private File save(File src, File target) {
		try {
			Files.createParentDirs(target);
			Files.copy(src, target);
			return target;
		} catch (IOException e) {
			LOG.error(e.getMessage(), e);
			throw new RuntimeException(e);
		}
	}

	private File getTargetFile(String originalFilename, Serializable targetName, String targetDir) {
		StringBuffer buf = new StringBuffer();
		buf.append(targetName);

		String extension = Files.getFileExtension(originalFilename);
		if (!StringUtils.isEmpty(extension)) {
			buf.append(".").append(extension);
		}

		return getTargetFile(buf.toString(), targetDir);
	}

	private File getTargetFile(String name, String targetDir) {
		return new File(getTargetPath(targetDir), name);
	}

	private File getTargetPath(String targetPath) {
		return new File(appVars.fileSystemRoot, targetPath);
	}

}
