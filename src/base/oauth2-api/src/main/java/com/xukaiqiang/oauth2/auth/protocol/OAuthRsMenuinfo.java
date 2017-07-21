package com.xukaiqiang.oauth2.auth.protocol;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class OAuthRsMenuinfo implements Serializable {

	private static final long serialVersionUID = 1L;

	private String id;
	private String text;
	private String uri;
	private String url;
	private String style;
	private Integer level = 1;
	private Integer dispOrder = 9999;
	private Map<String, Object> styleObject;
	private List<OAuthRsMenuinfo> children;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	/**
	 * 不带域名的地址 用于权限判断
	 * @return
	 */
	public String getUri() {
		return uri;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public Integer getDispOrder() {
		return dispOrder;
	}

	public void setDispOrder(Integer dispOrder) {
		this.dispOrder = dispOrder;
	}

	public Map<String, Object> getStyleObject() {
		return styleObject;
	}

	public void setStyleObject(Map<String, Object> styleObject) {
		this.styleObject = styleObject;
	}

	public List<OAuthRsMenuinfo> getChildren() {
		return children;
	}

	public void setChildren(List<OAuthRsMenuinfo> children) {
		this.children = children;
	}

}
