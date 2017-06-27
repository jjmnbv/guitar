window.app = window.app || {};

+ function ($, app) {
  "use strict ";

  window.app.metadata = {
    "messages":[<#list messages as message>{"id":"${message.messageName?cap_first}","desc":"${message.messageDesc}(${message.messageName?cap_first})"}<#if message_has_next>,</#if></#list>]
  };

} (window.jQuery, window.app);

/**
 * 下拉列表加载器
 */
+ function($, app) {
  var template = '{{#each opts}}<option data-text-val="{{text}}" value="{{val}}"{{#if selected}} selected="selected"{{/if}}>{{display}}</option>{{/each}}';

  var render = function(elem, options) {
    //
    //获取数据源
    //
    var store = elem.data('selectloaderStore');
    if (store) {
      store = options[store];
    }

    if (store) {
      var
        //值属性
        vkey = elem.data('selectloaderVkey') || 'val',
        //文本属性
        tkey = elem.data('selectloaderTkey') || vkey,
        //文本显示属性
        dkey = elem.data('selectloaderDkey') || tkey,
        //构造列表项数组
        opts = $.map(store, function(i) {
          return { val: i[vkey], text: i[tkey], display: i[dkey], selected: (i[vkey] == elem.data('selectloaderVal')) };
        });

      //填充下拉框
      elem.append(Handlebars.compile(template)({ opts: opts }));
    }
  };

  $.fn.selectloader = function(options) {
    return this.each(function() {
      render($(this), options);
    });
  };

  //
  //下拉框关联文本隐藏域自动赋值
  //
  $('select[data-text-input]').change(function() {
    $($(this).data('textInput')).val($(this).data('textVal'));
  });

} (window.jQuery, window.app);
