<%@ page contentType="text/html;charset=UTF-8" %>
<%@ include file="/WEB-INF/views/jsp/include/global.jsp"%>
<c:set target="${self}" property="title">信贷系统</c:set>

<c:set target="${self.css}" property="plugins">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css"/>
  <link rel="stylesheet" href="${self.path.metronic}/assets/global/plugins/select2/css/select2.min.css">
</c:set>
<c:set target="${self.js}" property="plugins">
  <!-- <script src=""></script> -->
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
  <script src="${self.path.metronic}/assets/global/plugins/select2/js/select2.full.min.js"></script>
</c:set>

<c:set target="${self.css}" property="main">
  <!-- <link rel="stylesheet" href=""> -->
  <link rel="stylesheet" href="${self.path.app}/css/form.css">
</c:set>
<c:set target="${self.js}" property="loader">
  <!-- <script src=""></script> -->
</c:set>
<c:set target="${self.js}" property="main">
  <!-- <script src=""></script> -->
  <script src="${self.path.app}/js/jsform/form.js"></script>
  <script>
    $(function () {
      <c:choose>
        <c:when test="${not empty jsform}">
          $('.jsform').jsform({'apply-form':<spring:eval expression="@FN_CB.toJSON(jsform)" />});
        </c:when>
        <c:otherwise>
          $('.jsform').jsform({'apply-form':{"name":"新建表单"}});
        </c:otherwise>
      </c:choose>
    });
  </script>
</c:set>

<c:set target="${self.content}" property="breadcrumb">
  <div class="page-title">
    <h1><small>自定义表单</small></h1>
  </div>
</c:set>

<c:set target="${self.content}" property="main">
  <div class="row">
    <div class="col-md-8">
      <div class="jsform" data-jsform-store="apply-form"></div>
    </div>
    <div class="col-md-4">
      <div class="portlet box blue">
        <div class="portlet-title">
          <div class="caption"><i class="fa fa-list"></i>表单属性</div>
          <div class="tools"></div>
          <div class="actions">
            <div class="btn-group btn-group-devided" data-toggle="buttons">
              <a href="#" title="保存" class="btn btn-circle btn-default btn-sm font-white paramsave" disabled> 保存 </a>
            </div>
          </div>
        </div>
        <div class="portlet-body">
          <form id="paramform">没有选择字段。请先在右侧选择需要编辑的字段，然后在此编辑字段的属性。</form>
        </div>
      </div>
    </div>
  </div>
</c:set>

<c:set target="${self.content}" property="free">
  <script type="text/x-handlebars-template" id="main-portlet">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">htmlId</span>
          <input type="text" name="htmlId" value="{{htmlId}}" class="form-control" placeholder="htmlId">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">表单名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="表单名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="portlets">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">htmlId</span>
          <input type="text" name="htmlId" value="{{htmlId}}" class="form-control" placeholder="htmlId">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-text">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text" selected="selected">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">输入提示</span>
          <input type="text" name="placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">默认值</span>
          <input type="text" name="dv" value="{{dv}}" class="form-control" placeholder="默认值">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否只读</span>
          <select name="readonly" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq readonly 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq readonly 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">样式</span>
          <input type="text" name="class" value="{{class}}" class="form-control" placeholder="样式">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-select">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select" selected="selected">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">默认值</span>
          <input type="text" name="dv" value="{{dv}}" class="form-control" placeholder="默认值">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">样式</span>
          <input type="text" name="class" value="{{class}}" class="form-control" placeholder="样式">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">文本值存储</span>
          <input type="text" name="textInput" value="{{textInput}}" class="form-control" placeholder="文本值存储">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">selectloaderVkey</span>
          <input type="text" name="selectloaderVkey" value="{{selectloaderVkey}}" class="form-control" placeholder="selectloaderVkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">selectloaderTkey</span>
          <input type="text" name="selectloaderTkey" value="{{selectloaderTkey}}" class="form-control" placeholder="selectloaderTkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-select_dictionary">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary" selected="selected">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">默认值</span>
          <input type="text" name="dv" value="{{dv}}" class="form-control" placeholder="默认值">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">样式</span>
          <input type="text" name="class" value="{{class}}" class="form-control" placeholder="样式">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">文本值存储</span>
          <input type="text" name="textInput" value="{{textInput}}" class="form-control" placeholder="文本值存储">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典代码</span>
          <input type="text" name="dictionary" value="{{dictionary}}" class="form-control" placeholder="dictionary">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典存储值</span>
          <input type="text" name="selectloaderVkey" value="{{selectloaderVkey}}" class="form-control" placeholder="selectloaderVkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典显示值</span>
          <input type="text" name="selectloaderTkey" value="{{selectloaderTkey}}" class="form-control" placeholder="selectloaderTkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-radio_dictionary">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary" selected="selected">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">默认值</span>
          <input type="text" name="dv" value="{{dv}}" class="form-control" placeholder="默认值">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">样式</span>
          <input type="text" name="class" value="{{class}}" class="form-control" placeholder="样式">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">文本值存储</span>
          <input type="text" name="textInput" value="{{textInput}}" class="form-control" placeholder="文本值存储">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典代码</span>
          <input type="text" name="dictionary" value="{{dictionary}}" class="form-control" placeholder="dictionary">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典存储值</span>
          <input type="text" name="radioloaderVkey" value="{{radioloaderVkey}}" class="form-control" placeholder="radioloaderVkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典显示值</span>
          <input type="text" name="radioloaderTkey" value="{{radioloaderTkey}}" class="form-control" placeholder="radioloaderTkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-checkbox_dictionary">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary" selected="selected">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">默认值</span>
          <input type="text" name="dv" value="{{dv}}" class="form-control" placeholder="默认值">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">样式</span>
          <input type="text" name="class" value="{{class}}" class="form-control" placeholder="样式">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">文本值存储</span>
          <input type="text" name="textInput" value="{{textInput}}" class="form-control" placeholder="文本值存储">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典代码</span>
          <input type="text" name="dictionary" value="{{dictionary}}" class="form-control" placeholder="dictionary">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典存储值</span>
          <input type="text" name="checkboxVkey" value="{{checkboxVkey}}" class="form-control" placeholder="checkboxVkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">字典显示值</span>
          <input type="text" name="checkboxTkey" value="{{checkboxTkey}}" class="form-control" placeholder="checkboxTkey">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-select_address">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address" selected="selected">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">省名称</span>
          <input type="text" name="pname" value="{{pname}}" class="form-control" placeholder="pname">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">省名称值</span>
          <input type="text" name="ptextInput" value="{{ptextInput}}" class="form-control" placeholder="ptextInput">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">市名称</span>
          <input type="text" name="cname" value="{{cname}}" class="form-control" placeholder="cname">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">市名称值</span>
          <input type="text" name="ctextInput" value="{{ctextInput}}" class="form-control" placeholder="ctextInput">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">县名称</span>
          <input type="text" name="aname" value="{{aname}}" class="form-control" placeholder="aname">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">县名称值</span>
          <input type="text" name="atextInput" value="{{atextInput}}" class="form-control" placeholder="atextInput">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">详细</span>
          <input type="text" name="dname" value="{{dname}}" class="form-control" placeholder="dname">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">地址合</span>
          <input type="text" name="addrName" value="{{addrName}}" class="form-control" placeholder="addrName">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-telephone">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone" selected="selected">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">tel名称</span>
          <input type="text" name="telName" value="{{telName}}" class="form-control" placeholder="telName">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">区号名称</span>
          <input type="text" name="codeName" value="{{codeName}}" class="form-control" placeholder="codeName">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">电话号名称</span>
          <input type="text" name="valueName" value="{{valueName}}" class="form-control" placeholder="valueName">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">分机号名称</span>
          <input type="text" name="extName" value="{{extName}}" class="form-control" placeholder="extName">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">电话类型</span>
          <input type="text" name="phoneType" value="{{phoneType}}" class="form-control" placeholder="phoneType">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-date_picker">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker" selected="selected">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">输入提示</span>
          <input type="text" name="placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">日期格式</span>
          <input type="text" name="dateFormat" value="{{dateFormat}}" class="form-control" placeholder="dateFormat">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-textarea">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea" selected="selected">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon"输入提示/span>
          <input type="text" name="placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">默认值</span>
          <input type="text" name="dv" value="{{dv}}" class="form-control" placeholder="默认值">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否只读</span>
          <select name="readonly" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq readonly 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq readonly 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="table-portlet">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">标题</span>
          <input type="text" name="title" value="{{title}}" class="form-control" placeholder="标题">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control input-group-type">
            <option value="text">文本</option>
            <option value="textarea">多行文本</option>
            <option value="select">下拉框</option>
            <option value="select_dictionary">字典-下拉框</option>
            <option value="radio_dictionary">字典-单选框</option>
            <option value="checkbox_dictionary">字典-多选框</option>
            <option value="select_address">级联地址(省市县)</option>
            <option value="telephone">固话</option>
            <option value="date_picker">日期控件</option>
            <option value="table" selected="selected">表格</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">宽度</span>
          <select name="width" readonly class="form-control">
            <option value="3" {{#if (eq width '3')}} selected="selected"{{/if}}>3</option>
            <option value="4" {{#if (eq width '4')}} selected="selected"{{/if}}>4</option>
            <option value="6" {{#if (eq width '6')}} selected="selected"{{/if}}>6</option>
            <option value="8" {{#if (eq width '8')}} selected="selected"{{/if}}>8</option>
            <option value="12" {{#if (eq width '12')}} selected="selected"{{/if}}>12</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="table-portlet-th">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">标题名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
    </div>
  </script>
  <script type="text/x-handlebars-template" id="table-portlet-td-label">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">label</span>
          <input type="text" name="label" value="{{label}}" class="form-control" placeholder="label">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control table-input-group-type">
            <option value="text">文本框</option>
            <option value="label" selected="selected">简单文本</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="table-portlet-td-text">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">名称</span>
          <input type="text" name="name" value="{{name}}" class="form-control" placeholder="名称">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">类型</span>
          <select name="type" readonly class="form-control table-input-group-type">
            <option value="text" selected="selected">文本框</option>
            <option value="label">简单文本</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon"输入提示/span>
          <input type="text" name="placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">默认值</span>
          <input type="text" name="dv" value="{{dv}}" class="form-control" placeholder="默认值">
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否必填</span>
          <select name="required" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">是否只读</span>
          <select name="readonly" readonly class="form-control">
            <option value="">请选择...</option>
            <option value="true" {{#if (eq readonly 'true')}} selected="selected"{{/if}}>true</option>
            <option value="false" {{#if (eq readonly 'false')}} selected="selected"{{/if}}>false</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">隐藏字段:
            <span class="fieldActions" data-iconfont-index="-1" data-iconfont-type="hiddenInputs">
              <i title="复制" href="#" class="iconfont faDup">＋</i>
            </span>
          </span>
        </div>
      </div>
      {{#each hiddenInputs}}
      <div class="row" style="border: 1px solid blue;">
        <div class="col-md-12">
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.名称</span>
              <input type="text" name="hiddenInputs[{{@index}}].name" value="{{name}}" class="form-control" placeholder="名称">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.placeholder</span>
              <input type="text" name="hiddenInputs[{{@index}}].placeholder" value="{{placeholder}}" class="form-control" placeholder="placeholder">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.默认值</span>
              <input type="text" name="hiddenInputs[{{@index}}].dv" value="{{dv}}" class="form-control" placeholder="默认值">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.样式</span>
              <input type="text" name="hiddenInputs[{{@index}}].class" value="{{class}}" class="form-control" placeholder="样式">
            </div>
          </div>
          <div class="col-md-12">
            <div class="form-group input-group">
              <span class="input-group-addon">{{@index}}.是否必填</span>
              <select name="hiddenInputs[{{@index}}].required" readonly class="form-control">
                <option value="">请选择...</option>
                <option value="true" {{#if (eq required 'true')}} selected="selected"{{/if}}>true</option>
                <option value="false" {{#if (eq required 'false')}} selected="selected"{{/if}}>false</option>
              </select>
            </div>
          </div>
          <div class="fieldActions hiddenInputs" data-iconfont-index="{{@index}}" data-iconfont-type="hiddenInputs">
            <i title="复制" href="#" class="iconfont faDup">＋</i>
            <i title="删除" href="#" class="iconfont faDel">—</i>
          </div>
        </div>
      </div>
      {{/each}}
    </div>
  </script>
  <script type="text/x-handlebars-template" id="input-group-rows">
    <div class="form-body">
      <div class="row">
        <div class="form-group input-group">
          <span class="input-group-addon">行数据</span>
        </div>
      </div>
    </div>
  </script>
</c:set>

<%@ include file="/WEB-INF/views/jsp/include/main.jsp"%>
