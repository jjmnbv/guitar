$(function () {
  var $ = window.jQuery;
  var app = window.app;
	$('#top .button').eq(0).css('right','155px');
  app.context.formHtml = $('#form-template').html();
  $('.holTyp').selectloader({holTypList:app.dicts.dict_3034});
  app.registerTextHelper('holTyp', app.dicts.dict_3034, 'code', 'name');
  
  app.context.formInit = function (form) {
	    /*   初始化弹窗里的下拉框   */
		  form.find('.holTyp').selectloader({holTypList:app.dicts.dict_3034});		 
		  app.bindFormValidation(form);
	  };
	  /**
	   * 弹窗赋时间
	   */
	var days;
	var noli;
	$('#cm').delegate('.cell', 'click', function(){
	    var $this = $(this);
	    days = $this.find('.so').html();
	    noli = $this.find('.lunar').html();
	    if(days.length==1){
	    	days="0"+days;
	    }
	    $("#popup").trigger("click")
		
	})

	  $('#popup').getModal({
	      size: 'modal-lg',
	      title: '节假日维护',
	      body: app.context.formHtml,  //获取form的html模板，并填充到模态框中 
	     
	      showBefore: function (modal) {
	    	var year=  $('#top').find('select').eq(0).val();
	    	var mo=$('#top').find('select').eq(1).val();
	    	  if(mo.length==1){
	    		  mo="0"+mo;
	  	    }
	        var holDt=year+"-"+mo+"-"+days;

	 app.$getJSON(app.PARHOLDAYCFG_VIEW+"/"+holDt).done(function(data){
	     if(app.isOK(data)){
	    	 $('#holiday-form').deserializeObject(data)
	     }
	 });	  
	        $('#holDt').attr("readonly",true);
	       app.context.showBefore({
	          modal: modal,
	          param: holDt
	        }, app, app.context.formInit);
	      },


	      hideAfter: function (modal) {
	        modal.setBody(app.context.formHtml);

	      }
	    }, function (modal) {    	
	      var id = $('#holDt').val();
	      var holDt = $('#holDt').val();
	      var holTyp=$(".holTyp option:selected").val();
	      var holDayFrom ={
	    		  'holDt':holDt,
	    		  'holTyp':holTyp
	      }; 
	      if(holDt==""|| holTyp==""){
	    	  app.alertError('请选择节日类型')
	    	  return;
	      }
	      app.$post(app.PARHOLDAYCFG_UPDATE, holDayFrom).done(function(data){
	    	  if(app.isOK(data)){
			    	app.alertOK('保存成功！');
			    	 var resetY = $('#top').find('select').eq(0).val();
			    		var mo=$('#top').find('select').eq(1).val();
			    		var date=resetY+"-"+mo;
			    		window.location.href="parHolDayCfg-index.html?year="+resetY+"&month="+mo;
			    }
	    	   
	      })
	    });
	  /**
	   * 进页面刷新渲染日期
	   */
	var resetY = $('#top').find('select').eq(0).val();
	var mo=$('#top').find('select').eq(1).val();
	var date=resetY+"-"+mo;
		holDay(date);
		
	  
	  /**
	   * 异步后台查询节假日数据
	   */
	  $('#top').find('select').eq(1).on('change',function(){
		  var resetY = $('#top').find('select').eq(0).val();
			var mo=$('#top').find('select').eq(1).val();
			var date=resetY+"-"+mo;
			holDay(date);
	  });
	  $('#top').find('select').eq(0).on('change',function(){
		  var resetY = $('#top').find('select').eq(0).val();
			var mo=$('#top').find('select').eq(1).val();
			var date=resetY+"-"+mo;
			holDay(date);
	  });
	  
	  
		

	
  /**
   * 初始化全年周末
   */
  $('#resetHoliday').click(function () {
	  $("#resetHoliday").attr("disabled",true);
    var resetY = $('#top').find('select').eq(0).val();
	var mo=$('#top').find('select').eq(1).val();
	var date=resetY+"-"+mo;
 
    app.$post(app.PARHOLDAYCFG_INITWEEKS+"/"+resetY).done(function(data) {
    	if(app.isOK(data)){
    		holDay(date);
    		 $("#resetHoliday").attr("disabled",false);
        	window.location.href="parHolDayCfg-index.html?year="+resetY+"&month="+mo;
    	}    	
	  });  
  });
});
/**
 * 回到今天
 */
$('#back-toDay').click(function(){
	window.location.href="parHolDayCfg-index.html";
})

/**
 * 渲染字体
 * @param date
 * @returns
 */
function holDay(date){
	app.$getJSON(app.PARHOLDAYCFG_SELECTTHISMONTHHOLDAY+"/"+date).done(function(data) {
		var dicts = app.dicts.dict_3034;
		var restHolDay ={};
		var holDay=new Array();
		  $.each(data, function(index,values){
			  var holDt = values.holDt;
			  var holDate = new Date(holDt);
			  var day = holDate.getDate();
			  var holTyp = values.holTyp;
			  var holName = getDictName(holTyp, dicts, 'code', 'name');
			  restHolDay[day]=holName;		
			  holDay.push( eval('(' + day + ')'));
          });
			$('.cell').each(function(index, item){
		  		var textItem = $(item).find('.so')
		  		if($.inArray(Number(textItem.text()), holDay)!=-1){
		  			var value=holDay;
		  			textItem.css('color','#FF0000');
		  			textItem.next('.lunar').text(restHolDay[textItem.text()]).css('color','#FF0000');
		  		}else{
		  			textItem.next('.lunar').text('工作日');
		  		}

		  	})
	 }); 
	   
}

function getDictName(value, objs, vkey, tkey){
	for (var i in objs) {
        if(objs[i][vkey]==value){
        	return objs[i][tkey];
        }
    }
}