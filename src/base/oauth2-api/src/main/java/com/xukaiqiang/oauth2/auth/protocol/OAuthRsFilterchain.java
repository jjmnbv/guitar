package com.xukaiqiang.oauth2.auth.protocol;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.xukaiqiang.shiro.entity.ShiroResource;

public class OAuthRsFilterchain implements Serializable {

	public static class Resource implements ShiroResource, Serializable {

		private static final long serialVersionUID = 1L;

		private String pattern;
		private String permission;

		public Resource() {
			super();
		}

		public Resource(String pattern, String permission) {
			super();
			this.pattern = pattern;
			this.permission = permission;
		}

		@Override
		public String getPattern() {
			return pattern;
		}

		@Override
		public String getPermission() {
			return permission;
		}

		public void setPattern(String pattern) {
			this.pattern = pattern;
		}

		public void setPermission(String permission) {
			this.permission = permission;
		}

	}

	private static final long serialVersionUID = 1L;

	private List<Resource> resources = new ArrayList<Resource>();

	public List<Resource> getResources() {
		return resources;
	}

	public void setResources(List<Resource> resources) {
		this.resources = resources;
	}

	public void addResource(String pattern, String permission) {
		this.resources.add(new Resource(pattern, permission));
	}

}