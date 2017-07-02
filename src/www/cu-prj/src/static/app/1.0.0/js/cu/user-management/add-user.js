$(function () {
    var app = window.app;
    var operatingMode;

    app.registerTextHelper('paTyCd', app.paTyCd, 'code', 'name');
    app.registerTextHelper('sexCd', app.sexCd, 'code', 'name');
    app.registerTextHelper('st', app.st, 'code', 'name');
    app.registerTextHelper('cuMaYn', app.cuMaYn, 'code', 'name');
    app.registerTextHelper('exeYn', app.exeYn, 'code', 'name');
    app.registerTextHelper('brLevQt', app.brLevQt, 'code', 'name');
    app.registerTextHelper('auPostYn', app.auPostYn, 'code', 'name');
    app.registerTextHelper('coPostYn', app.coPostYn, 'code', 'name');
    app.registerTextHelper('stoUseYn', app.stoUseYn, 'code', 'name');

    $('#organizationListModal').pagination({
        "first-store": app.firstStore
    });

    $('#postModal').pagination({
        "first-store": app.firstStore
    });
    $('#rolesListModal').pagination({
        "first-store": app.firstStore
    });
    $('[name="st"]').selectloader({'st': app.st});
    $('#auPostYn').selectloader({'auPostYn': app.auPostYn});//岗位列表是否审批岗位
    $('#brLevQt').selectloader({'brLevQt': app.brLevQt});

    $('.radio-list.cuMaYn').radioloader({'cuMaYn': app.cuMaYn});
    $('.radio-list.sexCd').radioloader({'sexCd': app.sexCd});
    $('.radio-list.exeYn').radioloader({'exeYn': app.exeYn});
    $('[name="paTyCd"]').selectloader({'paTyCd': app.paTyCd});

    if (!$('#postList .list-group-item').size()) {
        $('#post').siblings('span').text('');
    }
    if (!$('#roleList .list-group-item').size()) {
        $('#roles').siblings('span').text('');
    }


    +function ($, app) {
        var jobsMultiCheck = [],//弹窗多选临时变量
            roleMultiCheck = [];

        //表单新增
        $('#add').click(function () {
            var form = $('#addForm')
            app.bindFormValidation(form);
            form.valid();
            if (!$('#postList .list-group-item').size()) {
                $('#post').siblings('span').text('这是必填字段');
                /* app.alertError('请选择岗位')*/
            }
            if (!$('#roleList .list-group-item').size()) {
                $('#roles').siblings('span').text('这是必填字段');
                /* app.alertError('请选择角色')*/
                return
            }
            if (form.valid() && $('#postList .list-group-item').size() && $('#roleList .list-group-item').size()) {
                $('#add').attr('disabled', true);
                app.$submit(form).done(function (data) {
                    if (app.isOK(data)) {
                        app.alertOK('新增成功');
                        setTimeout(function () {
                            window.location.href = "user-management-list.html";
                        }, 3000);
                    } else {
                        app.alertError('新增失败！');
                    }
                });
            }
        });

        $('#jobsTable').delegate('[type="checkbox"]', 'change', function () { //岗位操作
            var $check = $(this)
            var checkVal = $check.val()
            console.log($check.is(':checked'))
            console.log(checkVal)
            if ($check.is(':checked') && jobsMultiCheck.indexOf(checkVal) == -1) {
                jobsMultiCheck.push(checkVal)
            } else if (!$check.is(':checked') && jobsMultiCheck.indexOf(checkVal) != -1) {
                jobsMultiCheck.splice($.inArray(checkVal, jobsMultiCheck), 1);
            }
            console.log(jobsMultiCheck)
        })
        $('.list-group').delegate('.optDel', 'click', function () {
            $(this).parents('.list-group-item').remove()
        })
        $('#rolesTable').find('[type="checkbox"]').change(function () { //角色操作

        });
        $('#jobsModal').on('show.bs.modal', function () {

        });
        $('#rolesModal').on('show.bs.modal', function () {

        });
        $('#organizationModal').on('hidden.bs.modal', function () {
            $(this).find('form')[0].reset();
            $(this).find('[type="radio"]:checked').prop('checked', false);
        });
        $('#competentModal').on('hidden.bs.modal', function () {
            $(this).find('form')[0].reset();
            $(this).find('[type="radio"]:checked').prop('checked', false);
        });
        $('#postModal').on('hidden.bs.modal', function () {
            $(this).find('form')[0].reset();
            $(this).find('[type="checkbox"]:checked').prop('checked', false);
            checkedList = [];
            $('#postTable').find('span.tiao').text(' ' + checkedList.length + ' ');

        });
        $('#rolesModal').on('hidden.bs.modal', function () {
            $(this).find('form')[0].reset();
            $(this).find('[type="checkbox"]:checked').prop('checked', false);
            checkedrolesList = [];
            $('#rolesTable').find('span.tiao').text(' ' + checkedrolesList.length + ' ');
        });
    }(window.jQuery, window.app);
    +function ($, app) {
        // 所属机构选择
        $("#confirmY").click(function () {
            var checked = $("#organizationTable").find("[type='radio']:checked");
            var id = checked.data('id');
            var text = checked.parents("tr").find('.name').text();
            $("#org").val(text);
            $("#orgHidden").val(id);
            $("[name='brNo']").val(id);
            if (checked) {
                $('#addForm').validate().element($('#org'));
                $('#addForm').validate().element($('[name=brNo]'));
            }
            ;

            $('#competentModal').find('input[name="brNo"]').val(id);

            $('#competentListModal').pagination({});
            $('#competent').val("");
            $('#competentHidden').val("");


        });

        /*上级主管选择*/
        $("#confirmOk").click(function () {
            var checked = $("#competentTable").find("[type='radio']:checked");
            var id = checked.data('id');
            var text = checked.parents("tr").find('.name').text();
            $("#competent").val(text);
            $("#competentHidden").val(id);
        });


        //岗位跨页选
        checkedList = [];
        $("#postTable").on("click", "[type='checkbox']", function () {
            var item = $(this);
            var flag = 0;
            var checkedItem = {};
            checkedItem.id = item.data('id');
            checkedItem.text = item.parents("td").next().text();
            if ($(this).prop("checked") == true) {
                if (checkedList.length > 0) {
                    for (var i = 0; i <= checkedList.length - 1; i++) {
                        if (checkedItem.id != checkedList[i].id) {
                            flag = 1;
                        } else {
                            flag = 0;
                            break;
                        }
                    }
                    if (flag == 1) {
                        checkedList.push(checkedItem);
                        $('#postTable').find('span.tiao').text(' ' + checkedList.length + ' ');
                    }
                } else {
                    checkedList.push(checkedItem);
                    $('#postTable').find('span.tiao').text(' ' + checkedList.length + ' ');
                }
            } else {
                checkedList.pop(checkedItem);
                $('#postTable').find('span.tiao').text(' ' + checkedList.length + ' ');
            }
            if (checkedList.length > 0) {
                $('#post').siblings('span').text('');
            }
        });

        $("#confirm").click(function () {
            var str = ''
            $.each(checkedList, function (i, n) {
                if ($('#postList').find('[data-id="item' + n.id + '"]').size() == 0) {
                    str +=
                        '<li class="list-group-item" data-id="item' + n.id + '">' +
                        '<input type="hidden" name="postNas" value="' + n.id + '">' +
                        '<a href="javascript:;" class="opt optDel">删除</a>' + n.text +
                        '</li>'
                }
            })
            $('#postList').append(str);
            checkedList = [];
            $('#postTable').find('span.tiao').text(' ' + checkedList.length + ' ');

        });


        /* $("#confirm").click(function () { //岗位弹窗确认
         var checked = $("#postTable").find("[type='checkbox']:checked");
         if (checked) {
         $('#post').siblings('span').text('');
         }
         var checkedList = []
         checked.each(function (i, item) {
         var checkedItem = {}
         checkedItem.id = $(item).data('id');
         checkedItem.text = $(item).parents("td").next().text();
         checkedList.push(checkedItem)
         })
         console.log(checkedList)
         var str = ''
         $.each(checkedList, function (i, n) {
         if ($('#postList').find('[data-id="item' + n.id + '"]').size() == 0) {
         str +=
         '<li class="list-group-item" data-id="item' + n.id + '">' +
         '<input type="hidden" name="postNas" value="' + n.id + '">' +
         '<a href="javascript:;" class="opt optDel">删除</a>' + n.text +
         '</li>'
         }
         })
         $('#postList').append(str)
         // $("#agence").val(text);
         // $("#agenceHidden").val(id);
         });*/


        //角色跨页选
        checkedrolesList = [];
        $("#rolesTable").on("click", "[type='checkbox']", function () {
            var item = $(this);
            var flag = 0;
            var checkedItem = {};
            checkedItem.id = item.data('id');
            checkedItem.text = item.parents("td").next().text();
            if ($(this).prop("checked") == true) {
                if (checkedrolesList.length > 0) {
                    for (var i = 0; i <= checkedrolesList.length - 1; i++) {
                        if (checkedItem.id != checkedrolesList[i].id) {
                            flag = 1;
                        } else {
                            flag = 0;
                            break;
                        }
                    }
                    if (flag == 1) {
                        checkedrolesList.push(checkedItem);
                        $('#rolesTable').find('span.tiao').text(' ' + checkedrolesList.length + ' ');
                    }
                } else {
                    checkedrolesList.push(checkedItem);
                    $('#rolesTable').find('span.tiao').text(' ' + checkedrolesList.length + ' ');
                }

            } else {
                checkedrolesList.pop(checkedItem);
                $('#rolesTable').find('span.tiao').text(' ' + checkedrolesList.length + ' ');
            }
            if (checkedrolesList.length > 0) {
                $('#roles').siblings('span').text('');
            }
            console.log(checkedrolesList);
        });
        $("#rolesConfirm").click(function () {
            var str = ''
            $.each(checkedrolesList, function (i, n) {
                if ($('#roleList').find('[data-id="item' + n.id + '"]').size() == 0) {
                    str +=
                        '<li class="list-group-item" data-id="item' + n.id + '">' +
                        '<input type="hidden" name="roNas" value="' + n.id + '">' +
                        '<a href="javascript:;" class="opt optDel">删除</a>' + n.text +
                        '</li>'
                }
            })
            $('#roleList').append(str);
            checkedrolesList = [];
            $('#rolesTable').find('span.tiao').text(' ' + checkedrolesList.length + ' ');
        });


        /*$("#rolesConfirm").click(function () { //角色弹窗确认
         var checked = $("#rolesTable").find("[type='checkbox']:checked");
         if (checked) {
         $('#roles').siblings('span').text('');
         }
         var checkedList = [];
         checked.each(function (i, item) {
         var checkedItem = {}
         checkedItem.id = $(item).data('id');
         checkedItem.text = $(item).parents("td").next().text();
         checkedList.push(checkedItem)
         })
         console.log(checkedList)
         var str = ''
         $.each(checkedList, function (i, n) {
         if ($('#roleList').find('[data-id="item' + n.id + '"]').size() == 0) {
         str +=
         '<li class="list-group-item" data-id="item' + n.id + '">' +
         '<input type="hidden" name="roNas" value="' + n.id + '">' +
         '<a href="javascript:;" class="opt optDel">删除</a>' + n.text +
         '</li>'
         }
         })
         $('#roleList').append(str)
         });*/


    }(window.jQuery, window.app);


    $('#paTyCd').change(function () {
        if (($('#paTyCd option:selected').val()) == "JR") {
            $('input[name="paNo"]').removeClass('isIDCard').addClass('isIdNUM');
        } else if (($('#paTyCd option:selected').val()) == "SF") {
            $('input[name="paNo"]').removeClass('isIdNUM').addClass('isIDCard');
        }
    });

    $.validator.addMethod('userCheck', function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9]{1,15}$/.test(value);
    }, '请输入数字或英文1-15位!');
    $('#addForm').validate({});
    $.extend($.validator.messages, {
        rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符!"),
    });


    var validateIsRoNoExists = function (form) {
        $("input[name='id']", form).rules("add", {
            remote: {
                url: app.CODE_EXIT,
                type: "POST",
                dateType: "text",
                data: {
                    id: function () {
                        return form.find('[name="id"]').val();
                    }
                }
            },
            messages: {
                remote: "用户编号已经存在！"
            }
        });
    };
    var validateIsRoNaExists = function (form) {
        $("input[name='loginNa']", form).rules("add", {
            remote: {
                url: app.NAME_EXIT,
                type: "POST",
                dateType: "text",
                data: {
                    id: function () {
                        var rid = ''
                        if (operatingMode != 'add') {
                            rid = form.find('[name="id"]').val();
                        }
                        return rid;
                    },
                    loginNa: function () {
                        return form.find('[name="loginNa"]').val();
                    }
                }
            },
            messages: {
                remote: "用户名称已经存在！"
            }
        });
    };


    var form = $("#addForm");
    app.bindFormValidation(form);
    validateIsRoNaExists(form);


    $('#previewBtn').unbind('click').click(function () {
        $('#previewModal').modal();
        var roles = $('#roleList li input');
        var rolesId = [];
        roles.each(function () {
            console.log($(this).val())
            var str = $(this).val();
            rolesId.push(str);
        });
        var rolesStr = rolesId.join('_');
        if (rolesStr) {
            jstreeInit(rolesStr);
        }
    });


})


function jstreeInit(id) {
    $('#jstree').data('jstree', false).empty();

    app.$getJSON(app.CURESS + id).done(function (data) {

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