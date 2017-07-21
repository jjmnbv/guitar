package com.xukaiqiang.gu.orm.entity;

import com.xukaiqiang.gu.orm.dialect.AbstractCuUsPostS_;
import com.xukaiqiang.gu.orm.entity.id.CuUPostSId;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-09T02:13:11.205+0800")
@StaticMetamodel(CuUsPostS.class)
public class CuUsPostS_ extends AbstractCuUsPostS_ {
	public static volatile SingularAttribute<CuUsPostS, CuUPostSId> id;
	public static volatile SingularAttribute<CuUsPostS, Integer> ve;
	public static volatile SingularAttribute<CuUsPostS, String> crDt;
	public static volatile SingularAttribute<CuUsPostS, String> crTm;
	public static volatile SingularAttribute<CuUsPostS, String> laUpDt;
	public static volatile SingularAttribute<CuUsPostS, Long> laUpUsId;
	public static volatile SingularAttribute<CuUsPostS, String> loginNa;
}
