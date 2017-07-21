package com.xukaiqiang.gu.orm.entity;

import com.xukaiqiang.gu.orm.dialect.AbstractCuResActS_;
import com.xukaiqiang.gu.orm.entity.id.CuResActSId;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-09T02:13:11.178+0800")
@StaticMetamodel(CuResActS.class)
public class CuResActS_ extends AbstractCuResActS_ {
	public static volatile SingularAttribute<CuResActS, CuResActSId> cuResActSId;
	public static volatile SingularAttribute<CuResActS, Integer> ve;
	public static volatile SingularAttribute<CuResActS, String> url;
	public static volatile SingularAttribute<CuResActS, String> resActCd;
	public static volatile SingularAttribute<CuResActS, String> resActCa;
	public static volatile SingularAttribute<CuResActS, String> crDt;
	public static volatile SingularAttribute<CuResActS, String> laUpDt;
	public static volatile SingularAttribute<CuResActS, Long> laUpUsId;
	public static volatile SingularAttribute<CuResActS, String> defRiYn;
}
