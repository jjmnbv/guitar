package org.apache.jsp.WEB_002dINF.views.jsp.pages.cu.script;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class cuussself_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _jspx_tagPool_spring_eval_expression_nobody;

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _jspx_tagPool_spring_eval_expression_nobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _jspx_tagPool_spring_eval_expression_nobody.release();
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/javascript;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("window.app = window.app || {};\r\n");
      out.write("/**\r\n");
      out.write(" * 数据模拟\r\n");
      out.write(" */\r\n");
      out.write("+function ($, app) {\r\n");
      out.write("  /**\r\n");
      out.write("     * 面包屑导航数据\r\n");
      out.write("     * @type {{icon: string, dt: string, dd: Array}}\r\n");
      out.write("     */\r\n");
      out.write("    app.crumbs = {\r\n");
      out.write("        icon: 'icon-pruduct-set',\r\n");
      out.write("        dt: {\r\n");
      out.write("            text: '个人工作台',\r\n");
      out.write("            url: '#'\r\n");
      out.write("            \r\n");
      out.write("        },\r\n");
      out.write("        dd: [\r\n");
      out.write("            {\r\n");
      out.write("            text: '个人设置',\r\n");
      out.write("            url: '#'\r\n");
      out.write("            \r\n");
      out.write("            },\r\n");
      out.write("            {\r\n");
      out.write("                text: '个人信息维护',\r\n");
      out.write("                url: '/cu/personal-settings/personal-info-maintenance.html'\r\n");
      out.write("            }\r\n");
      out.write("        ]\r\n");
      out.write("    };\r\n");
      out.write("     /**\r\n");
      out.write("    * 引用地址:/script/cuuss\r\n");
      out.write("    * 状态：st\r\n");
      out.write("    * 证件类型：paTyCd\r\n");
      out.write("    * 性别：sexCd\r\n");
      out.write("    * 是否客服经理:cuMaYn\r\n");
      out.write("    * 是否主管:exeYn\r\n");
      out.write("    * 机构等级:brLevQt\r\n");
      out.write("    * 是否审批岗位 ：auPostYn\r\n");
      out.write("    * 是否催收岗位 ：coPostYn\r\n");
      out.write("    * 是否商店使用 ：stoUseYn\t\r\n");
      out.write("    * 请假状态 ：holYn\t\r\n");
      out.write("    */\r\n");
      out.write("  app.pathArray=[\r\n");
      out.write("  \t\t{\"code\":\"update\" ,\"flag\":");
      if (_jspx_meth_spring_eval_0(_jspx_page_context))
        return;
      out.write(" }\r\n");
      out.write("    ];\r\n");
      out.write("  app.st = app.dicts.dict_28;\r\n");
      out.write("  app.paTyCd = app.dicts.dict_17;\r\n");
      out.write("  app.sexCd = app.dicts.dict_10;\r\n");
      out.write("  app.cuMaYn=[\r\n");
      out.write("        {\"code\":\"N\",\"name\":\"否\"},\r\n");
      out.write("        {\"code\":\"Y\",\"name\":\"是\"},\r\n");
      out.write("    ];\r\n");
      out.write("   app.exeYn=[\r\n");
      out.write("        {\"code\":\"N\",\"name\":\"否\"},\r\n");
      out.write("        {\"code\":\"Y\",\"name\":\"是\"},\r\n");
      out.write("    ];\r\n");
      out.write("   app.brLevQt=[\r\n");
      out.write("        {\"code\":1,\"name\":\"一级\"},\r\n");
      out.write("        {\"code\":2,\"name\":\"二级\"},\r\n");
      out.write("    ]; \r\n");
      out.write("   app.auPostYn=[\r\n");
      out.write("        {\"code\":\"N\",\"name\":\"否\"},\r\n");
      out.write("        {\"code\":\"Y\",\"name\":\"是\"},\r\n");
      out.write("    ];\r\n");
      out.write("   app.coPostYn=[\r\n");
      out.write("        {\"code\":\"N\",\"name\":\"否\"},\r\n");
      out.write("        {\"code\":\"Y\",\"name\":\"是\"},\r\n");
      out.write("    ];\r\n");
      out.write("    app.stoUseYn=[\r\n");
      out.write("        {\"code\":\"N\",\"name\":\"否\"},\r\n");
      out.write("        {\"code\":\"Y\",\"name\":\"是\"},\r\n");
      out.write("    ];\r\n");
      out.write("    app.holYn=[\r\n");
      out.write("        {\"code\":\"N\",\"name\":\"休假中\"},\r\n");
      out.write("        {\"code\":\"Y\",\"name\":\"上班\"},\r\n");
      out.write("    ];\r\n");
      out.write("  app.newBrNo=");
      if (_jspx_meth_spring_eval_1(_jspx_page_context))
        return;
      out.write(";\r\n");
      out.write(" $(function () {\r\n");
      out.write("  $('#mainPage').find('.pagination-reload').click();\r\n");
      out.write(" });\r\n");
      out.write("}(window.jQuery, window.app);");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_spring_eval_0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  spring:eval
    org.springframework.web.servlet.tags.EvalTag _jspx_th_spring_eval_0 = (org.springframework.web.servlet.tags.EvalTag) _jspx_tagPool_spring_eval_expression_nobody.get(org.springframework.web.servlet.tags.EvalTag.class);
    _jspx_th_spring_eval_0.setPageContext(_jspx_page_context);
    _jspx_th_spring_eval_0.setParent(null);
    _jspx_th_spring_eval_0.setExpression("@FN_CU.checkPath('/cu/cuuss/updateCuUs')");
    int[] _jspx_push_body_count_spring_eval_0 = new int[] { 0 };
    try {
      int _jspx_eval_spring_eval_0 = _jspx_th_spring_eval_0.doStartTag();
      if (_jspx_th_spring_eval_0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_spring_eval_0[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_spring_eval_0.doCatch(_jspx_exception);
    } finally {
      _jspx_th_spring_eval_0.doFinally();
      _jspx_tagPool_spring_eval_expression_nobody.reuse(_jspx_th_spring_eval_0);
    }
    return false;
  }

  private boolean _jspx_meth_spring_eval_1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  spring:eval
    org.springframework.web.servlet.tags.EvalTag _jspx_th_spring_eval_1 = (org.springframework.web.servlet.tags.EvalTag) _jspx_tagPool_spring_eval_expression_nobody.get(org.springframework.web.servlet.tags.EvalTag.class);
    _jspx_th_spring_eval_1.setPageContext(_jspx_page_context);
    _jspx_th_spring_eval_1.setParent(null);
    _jspx_th_spring_eval_1.setExpression("@FN_CU.toJSON(checkCuBrSList)");
    int[] _jspx_push_body_count_spring_eval_1 = new int[] { 0 };
    try {
      int _jspx_eval_spring_eval_1 = _jspx_th_spring_eval_1.doStartTag();
      if (_jspx_th_spring_eval_1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_spring_eval_1[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_spring_eval_1.doCatch(_jspx_exception);
    } finally {
      _jspx_th_spring_eval_1.doFinally();
      _jspx_tagPool_spring_eval_expression_nobody.reuse(_jspx_th_spring_eval_1);
    }
    return false;
  }
}
