package com.xukaiqiang.guitar.orm.entity;

import com.xukaiqiang.guitar.orm.dialect.AbstractWorks_;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-06T18:22:42.176+0800")
@StaticMetamodel(Works.class)
public class Works_ extends AbstractWorks_ {
	public static volatile SingularAttribute<Works, Integer> userId;
	public static volatile SingularAttribute<Works, String> name;
	public static volatile SingularAttribute<Works, String> url;
}
