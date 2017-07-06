package com.xukaiqiang.g.orm.entity;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;
import com.xukaiqiang.g.orm.dialect.AbstractWorks_;

@Generated(value="Dali", date="2017-07-06T18:12:01.396+0800")
@StaticMetamodel(Works.class)
public class Works_ extends AbstractWorks_ {
	public static volatile SingularAttribute<Works, Integer> userId;
	public static volatile SingularAttribute<Works, String> name;
	public static volatile SingularAttribute<Works, String> url;
}
