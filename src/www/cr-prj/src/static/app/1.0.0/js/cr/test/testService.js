$(function () {
    
    $("#detail").click(function(){
    	
    	var datas = $('#bsdForm').serializeObject();
    	app.$post(app.DETAIL_CHECK,datas).done(function (data) {
    		alert(data.resultCode)
        });
    	
    })
    
    $("#active").click(function(){
    	var activeRiTr = $("input[name='activeRiTr']").val();
    	var activeCuNo = $("input[name='activeCuNo']").val();
    	var datas = {
                'riTr':activeRiTr,
                'cuNo':activeCuNo
        	}
    	
    	app.$post(app.ACTIVE_CHECK,datas).done(function (data) {
    		alert(data.resultCode)
        });
    });
    
    $("#credit").click(function(){
    	var scoreRiTr = $("input[name='scoreRiTr']").val();
    	var scorecuNo = $("input[name='scorecuNo']").val();
    	var datas = {
                'riTr':scoreRiTr,
                'cuNo':scorecuNo
        	}
    	
    	app.$post(app.CREDIT_CHECK,datas).done(function (data) {
    		alert(data.resultCode)
        });
    });
    
    
    
});