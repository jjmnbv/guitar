package com.xukaiqiang.gu.mgt.service.impl;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.UUID;

import com.xukaiqiang.gu.CuVars;
import com.xukaiqiang.gu.mgt.protocol.CuIconSFilterRequest;
import com.xukaiqiang.gu.mgt.service.CuIconSService;
import com.xukaiqiang.gu.mgt.service.CuUsSService;
import com.xukaiqiang.gu.orm.entity.CuIconS;
import com.xukaiqiang.gu.orm.entity.CuResS;
import com.xukaiqiang.gu.orm.entity.CuUsS;
import com.xukaiqiang.gu.orm.repository.CuIconSRepository;
import com.xukaiqiang.gu.orm.repository.CuIconSRepository.Executor;
import com.xukaiqiang.gu.orm.repository.CuResSRepository;
import com.xukaiqiang.gu.orm.util.YnState;
import com.xukaiqiang.shared.service.FileSystemService;
import com.xukaiqiang.shared.service.FileUploadService;
import com.xukaiqiang.shared.service.PageService;
import com.xukaiqiang.shared.util.ParameterException;

import org.apache.commons.collections.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

@Transactional(readOnly = true)
@Service
public class CuIconSServiceImpl implements CuIconSService {
	private static final Logger LOG = LoggerFactory
			.getLogger(CuIconSServiceImpl.class);

	@Autowired
	private CuIconSRepository cuiconsRepos;
	@Autowired
	private PageService pageService;
	@Autowired
	private FileUploadService fileUp;
	@Autowired
	private FileSystemService fileSystemService;
	@Autowired
	private CuResSRepository curessRepos;
	@Autowired
	private CuUsSService cuUsSService;

	@Override
	public Page<CuIconS> findCuIconSPage(Integer pageNumber, Integer pageSize,
			CuIconSFilterRequest filter) {
		return new Executor(cuiconsRepos).findAll(filter,
				pageService.getPageable(pageNumber, pageSize, null));
	}

	@Override
	public List<CuIconS> findCuIconSs(CuIconSFilterRequest filter) {
		return new Executor(cuiconsRepos).findAll(filter);
	}

	@Override
	public CuIconS findCuIconS(String iconNo) {
		if (ObjectUtils.isEmpty(iconNo)) {
			LOG.warn("iconNo is empty.");
			return null;
		}
		return cuiconsRepos.findOne(iconNo);
	}

	@Transactional
	@Override
	public CuIconS createCuIconS(String bizType, MultipartFile file) {
		if (fileUp.support(bizType)) {
			UUID uuid = UUID.randomUUID();
			File files = fileSystemService.save(file, uuid, bizType);
			String name = files.getName();
			String path = files.getPath();
			CuIconS cuicons = new CuIconS();
			cuicons.setIconNo(nextId());
			cuicons.setIconNa(name);
			cuicons.setIconAdCa(path);

			Calendar rightNow = Calendar.getInstance();
			SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
			SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
			String str1 = sdf1.format(rightNow.getTime());
			String tm = sdf2.format(rightNow.getTime());
			cuicons.setCrDt(str1);
			cuicons.setCrTm(tm);
			cuicons.setLaUpDt(str1);
			CuUsS userMessage = cuUsSService.userMessage();
			Long id2 = userMessage.getId();
			cuicons.setLaUpUsId(id2);
			return cuiconsRepos.save(cuicons);
		}
		return null;
	}

	@Transactional
	@Override
	public CuIconS updateCuIconS(String bizType, MultipartFile file,
			String iconNo) {
		if (fileUp.support(bizType)) {
			UUID uuid = UUID.randomUUID();
			File files = fileSystemService.save(file, uuid, bizType);
			String name = files.getName();
			String path = files.getPath();
			CuIconS cuicons = cuiconsRepos.findOne(iconNo);
			// 删除原图标
			List<CuResS> findBycuicosIconNo = curessRepos
					.findBycuicosIconNo(iconNo);
			if (CollectionUtils.isEmpty(findBycuicosIconNo)) {
				String path2 = cuicons.getIconAdCa();
				File file2 = new File(path2);
				if (file2.isFile()) {
					file2.delete();
				}
			}
			// 变更新的图标信息
			cuicons.setIconNa(name);
			cuicons.setIconAdCa(path);

			Calendar rightNow = Calendar.getInstance();
			SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
			SimpleDateFormat sdf2 = new SimpleDateFormat("HH:mm:ss");
			String str1 = sdf1.format(rightNow.getTime());
			String tm = sdf2.format(rightNow.getTime());
			cuicons.setCrDt(str1);
			cuicons.setCrTm(tm);
			return cuiconsRepos.save(cuicons);
		}
		return null;
	}

	@Transactional
	@Override
	public void removeCuIconS(String iconNo) {
		if (ObjectUtils.isEmpty(iconNo)) {
			LOG.warn("iconNo is empty.");
			return;
		}
		CuIconS cuicons = cuiconsRepos.findOne(iconNo);
		if (cuicons == null) {
			LOG.warn("cuicons is null.");
			return;
		}
		List<CuResS> findBycuicosIconNo = curessRepos
				.findBycuicosIconNo(iconNo);
		if (CollectionUtils.isEmpty(findBycuicosIconNo)) {
			String path = cuicons.getIconAdCa();
			File file = new File(path);
			if (file.isFile()) {
				file.delete();
			}
			cuiconsRepos.delete(cuicons);
		} else
			throw new ParameterException(
					CuVars.CODE_ERROR_CUICONS_REMOVE_CASCADE);
	}

	@Transactional
	@Override
	public CuIconS deletePic(String iconNo) {
		if (ObjectUtils.isEmpty(iconNo)) {
			LOG.warn("iconNo is empty.");
			return null;
		}

		CuIconS cuicons = cuiconsRepos.findOne(iconNo);
		if (cuicons == null) {
			LOG.warn("cuicons is null.");
			return null;
		}
		cuicons.setIconAdCa(new CuIconS().getIconAdCa());
		return cuiconsRepos.save(cuicons);

	}

	@Override
	public List<CuIconS> cuIconSNames() {
		List<CuIconS> findAll = cuiconsRepos.findAll();
		List<CuIconS> cuIconSNames = new ArrayList<>();
		for (CuIconS cuIconS : findAll) {
			CuIconS cui = new CuIconS();
			cui.setIconNo(cuIconS.getIconNo());
			cui.setIconAdCa(cuIconS.getIconAdCa());
			cuIconSNames.add(cui);
		}
		return cuIconSNames;
	}

	@Override
	public String findCuIconsUrl(String iconNo) {
		CuIconS findOne = cuiconsRepos.findOne(iconNo);
		String iconAdCa = findOne.getIconAdCa();
		return iconAdCa;
	}

	public synchronized String nextId() {
		CuIconS id = cuiconsRepos.findTop1ByOrderByIconNoDesc();
		if (id == null) {
			return YnState.CODE_ICON_NUMBER;
		}
		String iconNo = id.getIconNo();
		String MiconNo = iconNo.substring(iconNo.length() - 5, iconNo.length());
		long parseLong = Long.parseLong(MiconNo) + 1;
		String nextId = YnState.CODE_CONTINE_NUMBER + parseLong;
		return "M" + nextId.substring(nextId.length() - 5, nextId.length());
	};
}