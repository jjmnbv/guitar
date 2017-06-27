/**
 * Created by Administrator on 2017/6/1 0001.
 */
+function($,app){
    app.registerTextHelper('limitProductCode', app.limitProductCodeList , 'code', 'name');
    app.registerTextHelper('limitTypeCode', app.limitTypeCodeList , 'code', 'name');
    app.registerTextHelper('isAdjusted', app.isAdjustedList, 'code', 'name');
    app.registerTextHelper('level', app.levelList, 'code', 'name');
    /*获取弹框模板*/
    app.context.formHtml=$('#form-template').html();
    var footerHtml='<button  type="button" data-dismiss="modal" class="btn blue">返回</button>';
    var dataParam;
    /*新增*/
    $('#add').getModal({
        title:"授信品种配置",
        body:app.context.formHtml,
        showBefore:function(modal){
            modal.find(".tree-nav").attr('id','add-tree-content');
            app.context.showBefore({
                modal:modal,
            },app)
            modal.find('.modal-footer').html(footerHtml);
        },
        showAfter: function (modal) {
            layoutInit(modal);
            addJsTreeInit(modal);
        },
        hideAfter:function(modal){
            modal.setBody(app.context.formHtml);

        }
    })
    /*修改*/
   $('#update').getModal({
        title:"授信品种配置",
        body:app.context.formHtml,
        selector:function(){
            return !!$('#update').parents('.portlet').find('[type=radio]:checked').length;
        },
        showBefore:function(modal){
            modal.find(".tree-nav").attr('id','update-tree-content');
            modal.find('.modal-footer').html(footerHtml);
            app.context.showBefore({
                modal: modal,
            },app)
        },
       showAfter: function (modal) {
           dataParam=$('#update').parents('.portlet').find('[type=radio]:checked').data('id');
           layoutInit(modal);
           updateJsTreeInit(modal,dataParam);
       },
       hideAfter:function(modal){
           modal.setBody(app.context.formHtml);
       }
    },function(modal){
        app.context.submit({
            modal:modal,
            param:dataParam,
            url:app.CREDIT_TYPE_UPDATE,
        },app)
    })
  /*删除*/
    $('#delete').getModal({
        text:"确定要删除该条记录吗?",
        size:"modal-sm",
        selector:function(){
            return !!$('#delete').parents('.portlet').find('[type=radio]:checked').length;
        }
    },function(modal){
        app.context.submit({
            modal:modal,
            url:app.CREDIT_TYPE_REMOVE+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id'),
            text:"删除成功",
            isEasyModal:true
        },app)
    })
    /*布局初始化*/
    function layoutInit(modal){
        /*布局加载*/
        modal.find('#content').layout({
            maskContents: true,
            west: {
                size:320
            },
            togglerTip_open: "关闭",
            togglerTip_closed: "打开"
        });
    }
    /*新增jsTree数据加载*/
    function addJsTreeInit(modal){
        app.$getJSON(app.CREDIT_TYPE_ADD + "?isEdit=1").done(function(data){
            var treeContent = $('#add-tree-content').jstree({
                'core': {
                    'check_callback': function (operation, node, node_parent, node_position, more) { //拖拽时的控制
                        true
                    },
                    'data':data
                },
                "plugins": [
                    "contextmenu", "dnd", "search", "state", "conditionalselect", "types"
                ],
                contextmenu: {
                    'items': function ($node) {
                        var tree = $("#add-tree-content").jstree(true);
                        return {
                            create: {
                                "separator_before": false,
                                "separator_after": false,
                                "label": "新增节点",
                                "action": function (data) {
                                    var instance = $.jstree.reference(data.reference);
                                    var node = instance.get_node(data.reference);
                                    var parentId = node.id;
                                    modalInit(modal,data,parentId);
                                    addSave(modal);
                                }
                            }
                        };
                    }
                }
            });
            treeContent.on('changed.jstree', function (e, data) {
                if (data.action == 'select_node') {
                    var node = data.node;
                    var parentId = node.id;
                    app.$get(app.CREDIT_TYPE_VIEW + parentId).done(function (data) {
                        if (app.isOK(data)) {
                            modalInit(modal,data,parentId);
                            if(data.limitTypeNumber==parentId){
                                modal.find('input,select,textarea,#saveData').attr('disabled',true);
                            }
                        }
                    })
                }
            })
        })
    }

    /*修改jsTree数据加载*/
    function updateJsTreeInit(modal,dataParam){
        app.$getJSON(app.CREDIT_TYPE_EDIT + "?limitTypeNumber="+dataParam).done(function(data){
            var treeContent = $('#update-tree-content').jstree({
                'core': {
                    'check_callback': function (operation, node, node_parent, node_position, more) { //拖拽时的控制
                        true
                    },
                    'data':data
                },
                "plugins": ["dnd", "search", "state", "conditionalselect", "types"]
            });
            treeContent.on('changed.jstree', function (e, data) {
                if (data.action == 'select_node') {
                    var node = data.node;
                    var parentId = node.id;
                    app.$get(app.CREDIT_TYPE_VIEW + parentId).done(function (data) {
                        if (app.isOK(data)) {
                            modalInit(modal,data,parentId);
                            if(parentId!=dataParam){
                                modal.find('input,select,textarea,#saveData').attr('disabled',true);
                            }else {
                                $(document).on('click', '#saveData', function () {
                                   var modalForm = modal.find('#show-form');
                                    if (modalForm.valid()) {
                                        $(':disabled').removeAttr('disabled')
                                        app.$post(app.CREDIT_TYPE_UPDATE, modalForm.serializeObject()).done(function(data) {
                                            if(app.isOK(data)) {
                                                $(this).attr("disabled", true);
                                                app.alertOK('提交成功！');
                                                modal.modal('hide');
                                                app.loadData();
                                            } else {
                                                var errors = data.errors.join(',')
                                                app.alertError(errors || failureText || '提交失败！');
                                            }
                                        })
                                    }
                                    return false;
                                });
                            }
                        }
                    })
                }
            })
        })
    }
    /*树刷新*/
    function reloadTreeData(url,treeTarget) {
        app.$getJSON(url).done(function(data){
            treeTarget.jstree(true).settings.core.data = data;
            treeTarget.jstree(true).refresh();
        })
    }
    /*模态框右侧数据初始化*/
    function modalInit(modal,data,parentId){
        var showformTmpl = Handlebars.compile($('#show-center-template').html());
        modal.find('#showContent').html(showformTmpl(data));
        modal.find('input').uniform();
        modal.find('[name="limitTypeCode"]').selectloader({'limitTypeCodeList': app.limitTypeCodeList});
        modal.find('#isAdjusted').radioloader({'isAdjustedList': app.isAdjustedList});
        modal.find('[name="fatherLimitTypeNumber"]').val(parentId);
        modal.find('#isAdjusted').find('input').attr('disabled',true);
        app.bindFormValidation(modal.find('form'));
    }
    /*模态框右侧数据提交*/
    function addSave(modal){
        $(document).on('click', '#saveData', function () {
            var modalForm = modal.find('#show-form');
            if (modalForm.valid()) {
                $(':disabled').removeAttr('disabled')
                app.$post(app.CREDIT_TYPE_CRATE, modalForm.serializeObject()).done(function(data) {
                    if(app.isOK(data)) {
                        $(this).attr("disabled", true);
                        app.alertOK('提交成功！');
                        setTimeout(function () {
                            reloadTreeData(app.CREDIT_TYPE_ADD + "?isEdit=1",$('#add-tree-content'));
                            $('#showContent').html("");
                        }, 500);
                    } else {
                        var errors = data.errors.join(',')
                        app.alertError(errors || failureText || '提交失败！');
                    }
                })
            }
            return false;
        });
    }
}(window.jQuery,window.app);