var curNode;
var operatingMode, loadedModal;
var tpl = Handlebars.compile($('#function-form-template').html());
$(function () {
    $('#content').layout({
        maskContents: true, // IMPORTANT - enable iframe masking - all panes in this case
        east__resizeWhileDragging: true,	// slow with a page full of iframes!
        west: {
            size: 250
        },
        center: {
            size: 300
        },
        east: {
            size: 450
        },
        togglerTip_open: "关闭",
        togglerTip_closed: "打开"
    });


    jstreeInit();
    modalInit();


    $('body').on('change', '.textExe', function () {
        var parentTr = $(this).parents('tr');
        var sublingTr = parentTr.siblings('tr').find('.textExe');
        var thisVal = $(this).val();
        for (var i = 0; i < sublingTr.length; i++) {
            var other = sublingTr.eq(i).val();
            if (thisVal == other) {
                if (thisVal == undefined) {
                    return;
                } else {
                    $(this).parent().find("span").remove();
                    console.log(thisVal)
                    $(this).rules("add", {afterSpace: true, messages: {afterSpace: "该功能名称已存在！"}});
                    return;
                }
            } else {
                $(this).rules("remove", "afterSpace");
                sublingTr.eq(i).rules("remove", "afterSpace");
            }
            $(this).parent().find("span").remove();
            $(this).css("border-color", " #c2cad8");
        }
    });


    $.validator.addMethod('urlReg', function (value, element) {
        var regFlag = true;
        var arrlen = value.split("/");
        if (arrlen.length < 4 || arrlen[arrlen.length - 1] == "") {
            regFlag = false;
        }
        return this.optional(element) || /^\/$/.test(value) || regFlag;
    }, '请输入正确的菜单链接！');

    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!")
    });
});
var validateIsNoExists = function (form) {
    $("input[name='resNo']", form).rules("add", {
        remote: {
            url: app.MENU_CODE_CHECK,
            type: "POST",
            dateType: "text",
            data: {
                resNo: function () {
                    return form.find('[name="resNo"]').val();
                }
            }
        },
        messages: {
            remote: "菜单编码已经存在！"
        }
    });
};
var validateIsBrNameExists = function (form) {
    $("input[name='resNa']", form).rules("add", {
        remote: {
            url: app.MENU_NAME_CHECK,
            type: "POST",
            dateType: "text",
            data: {
                resNo: function () {
                    var resNo = '';
                    if (operatingMode != 'add') {
                        resNo = form.find('[name="resNo"]').val();
                    }
                    return resNo
                },
                resNa: function () {
                    return form.find('[name="resNa"]').val();
                }
            }
        },
        messages: {
            remote: "菜单名称已经存在！"
        }
    });
};


function modalInit() {
    $('#addModal [name="syCd"]').selectloader({'resSyCdNames': app.resSyCdNames});
    $('#cuIconSNames').selectloader({'cuIconSNames': app.cuIconSNames});
    $('#pageMarkYn').radioloader({'pageMarkYn': app.pageMarkYn});


    var form = $('#addMenuForm');

    app.$getJSON(app.CURESS_CODE).done(function (data) {
        if (data instanceof Object) {
            form.find('input[name="resNo"]').val(data.resNo);
        }
    });


    app.bindFormValidation(form);
    validateIsBrNameExists(form);
    validateIsNoExists(form);

    $('#addConfirm').click(function () {
        var form = $('#addMenuForm');
        var jqxhr = app.$submit(form, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
            if (app.isOK(data)) {
                app.alertOK('新增成功');
                $tree = $('#jstree').jstree(true);
                var $node = $tree.create_node(curNode);
                $('#jstree').jstree('set_text', $node, form.find('[name="resNa"]').val());
                $('#jstree').jstree('set_id', $node, form.find('[name="resNo"]').val());
                $('#addModal').modal('hide');
                // $tree.deselect_all();
                // $tree.select_node($node);
                reloadTreeData()
            } else {
                app.alertError('新增失败');
            }
        });

    });
    $('#addModal').on('hidden.bs.modal', function (e) {
            var form = $(this).find('form')
            form.validate().resetForm()
            form[0].reset()
        })
        .on('shown.bs.modal', function () {
            if (!loadedModal) {
                loadedModal = true
                $('#addModal [name="iconNo"]').selectpicker('destroy');
                loadIconSelect($('#addModal [name="iconNo"]'))
            }
        })

}

function modalcheck() {
    var form = $('#addMenuForm');

    app.$getJSON(app.CURESS_CODE).done(function (data) {
        if (data instanceof Object) {
            form.find('input[name="resNo"]').val(data.resNo);
        }
    });

    app.bindFormValidation(form);
    validateIsBrNameExists(form);
    validateIsNoExists(form);

}

function jstreeInit() {
    var showformTmpl = Handlebars.compile($('#show-form-template').html());
    app.$getJSON(app.MENU_LIST).done(function (data) {
        var jstree = $('#jstree').jstree({
            'core': {
                'check_callback': function (operation, node, node_parent, node_position, more) { //拖拽时的控制
                    if (node_parent.id == node.parent) {
                        return true
                    } else {
                        return false
                    }
                },
                'data': data
            },
            contextmenu: {
                'items': function ($node) {
                    var tree = $("#jstree").jstree(true);
                    return {
                        create: {
                            "separator_before": false,
                            "separator_after": false,
                            "label": "新增",
                            "action": function (data) {
                                if ($node.parents.length < 4) {
                                    $('#parentId').val('');
                                    curNode = $node;
                                    var instance = $.jstree.reference(data.reference);
                                    var node = instance.get_node(data.reference);
                                    var parentId = node.id;
                                    $('#addModal').modal();
                                    modalcheck();
                                    $('#parentId').val(parentId);
                                    operatingMode = "add";
                                } else {
                                    app.alertError('最大只能创建4层目录');
                                }
                            }
                        },
                        delete: {
                            "label": "删除",
                            "action": function (data) {
                                /* tree.delete_node($node);*/
                                var instance = $.jstree.reference(data.reference);
                                var node = instance.get_node(data.reference);
                                if (node.children && node.children.length > 0) {
                                    app.alertError('有子菜单，不能删除');
                                } else if (node.parent == "#") {
                                    app.alertError('不能删除根目录');
                                } else {
                                    tree.delete_node($node);
                                }
                            }
                        }
                    };
                }
            },
            "plugins": [
                "contextmenu", "dnd", "search", "state", "conditionalselect"/*, "sort"*/, "types"
            ]
        });

        jstree.on('changed.jstree', function (e, data) {
                var $tree = $('#jstree').jstree(true);
                operatingMode = "update";
                if (data.action == 'select_node') {
                    var node = data.node;
                    /* alert(node.children.length);*/
                    app.$get(app.MENU_VIEW + node.id).done(function (d) {
                        if (app.isOK(d)) {
                            $('#showContent').html(showformTmpl(d));
                            /* $('#updateBtn').attr("disabled",true);*/
                            $('#showForm [name="syCd"]').selectloader({'resSyCdNames': app.resSyCdNames});
                            $('#pageMark').radioloader({'pageMarkYn': app.pageMarkYn});
                            var initVal = $('#showForm [name="iconNo"]').data('selectedValue');
                            $('#showForm [name="iconNo"]').selectpicker('destroy');
                            loadIconSelect($('#showForm [name="iconNo"]')).val(initVal).trigger('change');
                            // console.log('is: '+$('#showForm [name="cuicos.iconNo"]').data('selectedValue'))
                            var get_selected = $('#jstree').jstree('get_selected');
                            var curNode = $tree.get_node(get_selected[0]);
                            var form = $('#showForm');
                            var level = curNode.parents.length;
                            if (level == 1) {
                                form.find('[name=resNa]').attr('rangelength', '[4,6]');
                                $('#addModal').find('[name=resNa]').attr('rangelength', '[4,6]');

                                $('#addModal').find('[name=iconNo]').addClass('required');
                                $('#addModal').find('.pic').addClass('fill');
                            } else if (level == 2) {
                                form.find('[name=resNa]').attr('rangelength', '[4,6]');
                                $('#addModal').find('[name=resNa]').attr('rangelength', '[4,10]');

                                form.find('[name=iconNo]').addClass('required');
                                form.find('.pic').addClass('fill');

                                $('#addModal').find('[name=iconNo]').removeClass('required');
                                $('#addModal').find('.pic').removeClass('fill');
                            } else {
                                form.find('[name=resNa]').attr('rangelength', '[4,10]');
                                $('#addModal').find('[name=resNa]').attr('rangelength', '[4,10]');

                                form.find('[name=iconNo]').removeClass('required');
                                form.find('.pic').removeClass('fill');
                            }

                            app.bindFormValidation(form);
                            validateIsBrNameExists(form);
                            $('#co').val(d.co);
                        }
                        $('form').each(function () {
                            if (!this.action) {
                                return true;
                            }
                            var i = this.action.lastIndexOf('/');
                            if (i == -1) {
                                return true;
                            }
                            var path = this.action.substring(i + 1);
                            if (!app[path]) {
                                return true;
                            }

                            this.action = this.action.substring(0, i) + app[path];
                        });

                        $('#updateBtn').attr("disabled", true);
                        disbtn(form, $('#updateBtn'));


                        $('#updateBtn').click(function () {
                            if ($('#showForm').valid()) {
                                $(this).attr("disabled", true);
                                var jqxhr = app.$submit($('#showForm'), 'json');
                                if (!jqxhr) return false;
                                jqxhr.done(function (data) {
                                    if (app.isOK(data)) {
                                        app.alertOK('修改成功');
                                        // $('#jstree').jstree('set_text',node,$('#showForm').find('[name="resNa"]').val());
                                        reloadTreeData();
                                        $('#updateBtn').attr("disabled", false);
                                    } else {
                                        app.alertError(data.errors)
                                    }
                                });
                            }
                        });
                    }).fail(function () {
                        app.alertError('操作失败');
                        $('#jstree').jstree(true).refresh();
                    });
                    if (node.children.length == 0) {
                        app.$get(app.MENU_FUNCTION + node.id).done(function (data) {
                            if (app.isOK(data)) {
                                $("#menuFunction").html(tpl(data));

                                var menuForm = $('#menuFunc');

                                /*操作图标权限的判断*/
                             /*  var add=menuForm.find('#add');
                                var item1={};
                                item1.id=add.attr('id');
                                item1.class=add.attr('class');
                                var add=menuForm.find('#delete');
                                var item2={};
                                item2.id=add.attr('id');
                                item2.class=add.attr('class');

                                var picList=[];
                                picList.push(item1,item2);
                                var markArray=app.pathArray;

                                for(var i=0;i<picList.length;i++){
                                    var iconId=picList[i].id;
                                    var iconClass=picList[i].class;
                                    for(var j=0;j<markArray.length;j++){
                                        var markFlag=markArray[j].code;
                                        if(iconId==markFlag){
                                            if(!markArray[j].flag){
                                                $('#'+iconId).removeClass(iconClass).addClass(iconClass+'-disabled');
                                                $('#'+iconId).attr('id','');
                                            }
                                        }
                                    }
                                }*/
                                /*新增*/
                                var add=menuForm.find('#add');
                                 var  menID=add.attr('id');
                                var markArray=app.pathArray;
                                for(var j=0;j<markArray.length;j++){
                                    var markFlag=markArray[j].code;
                                    if(menID==markFlag){
                                        if(!markArray[j].flag){
                                            add.removeClass('add-sign').addClass('add-sign-disabled');
                                            add.attr('id','');
                                        }
                                    }
                                }
                                /*删除*/
                                var menuDelete=menuForm.find('#delete');
                                var markArray=app.pathArray;
                                for(var j=0;j<markArray.length;j++){
                                    var markFlag=markArray[j].code;
                                    if("add"==markFlag){
                                        if(!markArray[j].flag){
                                            menuDelete.removeClass('delete-sign').addClass('delete-sign-disabled');
                                            menuDelete.attr('id','');
                                        }
                                    }
                                }
                                /*end*/


                                menuForm.validate();

                                menuForm.find("input").uniform();

                                menuForm.find('input[name="resNo"]').val(node.id);

                                menuForm.find("select").selectloader({'defRiYn': app.defRiYn});

                                $('#updateFunc').attr("disabled", true);
                                disbtn(menuForm, $('#updateFunc'));


                                /*新增一行*/
                                var rateTable = $("#add").tableWrapCurd({
                                    target: $("#tableBody"),
                                    template: $('#table-row-template'),
                                    items: $('#tableBody').find('tr'),
                                    fn: function (el, index) {
                                        el.find("input").uniform();
                                        el.find("select").selectloader({'defRiYn': app.defRiYn});
                                        $('#updateFunc').attr("disabled", false);
                                    }
                                });

                                $('#delete').click(function () {
                                    if ($('#delete').parents('.portlet-cont').find('[type=radio]:checked').length > 0) {
                                        $('#errorMES').modal();

                                        $('#confirmOK').unbind("click").click(function () {
                                            $('#errorMES').modal('hide');
                                            $('#updateFunc').attr("disabled", false);
                                            var index = $('#delete').parents('.portlet-cont').find('[type=radio]:checked').data('id');
                                            /*alert(index);*/
                                            rateTable.delete(index, function (item, i) {


                                                var index = i + 1;
                                                item.find('[data-id]').attr('data-id', i);
                                                item.find('[name="cuResActS[' + index + '].resActCa"]')
                                                    .attr('name', 'cuResActS[' + i + '].resActCa');

                                                item.find('[name="cuResActS[' + index + '].url"]')
                                                    .attr('name', 'cuResActS[' + i + '].url');

                                                item.find('[name="cuResActS[' + index + '].defRiYn"]')
                                                    .attr('name', 'cuResActS[' + i + '].defRiYn');

                                                item.find('[name="cuResActS[' + index + '].suId"]')
                                                    .attr('name', 'cuResActS[' + i + '].suId');


                                            });

                                        });
                                    } else {
                                        $('#errorMESmall').modal();
                                    }

                                });
                            }

                            $('#updateFunc').click(function () {
                                if (menuForm.valid()) {
                                    $(this).attr("disabled", true);
                                    var jqxhr = app.$submit(menuForm, 'json');
                                    if (!jqxhr) return false;
                                    jqxhr.done(function (data) {
                                        if (app.isOK(data)) {
                                            app.alertOK('保存成功');
                                            reloadTreeData();
                                            $('#updateFunc').attr("disabled", false);
                                        } else {
                                            app.alertError(data.errors)
                                        }
                                    });
                                }
                            });
                        });
                    } else {
                        $("#menuFunction").html("");
                    }

                }
            }
        ).on("move_node.jstree", function (event, data) { //移动菜单后更新数据

                var tree = $('#jstree').jstree(true);
                var parent = tree.get_node(data.parent);
                // alert(parent);
                // console.log(parent.id)
                var children = parent.children;
                var listCuResS = [];
                $.each(children, function (i, item) {
                    var subItem = tree.get_node(item);
                    var position = $.inArray(item, children);
                    var sortedNode = {};
                    sortedNode.resNo = subItem.id;
                    sortedNode.dispOr = position;
                    sortedNode.faResNo = data.parent;
                    listCuResS.push(sortedNode);
                });
                console.log(listCuResS)
                $.ajax({
                    type: "post",
                    url: app.base + '/cu/curess/menuHaul',
                    contentType: 'application/json',
                    data: JSON.stringify(listCuResS),
                    dataType: 'json',
                    success: function (data) {
                        if (app.isOK(data)) {
                            app.alertOK('操作成功')
                        }
                    }
                });

            }
        ).on("delete_node.jstree", function (event, data) { //移动菜单后更新数据
            var params = {
                node: data.node,
                parent: data.parent,
                old_parent: data.old_parent,
                old_position: data.old_position,
                is_multi: data.is_multi
            };
            app.$post(app.DELETE_MENU_DATA + params.node.id, params).done(function (d) {
                if (app.isOK(d)) {
                    app.alertOK('删除成功');
                    setTimeout(function () {
                        reloadTreeData();
                        $('#showContent').html("");
                        $('#menuFunction').html("");
                    }, 500);

                }
            }).fail(function () {
                app.alertError('删除失败')
                $('#jstree').jstree(true).refresh();
            });//延迟失败
        });

    });
}
function reloadTreeData() {
    app.$getJSON(app.MENU_LIST).done(function (data) {
        $('#jstree').jstree(true).settings.core.data = data;
        $('#jstree').jstree(true).refresh();
    })
}

function loadIconSelect($select) {
    var selectData = $.map(app.cuIconSNames, function (n) {
        return {id: n.iconNo, imgSrc: n.iconAdCa, text: n.iconAdCa}
    });
    return $select.select2({
        data: selectData,
        templateResult: selectIcons,
        templateSelection: selectIcons,
        escapeMarkup: function (markup) {
            return markup;
        },
        initSelection: function (element, callback) {
            element.find('option').each(function (i, n) {
                $(n).data('src', selectData[i].id)
            })
            var firstOption =
            {text: '<span><img class="img-flag" src="/cu/cuicons/loadImage?iconNo=' + selectData[0].id + '" width="20px" /></span>'}
            callback(firstOption)
        },
        minimumResultsForSearch: Infinity
    });//加载下拉
}
function selectIcons(state) {
    if (!state.id) {
        return state.text;
    }
    var imgFile = $(state.element).data('src')
    var $state = $(
        // '<span><img class="img-flag" src="/cu/cuicons/loadImage?iconAdCa='+imgFile+'" width="35px" /> ' + imgFile + '</span>'
        '<span><img class="img-flag" src="/cu/cuicons/loadImage?iconNo=' + imgFile + '" width="20px" /></span>'
    );
    return $state;
}

/*监听表单是否发生改变*/
function disbtn(form, btn) {
    form.find('input,select,textarea').each(function () {
        $(this).change(function () {
            btn.attr("disabled", false);
        });
    });

}




