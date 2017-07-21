package com.xukaiqiang.gu.orm.entity;

import com.xukaiqiang.gu.orm.dialect.AbstractCuUsS_;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-09T02:13:11.209+0800")
@StaticMetamodel(CuUsS.class)
public class CuUsS_ extends AbstractCuUsS_ {
	public static volatile SingularAttribute<CuUsS, Integer> ve;
	public static volatile SingularAttribute<CuUsS, String> crDt;
	public static volatile SingularAttribute<CuUsS, String> crTm;
	public static volatile SingularAttribute<CuUsS, String> laUpDt;
	public static volatile SingularAttribute<CuUsS, Long> laUpUsId;
	public static volatile SingularAttribute<CuUsS, String> st;
	public static volatile SingularAttribute<CuUsS, String> loginNa;
	public static volatile SingularAttribute<CuUsS, String> usNa;
	public static volatile SingularAttribute<CuUsS, String> paTyCd;
	public static volatile SingularAttribute<CuUsS, String> paNo;
	public static volatile SingularAttribute<CuUsS, String> moNo;
	public static volatile SingularAttribute<CuUsS, String> mailNo;
	public static volatile SingularAttribute<CuUsS, String> exeYn;
	public static volatile SingularAttribute<CuUsS, String> cuMaYn;
	public static volatile SingularAttribute<CuUsS, String> holYn;
	public static volatile SingularAttribute<CuUsS, String> holBeDt;
	public static volatile SingularAttribute<CuUsS, String> holEnDt;
	public static volatile SingularAttribute<CuUsS, String> co;
	public static volatile SingularAttribute<CuUsS, String> sexCd;
	public static volatile SingularAttribute<CuUsS, CuBrS> cubrs;
	public static volatile SetAttribute<CuUsS, CuPostS> postSet;
	public static volatile SetAttribute<CuUsS, CuRoS> rosSet;
	public static volatile SingularAttribute<CuUsS, CuUsS> parent;
	public static volatile ListAttribute<CuUsS, CuUsS> children;
}
