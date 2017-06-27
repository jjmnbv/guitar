package com.xukaiqiang.shared.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(Include.NON_NULL)
public class JsTreeNode implements Serializable {

	private static final long serialVersionUID = 1L;

	private String id;
	private String text;
	private String icon;
	private State state = new State();
	@JsonProperty("li_attr")
	private Object liAttr;
	private List<JsTreeNode> children = new ArrayList<JsTreeNode>();

	public JsTreeNode() {
	}

	public JsTreeNode(String id, String text) {
		this.id = id;
		this.text = text;
	}

	public JsTreeNode(String id, String text, Object liAttr) {
		this(id, text);
		this.liAttr = liAttr;
	}

	public JsTreeNode(String id, String text, Object liAttr, boolean selected) {
		this(id, text, liAttr);
		this.getState().setSelected(selected);
	}

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

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public List<JsTreeNode> getChildren() {
		return children;
	}

	public void setChildren(List<JsTreeNode> children) {
		this.children = children;
	}

	public Object getLiAttr() {
		return liAttr;
	}

	public void setLiAttr(Object liAttr) {
		this.liAttr = liAttr;
	}

	public class State implements Serializable {
		private static final long serialVersionUID = 1L;

		private boolean opened;
		private boolean disabled;
		private boolean selected;

		public boolean isOpened() {
			return opened;
		}

		public void setOpened(boolean opened) {
			this.opened = opened;
		}

		public boolean isDisabled() {
			return disabled;
		}

		public void setDisabled(boolean disabled) {
			this.disabled = disabled;
		}

		public boolean isSelected() {
			return selected;
		}

		public void setSelected(boolean selected) {
			this.selected = selected;
		}
	}
}
