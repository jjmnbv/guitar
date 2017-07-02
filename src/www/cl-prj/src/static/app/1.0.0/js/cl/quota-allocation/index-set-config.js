 + function($, app) {
   //翻译字典项列表
   app.registerTextHelper('indexCode', app.indexCodeList, 'code', 'name');
   app.registerTextHelper('isCycle', app.isCycleList, 'code', 'name');
   app.registerTextHelper('linPuCd', app.linPuCdList, 'code', 'name');
   app.registerTextHelper('limitUserCode', app.limitUserCodeList, 'code', 'name');
   
   /*获取弹框模板*/
   app.context.formHtml = $('#form-template').html();
   /*初始化弹框*/
   app.context.formInit = function(form) {
       form.find('.selLoader').selectloader(app);
       form.find('.radioLoader').radioloader(app);
       $("input").uniform();
	 
   };
   
// 二级弹窗
   /* bootstrap-select model 下展示控制wkd复制*/
   $('.modal.fade').on('shown.bs.modal', function() {
     $(this).css("z-index","10060");
     //搜索字典弹出框拼接
     var indexCodeVar = app.indexCodeList;
     var indexCodeName = '';
     var indexCodeVal = '';
     for(var i = 0; i < indexCodeVar.length; i++) {
       var trHtml = '<tr><td><input type="checkbox" name="indexCode" value=' + indexCodeVar[i].code +
         ' data-name=' + indexCodeVar[i].name + ' /></td>' +
         '<td>' + indexCodeVar[i].name + '</td></tr>'
       $("#indexCodeListTr").append(trHtml);
     }
     $("input").uniform();
     //选中后赋值
     $("#confirmY").click(function() {
       var indexCodeList = $("#indexCodeListTr").find("input[name='indexCode']:checked");
       var indexCodeVal = '';
       var indexCodeName = '';
       for(var j = 0; j < indexCodeList.length; j++) {
         indexCodeVal = indexCodeVal + "," + indexCodeList[j].value;
         indexCodeName = indexCodeName + "," + indexCodeList[j].getAttribute('data-name');
       }
       $(".modal.fade.in").find("#inCoModalVal").val(indexCodeVal.substr(1));
       $(".modal.fade.in").find("#inCoModalName").val(indexCodeName.substr(1));
     });
   });
   $('.modal.fade').on('hide.bs.modal', function() {
     $("#indexCodeListTr").html('');
   });
  
     /*新增*/
   $('#add').getModal({
       title: "新增指标集",
       body: app.context.formHtml,
       showBefore: function(modal) {
         app.context.showBefore({
           modal: modal,
         }, app, app.context.formInit)
       },
	    showAfter:function(modal){
       validateIndexsetcodeExists(modal.find("form"));
       app.bindFormValidation(modal.find("form"));
		   },
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.INDEX_SET_ADD
       }, app)
     });
     /*修改*/
   $('#update').getModal({
       title: "修改指标集",
       body: app.context.formHtml,
       selector: function() {
         return !!$('#update').parents('.portlet').find('[type=radio]:checked').length;
       },
       showBefore: function(modal) {
         app.context.showBefore({
           url: app.INDEX_SET_VIEW,
           modal: modal,
           param: $('#update').parents('.portlet').find('[type=radio]:checked').data('id')
         }, app, app.context.formInit);
       },
       showAfter:function(modal){
         //通过code翻译name
         var indexCodeStrList = modal.find("#inCoModalVal").val().split(",");
         var indexCodeList = app.indexCodeList;
         var indexCodeVal = '';
         var indexCodeName = '';
         for(var j=0;j<indexCodeStrList.length;j++){
           for(var i=0;i<indexCodeList.length;i++){
             if(indexCodeList[i].code==indexCodeStrList[j]){
               indexCodeName = indexCodeName+","+indexCodeList[i].name;
             }
           }
		 }
	   modal.find("#indexSetCode").attr("readOnly","readOnly");
       modal.find("#inCoModalName").val(indexCodeName.substr(1));
       },
       hideAfter: function(modal) {
         modal.setBody(app.context.formHtml)
       }
     }, function(modal) {
       app.context.submit({
         modal: modal,
         url: app.INDEX_SET_UPDATE
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
       url: app.INDEX_SET_REMOVE+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id'),
       text: "删除成功",
       isEasyModal: true
     }, app)
   })

	/*指标集代码远程校验*/
  var validateIndexsetcodeExists = function(form) {
    $("#indexSetCode", form).rules("add", {
      remote: {
        url: app.INDEX_SET_EXIST,
        type: "POST",
        dateType: "text",
        data: {
          id: function() {
            return form.find('#indexSetCode').val();
          }
        }
      },
      messages: {
        remote: "指标集代码已经存在！"
      }
    });
  };
  
$(function(){
    $("#indexCodeModal").on('hide.bs.modal', function() {
    $("#bootstrap-select-box").css("z-index", "10060");
});
});
  
 }(window.jQuery, window.app);
 
