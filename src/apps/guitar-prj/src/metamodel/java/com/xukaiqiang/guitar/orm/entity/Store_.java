package com.xukaiqiang.guitar.orm.entity;

import com.xukaiqiang.guitar.orm.dialect.AbstractStore_;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-06T18:22:42.170+0800")
@StaticMetamodel(Store.class)
public class Store_ extends AbstractStore_ {
	public static volatile SingularAttribute<Store, Integer> userId;
	public static volatile SingularAttribute<Store, String> name;
	public static volatile SingularAttribute<Store, String> address;
}
