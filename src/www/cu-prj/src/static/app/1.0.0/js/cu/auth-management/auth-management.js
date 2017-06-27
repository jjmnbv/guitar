var curNode
var showformTmpl = Handlebars.compile($('#show-form-template').html());
$(function () {

    $('#content').layout({
        maskContents:		true, // IMPORTANT - enable iframe masking - all panes in this case
        east__resizeWhileDragging: true,	// slow with a page full of iframes!
        west: {
            size: 250
        },
        center: {
            size: 250
        },
        east: {
            size: 550
        },
        togglerTip_open:"关闭",
        togglerTip_closed:"打开"
    });
    leftNavInit();
    jstreeInit();
    $('#leftNav .list-group-item').eq(0).trigger('click');
})
function leftNavInit() {
    app.$getJSON(app.SHOW_AUTH_LIST).done(function (data) {
        if (app.isOK(data)) {
            app.roles = data;
            $('#leftNav').html(Handlebars.compile($('#leftNavTemplate').html())(data));
            $('#leftNav a').click(function () {
                $(this).parent().find('.active').removeClass('active');
                $(this).addClass('active');
                showAuth();
            })
        }
    });

}
function jstreeInit() {
    app.$getJSON(app.MENU_LIST).done(function (data) {
        var jstree = $('#jstree').jstree({
                'core': {
                    'check_callback': function (operation, node, node_parent, node_position, more) { //拖拽时的控制
                        if(operation=='copy_node'){
                            return false
                        }
                        return true
                    },
                    'data': data
                },
                "conditionalselect" : function (node, event) {
                    var includes = ['root']
                    var isInclude = $.inArray(node.id, includes);
                    if(isInclude!=-1){
                        return false
                    }else{
                        return true
                    }
                },
                sort: function (a, b) {
                    return this.get_node(a).original.dispor > this.get_node(b).original.dispor ? 1 : -1;
                },
                "plugins" : [
                    /*"contextmenu",*/  "search", "state", "conditionalselect", "sort"/*, "types"*/
                ]
            })
            .on('changed.jstree', function (e, data) {
                showAuth();
            })

    });
}

function showAuth() {
    var id = $('#leftNav .active').data('id');
    var get_selected = $("#jstree").jstree('get_selected');
    var nodeId = get_selected[0];
    /*alert("角色："+id);
    alert("菜单："+nodeId);*/
    if(nodeId&&id) {
        var showContent = $('#showContent');
        showContent.html(showformTmpl());
        var showContentForm = $('form', showContent);
        showContentForm.each(function () {
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
        $('#resNo').val(nodeId);
        $('#roNo').val(id);
        $('#authCheck2').checkboxloader({'resActCdList':app.resActCdList});
        app.$getJSON(app.SHOW_AUTH_DATA+nodeId+'/'+id).done(function (data) {
            if (app.isOK(data)) {
                showContentForm.deserializeObject(data);
            }
        });

        $('#updateBtn').click(function () {
            $(this).attr("disabled",true);
            var jqxhr = app.$submit($('#showForm'), 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
                if (app.isOK(data)) {
                    app.alertOK('修改成功');
                    $('#updateBtn').attr("disabled",false);
                }
            });
        })
    }
}