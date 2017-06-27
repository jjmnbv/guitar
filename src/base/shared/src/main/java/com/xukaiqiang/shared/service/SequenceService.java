package com.xukaiqiang.shared.service;

public interface SequenceService {

	public Long getNextSeq(String key);

	public Long getSeq(String key);

	public void setSeq(String key, Long value);

}
