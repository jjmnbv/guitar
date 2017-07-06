package com.xukaiqiang.guitar.orm.entity;

import com.xukaiqiang.guitar.orm.dialect.AbstractJob_;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-06T18:22:42.164+0800")
@StaticMetamodel(Job.class)
public class Job_ extends AbstractJob_ {
	public static volatile SingularAttribute<Job, Integer> userId;
	public static volatile SingularAttribute<Job, String> category;
	public static volatile SingularAttribute<Job, String> workAge;
	public static volatile SingularAttribute<Job, String> beginTime;
	public static volatile SingularAttribute<Job, String> endTime;
	public static volatile SingularAttribute<Job, String> addressCity;
	public static volatile SingularAttribute<Job, String> addressArea;
	public static volatile SingularAttribute<Job, String> addressProvince;
	public static volatile SingularAttribute<Job, String> addressDetail;
	public static volatile SingularAttribute<Job, String> salary;
	public static volatile SingularAttribute<Job, String> commont;
	public static volatile SingularAttribute<Job, String> musicStyle;
	public static volatile SingularAttribute<Job, String> haveBand;
	public static volatile SingularAttribute<Job, String> bandName;
	public static volatile SingularAttribute<Job, String> havePro;
	public static volatile SingularAttribute<Job, String> proName;
}
