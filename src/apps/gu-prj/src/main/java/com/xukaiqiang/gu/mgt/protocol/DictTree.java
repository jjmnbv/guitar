package com.xukaiqiang.gu.mgt.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(Include.NON_NULL)
public class DictTree implements Serializable {
	private static final long serialVersionUID = 1L;

	public static class Dict implements Serializable {
		private static final long serialVersionUID = 1L;

		private Long id;
		private String code;
		private String name;
		private List<Dict> children = new ArrayList<Dict>();

		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getCode() {
			return code;
		}
		public void setCode(String code) {
			this.code = code;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public List<Dict> getChildren() {
			return children;
		}
		public void setChildren(List<Dict> children) {
			this.children = children;
		}
	}

	private Long id;
	private String name;
	private List<Dict> dicts = new ArrayList<Dict>();

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Dict> getDicts() {
		return dicts;
	}
	public void setDicts(List<Dict> dicts) {
		this.dicts = dicts;
	}

	public static Map<String, List<Dict>> buildDictsMap(List<DictTree> dictTrees) {
		Map<String, List<Dict>> map = new HashMap<>();
		for(DictTree tree : dictTrees) {
			map.put("dict_"+tree.getId(), tree.getDicts());
		}
		return map;
	}

	public static Map<String, List<Dict>> buildDictsMap(DictTree tree) {
		Map<String, List<Dict>> map = new HashMap<>();
		map.put("dict_"+tree.getId(), tree.getDicts());
		return map;
	}

}
