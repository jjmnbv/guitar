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
      var tempplateUrl = app.base+'/static/handlebars-template/jsform';
      app.$get(tempplateUrl).done(function(template){
        elem.append(Handlebars.compile(template)(store));
        $('select.dictionary', elem).data('selectloaderVkey', 'code').data('selectloaderTkey', 'name').selectloader(app.wordbooks);
        $('.radio-list.dictionary', elem).data('radioloaderVkey', 'code').data('radioloaderTkey', 'name').radioloader(app.wordbooks);
        $('.checkbox-list.dictionary', elem).data('checkboxloaderVkey', 'code').data('checkboxloaderTkey', 'name').checkboxloader(app.wordbooks);

        $('select.prodSelect', elem).data('selectloaderStore', 'prodSelect').data('selectloaderVkey', 'code').data('selectloaderTkey', 'name').selectloader(app.wordbooks);

        $('[data-text-input].radio-list', elem).change(function() {
          $($(this).data('textInput')).val($(this).find("input:checked").data('textVal'));
        });
        $('[data-text-input].checkbox-list', elem).change(function() {
          var texts = [];
          $(this).find("input:checked").each(function(){
            texts.push($(this).data('textVal'));
          });
          $($(this).data('textInput')).val(texts);
        });
        $('select[data-text-input]', elem).change(function() {
          var texts = [];
          $(this).find("option:selected").each(function(){
            texts.push($(this).data('textVal'));
          });
          $($(this).data('textInput')).val(texts);
        });
        $('select[data-selectloader-nselect]', elem).change(function() {
          var thiz = $(this);
          var nelem = $(thiz.data('selectloaderNselect'));
          nelem.data('selectloaderAppend', '0');
          if (thiz.find('option:selected').val() == '') {
            nelem.empty().append('<option value="">请选择...</option>');
            var nnselect = nelem.data('selectloaderNselect');
            if(nnselect) {
              nselectloader(nelem);
            }
          } else {
            nelem.selectloader(thiz.find('option:selected').data('noptions'));
          }
        });

        $('select.districtCity', elem).data('selectloaderStore', 'children').data('selectloaderVkey', 'districtCode').data('selectloaderTkey', 'districtName');
        $('select.districtArea', elem).data('selectloaderStore', 'children').data('selectloaderVkey', 'districtCode').data('selectloaderTkey', 'districtName');
        $('select.districtProvince', elem).data('selectloaderStore', 'provinceList').data('selectloaderVkey', 'districtCode').data('selectloaderTkey', 'districtName').selectloader({'provinceList':app.provinceList});
        var setAddr = function(elem) {
            var province = $(elem.data('districtProvince'));
            var addr = $(province.data("districtAddr"));
            var city = $(province.data("selectloaderNselect"));
            var area = $(city.data("selectloaderNselect"));
            var detail = $(province.data("districtDetail"));

            var provinces = province.find("option:selected").data('textVal') || '';
            var citys = city.find("option:selected").data('textVal') || '';
            var areas = area.find("option:selected").data('textVal') || '';
            var details = detail.val() || '';

            addr.val(provinces+citys+areas+details);
        };
        $('select.district', elem).each(function(){
          var elem = $(this);
          elem.change(function(){
            setAddr(elem);
          });
        });
        $('input.districtDetail', elem).each(function(){
          var elem = $(this);
          elem.blur(function(){
            setAddr(elem);
          });
        });

        //初始化日期控件
        $('.date-picker').datepicker({
          rtl: App.isRTL(),
          autoclose: true,
          language: "zh-CN"
        });

        if(options.callback) {
          options.callback();
        }

        app.bindFormValidation(elem);
        elem.valid();
      });
    }
  };

  $.fn.jsform = function(options) {
    return this.each(function(){
      render($(this), options);
    });
  };

} (window.jQuery,window.app);
