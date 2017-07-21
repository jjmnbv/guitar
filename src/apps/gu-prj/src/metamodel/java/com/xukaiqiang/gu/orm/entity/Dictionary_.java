package com.xukaiqiang.gu.orm.entity;

import com.xukaiqiang.gu.mgt.protocol.Status;
import com.xukaiqiang.gu.orm.dialect.AbstractDictionary_;
import com.xukaiqiang.gu.orm.entity.id.DictionaryId;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="Dali", date="2017-07-09T02:13:11.211+0800")
@StaticMetamodel(Dictionary.class)
public class Dictionary_ extends AbstractDictionary_ {
	public static volatile SingularAttribute<Dictionary, DictionaryId> dictionaryId;
	public static volatile SingularAttribute<Dictionary, Integer> version;
	public static volatile SingularAttribute<Dictionary, String> name;
	public static volatile SingularAttribute<Dictionary, Status> status;
	public static volatile SingularAttribute<Dictionary, String> subId;
	public static volatile SingularAttribute<Dictionary, String> subCode;
	public static volatile SingularAttribute<Dictionary, Integer> dispOrder;
	public static volatile SingularAttribute<Dictionary, String> ciCode;
	public static volatile SingularAttribute<Dictionary, String> createDate;
	public static volatile SingularAttribute<Dictionary, String> lastUpdate;
	public static volatile SingularAttribute<Dictionary, Long> lastUpdateUserId;
}
