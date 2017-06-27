$(function () {
    var app = window.app;
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
    app.boolean = [
        {'code': '1', 'name': '是'},
        {'code': '0', 'name': '否'}
    ]
    $('[name="st"]').selectloader({'st': app.st});
    $('#auPostYn').selectloader({'auPostYn': app.auPostYn});
    $('#brLevQt').selectloader({'brLevQt': app.brLevQt});

    $('.radio-list.cuMaYn').radioloader({'cuMaYn': app.cuMaYn});
    $('.radio-list.sexCd').radioloader({'sexCd': app.sexCd});
    $('.radio-list.exeYn').radioloader({'exeYn': app.exeYn});
    $('[name="paTyCd"]').selectloader({'paTyCd': app.paTyCd});

    +function ($, app) {
        var id = $.query.get('id')
        //回显数据
        app.$getJSON(app.UAER_INFO_VIEW + '/' + id).done(function (data) {
            if (app.isOK(data)) {
                $('#userInfoForm').deserializeObject(data);
                $('#competentModal').find('input[name="brNo"]').val(data.newBrNo);

                //设置岗位
                var postListTmpl = ''
                $.each(data.postSet, function (i, n) {
                    postListTmpl +=
                        '<li class="list-group-item" data-id="item' + n.postNo + '">' +
                        '<input type="hidden" name="postNas" value="' + n.postNo + '">' +
                        '<a href="javascript:;" class="opt optDel">删除</a>' + n.postNa +
                        '</li>';

                });
                $('#postList').append(postListTmpl);

                //设置角色
                var roleListTmpl = ''
                $.each(data.rosSet, function (i, n) {
                    roleListTmpl +=
                        '<li class="list-group-item" data-id="item' + n.roNo + '">' +
                        '<input type="hidden" name="roNas" value="' + n.roNo + '">' +
                        '<a href="javascript:;" class="opt optDel">删除</a>' + n.roNa +
                        '</li>';
                });
                // 性别
                $('.radio-list.sexCd :radio[value="' + data.sexCd + '"]').prop('checked', true)
                $('#roleList').append(roleListTmpl);
            }
        });
    }(window.jQuery, window.app);

    +function ($, app) {
        var jobsMultiCheck = [],//弹窗多选临时变量
            roleMultiCheck = [];
        //表单修改
        $('#update').click(function () {
            var form = $('#userInfoForm')
            var validator = app.bindFormValidation(form);
            if (form.valid()) {
                if (!$('#postList .list-group-item').size()) {
                    app.alertError('请选择岗位')
                    return
                }
                if (!$('#roleList .list-group-item').size()) {
                    app.alertError('请选择角色')
                    return
                }
                $('#update').attr('disabled', true);
                app.$submit(form).done(function (data) {
                    if (app.isOK(data)) {
                        app.alertOK('修改成功');
                        setTimeout(function () {
                            window.location.href = "user-management-list.html";
                        }, 3000);
                    } else {
                        app.alertError('修改失败！');
                    }
                });
            }
            // app.$submit(app.COMMIT_USER_DATA).done(function (data) {
            //     if (app.isOK(data)) {
            //         console.log(data)
            //
            //     }
            // });
            // var jqxhr = app.$submit($('#addForm'), 'json');
            // if (!jqxhr) return false;
            // jqxhr.done(function (data) {
            //     if (app.isOK(data)) {
            //         app.alertOK('修改成功');
            //         // console.log('cur node is:'+curNode)
            //     }
            // });
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
        });
        $('.list-group').delegate('.optDel', 'click', function () {
            $(this).parents('.list-group-item').remove()
        });
        $('#rolesTable').find('[type="checkbox"]').change(function () { //角色操作

        });
        $('#jobsModal').on('show.bs.modal', function () {

        });
        $('#rolesModal').on('show.bs.modal', function () {

        });
        $('#competentModal').on('show.bs.modal', function () {
            $('#competentListModal').pagination({
                "first-store": app.firstStore
            });
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
            $("[name='newBrNo']").val(id);

            $('#competentModal').find('input[name="brNo"]').val(id);
            $('#competentListModal').pagination({});
            $('#competent').val("");
            $('#competentHidden').val("");
        });

        /*选择上级主管*/
        $("#confirmOk").click(function () {
            var checked = $("#competentTable").find("[type='radio']:checked");
            var id = checked.data('id');
            var text = checked.parents("tr").find('.name').text();

            if (text == $('input[name="usNa"]').val()) {
                $('#errorMES .modal-body').text('不能将自己设为上级主管！')
                $('#errorMES').modal();
                /* app.alertError('不能将自己设为上级主管！');*/
            } else {
                $("#competent").val(text);
                $("#competentHidden").val(id);
            }
            ;
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

        /*   $("#confirm").click(function () { //岗位
         var checked = $("#postTable").find("[type='checkbox']:checked");
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
         if($('#postList').find('[data-id="item'+n.id+'"]').size()==0){
         str +=
         '<li class="list-group-item" data-id="item'+n.id+'">' +
         '<input type="hidden" name="postNas" value="'+n.id+'">' +
         '<a href="javascript:;" class="opt optDel">删除</a>' +n.text+
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

        /* $("#rolesConfirm").click(function () { //角色
         var checked = $("#rolesTable").find("[type='checkbox']:checked");
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
         if($('#roleList').find('[data-id="item'+n.id+'"]').size()==0){
         str +=
         '<li class="list-group-item" data-id="item'+n.id+'">' +
         '<input type="hidden" name="roNas" value="'+n.id+'">' +
         '<a href="javascript:;" class="opt optDel">删除</a>' +n.text+
         '</li>'
         }
         })
         $('#roleList').append(str)
         });*/
    }(window.jQuery, window.app);

    $.validator.addMethod('telNumber', function (value, element) {
        return this.optional(element) || (/^1[3|4|5|7|8|][0-9]{9}$/.test(value) || /^((\+86)?|\(\+86\)|\+86\s)0?([1-9]\d-?\d{6,8}|[3-9][13579]\d-?\d{6,7}|[3-9][24680]\d{2}-?\d{6})(-\d{3})?$/.test(value));
    }, '请输入正确的电话号码！');
    $('#userInfoForm').validate({});

    $('#paTyCd').on('change', function () {
        if (($('#paTyCd option:selected').val()) == "JR") {
            $('input[name="paNo"]').removeClass('isIDCard').addClass('isIdNUM');
        } else if (($('#paTyCd option:selected').val()) == "SF") {
            $('input[name="paNo"]').removeClass('isIdNUM').addClass('isIDCard');
        }
    });


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