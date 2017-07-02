+ function($, app) {
	app.registerTextHelper('ratSts', app.ratSts, 'code', 'name');
	app.registerTextHelper('auUpdInd', app.auUpdInd, 'code', 'name');
	app.registerTextHelper('curCd',app.curCd, 'code', 'name');
}(window.jQuery, window.app);
$(function(){
	  var $ = window.jQuery;
	    var app = window.app;
	 $('.ratSts').selectloader({'ratSts': app.ratSts});
	  $('.auUpdInd').selectloader({'auUpdInd':app.auUpdInd});
	  $('.curCd').selectloader({'curCd': app.curCd});
	  
	  app.context.formHtml = $('#form-template').html();
	  app.context.formInit = function (form) {
		  
		  form.find('.ratSts').selectloader({'ratSts': app.ratSts});
	      form.find('.auUpdInd').selectloader({'auUpdInd': app.auUpdInd});
		  $('.curCd').selectloader({'curCd': app.curCd});
	      app.bindFormValidation(form);
	      validatorNotExists(form); 
	  };
	  
	  /**
	   * 添加基准利率分类
	   */
	  
	  $('#add').getModal({
	    title: '新增基准利率分类',
	    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
	    showBefore: function (modal) {
	      app.context.showBefore({
	        modal: modal
	      }, app, app.context.formInit);
	    },
	    hideAfter: function (modal) {
	      modal.setBody(app.context.formHtml);
	    }
	  }, function (modal) {
	      app.context.submit({
	      modal: modal,
	      url: app.PARRATTYP_CREATE
	    }, app);
	  });
	  
	  /**
	  *
	  *还款方式编号的唯一性 
	  * */
	 
	 var validatorNotExists = function (form) {
		     $("input[name='ratTyp']", form).rules("add", {
	             synchronousRemote: {
		         url: app.PARRATTYP_NOTEXISTS,
		         type: "POST",
		         dateType: "text",
		         data:{
		        	 ratTyp:function(){ return form.find('[name="ratTyp"]').val(); }
		         }
		       },	
		       messages: {
	             synchronousRemote: "该编码已存在！"
		       },
	             onkeyup: false,
	             onfocusout: false
		     });
	  };
	  
	  /**
	   * 自定义校验利率档次类型
	   */

	  $.validator.addMethod("checkRatTyp",function(value,element){
	    return this.optional(element)||( /^[0-9A-Z+]+$/.test(value));
	  },"只限数字、大写字母、+"); 
		  
	  /**
	   * 修改基准利率分类
	   */

	  $('#edit').getModal({
	    selector: function () {
	      return !!$('[type=radio]:checked').length;
	    },
	    compileBefore: function () {
	      var ratTyp = $('[type=radio]:checked').data('id');
	      window.location.href="parRatyp-edit.html?ratTyp="+ratTyp;
	    }
	  });
	  
	  /**
	   * 删除基准利率分类
	   */
	 
	  $('#delete').getModal({
	    text: '确定要删除该条基准利率分类吗？',
	    size: 'modal-sm',
	    selector: function () {
	      return !!$('[type=radio]:checked').length;
	    }
	  }, function (modal) {
		  var ratTyp = $('[type=radio]:checked').data('id');
	    app.context.submit({
	      modal: modal,
	      url: app.PARRATTYP_REMOVE+ratTyp,
	      text: '删除成功',
	      isEasyModal: true
	    }, app);
	  });
	  
	  
	 /**
	  * 时间区间校验
	  */
	  $("#time-zone").on('click',function(){
		  data={ 'data':null }
		  app.$post(app.PARRATTYP_TIMEZONEISCONTIONE,data).done(function(data){
				if(app.isOK(data)){
					app.alertOK('时间区间连续');
				}else{
					var errors = data.errors.join(',');
					  app.alertError(errors || '时间区间不连续！');
				}
				
			 });
	  })

});
