/**  本文件生成一些常见插件  */

/**
 * 单表容器行增加，删除，编辑插件
 * self: 元素自己
 * target: 要添加的目标元素
 * template: 使用的模板
 * items: 已存在的列表项的集合
 * engine: 默认模板（目前没有实现其他模板）
 * fn: 模板初始化前的回调函数（方便组件初始化）
 *
 * @delete: 返回对象包含的操作函数，删除选中的行数，参数是当前选中行的序号
 */
+function ($) {
    $.fn.tableWrapCurd = function (option) {
        option = $.extend({
            self: $(this),
            target: null,
            template: null,
            items: null,
            engine: Handlebars,
            fn: function () {
            }
        }, option);

        /**
         * 获取模板html
         */
        var rowHtml = option.template.html();
        /**
         * 缓存每一个添加的行的jquery对象集合
         * @type {Array}
         */
        var rows = [];

        /**
         * 如果页面存在列表项，把页面上存在的列表项加入到缓存列表中
         */
        option.items instanceof $ && option.items.map(function () {
            rows.push($(this));
        });

        /**
         * 绑定点击增加行数的事件
         */
        option.self.click(function (e) {
            /**
             * 实时获取当前行数的个数作为每一行的序号
             * @type {Number}
             */
            var index = rows.length;

            /**
             * 使用handlebar编译,并包装成jquery对象
             */
            var el = $(option.engine.compile(rowHtml)({index: index + 1}));

            /**
             * 执行回调
             */
            option.fn(el, index, e);

            /**
             * 添加到页面
             */
            option.target.append(el);
            rows.push(el);
            //wkd刷新bootstrap-select 插件
            $('select').selectpicker({size: 4, container: '#bootstrap-select-box'});
            $('select').selectpicker('refresh');

        });

        return {
            delete: function (index, fn) {

                rows.map(function (item, i) {
                    if (i > index) {
                        fn && fn(item, --i);
                    }
                });

                rows[index].remove();
                rows.splice(index, 1);
            }
        };
    }
}(window.jQuery);

/**
 * 表格增加，删除，编辑插件
 * self: 元素自己
 * target: 要添加的目标元素
 * template: 使用的模板
 * indexName: 序号的名字（发生冲突时使用）
 * index: 定义初始序号（默认为0）
 * engine: 默认模板（目前没有实现其他模板）
 * fn: 模板初始化前的回调函数（方便组件初始化）
 */
+function ($) {
    $.fn.tableCurd = function (option) {
        option = $.extend({
            self: $(this),
            target: null,
            template: null,
            indexName: 'row-index',
            index: 0,
            engine: Handlebars,
            fn: function () {
            }
        }, option);
        console.log(option);
        return $(this).each(function () {

            /**
             * 绑定点击事件
             */
            option.self.click(function (e) {

                /**
                 * 获取模板html
                 */
                var rowHtml = option.template.html();

                /**
                 * 取得序号
                 */
                var index = $(this).data(option.indexName) || option.index;
                /**
                 * 把序号缓存起来
                 */
                $(this).data(option.indexName, ++index);

                /**
                 * 使用handlebar编译,并包装成jquery对象
                 */
                var el = null;
                if (option.engine instanceof Object) {
                    el = $(option.engine.compile(rowHtml)({
                        index: (index - 1)
                    }));
                } else {
                    // TODO 其他模板引擎   如有必要实现的话
                }

                /**
                 * 执行回调
                 */
                option.fn && option.fn(el, (index - 1), e);

                /**
                 * 添加到页面
                 */
                option.target.append(el);
            });
        });
    }
}(window.jQuery);

/**
 * 提示类模态框插件
 * @author zx
 *
 * @template: 模板
 * @title: 模板标题
 * @ok: 确认按钮文字
 * @cancel: 取消按钮文字
 * @text: 提示文字
 * @html: 被重新定义模板内容
 * @header: 被重新定义头部内容
 * @body: 被重新定义body内容
 * lh
 * @statusArray: 定义被选中进行操作的记录 array
 * @textArray:  定义被选中进行操作的记录 模板提示内容，string/array
 * @noHandleArray: 定义被选中不能进行操作的记录 array
 * @noHandle：定义被选中不能进行操作的记录 模板提示内容 string/array
 * lh
 * @footer: 被重新定义低部内容
 * @size: 可选的值有[modal-lg modal-sm],表示大,中（默认）,小
 * @selector: 布尔值 执行为真弹框，为假弹出错误提示
 * @compileBefore: 模态框生成之前做的操作，作为跳页面处理
 * @errorMsg: selector执行为假的错误提示
 * @showBefore: 模态框显示前的事件  ！！参数这个模态框
 * @showAfter: 模态框显示后的事件 ！！参数这个模态框
 * @hideBefore: 模态框隐藏前的事件 ！！参数这个模态框
 * @hideAfter: 模态框隐藏后的事件 ！！参数这个模态框
 * @setBody: 可以动态设置body的值 ！！参数是要自定义的bodyhtml
 * @fn: 点击确认执行的函数  ！！参数这个模态框
 *
 */
+function ($) {
    $.fn.getModal = function (option, fn) {
        option = $.extend({
            template: '#pageModal',
            title: '提示信息',
            ok: '确定',
            cancel: '取消',
            text: '请填写提示信息！',
            statusArray:null,
            textArray:null,
            noHandleArray:null,
            noHandle:null,
            html: null,
            header: null,
            body: null,
            footer: null,
            size: null,
            selector: false,
            compileBefore: null,
            errorMsg: '您还没有选中记录！',
            notSelectorLast:function () {
              return true;
            },
            isLastOne:'最后一条不可以删除',
            showBefore: function () {
            },
            showAfter: function () {
            },
            hideBefore: function () {
            },
            hideAfter: function () {
            }
        }, option);

        option.fn = fn || function () {
            };

        var el = $(option.template);
        var doc = $('body');

        /**
         * 开辟一块属于本插件的内存空间
         */
        window.componentModal = window.componentModal || {};

        /**
         * 生成错误提示弹框
         */
        +function () {

            if ($('[id^="modal_error_"]').length > 0) {
                return;
            }

            var template = el.clone();
            template.find('[data-modal-text]').html(option.errorMsg);
            template.attr('id', 'modal_error_' + (+new Date().getTime()));
            template.find('[data-modal-size]').addClass('modal-sm');
            template.find('[data-modal-footer]').html('<button data-dismiss="modal" type="button" class="btn blue">确定</button>')
            doc.append(window.componentModal.errorModal = template);
        }();

        return $(this).each(function () {

            var template = el.clone();
            var btnId = $(this).attr('id');
            var modalId = 'modal_' + btnId + '_' + (+new Date().getTime());
            $(this).data('modalId', '#' + modalId);

            template.attr('id', modalId);

            if (typeof option.size === 'string') {
                template.find('[data-modal-size]').addClass(option.size);
            }

            /**
             * 完全自定义模态框
             */
            if (typeof option.html === 'string') {
                el.html(option.html);
            }

            /**
             * 定义头部
             */
            +function () {
                var header = template.find('[data-modal-header]');
                var hasHeaderHtml = typeof option.header === 'string';
                var hasTitle = typeof option.title === 'string';
                if (hasTitle && hasHeaderHtml) {
                    header.html(option.header);
                    header.find('[data-modal-title]').html(option.title);
                } else if (hasHeaderHtml) {
                    header.html(option.header);
                } else if (hasTitle) {
                    template.find('[data-modal-title]').html(option.title);
                }
            }();

            /**
             * 定义body
             */
            +function () {

                var body = template.find('[data-modal-body]');
                var hasBodyHtml = typeof option.body === 'string';
                var hasText = typeof option.text === 'string';
                if (hasBodyHtml) {
                    body.html(option.body);
                } else if (hasText) {
                    template.find('[data-modal-text]').html(option.text);
                }
            }();

            /**
             * 定义底部
             */
            +function () {

                var footer = template.find('[data-modal-footer]');
                var hasFooterHtml = typeof option.footer === 'string';
                var ok = typeof option.ok === 'string';
                var cancel = typeof option.cancel === 'string';
                if (hasFooterHtml) {
                    footer.html(option.footer);
                }

                var okBtn = template.find('[data-modal-ok]');
                okBtn.on('click', okBtn, function (e) {
                    /*ln 提交以后按钮失效 */
                    if(template.find('form').size()){
                        if(template.find('form').valid()){
                            okBtn.attr('disabled',true);
                        }
                    }else{
                    	okBtn.attr('disabled',true);
                    	template.modal("hide");
                    	okBtn.attr('disabled',false);
                    }
                    option.fn.call(Object.create(null), template, e);
                });
                if (ok) {
                    okBtn.html(option.ok);
                }

                if (cancel) {
                    template.find('[data-modal-cancel]').html(option.cancel);
                }
            }();

            doc.append(template);

            /**
             * 给模态框绑定相关事件
             */
            template.on('show.bs.modal', function (e) {
              $("#bootstrap-select-box").css("z-index","10051");
                if ($(e.target).is(template)) {
                    option.showBefore.call(Object.create(null), template, e);
                }
            }).on('shown.bs.modal', function (e) {
                if ($(e.target).is(template)) {
                    option.showAfter.call(Object.create(null), template, e);
                    //判断是否有select 否则刷新插件
                    if(template.find("select").length>0){
                        //zj cc系统select不需要用到bootstrap-select时
                        if(!template.find("select").hasClass('batch-operate1') || !template.find("select").hasClass('batch-operate2')){
                            //wkd刷新bootstrap-select 插件
                           $('select').selectpicker({size: 7, container: '#bootstrap-select-box'});
                            $('select').selectpicker('refresh');
                            //zj模态框里面的下拉框展示数量限制为6
                            template.find('select').selectpicker({
                                size:4,
                                container:'#bootstrap-select-box'
                            });
                        }
                    }
                }
            }).on('hide.bs.modal', function (e) {
                if ($(e.target).is(template)) {
                    option.hideBefore.call(Object.create(null), template, e);
                }
            }).on('hidden.bs.modal', function (e) {
                $("#bootstrap-select-box").css("z-index","auto");
                if ($(e.target).is(template)) {
                    option.hideAfter.call(Object.create(null), template, e);
                }
            });

            /**
             * 对外提供一个设置body的函数，方便动态设置body
             */
            template.setBody = function (body) {
                template.find('[data-modal-body]').html(body);
            };

            /**
             * 显示模态框
             * @param option
             * @param template
             */
            /* lh */
            function show(option, template) {
                if (typeof option.selector === 'function') {
                    if(option.selector()){
                       if(option.notSelectorLast()){
                          if(option.statusArray||option.noHandleArray) {
                            if (option.noHandleArray.indexOf(option.selector()) > -1) {
                                 if(option.noHandle instanceof Array){
                                  for (var i = 0; i < option.noHandleArray.length; i++) {
                                        if (option.selector() == option.noHandleArray[i]) {//判断选定的状态
                                            option.text = option.noHandle[i];
                                            setErrorModel(option.text);
                                        }
                                    }
                                 }else{
                                  setErrorModel(option.noHandle);
                                 }
                            }else if( option.textArray instanceof Array){
                                if (option.statusArray.indexOf(option.selector()) > -1) {
                                    for (var i = 0; i < option.statusArray.length; i++) {
                                        if (option.selector() == option.statusArray[i]) {//判断选定的状态
                                            option.text = option.textArray[i];
                                            template.find('[data-modal-text]').html(option.text);
                                            setEventModel();
                                        }
                                    }
                                }
                            }else{
                                option.text = option.textArray;
                                template.find('[data-modal-text]').html(option.text);
                                setEventModel();
                            }
                        }else{
                            setEventModel();
                        }
                       }else{
                         setErrorModel(option.isLastOne);
                       }
                    }else{
                        setErrorModel(option.errorMsg);
                    }
                } else {
                    template.modal();
                }
            }

             /*
             * 设置错误提示框 提示
             * */
            function setErrorModel(stringMsg){
                var errorModal = window.componentModal.errorModal;
                errorModal.find('[data-modal-text]').html(stringMsg);
                errorModal.modal();
            }
            /*
            * 设置事件提示框
            * */
            function setEventModel(){
                if (typeof option.compileBefore === 'function') {
                    option.compileBefore();
                } else {
                    template.modal();
                }
            }

            /**
             * 给目标元素添加模态框关联
             *
             * 注： 显示弹框的两种情况 TODO 显示合并最好
             * 1.操作级别的  如怎删查改
             * 2.查询级别的  如查看详情
             */
            if (typeof btnId === 'string') {
                doc.on('click', '#' + btnId, function (e) {
                    e.preventDefault();
                    show(option, template)
                });
            } else {
                show(option, template)
            }
        });
    }
}(window.jQuery);

/**
 * 分页插件
 * @分页内容容器 $container = elem.find('.pagination-container'),
 * @筛选条件表单 $form = elem.find('.pagination-form'),
 * @查询按钮（页码变成1）$query = elem.find('.pagination-query'),
 * @重置表单 $reset = elem.find('.pagination-reset'),
 * @重新加载（页码不变） $reload = elem.find('.pagination-reload');
 * @本地模板标识 pageTemplateId = elem.find('.pagination-container').data('pageTemplateId')
 * @远程模板地址 pageTemplateUrl = elem.find('.pagination-container').data('pageTemplateUrl');
 * @获取第一页数据 options[elem.find('.pagination-container').data('pageFirstStore')]
 */
+function ($, app) {
    /* lh 重写startWith,endsWith*/
        String.prototype.endsWith = function(str) {
            var reg = new RegExp(str + "$");
            return reg.test(this);
        }
    var
        /**
         * 渲染指定页内容
         */
        render = function (elem, pageNumber, pageSize) {
            //数据筛选条件
            var pageQueryString = elem.data('pageQueryString');
            //分页请求地址
            var url = elem.data('pageUrl');

            if (/\{(pageNumber)\}/g.test(url)) {
                url = url.format(((pageNumber || 1) * 1 - 1));
            } else if(url.endsWith('/')) {
                url = url + ((pageNumber || 1) * 1 - 1);
            } else {
                url = url + '/' + ((pageNumber || 1) * 1 - 1);
            }
            var pageSize =(pageSize ? pageSize : 10);
            
            url = url + (pageQueryString ? '?pageSize='+ pageSize+ '&' + pageQueryString + '&thiznow=' + (new Date().getTime()) : '');

            //显示加载状态
            App.startPageLoading({animate: true});

            app.$getJSON(url).done(function (json) {
                elem.html(Handlebars.compile(elem.data('pageTemplateText'))({"page": json}));
                elem.data('pageNumber', pageNumber);
                elem.find('input').uniform();
                //渲染分页内容
                if (json.resultCode) {
                    if (!app.isOK(json)) {
                        return false;
                        /* lh 列表页面数据为空时 显示图片*/
                    }else if('content' in json){
                        var $thisList= $("#mainPage").find(".tabbable-tabdrop");
                        if($('.tab-content').size()){
                            if(json.content.length>0){
                                $('.tab-pane.active').find(".pagination-container").removeClass("noDataTbody");
                            }else{
                                $('.tab-pane.active').find(".pagination-container").addClass("noDataTbody");
                            }
                        }else{
                            if(json.content.length<=0){
                                $thisList.find(".pagination-container").addClass("noDataTbody");
                            }else if(json.content.length>0){
                                //zj 补充有数据时的情况
                                $thisList.find(".pagination-container").removeClass("noDataTbody");
                            }
                        }

                    }
                }
                //关闭加载提示
                App.stopPageLoading();
                /*lh 清除无数据时的图片*/
                removeNothing();
                /*清除无数据时的图片 end*/
            });
        },

        /**
         * 首次渲染第一页内容
         */
        renderFirst = function (elem, options) {
            //
            //获取第一页数据
            //
            var store = elem.data('pageFirstStore');
            if (store) {
                store = options[store];
            }
            //
            //渲染第一页
            //
            if (store) {
                elem.html(Handlebars.compile(elem.data('pageTemplateText'))(store));
                if(store.page.content.length<1){
                    $("#mainPage").find(".pagination-container").addClass("noDataTbody");
                }
            } else {
                render(elem, 1);
            }
        },

        /**
         * 使用指定模板初始化分页内容容器
         */
        initializeByTemplate = function (elem, options, template) {
            elem.data('pageTemplateText', template);
            renderFirst(elem, options);
        },

        /**
         * 初始化分页内容容器
         */
        initialize = function (elem, options) {
            var
                //本地模板标识
                pageTemplateId = elem.data('pageTemplateId'),
                //远程模板地址
                pageTemplateUrl = elem.data('pageTemplateUrl');

            //
            //用本地模板渲染第一页
            //
            if (pageTemplateId) {
                initializeByTemplate(elem, options, $('#' + pageTemplateId).html());
                return;
            }

            //
            //用远程模板渲染第一页
            //
            app.$get(pageTemplateUrl).done(function (text) {
                initializeByTemplate(elem, options, text);
            });
        },

        /**
         * 绑定分页事件
         */
        pagination = function (elem, options) {
            var
                //分页内容容器
                $container = elem.find('.pagination-container'),
                //筛选条件表单
                $form = elem.find('.pagination-form'),
                //查询（页码变成1）
                $query = elem.find('.pagination-query'),
                //重置表单
                $reset = elem.find('.pagination-reset'),
                //重新加载（页码不变）
                $reload = elem.find('.pagination-reload');

                //全部查询xkq
               $queryAll=elem.find('.allSearchBox').find('button');
               $queryInput=$(".allSearchBox").find(".inputDiv");
               $queryClose=elem.find('.closeSearch');

               //绑定全部查询事件
                $queryAll.click(function () {
                    if($queryInput.css('display')=='none'){
                        $queryInput.show(500);
                        $queryClose.show(500);
                        $queryInput.find('input').focus();
                    }else{
//                      var queryAllParamString= $queryAll.prev().find('input').val();
                        $container.data('pageQueryString', elem.find(".searchAllForm").serialize());
                        render($container, 1);
                        /*lh 清除无数据时的图片*/
                        removeNothing();
                        /*清除无数据时的图片 end*/
                        return false;
                    }
                });

                //给全部查询文本输入框添加回车监听事件
                $queryAll.prev().keydown(function (e) {
                    //e.keyCode是按键的值
                    if (e.keyCode == 13) {
                        var queryAllParamString= $queryAll.prev().find('input').val();
                        $container.data('pageQueryString', "queryAllParamString="+queryAllParamString);
                        render($container, 1);
                        return false;
                    }
                });

            //
            //初始化分页内容容器
            //
            $container.data('pageQueryString', $form.serialize());
            initialize($container, options);

            //
            //绑定翻页事件
            //
            $container.delegate('[data-page-number]', 'click', function () {
                render($container, $(this).data('pageNumber'), $container.find('.set-num').val());
                return false;
            });

            //
            //绑定跳页事件
            //
            $container.delegate('.goPage', 'click', function () {
                render($container, $container.find('.pageVal').val(), $container.find('.set-num').val());
                return false;
            });
            
            //
            //绑定改变页面容量事件
            //
          /*  $container.delegate('.set-num', 'change', function () {
                if($container.find('.set-num').val()>50){
                  $container.find('.set-num').val(50);
                }
                render($container, $container.find('.pageVal').val(), $container.find('.set-num').val());
                return false;
            });*/
             $container.delegate('.set-num', 'change', function () {
                 var pageVal=$container.find('.set-num').val();
                 if(isNaN(pageVal)){
                     pageVal=10;
                 }
                 pageVal=Math.floor(pageVal);
                 if(pageVal>50){
                     $container.find('.set-num').val(50);
                     pageVal=50;
                 }else{
                     $container.find('.set-num').val(pageVal);
                 }
                 render($container, $container.find('.pageVal').val(), pageVal);
                 return false;

             });

            $container.delegate('#set_pageNum a:first-child', 'click', function() {
              /*减*/
              var $thisVal = $(this).parent().prev().val();
              if($thisVal > 0) {
                $(this).parent().prev().attr("value", $thisVal * 1 - 1);
              } else {
                return;
              }
              render($container, $container.find('.pageVal').val(), $container.find('.set-num').val());
              return false;
            });
            
            $container.delegate('#set_pageNum a:last-child', 'click', function() {
              /*加*/
              var $thisVal = $(this).parent().prev().val();
              if($thisVal < 50) {
                $(this).parent().prev().attr("value", $thisVal * 1 + 1);
              } else {
                return;
              }
              render($container, $container.find('.pageVal').val(), $container.find('.set-num').val());
              return false;
            });

            //
            //绑定跳页框blur事件
            //
            $container.delegate('.pageVal', 'blur', function () {
                var number = $(this).val();
                var thiz = $(this);
                if (!isNaN(number)) {
                    if (number <= 0) {
                        thiz.val('1');
                    }
                    if (number > thiz.data('totalPages')) {
                        thiz.val(thiz.data('totalPages'));
                    }
                    if(thiz.data('totalPages') <=0){
                        thiz.val('1');
                    }
                } else {
                    thiz.val(thiz.data('number'));
                }
                return false;
            });

            //
            //绑定查询事件
            //
            $query.click(function () {
                $container.data('pageQueryString', $form.serialize())
                if($form.serialize()){
                    if(!$form.valid()){
                        return false;
                    }
                }
                render($container, 1 ,$container.find('.set-num').val());


                return false;
            });

            //
            //绑定重置事件
            //
            $reset.click(function () {
                $form[0].reset();
                $(".select2").change();
                $("input[type=radio]").removeAttr("checked");
                $('select').selectpicker({size: 7, container: '#bootstrap-select-box'});
                $('select').selectpicker('refresh');
                return false;
            });

            //
            //绑定重新加载事件
            //
            $reload.click(function () {
                $container.data('pageQueryString', $form.serialize());
                render($container, $container.data('pageNumber'), $container.find('.set-num').val());
                return false;
            });
        };

    //
    //定义分页插件
    //
    $.fn.pagination = function (options) {
        return this.each(function () {
            pagination($(this), options);
        });
    };

}(window.jQuery, window.app);

/**
 * 单选按钮加载器
 */
+function ($, app) {
    var template = '{{#each opts}}<label class="radio-inline"><input type="radio" name="{{name}}" data-text-val="{{text}}" value="{{val}}"{{#if checked}} checked="checked"{{/if}} /> {{text}} </label>{{/each}}';

    var render = function (elem, options) {
        //
        //获取数据源
        //
        var store = elem.data('radioloaderStore');
        if (store) {
            store = options[store];
        }

        if (store) {
            var
                //值属性
                vkey = elem.data('radioloaderVkey') || 'val',
                //文本属性
                tkey = elem.data('radioloaderTkey') || vkey,
                //当前选中值
                val = elem.data('radioloaderVal') || store[0][vkey],
                //构造列表项数组
                opts = $.map(store, function (i) {
                    return {name: elem.data('radioloaderName'), val: i[vkey], text: i[tkey], checked: (i[vkey] == val)};
                });

            //填充单选按钮
            elem.append(Handlebars.compile(template)({opts: opts}));
        }
    };

    $.fn.radioloader = function (options) {
        return this.each(function () {
            render($(this), options);
        });
    };

    //
    //单选按钮label文本隐藏域自动赋值
    //
    $('body').delegate('[data-text-input].radio-list', 'change', function () {
        $($(this).data('textInput')).val($(this).find("input:checked").data('textVal'));
    });

}(window.jQuery, window.app);

/**
 * 复选框加载器
 */
+function ($, app) {
    var template = '{{#each opts}}<label class="checkbox-inline"><input type="checkbox" name="{{name}}" data-text-val="{{text}}" value="{{val}}"{{#if checked}} checked="checked"{{/if}} /> {{text}} </label>{{/each}}';
    var render = function (elem, options) {
        //
        //获取数据源
        //
        var store = elem.data('checkboxloaderStore');
        if (store) {
            store = options[store];
        }

        if (store) {
            var
                //值属性
                vkey = elem.data('checkboxloaderVkey') || 'val',
                //文本属性
                tkey = elem.data('checkboxloaderTkey') || vkey,
                //构造列表项数组
                opts = $.map(store, function (i) {
                    return {
                        name: elem.data('checkboxloaderName'),
                        val: i[vkey],
                        text: i[tkey],
                        checked: (i[vkey] == elem.data('checkboxloaderVal'))
                    };
                });

            //填充复选框
            elem.append(Handlebars.compile(template)({opts: opts}));
        }
    };

    $.fn.checkboxloader = function (options) {
        return this.each(function () {
            render($(this), options);
        });
    };

    //
    //复选框label文本隐藏域自动赋值
    //
    $('body').delegate('[data-text-input].checkbox-list', 'change', function () {
        var texts = [];
        $(this).find("input:checked").each(function () {
            texts.push($(this).data('textVal'));
        });
        $($(this).data('textInput')).val(texts);
    });

}(window.jQuery, window.app);

/**
 * 下拉列表加载器
 */
+function ($, app) {
    var template = '{{#each opts}}<option data-text-val="{{text}}" data-text-vv="{{text}}" value="{{val}}"{{#if selected}} selected="selected"{{/if}}>{{display}}</option>{{/each}}';

    var nselectloader = function (elem) {
        var nelem = $(elem.data('selectloaderNselect'));
        nelem.data('selectloaderAppend', '0');
        if (elem.find('option:selected').val() == '') {
            nelem.empty().append('<option value="">请选择...</option>');
            nelem.change();
            nelem.selectpicker({size: 5, container: '#bootstrap-select-box',noneSelectedText: ""});
            nelem.selectpicker('refresh');
            var nnselect = nelem.data('selectloaderNselect');
            if (nnselect) {
                nselectloader(nelem);
            }
        } else {
            nelem.selectloader(elem.find('option:selected').data('options'));
        }
    };

    var render = function (elem, options) {
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
                //是否追加(0|1)[0:不追加，1:追加－默认]
                append = elem.data('selectloaderAppend'),
                //构造列表项数组
                opts = $.map(store, function (i) {
                    return {
                        val: i[vkey],
                        text: i[tkey],
                        display: i[dkey],
                        selected: (i[vkey] == elem.data('selectloaderVal'))
                    };
                });

            if (append == '0') {
                elem.empty().append('<option value="">请选择...</option>');
            }
            //填充下拉框
            elem.append(Handlebars.compile(template)({opts: opts}));
            //下拉框数据
            elem.find('option[value!=""]').each(function (i) {
                $(this).data('options', store[i]);
            });
            //级联下拉设置
            //
            var nselect = elem.data('selectloaderNselect');
            if (nselect) {
                nselectloader(elem);
            }
        }
    };

    $.fn.selectloader = function (options) {
        return this.each(function () {
            render($(this), options);
            //wkd刷新bootstrap-select 插件
            $(this).selectpicker({size: 5, container: '#bootstrap-select-box',noneSelectedText: ""});
            $(this).selectpicker('refresh');

        });
    };
    //select关联其他数据显示方法wkd改造
    listenerSelectTarget = function (elem) {
        elem.parents("tr").delegate(elem.data('listenerSelectTarget'), 'change', function () {

            $(this).find("option:selected").each(function () {
                //select 选择为空时 关联制空控制。
                if($(this).val()){
                    elem.val($(this).data('options')[elem.data('listenerKey')]);
                }else{
                    elem.val('');
                }
            });
        });
    };
    //
    //下拉框关联文本隐藏域自动赋值
    //
    $('body').delegate('select[data-text-input]', 'change', function () {
        var texts = [];
        $(this).find("option:selected").each(function () {
            texts.push($(this).data('textVal'));
        });
        $($(this).data('textInput')).val(texts);
    });

    $('body').delegate('select[data-value-input]', 'change', function () {
        $($(this).data('valueInput')).val($(this).val());
    });

    $('body').delegate('select[data-selectloader-nselect]', 'change', function () {
        nselectloader($(this));
    });

}(window.jQuery, window.app);

/**
 * 下拉树控件加载器
 */
+function ($, app) {
    var container =
        '<div class="btn-group jstreeselect form-control">' +
        '  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +
        '    <span class="filter-option pull-left">&nbsp;</span>' +
        '    <span class="caret"></span>' +
        '  </button>' +
        '  <div class="dropdown-menu hold-on-click"><div></div></div>' +
        '</div>';

    var render = function (elem, options) {
        //
        //获取数据源
        //
        var store = elem.data('jstreeselectStore');
        if (store) {
            store = options[store];
        }

        if (store) {
            var
                //dropdown容器
                $container = $(container).insertAfter(elem),
                //树元素容器
                $tree = $container.find('.dropdown-menu > div').attr('id', elem.data('jstreeloaderTarget'));

            $tree.jstree({
                core: {
                    data: [store],
                    themes: {
                        responsive: false
                    }
                },
                types: {
                    default: {
                        icon: 'fa fa-folder icon-state-warning icon-lg'
                    },
                    file: {
                        icon: 'fa fa-file icon-state-warning icon-lg'
                    }
                },
                plugins: ['types']
            });

            //
            //节点加载完成时设置默认选中值
            //
            $tree.on('ready.jstree', function (e, data) {
                var val = elem.val();
                if (val) {
                    data.instance.select_node(val);
                }
                elem.data('jstree', data.instance);
            });

            //
            //节点选中时设置下拉框显示值
            //
            $tree.on('changed.jstree', function (e, data) {
                elem.click().val(data.node.id);
                $container.find('.filter-option').html(data.node.text);
            });

            elem.addClass('jstreeselect-hidden-input');
        }
    };

    $.fn.jstreeselect = function (options) {
        return this.each(function () {
            render($(this), options);
        });
    };

    $.fn.jstreeVal = function (val) {
        $(this).data('jstree').select_node(val);
        return $(this).val(val);
    };

}(window.jQuery, window.app);

/**
 * 下拉树控件(多选)加载器
 */
+function ($, app) {
    var container =
        '<div class="btn-group jstreeselect form-control">' +
        '  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +
        '    <span class="filter-option pull-left">&nbsp;</span>' +
        '    <span class="caret"></span>' +
        '  </button>' +
        '  <div class="dropdown-menu hold-on-click">' +
        '    <div class="jstree"></div>' +
        '  </div>' +
        '</div>';

    var render = function (elem, options) {
        //
        //获取数据源
        //
        var store = elem.data('jstreemultiselectStore');
        if (store) {
            store = options[store];
        }

        if (store) {

            var
                //dropdown容器
                $container = $(container).insertAfter(elem),
                //树元素容器
                $tree = $container.find('.dropdown-menu > div.jstree').attr('id', elem.data('jstreeloaderTarget'));

            $tree.jstree({
                core: {
                    data: [store],
                    themes: {
                        responsive: false
                    }
                },
                types: {
                    default: {
                        icon: 'fa fa-folder icon-state-warning icon-lg'
                    },
                    file: {
                        icon: 'fa fa-file icon-state-warning icon-lg'
                    }
                },
                plugins: ['checkbox', 'types']
            });

            //
            //节点加载完成时设置默认选中值
            //
            $tree.on('ready.jstree', function (e, data) {
                var val = elem.val();
                if (val) {
                    var vals = val.split(',');
                    $.each(vals, function (i, v) {
                        data.instance.select_node(v);
                    });
                }
                elem.data('jstree', data.instance);
            });

            //
            //节点选中时设置下拉框显示值
            //
            $tree.on('changed.jstree', function (e, data) {
                var ids = [];
                var names = [];
                var instance = elem.data('jstree');
                $.each(instance.get_selected(), function (e, id) {
                    var node = instance.get_node(id);
                    var type = node.li_attr['type'];
                    if (elem.data('keyType')) {
                        if (type == elem.data('keyType')) {
                            ids.push(id);
                            names.push(node.text);
                        }
                    } else {
                        ids.push(id);
                        names.push(node.text);
                    }
                });
                elem.val(ids.toString());
                $(elem.data('textInput')).val(names.toString());
                $container.find('.filter-option').html(names.toString());
                if (names.length == 0) {
                    $container.find('.filter-option').html('请选择...');
                }
            });

            elem.addClass('jstreemultiselect-hidden-input');
        }
    };

    $.fn.jstreemultiselect = function (options) {
        return this.each(function () {
            render($(this), options);
        });
    };

    $.fn.jstreemultiVal = function (val) {
        var thiz = $(this);
        thiz.data('jstree').deselect_all();
        if (val && val != '') {
            var vals = val.split(',');
            $.each(vals, function (i, v) {
                thiz.data('jstree').select_node(v);
            });
        }
        return thiz.val(val);
    };

}(window.jQuery, window.app);

$(function () {
    $(document).on('click', '.table-striped > tbody > tr', function () {
        $(this).parent("tbody").find("tr").find("td:first").find(':radio').removeAttr("checked");
        $(this).parent("tbody").find("tr").find("td:first").find(':radio').parent('span').removeClass("checked");
        $(this).siblings("tr").removeClass("active");
        $(this).find("td:first").find(':radio').prop("checked", true);
        $(this).find("td:first").find('.radio').find('span').addClass('checked');
        $(this).addClass("active");
    });
    $('.filter-query-form').hide();
    $('.collapse,.expand').tooltip('destroy');
    
    //全局搜索相关展示js文字lyf
    var num = 0;
    $(".toggleSearch").click(function () {
        num++;
        if (num % 2 == 1) {
            $(this).text('收起全部查询');
            $('[name=queryAllParamString]').val('');
        } else {
            $(this).text('展开全部查询');
        }
    });
});
/*登录信息*/
function showLogin() {
    var show_ul = $("#loginInfo").find("ul");
    var isdisplay = $("#loginInfo").find("ul").css("display");
    if (isdisplay == "none") {
        show_ul.slideToggle("slow");
        $("#loginInfo").addClass("set-login-bg");
    } else {
        show_ul.slideToggle("slow", function () {
            $("#loginInfo").removeClass("set-login-bg");
        });
    }
}
/*lh 点击页面其他地方，登录信息隐藏*/
$("body").bind("click",function(evt){
    if($(evt.target).parents(".loginDiv").length==0)
        {
            var show_ul = $("#loginInfo").find("ul");
            var isdisplay = $("#loginInfo").find("ul").css("display");
            if (isdisplay == "block") {
                show_ul.slideToggle("slow", function () {
                    $("#loginInfo").removeClass("set-login-bg");
                });
            } else {
                return;
            }
        }

});

/*lh 点击class/id 进行handelbar 模板增加(优化上面两个模板增加方法) */
+function ($) {
    $.fn.modelCurd = function (option) {
        option = $.extend({
            self: null,
            target: null,
            template: null,
            index: null,
            engine: Handlebars,
            fn: function () {
            }
        }, option);
        /**
         * 获取模板html
         */
        var rowHtml = option.template.html();
        /**
         * 取得序号
         */
        var index = option.index;
        /**
         * 把序号缓存起来
         */
        $(this).data(option.indexName, ++index);
        /**
         * 使用handlebar编译,并包装成jquery对象
         */
        var el = null;
        if (option.engine instanceof Object) {
            el = $(option.engine.compile(rowHtml)({
                index: (index - 1)
            }));
        } else {
            // TODO 其他模板引擎   如有必要实现的话
        }
        
        /**
         * 添加到页面
         */
        option.target.append(el);
        /**
         * 执行回调
         */
        option.fn && option.fn(el, (index - 1));

    }
}(window.jQuery);

/*lh 相当于alert 的提示框 (方法有问题)*/
+function ($) {
    $.fn.alertModal = function (option, fn) {
        option = $.extend({
            template: '#pageModal',
            title: '提示信息',
            ok: '确定',
            cancel: '取消',
            text: '请填写提示信息！',
            html: null,
            header: null,
            body: null,
            footer: null,
            size: null,
            selector: false,
            compileBefore: null,
            errorMsg: '您还没有选中记录！',
            showBefore: function () {
            },
            showAfter: function () {
            },
            hideBefore: function () {
            },
            hideAfter: function () {
            },
            setMethod: function(){
            }
        }, option);

        option.fn = fn || function () {
                };

        var el = $(option.template);
        var doc = $('body');

        /**
         * 开辟一块属于本插件的内存空间
         */
        window.componentModal = window.componentModal || {};

        /**
         * 生成错误提示弹框
         */
        +function () {

            if ($('[id^="modal_error_"]').length > 0) {
                return;
            }

            var template = el.clone();
            template.find('[data-modal-text]').html(option.errorMsg);
            template.attr('id', 'modal_error_' + (+new Date().getTime()));
            template.find('[data-modal-size]').addClass('modal-sm');
            template.find('[data-modal-footer]').html('<button data-dismiss="modal" type="button" class="btn blue">确定</button>')
            doc.append(window.componentModal.errorModal = template);
        }();

        return $(this).each(function () {

            var template = el.clone();
            var btnId = $(this).attr('id');
            var modalId = 'modal_' + btnId + '_' + (+new Date().getTime());
            $(this).data('modalId', '#' + modalId);

            template.attr('id', modalId);

            if (typeof option.size === 'string') {
                template.find('[data-modal-size]').addClass(option.size);
            }

            /**
             * 完全自定义模态框
             */
            if (typeof option.html === 'string') {
                el.html(option.html);
            }

            /**
             * 定义头部
             */
            +function () {
                var header = template.find('[data-modal-header]');
                var hasHeaderHtml = typeof option.header === 'string';
                var hasTitle = typeof option.title === 'string';
                if (hasTitle && hasHeaderHtml) {
                    header.html(option.header);
                    header.find('[data-modal-title]').html(option.title);
                } else if (hasHeaderHtml) {
                    header.html(option.header);
                } else if (hasTitle) {
                    template.find('[data-modal-title]').html(option.title);
                }
            }();

            /**
             * 定义body
             */
            +function () {

                var body = template.find('[data-modal-body]');
                var hasBodyHtml = typeof option.body === 'string';
                var hasText = typeof option.text === 'string';
                if (hasBodyHtml) {
                    body.html(option.body);
                } else if (hasText) {
                    template.find('[data-modal-text]').html(option.text);
                }
            }();

            /**
             * 定义底部
             */
            +function () {

                var footer = template.find('[data-modal-footer]');
                var hasFooterHtml = typeof option.footer === 'string';
                var ok = typeof option.ok === 'string';
                var cancel = typeof option.cancel === 'string';
                if (hasFooterHtml) {
                    footer.html(option.footer);
                }

                var okBtn = template.find('[data-modal-ok]');
                okBtn.on('click', okBtn, function (e) {
                    option.fn.call(Object.create(null), template, e);
                    /*ln 提交以后按钮失效 */
                    if(template.find('form').size()){
                        if(template.find('form').valid()){
                            okBtn.attr('disabled',true);
                        }
                    }
                });
                if (ok) {
                    okBtn.html(option.ok);
                }

                if (cancel) {
                    template.find('[data-modal-cancel]').html(option.cancel);
                }
            }();

            doc.append(template);

            /**
             * 给模态框绑定相关事件
             */
            template.on('show.bs.modal', function (e) {
                if ($(e.target).is(template)) {
                    option.showBefore.call(Object.create(null), template, e);
                }
            }).on('shown.bs.modal', function (e) {
                if ($(e.target).is(template)) {
                    option.showAfter.call(Object.create(null), template, e);
                }
            }).on('hide.bs.modal', function (e) {
                if ($(e.target).is(template)) {
                    option.hideBefore.call(Object.create(null), template, e);
                }
            }).on('hidden.bs.modal', function (e) {
                if ($(e.target).is(template)) {
                    option.hideAfter.call(Object.create(null), template, e);
                }
            });

            /**
             * 对外提供一个设置body的函数，方便动态设置body
             */
            template.setBody = function (body) {
                template.find('[data-modal-body]').html(body);
            };

            /**
             * 显示模态框
             * @param option
             * @param template
             */
            /* lh */
            function show(option, template) {
                if (typeof option.selector === 'function') {
                    if(option.selector()){
                        option.setMethod();
                    }else{
                        setErrorModel(option.errorMsg);
                    }
                } else {
                    template.modal();
                }
            }

            /*
             * 设置错误提示框 提示
             * */
            function setErrorModel(stringMsg){
                var errorModal = window.componentModal.errorModal;
                errorModal.find('[data-modal-text]').html(stringMsg);
                errorModal.modal();
            }
            /*
             * 设置事件提示框
             * */
            function setEventModel(){
                if (typeof option.compileBefore === 'function') {
                    option.compileBefore();
                } else {
                    template.modal();
                }
            }

            /**
             * 给目标元素添加模态框关联
             *
             * 注： 显示弹框的两种情况 TODO 显示合并最好
             * 1.操作级别的  如怎删查改
             * 2.查询级别的  如查看详情
             */
            if (typeof btnId === 'string') {
                doc.on('click', '#' + btnId, function (e) {
                    e.preventDefault();
                    show(option, template)
                });
            } else {
                show(option, template)
            }
        });
    }
}(window.jQuery);

//新建用户强制修改密码lyf
//+ function($, app) {
//
//app.$getJSON(app.base + '/cu/cuuslogins/checkPW').done(function(data) {
//  if(data.resultCode == 'FAIL') {
//    $('#chgloginpwd-modal').modal();
//    $('#chgloginpwd-msg').html(data.errors.join());
//  }
//});
//$('#updatePWD').unbind('click').click(function() {
//  var form = $('#edit-user-passwd');
//  var jqxhr = app.$submit(form, 'json');
//  if(!jqxhr) return false;
//  jqxhr.done(function(data) {
//    if(app.isOK(data)) {
//      app.alertOK('修改成功');
//      setTimeout(function() {
//        window.location.href = app.base+"/logout";
//      }, 2000);
//    } else {
//      app.alertError(data.errors.join());
//    }
//  });
//});
//}(window.jQuery, window.app);