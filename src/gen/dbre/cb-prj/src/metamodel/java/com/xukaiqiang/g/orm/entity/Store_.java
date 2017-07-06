package com.xukaiqiang.g.orm.entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import com.xukaiqiang.g.orm.dialect.AbstractStore_;

@Generated(value="Dali", date="2017-07-06T18:12:01.394+0800")
@StaticMetamodel(Store.class)
public class Store_ extends AbstractStore_ {
	public static volatile SingularAttribute<Store, Integer> userId;
	public static volatile SingularAttribute<Store, String> name;
	public static volatile SingularAttribute<Store, String> address;
}
