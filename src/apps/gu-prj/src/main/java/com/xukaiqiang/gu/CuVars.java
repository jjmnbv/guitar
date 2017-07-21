package com.xukaiqiang.gu;

import java.io.Serializable;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CuVars {
	/**
	 * 节点元数据
	 */
	public static class NodeMetadata implements Serializable {
		private static final long serialVersionUID = 1L;

		public String type;
		public String name;

		public NodeMetadata(String type, String name) {
			this.type = type;
			this.name = name;
		}
	}

	/**
	 * 表单日期格式
	 */
	public static final String FORM_FMT_DATE = "yyyy-MM-dd";
	/**
	 * 表单时间格式
	 */
	public static final String FORM_FMT_TIME = "HH:mm:ss";

	/**
	 * 转JSON的地区
	 */
	public static final String JSON_FMT_LOCALE = "zh";

	/**
	 * 转JSON的时区
	 */
	public static final String JSON_FMT_TIMEZONE = "GMT+8";

	/**
	 * 转JSON的时间格式
	 */
	public static final String JSON_FMT_DATETIME = "yyyy-MM-dd HH:mm:ss";

	/**
	 * 系统分类字典代码70
	 */
	public static Long SYC_NUMBER = 70l;

	/**
	 * 从数据库获取日期
	 * 
	 * @param date
	 * @return
	 */
	public static Date getDateFormDb(String date) {
		try {
			return  new SimpleDateFormat(
					FORM_FMT_DATE).parse(date);
		} catch (ParseException e) {
			return null;
		}
	}

	/**
	 * 消息码：登录密码不正确
	 */
	public static final String CODE_ERROR_USER_CHGPWD_OLDPWD = "Valid.CuUsChPwdLService.changeMyLoginPassword.plainOldPassword";
	/**
	 * 消息码：新密码不能和原密码一样
	 */
	public static final String CODE_ERROR_USER_CHGPWD_ONEPWD = "Valid.CuUsChPwdLService.changeMyLoginPassword.pwd";
	/**
	 * 消息码：已经激活！
	 */
	public static final String CODE_ERROR_JHST_UPDTAE_JH = "Valid.CuUsSServiceImpl.updateJH.jh";
	/**
	 * 消息码：已经失效！
	 */
	public static final String CODE_ERROR_JHST_UPDTAE_SX = "Valid.CuUsSServiceImpl.updateSX.sx";
	/**
	 * 消息码：激活状态,不能删除
	 */
	public static final String CODE_ERROR_JHST_REMOVE_CASCADE = "Valid.jhstatus.remove.cascade";

	/**
	 * 消息码：构下有子机构/用户,不能删除
	 */
	public static final String CODE_ERROR_CUBRS_REMOVE_CASCADE = "Valid.OrganService.removeOrgan.cascade";

	/**
	 * 消息码：当前岗位下还有用户,不能删除
	 */
	public static final String CODE_ERROR_CUPOSTS_REMOVE_CASCADE = "Valid.PositionService.removePosition.cascade";

	/**
	 * 消息码：当前角色下还有用户，不能删除
	 */
	public static final String CODE_ERROR_CUROS_REMOVE_CASCADE = "Valid.RoleService.removeRole.cascade";

	/**
	 * 消息码：菜单下有子菜单/页面资源，不能删除
	 */
	public static final String CODE_ERROR_CURESS_REMOVE_CASCADE = "Valid.MenuService.removeMenu.cascade";

	/**
	 * 消息码：当前图标被引用，不能删除
	 */
	public static final String CODE_ERROR_CUICONS_REMOVE_CASCADE = "Valid.CuIconService.removeCuIcons.cascade";
	/**
	 * 首次登陆改密码
	 */
	public static final String CODE_ERROR_CUUS_LOGIN_FIRSTPW = "Valid.CuUsS.checkPW.cascade";
	/**
	 * 密码过期
	 */
	public static final String CODE_ERROR_CUUS_LOGIN_OVERPW = "Valid.CuUsS.overPW.cascade";
	/**
	 * 不能移到根菜单下
	 */
	public static final String CODE_ERROR_CURESS_MOVE_ROOT = "Valid.CuResS.move.cascade";
	/**
	 * 该功能名称已经存在
	 */
	public static final String CODE_ERROR_CURESACTS_EXIT_CASCADE = "Valid.CuResAct.exit.cascade";
	/**
	 * 超级用户角色名
	 */
	@Value("${cu.role.admin:ADMIN}")
	public String adminRole;
	/**
	 * 菜单节点id前缀
	 */
	public static final String NODE_MENU_IDPFX = "m_";
	/**
	 * 菜单数据
	 */
	public static final String NODE_MENU_MN = "MN";
	/**
	 * 菜单节点
	 */
	public static final NodeMetadata NODE_MENU = new NodeMetadata("MENU", "菜单");
	/**
	 * 操作节点id前缀
	 */
	public static final String NODE_ACTION_IDPFX = "a_";
	/**
	 * 操作节点
	 */
	public static final NodeMetadata NODE_ACTION = new NodeMetadata("ACTION",
			"操作");
	/**
	 * 修改密码周期
	 */
	public static final int CHPWDDT = 30;
	/**
	 * 用户为修改密码的标识
	 */
	public static final String FIRSTPWD = "00";
	/** 
	 * 菜單訪問權限操作碼:999
	 */
	@Value("${cu.code.cures.resactcd:999}")
	public String CODE_CURES_RESACTCD;
	/** 
	 * 基础操作配置代号:998
	 */
	@Value("${cu.code.cures.basecd:998}")
	public  String CODE_CURES_BASECD;
	/** 
	 * 基础操作菜单编号:80
	 */
	@Value("${cu.code.cures.resno:80}")
	public  String CODE_CURES_RESNO ;
	/** 
	 * 基础操作菜单编号:80
	 */
	@Value("${cu.code.cures.baseresno:50005}")
	public  String CODE_CURES_BASERESNO ;
	
}
