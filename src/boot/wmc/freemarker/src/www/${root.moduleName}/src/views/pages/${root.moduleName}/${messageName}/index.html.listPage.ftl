{{#extend "main"}}

  <!-- 页面meta  作者，关键字，描述 -->
  {{#content "meta"}}
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <meta content="" name="keyword"/>
  {{/content}}

  <!-- title BEGIN -->
  {{#content "title"}}
    <title>${messageDesc}</title>
  {{/content}}
  <!-- title END -->

  <!-- css-plugins BEGIN -->
  {{#content "css-plugins"}}
  <!-- @Override -->
  {{/content}}
  <!-- css-plugins END -->

  <!-- css-main BEGIN -->
  {{#content "css-main"}}
  <!-- @Override -->
  {{/content}}
  <!-- css-main END -->

  <!-- js-loader BEGIN -->
  {{#content "js-loader"}}
    <script src="{{path.base}}/script/${root.moduleName}/${messageName}/index.js"></script>
  {{/content}}
  <!-- js-loader END -->

  <!-- js-plugins BEGIN -->
  {{#content "js-plugins"}}
  <!-- @Override -->
  {{/content}}
  <!-- js-plugins END -->

  <!-- js-main BEGIN -->
  {{#content "js-main"}}
    <script src="{{path.app}}/js/${root.moduleName}/${messageName}/index.js"></script>
  {{/content}}
  <!-- js-main END -->

  <!-- content-main BEGIN -->
  {{#content "content-main"}}
  {{/content}}
  <!-- content-main END -->

  <!-- 分页查询条件 pagination-form -->
  {{#content "pagination-form"}}
    <!-- @Override -->
    <form role="form" class="form-horizontal pagination-form">
      <div class="form-body">
        <div class="row">
          <#list requestFields as field>
            <#if !(field.requestType!?starts_with('PATH_VARIABLE') || field.requestType!?starts_with('REQUEST_PARAM'))>
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label col-md-3">${field.description}:</label>
              <div class="col-md-9">
                <input name="${field.id}" type="text" class="form-control">
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

  <!-- pagination-container BEGIN -->
  {{#content "pagination-container"}}
    <div class="portlet-title">
      <div class="caption">${messageDesc}</div>
      <div class="actions">
        <div class="btn-group btn-group-devided" data-toggle="buttons">
          <a href="javascript:;" class="pagination-reload"><img src="{{path.app}}/img/icon/chongzhi_icon_sel.png"/></a>
        </div>
      </div>
    </div>
    <div class="portlet-body">
      <div class="tabbable tabbable-tabdrop">
        <div class="portlet-body pagination-container"
          data-page-first-store="first-store"
          data-page-url="/${messageName?upper_case}"
          data-page-template-id="${messageName?upper_case}-template">
        </div>
      </div>
    </div>
  {{/content}}

  {{#content "content-free"}}
  {{/content}}

  <!-- 页面组件模板 -->
  {{#content "content-component"}}
  <script type="text/x-handlebars-template" id="${messageName?upper_case}-template">
    {{{{raw}}}}
    <div class="table-scrollable">
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>选择</th>
            <#list responseGroups as group>
              <#list group.fields as field>
            <th>${field.description}</th>
              </#list>
            </#list>
          </tr>
        </thead>
        <tbody>
          {{#each page.content}}
          <tr>
            <td>
              <label for="id_{{page-rowindex}}">
                <input id="id_{{page-rowindex}}" type="radio" name="radio">
              </label>
            </td>
            <#list responseGroups as group>
              <#list group.fields as field>
            <td>{{${field.id}}}</td>
              </#list>
            </#list>
          </tr>
          {{/each}}
        </tbody>
      </table>
    </div>
    {{{{/raw}}}}
    {{> pager}}
  </script>
  {{/content}}

{{/extend}}