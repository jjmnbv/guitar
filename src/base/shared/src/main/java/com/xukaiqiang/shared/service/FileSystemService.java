package com.xukaiqiang.shared.service;

import java.io.File;
import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;

public interface FileSystemService {

	public File get(String name, String targetDir);

	public File save(MultipartFile src, Serializable targetName, String targetDir);

	public File save(File src, String originalFilename, Serializable targetName, String targetDir);

	public File save(File src, String targetPath);

	public File save(byte[] bytes, String originalFilename, Serializable targetName, String targetDir);

}