package com.xukaiqiang.orm.jpa.hibernate;

import org.hibernate.cfg.ImprovedNamingStrategy;
import org.hibernate.internal.util.StringHelper;
import org.springframework.util.Assert;
import org.springframework.util.StringUtils;

/**
 * Hibernate {@link org.hibernate.cfg.NamingStrategy} that follows Spring
 * recommended naming conventions. Naming conventions implemented here are
 * identical to {@link ImprovedNamingStrategy} with the exception that foreign
 * key columns include the referenced column name.
 *
 * @author Phillip Webb
 * @see "http://stackoverflow.com/questions/7689206/ejb3namingstrategy-vs-improvednamingstrategy-foreign-key-naming"
 * @since 1.2.0
 */
@SuppressWarnings("serial")
public class SpringNamingStrategy extends ImprovedNamingStrategy {

	@Override
	public String foreignKeyColumnName(String propertyName, String propertyEntityName, String propertyTableName,
			String referencedColumnName) {
		String name = propertyTableName;
		if (propertyName != null) {
			name = StringHelper.unqualify(propertyName);
		}
		Assert.state(StringUtils.hasLength(name), "Unable to generate foreignKeyColumnName");
		return columnName(name) + "_" + referencedColumnName;
	}

}
