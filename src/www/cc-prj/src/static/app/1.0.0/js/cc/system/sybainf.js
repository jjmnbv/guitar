$(function(){
	 var $ = window.jQuery;
	 var app = window.app;
	 $('.onlInd').selectloader({onlIndList:app.dicts.dict_3002});
	 $('.ngtInd').selectloader({ngtIndList:app.dicts.dict_3050});
     $('.batSts').selectloader({batStsList:app.dicts.dict_3050});
     $('.dfCrCd').selectloader({'dfCrCdList': app.dict_cfg.dict_cfg_CurTyp});
	 
     app.$getJSON(app.SYBAINF_PAGE+'/'+0).done(function (data) {
	      if(app.isOK(data)){
	    	  $('#sybainf-form').deserializeObject(data.content[0]);
	    	  
	    	  $(".onlInd, .dfCrCd, .ngtInd, .batSts").attr('disabled', true);
	    	  $('select').selectpicker('refresh');
	      }
    });
     
});

