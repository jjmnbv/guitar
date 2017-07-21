+ function ($,app) {"use strict ";

  var render = function(elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('jsformStore');
    if(store){
      store = options[store];
    }

    if(store) {
      var tempplateUrl = app.base+'/static/handlebars-template/form';
      app.$get(tempplateUrl).done(function(template){
        elem.append(Handlebars.compile(template)(store));
        var init = function() {
          var dictionary = [{"code":"1","name":"选择1"},{"code":"2","name":"选择2"}];
          $('.radio-list.dictionary', elem).data('radioloaderVkey', 'code').data('radioloaderTkey', 'name').data('radioloaderStore', 'dictionary').radioloader({'dictionary':dictionary});
          $('.checkbox-list.dictionary', elem).data('checkboxloaderVkey', 'code').data('checkboxloaderTkey', 'name').data('checkboxloaderStore', 'dictionary').checkboxloader({'dictionary':dictionary});

          //初始化日期控件
          $('.date-picker', elem).datepicker({
            rtl: App.isRTL(),
            autoclose: true,
            language: "zh-CN"
          });
        };
        init();
        $("input,select,textarea", elem).attr("disabled",true);

        var reloadElem = function(store) {
          var jsformStore = {};
          jsformStore[elem.data('jsformStore')] = store;
          $("#paramform").empty().append('没有选择字段。请先在右侧选择需要编辑的字段，然后在此编辑字段的属性。');
          elem.empty().jsform(jsformStore);
        };

        var paramform = $("#paramform");
        var thizparam;
        var templateId;
        $("[data-jsform]", elem).click(function(){
          $(".paramsave").removeAttr("disabled");
          var thiz = $(this);
          $("[data-jsform]", elem).removeClass("active");
          thiz.addClass("active");

          var jsform = thiz.data("jsform");

          var actions = '<div class="fieldActions" data-iconfont-type="{{iconfontType}}"><i title="新增元素" href="#" class="iconfont faDup">＋</i><i title="删除" href="#" class="iconfont faDel">—</i></div>'
          $("[data-jsform] .fieldActions", elem).remove();
          thiz.append(Handlebars.compile(actions)({'iconfontType':jsform}));
          var thizIndex;
          var thizparentparam;

          if(jsform == 'main-portlet') {
            thizparam = store;
            templateId = "#main-portlet";
            $(".fieldActions>i.faDel", thiz).remove();

            if(store.portlets && store.portlets.length) {
              thizIndex = store.portlets.length-1;
            }else{
              thizIndex = 0;
              store.portlets = [];
            }
            thizparentparam = store.portlets;
          }else if(jsform == 'portlets'){
            thizparam = store.portlets[thiz.data("portletsIndex")];
            templateId = "#portlets";
            $(".fieldActions", thiz).prepend('<i title="新增一行" href="#" class="iconfont faDupRow">+row</i>');

            thizparentparam = store.portlets;
            thizIndex = thiz.data("portletsIndex");
          }else if(jsform == 'input-group'){
            var portletsIndex = thiz.data("portletsIndex");
            var rowsIndex = thiz.data("rowsIndex");
            var colsIndex = thiz.data("colsIndex");
            templateId = "#input-group-"+thiz.data("inputGroupType");
            thizparam = store.portlets[portletsIndex].rows[rowsIndex].cols[colsIndex];

            thizparentparam = store.portlets[portletsIndex].rows[rowsIndex].cols;
            thizIndex = colsIndex;
          }else if(jsform == 'table-portlet'){
            var portletsIndex = thiz.data("portletsIndex");
            var rowsIndex = thiz.data("rowsIndex");
            var colsIndex = thiz.data("colsIndex");

            thizparam = store.portlets[portletsIndex].rows[rowsIndex].cols[colsIndex];
            templateId = "#table-portlet";
            $(".fieldActions", thiz).prepend('<i title="新增一行" href="#" class="iconfont faDupTr">+tr</i>');

            thizparentparam = store.portlets[portletsIndex].rows[rowsIndex].cols;
            thizIndex = colsIndex;
          }else if(jsform == 'table-portlet-th'){
            var portletsIndex = thiz.data("portletsIndex");
            var rowsIndex = thiz.data("rowsIndex");
            var colsIndex = thiz.data("colsIndex");
            var thsIndex = thiz.data("thsIndex");

            thizparam = store.portlets[portletsIndex].rows[rowsIndex].cols[colsIndex].ths[thsIndex];
            templateId = "#table-portlet-th";
            if(thsIndex == 0) {
              $(".fieldActions>i.faDel", thiz).remove();
            }

            thizparentparam = store.portlets[portletsIndex].rows[rowsIndex].cols[colsIndex].ths;
            thizIndex = thsIndex;
          }else if(jsform == 'table-portlet-td'){
            var portletsIndex = thiz.data("portletsIndex");
            var tdType = thiz.data("tdType");
            var rowsIndex = thiz.data("rowsIndex");
            var colsIndex = thiz.data("colsIndex");
            var trsIndex = thiz.data("trsIndex");
            var tdsIndex = thiz.data("tdsIndex");

            thizparam = store.portlets[portletsIndex].rows[rowsIndex].cols[colsIndex].tbody_trs[trsIndex].tds[tdsIndex];
            templateId = "#table-portlet-td-"+tdType;
            if(trsIndex == 0 && tdsIndex == 0) {
              $(".fieldActions>i.faDel", thiz).remove();
            }

            thizparentparam = store.portlets[portletsIndex].rows[rowsIndex].cols[colsIndex].tbody_trs[trsIndex].tds;
            thizIndex = tdsIndex;
          }else if(jsform == 'rows') {
            var portletsIndex = thiz.data("portletsIndex");
            var rowsIndex = thiz.data("rowsIndex");
            templateId = "#input-group-rows";
            thizparam = store.portlets[portletsIndex].rows[rowsIndex];
            $(".fieldActions", thiz).prepend('<i title="新增一列" href="#" class="iconfont faDupCol">+col</i>');

            thizparentparam = store.portlets[portletsIndex].rows;
            thizIndex = rowsIndex;
          }

          paramform.empty().append(Handlebars.compile($(templateId).html())(thizparam));

          $('.fieldActions>i.faDupTr', thiz).click(function(){
            var newIndex = thizparam.tbody_trs.length;
            var newelem = {"tds":[{"name":"newtd","dispOrder":0}],"dispOrder":newIndex};
            thizparam.tbody_trs.splice(newIndex, 0, newelem);
            reloadElem(store);
          });
          $('.fieldActions>i.faDupCol', thiz).click(function(){
            var newIndex = 0;
            if(thizparam.cols && thizparam.cols.length) {
              newIndex = thizparam.cols.length;
            }else{
              thizparam.cols = [];
            }
            var newelem = {"name":"newelem","label":"新的子段","width":"4","dispOrder":newIndex};
            thizparam.cols.splice(newIndex, 0, newelem);
            reloadElem(store);
          });
          $('.fieldActions>i.faDupRow', thiz).click(function(){
            var newIndex = 0;
            if(thizparam.rows && thizparam.rows.length) {
              newIndex = thizparam.rows.length;
            }else{
              thizparam.rows = [];
            }
            var newelem = {"cols":[],"dispOrder":newIndex};
            thizparam.rows.splice(newIndex, 0, newelem);
            reloadElem(store);
          });
          $('.fieldActions>i.faDup', thiz).click(function(){
            var newelem = {"name":"新节点","label":"新节点","dispOrder":thizIndex+1};
            if(jsform == 'input-group') {
              newelem.width = thizparam.width;
            }
            $.each(thizparentparam, function(i,v){ //排序调整
              if(i > thizIndex) { v.dispOrder = parseInt(v.dispOrder)+1; }
            });
            thizparentparam.splice(thizIndex+1, 0, newelem);
            reloadElem(store);
          });
          $('.fieldActions>i.faDel', thiz).click(function(){
            $.each(thizparentparam, function(i,v){ //排序调整
              if(i > thizIndex) { v.dispOrder = parseInt(v.dispOrder)-1; }
            });
            thizparentparam.splice(thizIndex, 1);
            reloadElem(store);
          });

          var paramformFieldAction = function(templateId, thizparam) {
            $('.fieldActions[data-iconfont-type="hiddenInputs"]>i.faDup', paramform).unbind().click(function(){
              var iconfontIndex = $(this).parent().data('iconfontIndex');
              var iconfontType = $(this).parent().data('iconfontType');
              if(iconfontIndex == -1) {
                if(thizparam[iconfontType] && thizparam[iconfontType].length) {
                  iconfontIndex = thizparam[iconfontType].length - 1;
                }else{
                  thizparam[iconfontType] = [];
                  iconfontIndex = 0;
                }
              }
              var newhide = {"name":"newhide","placeholder":"新的隐藏子段","dispOrder":iconfontIndex+1};
              $.each(thizparam[iconfontType], function(i,v){ //排序调整
                if(i > iconfontIndex) { v.dispOrder = parseInt(v.dispOrder)+1; }
              });
              thizparam[iconfontType].splice(iconfontIndex+1, 0, newhide);
              paramform.empty().append(Handlebars.compile($(templateId).html())(thizparam));
              paramformFieldAction(templateId, thizparam);
            });
            $('.fieldActions[data-iconfont-type="hiddenInputs"]>i.faDel', paramform).unbind().click(function(){
              var iconfontIndex = $(this).parent().data('iconfontIndex');
              var iconfontType = $(this).parent().data('iconfontType');
              $.each(thizparam[iconfontType], function(i,v){ //排序调整
                if(i > iconfontIndex) { v.dispOrder = parseInt(v.dispOrder)-1; }
              });
              thizparam[iconfontType].splice(iconfontIndex, 1);
              paramform.empty().append(Handlebars.compile($(templateId).html())(thizparam));
              paramformFieldAction(templateId, thizparam);
            });
            $('select.input-group-type', paramform).unbind().change(function(){
              thizparam.type = $(this).val();
              var inputGroupType = $(this).val();
              if(inputGroupType == 'table') {
                templateId = "#table-portlet";
              }else{
                templateId = "#input-group-"+inputGroupType;
              }

              if(inputGroupType == 'table') {
                if(!thizparam.ths) {
                  thizparam.ths = [{"name":"newth","dispOrder":0}];
                }
                if(!thizparam.tbody_trs) {
                  thizparam.tbody_trs = [{"tds":[{"name":"newtd","dispOrder":0}],"dispOrder":0}];
                }
              }else if(inputGroupType == 'date_picker') {
                if(!thizparam.dateFormat) thizparam.dateFormat = 'yyyy-mm-dd';
              }
              paramform.empty().append(Handlebars.compile($(templateId).html())(thizparam));
              paramformFieldAction(templateId, thizparam);
            });
            $('select.table-input-group-type', paramform).unbind().change(function(){
              thizparam.type = $(this).val();
              var inputGroupType = $(this).val();
              if(inputGroupType == 'label') {
                templateId = "#table-portlet-td-label";
              }else{
                templateId = "#table-portlet-td-text";
              }
              paramform.empty().append(Handlebars.compile($(templateId).html())(thizparam));
              paramformFieldAction(templateId, thizparam);
            });
            $('input,select:not(.input-group-type,.table-input-group-type)', paramform).unbind().change(function(){
              var thizinput = $(this);
              var thizname = thizinput.attr('name');
              var names = thizname.split(/\[|\]\./);
              var inputparam = thizparam;
              $.each(names, function(i,v){
                if(i < names.length-1) {
                  inputparam = inputparam[v];
                }
              });
              inputparam[names[names.length-1]] = thizinput.val();
            });
          };
          paramformFieldAction(templateId, thizparam);

        });

        $(".paramsave").unbind().click(function(){
          var paramform = $("#paramform");
          reloadElem(store);
          var url = app.base+'/jsform/save';

          $.ajax({
            type : 'post',
            async : true,
            contentType: 'application/json',
            dataType : 'json',
            cache: false,
            url: url,
            data: JSON.stringify(store),
            success: function(data, textStatus, jqXHR) {
              if(data.resultCode == 'SUCCESS') {
                store.id = data.payload.id;
              }
            }
          });

        });

      });
    }
  };

  $.fn.jsform = function(options) {
    return this.each(function(){
      render($(this), options);
    });
  };

} (window.jQuery,window.app);
