package org.apache.jsp.WEB_002dINF.views.jsp.pages.cu.script;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class cubrs_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("     * @type {{icon: string, dt: string, dr: string, dd: Array}}\r\n");
      out.write("     */\r\n");
      out.write("    app.crumbs = {\r\n");
      out.write("        icon: 'icon-pruduct-set',\r\n");
      out.write("        dt: {\r\n");
      out.write("            text: '系统配置',\r\n");
      out.write("            url: '#'\r\n");
      out.write("            \r\n");
      out.write("        },        \r\n");
      out.write("        dd: [\r\n");
      out.write("            {\r\n");
      out.write("                text: '组织机构',\r\n");
      out.write("                url: '#'\r\n");
      out.write("            } ,\r\n");
      out.write("            {\r\n");
      out.write("                text: '机构管理',\r\n");
      out.write("                url: '/cu/organization-management/organization-management-list.html'\r\n");
      out.write("            }\r\n");
      out.write("            \r\n");
      out.write("        ]\r\n");
      out.write("    };\r\n");
      out.write("     /**\r\n");
      out.write("    * 引用地址:/script/cubrs\r\n");
      out.write("    * 状态：st\r\n");
      out.write("    * 上级机构：parentBrNo\r\n");
      out.write("    * 机构等级：brLevQt\r\n");
      out.write("    */\r\n");
      out.write("  app.pathArray=[\r\n");
      out.write("  \t\t{\"code\":\"add\" ,\"flag\":");
      if (_jspx_meth_spring_eval_0(_jspx_page_context))
        return;
      out.write(" },\r\n");
      out.write("\t    {\"code\":\"update\",\"flag\": ");
      if (_jspx_meth_spring_eval_1(_jspx_page_context))
        return;
      out.write("},\r\n");
      out.write("\t    {\"code\":\"delete\",\"flag\": ");
      if (_jspx_meth_spring_eval_2(_jspx_page_context))
        return;
      out.write("},\r\n");
      out.write("\t    {\"code\":\"active\",\"flag\": ");
      if (_jspx_meth_spring_eval_3(_jspx_page_context))
        return;
      out.write("},\r\n");
      out.write("\t    {\"code\":\"deActive\",\"flag\": ");
      if (_jspx_meth_spring_eval_4(_jspx_page_context))
        return;
      out.write("}\r\n");
      out.write("    ];\r\n");
      out.write("  app.parentBrNo=");
      if (_jspx_meth_spring_eval_5(_jspx_page_context))
        return;
      out.write(";\r\n");
      out.write("  app.brLevQt=[\r\n");
      out.write("        {\"code\":1,\"name\":\"一级\"},\r\n");
      out.write("        {\"code\":2,\"name\":\"二级\"},\r\n");
      out.write("        {\"code\":3,\"name\":\"三级\"},\r\n");
      out.write("    ]; \r\n");
      out.write("    \r\n");
      out.write("  app.registerTextHelper('st', app.st, 'code', 'name');\r\n");
      out.write("  app.registerTextHelper('parentBrNo', app.parentBrNo, 'brNo', 'brNa');\r\n");
      out.write("  app.registerTextHelper('brLevQt', app.brLevQt, 'code', 'name');\r\n");
      out.write("  app.st = app.dicts.dict_28;\r\n");
      out.write("  $(function () {\r\n");
      out.write("    $(\".loaderSel\").selectloader(app);\r\n");
      out.write("    $('.main-page').pagination({\r\n");
      out.write("      \"first-store\": {\r\n");
      out.write("        \"page\": ");
      if (_jspx_meth_spring_eval_6(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("      }\r\n");
      out.write("    });\r\n");
      out.write("  });\r\n");
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
    _jspx_th_spring_eval_0.setExpression("@FN_CU.checkPath('/cu/cubrs/create')");
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
    _jspx_th_spring_eval_1.setExpression("@FN_CU.checkPath('/cu/cubrs/update')");
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

  private boolean _jspx_meth_spring_eval_2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  spring:eval
    org.springframework.web.servlet.tags.EvalTag _jspx_th_spring_eval_2 = (org.springframework.web.servlet.tags.EvalTag) _jspx_tagPool_spring_eval_expression_nobody.get(org.springframework.web.servlet.tags.EvalTag.class);
    _jspx_th_spring_eval_2.setPageContext(_jspx_page_context);
    _jspx_th_spring_eval_2.setParent(null);
    _jspx_th_spring_eval_2.setExpression("@FN_CU.checkPath('/cu/cubrs/remove/*')");
    int[] _jspx_push_body_count_spring_eval_2 = new int[] { 0 };
    try {
      int _jspx_eval_spring_eval_2 = _jspx_th_spring_eval_2.doStartTag();
      if (_jspx_th_spring_eval_2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_spring_eval_2[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_spring_eval_2.doCatch(_jspx_exception);
    } finally {
      _jspx_th_spring_eval_2.doFinally();
      _jspx_tagPool_spring_eval_expression_nobody.reuse(_jspx_th_spring_eval_2);
    }
    return false;
  }

  private boolean _jspx_meth_spring_eval_3(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  spring:eval
    org.springframework.web.servlet.tags.EvalTag _jspx_th_spring_eval_3 = (org.springframework.web.servlet.tags.EvalTag) _jspx_tagPool_spring_eval_expression_nobody.get(org.springframework.web.servlet.tags.EvalTag.class);
    _jspx_th_spring_eval_3.setPageContext(_jspx_page_context);
    _jspx_th_spring_eval_3.setParent(null);
    _jspx_th_spring_eval_3.setExpression("@FN_CU.checkPath('/cu/cubrs/updatejh/*')");
    int[] _jspx_push_body_count_spring_eval_3 = new int[] { 0 };
    try {
      int _jspx_eval_spring_eval_3 = _jspx_th_spring_eval_3.doStartTag();
      if (_jspx_th_spring_eval_3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_spring_eval_3[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_spring_eval_3.doCatch(_jspx_exception);
    } finally {
      _jspx_th_spring_eval_3.doFinally();
      _jspx_tagPool_spring_eval_expression_nobody.reuse(_jspx_th_spring_eval_3);
    }
    return false;
  }

  private boolean _jspx_meth_spring_eval_4(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  spring:eval
    org.springframework.web.servlet.tags.EvalTag _jspx_th_spring_eval_4 = (org.springframework.web.servlet.tags.EvalTag) _jspx_tagPool_spring_eval_expression_nobody.get(org.springframework.web.servlet.tags.EvalTag.class);
    _jspx_th_spring_eval_4.setPageContext(_jspx_page_context);
    _jspx_th_spring_eval_4.setParent(null);
    _jspx_th_spring_eval_4.setExpression("@FN_CU.checkPath('/cu/cubrs/updatesx/*')");
    int[] _jspx_push_body_count_spring_eval_4 = new int[] { 0 };
    try {
      int _jspx_eval_spring_eval_4 = _jspx_th_spring_eval_4.doStartTag();
      if (_jspx_th_spring_eval_4.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_spring_eval_4[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_spring_eval_4.doCatch(_jspx_exception);
    } finally {
      _jspx_th_spring_eval_4.doFinally();
      _jspx_tagPool_spring_eval_expression_nobody.reuse(_jspx_th_spring_eval_4);
    }
    return false;
  }

  private boolean _jspx_meth_spring_eval_5(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  spring:eval
    org.springframework.web.servlet.tags.EvalTag _jspx_th_spring_eval_5 = (org.springframework.web.servlet.tags.EvalTag) _jspx_tagPool_spring_eval_expression_nobody.get(org.springframework.web.servlet.tags.EvalTag.class);
    _jspx_th_spring_eval_5.setPageContext(_jspx_page_context);
    _jspx_th_spring_eval_5.setParent(null);
    _jspx_th_spring_eval_5.setExpression("@FN_CU.toJSON(checkCuBrSList)");
    int[] _jspx_push_body_count_spring_eval_5 = new int[] { 0 };
    try {
      int _jspx_eval_spring_eval_5 = _jspx_th_spring_eval_5.doStartTag();
      if (_jspx_th_spring_eval_5.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_spring_eval_5[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_spring_eval_5.doCatch(_jspx_exception);
    } finally {
      _jspx_th_spring_eval_5.doFinally();
      _jspx_tagPool_spring_eval_expression_nobody.reuse(_jspx_th_spring_eval_5);
    }
    return false;
  }

  private boolean _jspx_meth_spring_eval_6(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  spring:eval
    org.springframework.web.servlet.tags.EvalTag _jspx_th_spring_eval_6 = (org.springframework.web.servlet.tags.EvalTag) _jspx_tagPool_spring_eval_expression_nobody.get(org.springframework.web.servlet.tags.EvalTag.class);
    _jspx_th_spring_eval_6.setPageContext(_jspx_page_context);
    _jspx_th_spring_eval_6.setParent(null);
    _jspx_th_spring_eval_6.setExpression("@FN_CU.toJSON(page)");
    int[] _jspx_push_body_count_spring_eval_6 = new int[] { 0 };
    try {
      int _jspx_eval_spring_eval_6 = _jspx_th_spring_eval_6.doStartTag();
      if (_jspx_th_spring_eval_6.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (Throwable _jspx_exception) {
      while (_jspx_push_body_count_spring_eval_6[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_spring_eval_6.doCatch(_jspx_exception);
    } finally {
      _jspx_th_spring_eval_6.doFinally();
      _jspx_tagPool_spring_eval_expression_nobody.reuse(_jspx_th_spring_eval_6);
    }
    return false;
  }
}
