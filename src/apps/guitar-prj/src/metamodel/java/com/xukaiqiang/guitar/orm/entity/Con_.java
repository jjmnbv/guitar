package com.xukaiqiang.guitar.orm.entity;

import com.xukaiqiang.guitar.orm.dialect.AbstractCon_;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-06T18:22:42.158+0800")
@StaticMetamodel(Con.class)
public class Con_ extends AbstractCon_ {
	public static volatile SingularAttribute<Con, Integer> userId;
	public static volatile SingularAttribute<Con, String> phone;
	public static volatile SingularAttribute<Con, String> wechat;
	public static volatile SingularAttribute<Con, String> qq;
	public static volatile SingularAttribute<Con, String> email;
	public static volatile SingularAttribute<Con, String> liveNum;
	public static volatile SingularAttribute<Con, String> liveName;
}
