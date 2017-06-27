{{#extend "main"}}

  <!-- 页面meta  作者，关键字，描述 -->
  {{#content "meta"}}
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <meta content="" name="keyword"/>
  {{/content}}

  <!-- 页面 title -->
  {{#content "title"}}
    <title>${entityDescription}管理</title>
  {{/content}}

  <!-- css插件 -->
  {{#content "css-plugins"}}
    <!-- @Override -->
  {{/content}}

  <!-- 自定义css -->
  {{#content "css-main"}}
    <!-- @Override -->
  {{/content}}

  <!-- 首屏渲染数据js-loader -->
  {{#content "js-loader"}}
    <script src="{{path.base}}/script/${moduleName}/${entityName?lower_case}.js"></script>
  {{/content}}

  <!-- js插件 -->
  {{#content "js-plugins"}}
    <!-- @Override -->
  {{/content}}

  <!-- 自定义js -->
  {{#content "js-main"}}
    <script src="{{path.app}}/js/${moduleName}/${entityName?lower_case}.js"></script>
  {{/content}}

  <!-- 页面主体 -->
  {{#content "content-main"}}
    <!-- @Override -->
  {{/content}}

  <!-- 分页查询条件 pagination-form -->
  {{#content "pagination-form"}}
    <!-- @Override -->
    <form role="form" class="form-horizontal pagination-form">
      <div class="form-body">
        <div class="row">
          <#list fields as field>
            <#if !field.ptype?has_content>
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label col-md-3">${field.description}:</label>
              <div class="col-md-9">
                <input name="${field.name}" type="text" class="form-control">
              </div>
            </div>
          </div>
            </#if>
          </#list>
        </div>
      </div>
    </form>
  {{/content}}
  <!-- pagination-form END -->

  <!-- 分页表格和分页页码 pagination-container -->
  {{#content "pagination-container"}}
    <div class="portlet-title">
      <div class="caption"><i class="fa fa-list"></i> ${entityDescription}列表 </div>
      <div class="actions">
        <div class="btn-group btn-group-devided" data-toggle="buttons">
          <a href="#" title="新增" data-target="#${entityName?lower_case}-add-modal" data-toggle="modal" class=""><img src="{{path.app}}/img/icon/group_3.png"/></a>
          <a href="javascript:;" class="pagination-reload"><img src="{{path.app}}/img/icon/group_5.png"/></a>
        </div>
      </div>
    </div>
    <div class="portlet-body">
      <div class="tabbable tabbable-tabdrop">
        <div class="portlet-body pagination-container"
          data-page-first-store="first-store"
          data-page-url="/${entityName?upper_case}_PAGE"
          data-page-template-id="${entityName?lower_case}-page-template">
        </div>
      </div>
    </div>
  <!-- @Override -->
  {{/content}}
  <!-- pagination-container END -->

    <!-- 页面模态框 -->
  {{#content "content-free"}}
  <div id="${entityName?lower_case}-add-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">新增${entityDescription}</h4>
        </div>
        <div class="modal-body">
          <form action="/${entityName?upper_case}_CREATE" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
              <#if (primaryKeys?size>1)>
                <#list primaryKeys as field>
              <input type="hidden" name="${field.name}" readonly="readonly">
                </#list>
              <#else>
              <input type="hidden" name="${(primaryKeys[0].name)!}" readonly="readonly">
              </#if>
              <div class="row">
                <#list fields as field>
                  <#if !field.ptype?has_content>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">${field.description}:</label>
                    <div class="col-md-9">
                      <input name="${field.name}" type="text" class="form-control input-sm" placeholder="请输入${field.description}...">
                    </div>
                  </div>
                </div>
                  </#if>
                </#list>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline dark ok">确认</button>
          <button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button>
        </div>
      </div>
    </div>
  </div>

  <div id="${entityName?lower_case}-edit-modal" class="modal container fade modal-scroll" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-full">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
          <h4 class="modal-title">编辑${entityDescription}<span class="edit_${entityName?lower_case}_id"></span></h4>
        </div>
        <div class="modal-body">
          <form action="/${entityName?upper_case}_UPDATE" method="POST" role="form" class="form-horizontal">
            <div class="form-body">
              <#if (primaryKeys?size>1)>
                <#list primaryKeys as field>
              <input type="hidden" name="${field.name}" readonly="readonly" required>
                </#list>
              <#else>
              <input type="hidden" name="${(primaryKeys[0].name)!}" readonly="readonly" required>
              </#if>
              <div class="row">
                <#list fields as field>
                  <#if !field.ptype?has_content>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="col-md-3 control-label">${field.description}:</label>
                    <div class="col-md-9">
                      <input name="${field.name}" type="text" class="form-control input-sm" placeholder="请输入${field.description}...">
                    </div>
                  </div>
                </div>
                  </#if>
                </#list>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline dark ok">确认</button>
          <button type="button" data-dismiss="modal" class="btn btn-outline dark">取消</button>
        </div>
      </div>
    </div>
  </div>

  <script type="text/x-handlebars-template" id="${entityName?lower_case}-page-template">
    {{{{raw}}}}
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th> 序号 </th>
            <#list primaryKeys as field>
            <th> ${field.description} </th>
            </#list>
            <#list fields as field>
              <#if !field.ptype?has_content>
            <th> ${field.description} </th>
              </#if>
            </#list>
            <th> 操作 </th>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td> {{page-rowindex}} </td>
            <#list primaryKeys as field>
            <td> {{${field.name}}} </td>
            </#list>
            <#list fields as field>
              <#if !field.ptype?has_content>
            <td> {{${field.name}}} </td>
              </#if>
            </#list>
            <td>
              <a href="#" data-target="#${entityName?lower_case}-edit-modal" data-toggle="modal" data-${entityName?lower_case}-id="<#if (primaryKeys?size>1)>?<#list primaryKeys as field>${field.name}={{${field.name}}}<#if field_has_next>&</#if></#list><#else>{{${(primaryKeys[0].name)!}}}</#if>"> 编辑 </a>
              <a href="javascript:;" <#if (primaryKeys?size>1)><#list primaryKeys as field>data-delete-${entityName?lower_case}-${field.name?lower_case}="{{${field.name}}}"<#if field_has_next> </#if></#list><#else>data-delete-${entityName?lower_case}-id="{{${(primaryKeys[0].name)!}}}.json"</#if>>删除</a>
            </td>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    {{{{/raw}}}}
    {{> pager}}
  </script>
<!-- @Override -->
{{/content}}
<!-- pagination-free END-->

{{/extend}}