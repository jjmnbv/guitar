
$(function () {
  var $ = window.jQuery;
  var app = window.app;
  var operatingMode;

    var ratTyp = GetQueryString("ratTyp");
    console.log(ratTyp);
    /**
     * 去后台获取值
     */
    app.$getJSON(app.PARRATTYP_VIEW+"/"+ratTyp).done(function(data) {
      if(app.isOK(data)){
        $('#partTypEditForm').deserializeObject(data)
      }
    })
    
    $('#ratTyp1').val(ratTyp);
    $(".portlet.box").eq(0).hide();
    
    $('.main-page').pagination({
        'first-store':app.firstStore
    });
    
    $('body').on('change','#minPlMoth',function(){
        if($(this).valid()){
           $(this).addClass("ltTo ");
        }
    });
    $('body').on('change','#maxPlMonth',function(){
        if($(this).valid()){
            $(this).addClass("gtTo ");
        }
    });

  $('.auUpdInd1').selectloader({'auUpdInd': app.auUpdInd});
  $('.ratSts').selectloader({'ratSts': app.ratSts});
  $('.curCd').selectloader({'curCd':app.curCd});
  app.context.formHtml = $('#form-template').html();
  app.context.formInit = function (form) {
      form.find('[name=inRa1]').on('change',function () {
         var $this = $(this);
         if($this.val().indexOf('%') != -1){
           var valNew = app.unformatPercent($this.val());
           $this.val(app.formatPercent(valNew*100));
             form.find('[name=inRa]').val(app.unformatPercent($this.val()));
         }else{
           $this.val(app.formatPercent($this.val()));
             form.find('[name=inRa]').val(app.unformatPercent($this.val()));
         }
      });

	  	app.bindFormValidation(form);
	    if(operatingMode =='add'){
	 	   validatorNotExists(form);
	    }else{
	 	   form.find('[name="valDt"]').prop('readonly', true)
	    }

  };
  
  $(function(){
	    $('#btn1').click(function(){
	        var url = $('#partTypEditForm').attr('action')
	        var data = $('#partTypEditForm').serializeObject()
	        
	        if($('#partTypEditForm').valid()){
	          app.$post(url, data).done(function (data) {
	            if (app.isOK(data)) {
	              app.alertOK('提交成功.');
	              return;
	            }
	          });
	        }
	      }) 
	  });
  /**
   * 添加利率档次信息
   */
 
  $('#add-child').getModal({
    title: '新增利率档次信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
    	operatingMode = 'add';
    	 modal.find(".date-picker-page").datepicker({
             rtl: App.isRTL(),
             orientation: "left",
             autoclose: !0,
             format: "yyyy-mm-dd",
             'start-date': "+0d",
             language: 'zh-CN'
         });
    	$("#rattyp").val(ratTyp);
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  },
  function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PARRATINF_CREATE
    }, app);
  });
  
  /**
  *
  *生效日期的唯一性 
  * */
 
 var validatorNotExists = function (form) {
	     $("input[name='valDt']", form).rules("add", {
             synchronousRemote: {
	         url: app.PARRATINF_NOTEXISTS,
	         type: "POST",
	         dateType: "text",
	         data:{
	        	 valDt: function(){   return form.find('[name="valDt"]').val();},
	        	 ratTyp:function(){   return form.find('[name="ratTyp"]').val();
		   	 }
	         }
	       },	
	       messages: {
               synchronousRemote: "该生效日期已存在！"
	       },
             onkeyup: false,
             onfocusout: false
	     });
	  };
  /**
   * 修改利率档次信息
   */
 
  $('#edit-child').getModal({
    title: '编辑利率档次信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
        operatingMode = 'edit';
	    $('input[name=valDt]').prop('readonly',true);
        $('[name=valDt]').next('span.input-group-btn').hide();
        $('input[name=valDt]').parents('.form-group-sel').addClass('setTimeGray');
      var id = encodeURI($('[type=radio]:checked').data('id')).replace(/\+/g,'%2B');
      var inRa = $('[type=radio]:checked').data('inra');
      $('[name=inRa1]').val(app.formatPercent(parseFloat(inRa)*100));
      if (!id) return;
      app.context.showBefore({
        url: app.PARRATINF_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      $('input[name=valDt]').prop('readonly',false);
      $('[name=valDt]').next('span.input-group-btn').show();
      $('input[name=valDt]').parents('.form-group-sel').removeClass('setTimeGray');
      $("input[name=inRa1]").val("");
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PARRATINF_UPDATE
    }, app);
  });
  /**
   * 删除利率档次信息
   */
 
  $('#delete-child').getModal({
    text: '确定要删除该条利率档次分类信息吗？',
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    }
  }, function (modal) {
	  var id = encodeURI($('[type=radio]:checked').data('id')).replace(/\+/g,'%2B');
    app.context.submit({
      modal: modal,
      url: app.PARRATINF_REMOVE+id,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });
});
