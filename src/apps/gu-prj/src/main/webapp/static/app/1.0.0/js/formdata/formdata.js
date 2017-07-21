+ function ($,app) {"use strict ";

  var render = function(elem, options){
    //
    //获取数据对象id
    //
    var objectId = elem.data('objectId');
    if(objectId && objectId != '-1') {
      var store = elem.data('formdataStore');
      if(store) {
        store = options[store];
      }

      if(store) {
        var data = {};
        $.each(store, function(i, v){
          data[v.name] = v.value;
        });
        console.log(data);
        options.callback = function(){
          elem.deserializeObject(data);
        };
      }
    }

    //渲染表单页面
    var jsformId = elem.data('jsformId');
    elem.jsform(options);

    var formdataHandle = $(elem.data('formdataHandle'));
    if(formdataHandle) {
      $('.save', formdataHandle).click(function(){
        var obj = elem.serializeObject();
        var requestData = [];
        $.each(obj, function(i, v){
          requestData.push({'formId':jsformId,'objectId':objectId,'name':i,'value':v});
        });

        $.ajax({
          type : 'post',
          async : true,
          contentType: 'application/json',
          dataType : 'json',
          cache: false,
          url: app.base+'/formdata/save',
          data: JSON.stringify(requestData),
          success: function(data, textStatus, jqXHR) {
            if(app.isOK(data)) {
              objectId = data.payload;
              app.alertOK('保存成功');
              return;
            }
            app.alertError(data.errors.join('\n'));
          }
        });
      });
    }

  };

  $.fn.formdata = function(options) {
    return this.each(function(){
      render($(this), options);
    });
  };

} (window.jQuery,window.app);