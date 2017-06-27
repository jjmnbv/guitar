 + function($, app) {
   //翻译字典项列表
   app.registerTextHelper('indexCode', app.indexCodeList, 'code', 'name');
   app.registerTextHelper('indexOneCode', app.indexOneCodeList, 'code', 'name');
   app.registerTextHelper('indexTwoCode', app.indexTwoCodeList, 'code', 'name');
   
   /*获取弹框模板*/
   app.context.formHtml = $('#form-template').html();
   /*初始化弹框*/
   app.context.formInit = function(form) {
       app.bindFormValidation(form);
       form.find('.dictionarys').selectloader(app);
       form.find('.radioLoader').radioloader(app);
       $("input").uniform();
   };
   
// 二级弹窗
   /* bootstrap-select model 下展示控制wkd复制*/
   $('.modal.fade').on('shown.bs.modal', function(event) {
     var dataTarget = $(this).attr("id");
     var eventSource = document . querySelector( '[data-target="#'+dataTarget+'"]' );
     var searchParam = $(eventSource).data("code");
     var postUrl;
     switch(searchParam) {
       case 'JG':
         postUrl = app.INDEX_SET_NO_SEARCH_JG
         break;
       case 'JL':
         postUrl = app.INDEX_SET_NO_SEARCH_JL
         break;
       case 'KH':
         postUrl = app.INDEX_SET_NO_SEARCH_KH
         break;
       case 'SD':
         postUrl = app.INDEX_SET_NO_SEARCH_SD
         break;
       case 'CP':
         postUrl = app.INDEX_SET_NO_SEARCH_CP
         break;
       case 'HY':
         postUrl = app.INDEX_SET_NO_SEARCH_HY
         break;
       case 'FK':
         postUrl = app.INDEX_SET_NO_SEARCH_FK
         break;
       case 'DQ':
         postUrl = app.INDEX_SET_NO_SEARCH_DQ
         break;
       case 'XM':
         postUrl = app.INDEX_SET_NO_SEARCH_DQ
         break;
       default:
         break;
     };
     $(this).css("z-index", "10060");
     $(this).find(".pagination-container").data("pageUrl", postUrl);
     $("#"+dataTarget+"List").pagination({});
     $("input").uniform();
     //选中后赋值
     $("#confirmCode").click(function() {
       var indexCodeRadio = $(".modal.fade.in").find("input[name='radioCheck']:checked");
       $(".modal.fade.in").find("#inCoModalVal").val(indexCodeRadio.data("indexnumber"));
         /*检验提示不消失*/
         $("input[name='indexNumber']").trigger('blur');
     });
     $("#confirmOneCode").click(function() {
       var indexCodeRadio = $(".modal.fade.in").find("input[name='radioCheck']:checked");
       $(".modal.fade.in").find("#indexOneCodeName").val(indexCodeRadio.data("indexnumber"));
         /*检验提示不消失*/
       $("input[name='indexOneNumber']").trigger('blur');
     });
     $("#confirmTwoCode").click(function() {
       var indexCodeRadio = $(".modal.fade.in").find("input[name='radioCheck']:checked");
       $(".modal.fade.in").find("#indexTwoCodeName").val(indexCodeRadio.data("indexnumber"));
         /*检验提示不消失*/
         $("input[name='indexTwoNumber']").trigger('blur');

     });
   });
   $('.modal.fade').on('hide.bs.modal', function() {
     $(this).css("z-index", "auto");
     $('#bootstrap-select-box').css("z-index", "10060")
   });
   

     /*新增*/
   $('#add').getModal({
       title: "新增指标集编号",
       body: app.context.formHtml,
       size:"modal-sm",
       showBefore: function(modal) {
         app.context.showBefore({
           modal: modal,
           url: app.INDEX_SET_NO_SEARCH_BEFORE,
           param: app.request.indexSetCode,
           dataJson: true
         }, app, app.context.formInit,null,app.context.formHtml)
       },
       showAfter:function(modal){
           validateIndexsetNumberExists(modal.find("form"));
           validateLimitNumberExists(modal.find("form"));
         modal.find('.dictionarys').selectloader(app);
       },
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.INDEX_SET_NO_ADD
       }, app)
     })
     /*修改*/
   $('#update').getModal({
       title: "修改指标集编号",
       body: app.context.formHtml,
       size:"modal-sm",
       selector: function() {
         return !!$('#update').parents('.portlet').find('[type=radio]:checked').length;
       },
       showBefore: function(modal) {
         app.context.showBefore({
           url: app.INDEX_SET_NO_VIEW,
           modal: modal,
           param: $('#update').parents('.portlet').find('[type=radio]:checked').data('id'),
           dataJson: true
         }, app, app.context.formInit,null,app.context.formHtml);
       },
       showAfter:function(modal){
         modal.find('.dictionarys').selectloader(app);
         modal.find("input[name='indexSetNumber']").attr("readonly",true);
         modal.find("input[name='indexLimit.limitNumber']").attr("readonly",true);
         
       },
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.INDEX_SET_NO_UPDATE
       }, app)
     })
     /*删除*/
   $('#delete').getModal({
     text: "确定要删除该条记录吗?",
     size: "modal-sm",
     selector: function() {
       return !!$('#delete').parents('.portlet').find('[type=radio]:checked').length;
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.INDEX_SET_NO_REMOVE+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id'),
       text: "删除成功",
       isEasyModal: true
     }, app)
   })


     /*指标集编号远程校验*/
     var validateIndexsetNumberExists = function(form,indexSetNumber) {
         $("#indexSetNumber", form).rules("add", {
             remote: {
                 url: app.INDEX_SET_NO_INDEXSETNUMBER_EXIST,
                 type: "POST",
                 dateType: "text",
                 data: {
                     id: function() {
                         return form.find('#indexSetNumber').val();
                     }
                 }
             },
             messages: {
                 remote: "指标集编号已经存在！"
             }
         });
     };

     /*额度编号远程校验*/
     var validateLimitNumberExists = function(form,limitNumber) {
         $("#limitNumber", form).rules("add", {
             remote: {
                 url: app.INDEX_SET_NO_INDEXLIMIT_EXIST,
                 type: "POST",
                 dateType: "text",
                 data: {
                     id: function() {
                         return form.find('#limitNumber').val();
                     }
                 }
             },
             messages: {
                 remote: "额度编号已经存在！"
             }
         });
     };
 }(window.jQuery, window.app);
 
