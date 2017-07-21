package org.apache.jsp.WEB_002dINF.views.jsp.pages.cu.script;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class curoris_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("window.app = window.app || {};\n");
      out.write("/**\n");
      out.write(" * 数据模拟\n");
      out.write(" */\n");
      out.write("+function ($, app) {\n");
      out.write("  /**\n");
      out.write("     * 面包屑导航数据\n");
      out.write("     * @type {{icon: string, dt: string, dd: Array}}\n");
      out.write("     */\n");
      out.write("    app.crumbs = {\n");
      out.write("        icon: 'icon-pruduct-set',\n");
      out.write("        dt: {\n");
      out.write("            text: '系统配置',\n");
      out.write("            url: '#'\n");
      out.write("            \n");
      out.write("        },\n");
      out.write("        dd: [\n");
      out.write("        \t{\n");
      out.write("\t\t        text: '菜单管理',\n");
      out.write("\t\t        url: '#'\n");
      out.write("             },\n");
      out.write("            {\n");
      out.write("                text: '权限管理',\n");
      out.write("                url: '/cu/auth-management/auth-management2.html'\n");
      out.write("            }\n");
      out.write("        ]\n");
      out.write("    };\n");
      out.write("     /**\n");
      out.write("    * 引用地址:/script/curoris\n");
      out.write("    * 状态：st\n");
      out.write("    */\n");
      out.write("  app.pathArray=[\n");
      out.write("  \t\t{\"code\":\"add\" ,\"flag\":");
      if (_jspx_meth_spring_eval_0(_jspx_page_context))
        return;
      out.write(" }\n");
      out.write("    ];\n");
      out.write("  app.resActCdList = app.dicts.dict_70;\n");
      out.write("\n");
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
    _jspx_th_spring_eval_0.setExpression("@FN_CU.checkPath('/cu/curos/updatePermissions')");
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
}
