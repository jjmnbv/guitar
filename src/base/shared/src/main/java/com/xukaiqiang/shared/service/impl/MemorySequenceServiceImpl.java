package com.xukaiqiang.shared.service.impl;

import com.google.common.util.concurrent.AtomicLongMap;
import com.xukaiqiang.shared.service.SequenceService;

public class MemorySequenceServiceImpl implements SequenceService {
	private AtomicLongMap<String> atomic = AtomicLongMap.create();

	@Override
	public Long getNextSeq(String key) {
		return atomic.incrementAndGet(key);
	}

	@Override
	public Long getSeq(String key) {
		return atomic.get(key);
	}

	@Override
	public void setSeq(String key, Long value) {
		atomic.put(key, value);
	}

}
