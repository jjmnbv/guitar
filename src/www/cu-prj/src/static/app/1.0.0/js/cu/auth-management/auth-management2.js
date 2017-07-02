$(function () {
    $('#content').layout({
        maskContents: true,
        east__resizeWhileDragging: true,
        west: {
            size: 250
        },
        togglerTip_open: "关闭",
        togglerTip_closed: "打开"
    });
    leftNavInit();
    $('#leftNav .list-group-item').eq(0).trigger('click');


    /*操作图标权限的判断*/
   /* var add = $('#authmenuForm').find('#add');
    var iconId = add.attr('id');
    var iconClass = add.attr('class');

    var markArray = app.pathArray;

    for (var j = 0; j < markArray.length; j++) {
        var markFlag = markArray[j].code;
        if (iconId == markFlag) {
            if (!markArray[j].flag) {
                $('#' + iconId).attr('disabled', true);
            }
        }
    }*/
    /*end*/

    var authmenuForm = $("#authmenuForm");
    //保存
    $("button.ok", authmenuForm).unbind('click').click(function () {
        $(this).attr('disabled', true);
        $('input[name="selectIds"]', authmenuForm).val($('#jstree').jstree("get_selected"));
        $('input[name="roNo"]', authmenuForm).val(id);
        var jqxhr = app.$submit(authmenuForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (result) {
            if (app.isOK(result)) {
                app.alertOK('修改成功');
                $('button.ok').attr('disabled', false);
                /*setTimeout(function () {
                 window.location.reload();
                 }, 2000);*/
                return;
            } else {
                app.alertError(result.errors.join('\n'));
                $('button.ok').attr('disabled', false);
            }
        });
    });
    //取消
    $("button.cancel", authmenuForm).unbind('click').click(function () {
        window.location.reload();
    });

});

function leftNavInit() {
    app.$getJSON(app.ROLESLIST).done(function (data) {
        if (app.isOK(data)) {
            app.roles = data;
            $('#leftNav').html(Handlebars.compile($('#leftNavTemplate').html())(data));
            $('#leftNav a').click(function () {
                $(this).parent().find('.active').removeClass('active');
                $(this).addClass('active');
                id = $('#leftNav .active').data('id');
                jstreeInit(id);
                $('#jstree').find('a').attr('href', 'javaScript:;');
            })
        }
    });
};

function jstreeInit(id) {
    $('#jstree').data('jstree', false).empty();

    app.$getJSON(app.SHOW_AUTH_MENU + id).done(function (data) {

        var jstree = $('#jstree').jstree({
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
                /*"contextmenu",*/  "search", "dnd", /*"state",*/ "conditionalselect", /*"sort",*/ "checkbox", "types"
            ]
        });
    });

};



