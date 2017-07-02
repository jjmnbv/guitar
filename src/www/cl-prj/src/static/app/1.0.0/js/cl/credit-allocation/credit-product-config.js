/**
 * Created by Administrator on 2017/6/1 0001.
 */
+function($,app){
    /*搜索下拉框 列表*/
    $('.typeName').selectloader({
        'typeNameList': app.businessKindsList
    });
    /*列表 字段翻译*/
    app.registerTextHelper('circleYesNo', app.circleYesNoList, 'code', 'name');
    app.registerTextHelper('loanTypeCode', app.loanTypeContent.dicts, 'code', 'name');

/*********************************** 弹框 1*****************************/
    /*获取弹框模板*/
    app.context.formHtml1=$('#form-template').html();
    /*初始化弹框*/
    app.context.formInit1=function(form){
        app.bindFormValidation(form);
    };
    var _val;
    var ele_modal;  //判定是增加还是修改模态框
    var isEdit=1;     //判定 树 是否可编辑的状态 0,1
    /*新增*/
    $('#add').getModal({
       title:"授信品种配置",
        body:app.context.formHtml1,
        showBefore:function(modal){
            modal.setBody(app.context.formHtml1);
            if(modal.find(".circleYesNo").find("label").length<2){
                $('.circleYesNo').radioloader({
                    'circleYesNoList': app.circleYesNoList
                });
            }
            app.bindFormValidation($('#subForm'));
        },
        showAfter:function(modal){
            ele_modal=modal;
            isEdit=1;
        },
        hideAfter:function(modal){
            modal.setBody(app.context.formHtml1);
            modal.find('[data-modal-ok]').attr('disabled',false);
        }
    },function(modal){
      if($('#subForm').valid()){
        $.post(app.CREDIT_PORODUCT_CRATE, $('#subForm').serializeObject()).done(function (res) {
            if (app.isOK(res)) {
                app.alertOK('保存成功');
                modal.modal('hide');
                app.loadData();
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
      }
        
    });

    /*修改*/
    $('#update').getModal({
        title:"授信品种配置",
        body:app.context.formHtml1,
        selector:function(){
            return !!$('#update').parents('.portlet').find('[type=radio]:checked').length;
        },
        showBefore:function(modal){
            modal.setBody(app.context.formHtml1);
            if(modal.find(".circleYesNo").find("label").length<2){
                $('.circleYesNo').radioloader({
                    'circleYesNoList': app.circleYesNoList
                });
            }
            app.context.showBefore({
                url: app.CREDIT_PORODUCT_VIEW,
                modal: modal,
                param: $('#update').parents('.portlet').find('[type=radio]:checked').data('id')
            }, app, app.context.formInit1);
        },
        showAfter:function(modal){
            ele_modal=modal;
            isEdit=0;
          },
        hideAfter:function(modal){
            modal.setBody(app.context.formHtml1);
            modal.find('[data-modal-ok]').attr('disabled',false);
        }
    },function(modal){
      if($('#subForm').valid()){
        $.post(app.CREDIT_PORODUCT_UPDATE, modal.find('#subForm').serializeObject()).done(function (res) {
            if (app.isOK(res)) {
                app.alertOK('修改成功');
                modal.modal('hide');
                app.loadData();
                return;
            }
            app.alertError(res.errors.join('\n'));
        });
      }
        
    });

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
            url:app.CREDIT_PORODUCT_DELETE+$('#delete').parents('.portlet').find('[type=radio]:checked').data('id'),
            text:"删除成功",
            isEasyModal:true
        },app)
    });

/*********************************** 弹框 2*****************************/
    /*获取弹框模板*/
    app.context.formHtml2=$('#form-template2').html();
    /*初始化弹框*/
    app.context.formInit2=function(){
    };
    /*二级 弹框*/
    $('#model-open').getModal({
        title:"授信品种配置",
        body:app.context.formHtml2,
        showBefore:function(modal){
            app.context.showBefore({
                modal:modal
            },app,app.context.formInit2);
            /*弹框列表*/
            getModalList();
            /*tree*/
            getTree(isEdit);
        },
        showAfter: function (modal) {
            modal.find('#content').layout({
                maskContents: true,
                west: {
                    size: 250
                },
                center: {
                    size: 300
                },
                togglerTip_open: "关闭",
                togglerTip_closed: "打开"
            });
            _val=ele_modal.find("input[name='creditTypeNumber']").val();
            if( _val!=""){
                $(".ui-layout-container").find("li").find("a").removeClass("jstree-clicked");
                $(".ui-layout-container").find("li#"+_val).find("a").addClass("jstree-clicked");
            }
        },
        hideAfter:function(modal){
            modal.find('[data-modal-ok]').attr('disabled',false);
            modal.setBody(app.context.formHtml2);
        }
    },function(modal){
        var thisTr=$("#modal-list").find('[type=radio]:checked').parents("tr");
        var businessKindNumber=thisTr.find("td").eq(1).html();
        $("#subForm").find("input[name='businessKindNumber']").val(businessKindNumber);
        var businessKindName=thisTr.find("td").eq(2).html();
        ele_modal.find("input[name='businessKindName']").val(businessKindName);
        ele_modal.find("form").validate().element(ele_modal.find("input[name='limitTypeName']"));
        ele_modal.find("form").validate().element(ele_modal.find("input[name='businessKindName']"));
        modal.modal('hide');
    });

    /*获得数*/
    function getTree(isEdit){
        app.$getJSON(app.CREDIT_PORODUCT_TREE+"?isEdit="+isEdit ).done(function (data) {
            var jstree = $('#tree_content').jstree({
                'core': {
                    'check_callback': function (operation, node, node_parent, node_position, more) { //拖拽时的控制
                        if (operation == 'copy_node') {
                            return false;
                        }
                        return false;
                    },
                    'data': data
                },
                "types": {
                      "default": {
                     "icon": "glyphicon glyphicon-flash"
                     },
                    "demo": {
                        "icon": "glyphicon glyphicon-ok"
                    }
                },
                "conditionalselect": function (node, event) {
                    var includes = ['root']
                    var isInclude = $.inArray(node.id, includes);
                    if (isInclude != -1) {
                        return false
                    } else {
                        return true
                    }
                },
                sort: function (a, b) {
                    return this.get_node(a).original.dispor > this.get_node(b).original.dispor ? 1 : -1;
                },
                "plugins": [
                    /*"contextmenu",*/  "search", "dnd", /*"state",*/ "conditionalselect", /*"sort",*/ "radio", "types"
                ]
            });
        });
    }

    /*获得二层模框 的列表*/
    function getModalList(){
        app.$getJSON(app.CREDIT_PORODUCT_MODAL_LIST).done(function (res) {
                var tpl = Handlebars.compile($('#table1-page-template2').html());
                var html = tpl(res);
                $("#modal-list").html(html);
                /*获得id*/
                $('#tree_content').on('changed.jstree',function(e,data){
                var $tree = $('#tree_content').jstree(true);
                if (data.action == 'select_node') {
                    var node = data.node;
                    var node_id= node.id;
                    var node_text= node.text;
                    $("#creditTypeNumber").val(node_id);
                    $("input[name='limitTypeName']").val(node_text);
                    $("#agence").val(node_text);
                }
            });
        });

    }

}(window.jQuery,window.app);