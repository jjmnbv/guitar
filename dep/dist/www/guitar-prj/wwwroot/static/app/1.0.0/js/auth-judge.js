/*
+ function($, app) {

  /!*图标权限判断lyf*!/
  var markArray = app.pathArray;
  if(markArray != undefined){
    for(var j = 0; j < markArray.length; j++) {
    var markFlag = markArray[j].code;
    if(!markArray[j].flag) {
      var typeFlag = $('#' + markFlag).is('button');
      if(typeFlag) {
        $('#' + markFlag).attr('disabled', 'disabled');
      } else {
        var classOnly = $('#' + markFlag).attr('class');
        $('#' + markFlag).addClass(classOnly + '-disabled').removeClass(classOnly);
        $('#' + markFlag).attr('href', "javaScript:;");
        $('#' + markFlag).attr('id', '');
        $('#' + markFlag).data('target',"");
      }
    }
  }
  }
}(window.jQuery, window.app);*/
