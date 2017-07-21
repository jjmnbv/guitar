 <%@ page contentType="text/html;charset=UTF-8" %>

<div class="row">
  <div class="col-md-5 col-sm-12">
    <div style="padding-top:8px;">共 {{page.totalPages}} 页 {{page.totalElements}} 条记录</div>
  </div>
  <div class="col-md-7 col-sm-12">
    <ul class="pagination pull-right">
      {{#if (page-first)}} 
      <li class="prev disabled"><a href="#"><i class="fa fa-angle-left"></i>上一页</a></li> 
      {{else}}
      <li class="prev" data-page-number="{{page-prev}}"><a href="#"><i class="fa fa-angle-left"></i>上一页</a></li>
      {{/if}}
      {{#each pages}}
      <li{{#if (page-current)}} class="active"{{else}} data-page-number="{{this}}"{{/if}}><a href="#">{{this}}</a></li>
      {{/each}}
      {{#if (page-last)}}
      <li class="next disabled"><a href="#">下一页<i class="fa fa-angle-right"></i></a></li>
      {{else}}
      <li class="next" data-page-number="{{page-next}}"><a href="#">下一页<i class="fa fa-angle-right"></i></a></li>
      {{/if}}
    </ul>
  </div>
</div>