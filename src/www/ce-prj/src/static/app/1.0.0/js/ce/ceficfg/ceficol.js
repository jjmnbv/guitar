$(function () {
  var $ = window.jQuery;
  var app = window.app;
    $('#ficol-read-form, #ficol-write-form').hide();
    app.colRwTypList=[
        //待字典添加之后做修改。
        {"code":"R", "name":"读"},
        {"code":"W", "name":"写"}
    ]
    $('.colRwTyp').selectloader({colRwTypList:app.colRwTypList});
    $('.dataFmtTyp').selectloader({dataFmtTypList: app.dicts.dict_3049});
    $('.numFmtTyp').selectloader({numFmtTypList: app.dicts.dict_3048});

    app.registerTextHelper('colRwTyp', app.colRwTypList, 'code', 'name');
    app.registerTextHelper('dataFmtTyp', app.dicts.dict_3049, 'code', 'name');
    app.registerTextHelper('numFmtTyp', app.dicts.dict_3048, 'code', 'name');

  /**
   *URL传值
   */
  function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
  }
    var fiId=GetQueryString("fiId");
    $('#colfiId1').val(fiId);
    $('.pagination-form .colFiId').val(fiId);
    $('#ficol-read-form .colRwTyp').val('R');
    $('#ficol-write-form .colRwTyp').val('W');

    $('.ficol-page').pagination({
        "first-store": app.firstStore
    });
  
  
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
	  
	  form.find('.colRwTyp').selectloader({colRwTypList:app.colRwTypList});
	  form.find('.dataFmtTyp').selectloader({dataFmtTypList:app.dicts.dict_3049});
	  form.find('.numFmtTyp').selectloader({numFmtTypList:app.dicts.dict_3048});
	  
    // 初始化时间插件
    form.find(".date-picker-page").datepicker({
      rtl: App.isRTL(),
      orientation: "left",
      autoclose: !0,
      format: "yyyy-mm-dd",
      'start-date': "+0d",
      language: 'zh-CN'
    });   
    app.bindFormValidation(form);
    if(operatingMode =='add'){
        validatorNotExists(form);
    }
//	$("[name=colRwTyp]").attr("disabled",true)
  };


  /**
   *异步请求取值
   */
  app.$getJSON(app.CEFICFG_VIEW+fiId ).done(function(data){
    if(app.isOK(data)){
      $('#ficolEditFrom').deserializeObject(data);
    var fixInd=  $('#fixLenInd').val();
    if(fixInd=="Y"){
    	$('#splFlg').attr('disabled',true)
    }else if(fixInd=="N"){
    	$('#addCh').attr('readonly',true);
    }
//      $('#fiId').attr('readonly',true);
//      $('#hdId').attr('readonly',true);
//      $('#fiCh').attr("disabled",true)
//      $('#fixLenInd').attr('disabled',true);
//      $('#addCh').attr('readonly',true);
//      $('#splFlg').attr('disabled',true);
//      $('#linSepFlg').attr('disabled',true);
//      $('#algFlg').attr('disabled',true);
//      $('#endFlg').attr('disabled',true);
//      $('#numTyp').attr('disabled',true);
//      $('#maxRcdNum').attr('readonly',true);
//      $('#maxFiSiz').attr('readonly',true);
//      $('#impClsNm').attr('readonly',true);
      
    }
  });
  /**
   * 编辑页面改变定长选项
   */
  $('[name=fixLenInd]').on('change',function(){
	  var ss = $(this).val(); 
		  if(ss=="Y"){
			$("[name=addCh]").addClass('required')
						.attr("disabled",false)
			 			.parent().siblings('label').addClass('fill');
			$("[name=splFlg]").val("").attr("disabled",true)
							.removeClass('required')
							.parent().siblings('label').removeClass('fill');
			$('#splFlg-error').hide();
						  
		  }else if(ss='N'){
  		$("[name=addCh]").val("").attr("disabled",true)
  					.removeClass('required')
						.parent().siblings('label').removeClass('fill');
  		$('#addCh-error').hide();
  		$("[name=splFlg]").attr("disabled",false)
						.addClass('required')
						.parent().siblings('label').addClass('fill');
		  }
  });
  
  
  /**
   *同一个文件编号下的字段及方法唯一性校验
   */
  var validatorNotExists = function (form) {
     

      $("[name='colSeq']", form).rules("add", {
          remote: {
              url: app.CEFICOL_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  colSeq:function(){ return form.find('[name="colSeq"]').val(); },
            	  colFiId:function(){ return form.find('[name="colFiId"]').val(); },
            	  colValFun:function(){ return form.find('[name="colValFun"]').val(); },
              }},
          messages: {
              remote: "该字段序号及对应的取数方法已存在！"
          }
      });
      $("[name='colValFun']", form).rules("add", {
          remote: {
              url: app.CEFICOL_NOTEXISTS,
              type: "POST",
              dateType: "text",
              data:{
            	  colValFun:function(){ return form.find('[name="colValFun"]').val(); },
            	  colFiId:function(){ return form.find('[name="colFiId"]').val(); },
            	  colSeq:function(){ return form.find('[name="colSeq"]').val(); },
            	 
              }},
          messages: {
              remote: "该字段序号及对应的取数方法已存在！"
          }
      });
  }
  
  /**
   * 主表信息保存按钮
   */
  $('#btn1').on('click',function(){
	var endflg=  $('#endFlg').val();
	$('#endFlg').val($.trim(endflg));
	 var par= $('#ficolEditFrom').serialize();
	 app.$post(app.CEFICFG_UPDATE,par).done(function(data){
		 if(app.isOK(data)){
			 app.alertOK("提交成功")
		 }
	 })
  });

  /**
   * 增加操作的弹框
   */
    ficolAdd($('#add-childR'),$('.ficol-read-table'));
    ficolAdd($('#add-childW'),$('.ficol-write-table'));
    function ficolAdd(clickTarget,radioParent){
        clickTarget.getModal({
            title: '新增文件字段格式表',
            body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
            showBefore: function (modal) {
                operatingMode='add';
                app.context.showBefore({
                    modal: modal
                }, app, app.context.formInit);
               modal.find('[name=colFiId]').val(fiId).attr('readonly',true);
               modal.find('[name=colRwTyp]').val( clickTarget.parents('.ficol-page').find('.pagination-form .colRwTyp').val()).attr('disabled',true);
            },
            hideAfter: function (modal) {
                modal.setBody(app.context.formHtml);
            }
        }, function (modal) {
            modal.find('[name=colRwTyp]').attr('disabled',false);
            app.context.submit({
                modal: modal,
                url: app.CEFICOL_CREATE
            }, app);
        });

    }
  /**
   * 修改文件字段格式表
   */
    ficolEdit($('#edit-childR'),$('.ficol-read-table'));
    ficolEdit($('#edit-childW'),$('.ficol-write-table'));
    function ficolEdit(clickTarget,radioParent){
        clickTarget.getModal({
            title: '编辑文件字段格式表',
            body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
            selector: function (modal) {
                return !!radioParent.find('[type=radio]:checked').length;
            },
            showBefore: function (modal) {
                operatingMode = 'edit';
                var id = radioParent.find('[type=radio]:checked').data('id');
                if (!id) return;
                app.context.showBefore({
                    url: app.CEFICOL_VIEW,
                    modal: modal,
                    param: id
                }, app, app.context.formInit);
            },
            showAfter:function (modal) {
                modal.find('[name=colRwTyp]').attr('disabled',true);
            },
            hideAfter: function (modal) {
                modal.setBody(app.context.formHtml);
                modal.find('[name=colRwTyp]').attr("disabled",false);
            }
        }, function (modal) {
            modal.find('[name=colRwTyp]').attr("disabled",false);
            app.context.submit({
                modal: modal,
                url: app.CEFICOL_UPDATE
            }, app);
        });

    }

    /**
     * 删除文件字段格式表
     */
    ficolDelete($('#delete-childR'),$('.ficol-read-table'));
    ficolDelete($('#delete-childW'),$('.ficol-write-table'));
    function ficolDelete(clickTarget,radioParent){
        clickTarget.getModal({
            text: '确定要删除该条文件字段格式吗？',
            size: 'modal-sm',
            selector: function () {
                return !!radioParent.find('[type=radio]:checked').length;
            }
        }, function (modal) {
            var colId=radioParent.find('[type=radio]:checked').data('colid');
            app.context.submit({
                modal: modal,
                url: app.CEFICOL_REMOVE+colId,
                text: '删除成功',
                isEasyModal: true
            }, app);
        });
    }
});