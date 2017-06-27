$(function () {
    var $ = window.jQuery;
    var app = window.app;
	var applyWater = app.request.applyWater;
    function viewImage(){
        $.getJSON(app.LOAN_IMAGE_VIEW+"/"+applyWater, function(data){
            if(app.isOK(data)) {
                window.open (app.yxbase+"?barno="+applyWater+"&permission=query&mode=update", "newwindow2", "height=550, width=1150, top=80, left=100,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
            }
        });
    }
    viewImage();
    /*上一步*/
    $('#previousPage').click(function () {
        window.location.href="/cb/loan-application/loan-information-views.html?applyWater="+applyWater;
    });
});
