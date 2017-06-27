$(function () {
    +function ($, app) {
        $.getJSON(app.LIMIT_VIEW + app.request.code, function (data) {
            if (app.isOK(data)) {
                var tpl = Handlebars.compile($('#table-cont1-template').html());
                var html = tpl(data);
                $("#mianCont").html(html);

                $('.byName').selectloader({'jobName': app.jobName});
                $('#jobTableBody').find('[data-listener-select-target]').each(function () {
                    listenerSelectTarget($(this));
                });
                $('.byNo').selectloader({'limitexamine': app.limitexamine});
                $('#userTable').find('[data-listener-select-target]').each(function () {
                    listenerSelectTarget($(this));
                });

                /*岗位新增*/
                /*新增一行*/
                var rateTable = $("#jobAdd").tableWrapCurd({
                    target: $("#jobTableBody"),
                    template: $('#table-row1-template'),
                    items: $('#jobTableBody').find('tr'),
                    fn: function (el, index) {
                        el.find("input").uniform();
                        el.find("select").selectloader({'jobName': app.jobName});

                        el.find('[data-listener-select-target]').each(function () {
                            listenerSelectTarget($(this));
                        });
                    }
                });
                /*表单校验*/
                $("#details-form").validate({});
                //执行统一的校验
                app.bindFormValidation($('#details-form'));
                /*删除一行*/
                $('#jobDelete').getModal({
                    text: '确定要删除该条记录吗？',
                    size: 'modal-sm',
                    footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
                    selector: function () {
                        return !!$('#jobDelete').parents('.portlet').find('[type=radio]:checked').length;
                    }
                }, function () {
                    var index = $("input[type='radio']:checked").data('id');
                    if($('#jobTableBody').find('tr').length==1  && $('#userTableBody').find('tr').length==0){
                        $("#errorMES").modal();
                    }else{
                        rateTable.delete(index, function (item, i) {

                            var index = i + 1;
                            item.find('[data-id]').attr('data-id', i);
                            item.find('[data-index]').html(index);
                            item.find('[name="lotusAmountPost[' + index + '].byNo"]')
                                .attr('name', 'lotusAmountPost[' + i + '].byNo');

                            item.find('[name="lotusAmountPost[' + index + '].byName"]')
                                .attr('name', 'lotusAmountPost[' + i + '].byName');

                            item.find('[name="lotusAmountPost[' + index + '].minAmount"]')
                                .attr('name', 'lotusAmountPost[' + i + '].minAmount');

                            item.find('[name="lotusAmountPost[' + index + '].maxAmount"]')
                                .attr('name', 'lotusAmountPost[' + i + '].maxAmount');

                            item.find('[name="lotusAmountPost[' + index + '].minAmountRe"]')
                                .attr('name', 'lotusAmountPost[' + i + '].minAmountRe');

                            item.find('[name="lotusAmountPost[' + index + '].maxAmountRe"]')
                                .attr('name', 'lotusAmountPost[' + i + '].maxAmountRe');

                        });
                    }
                });

                /*用户新增*/
                /*新增一行*/
                var moveTable = $("#userAdd").tableWrapCurd({
                    target: $("#userTableBody"),
                    template: $('#table-row2-template'),
                    items: $('#userTableBody').find('tr'),
                    fn: function (el, index) {
                        el.find("input").uniform();
                        el.find("select").selectloader({'limitexamine': app.limitexamine});

                        el.find('[data-listener-select-target]').each(function () {
                            listenerSelectTarget($(this));
                        });
                    }
                });


                /*删除一行*/
                $('#userDelete').getModal({
                    text: '确定要删除该条记录吗？',
                    size: 'modal-sm',
                    footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
                    selector: function () {
                        return !!$('#userDelete').parents('.portlet').find('[type=radio]:checked').length;
                    }
                }, function () {
                    var index = $("input[type='radio']:checked").data('id');
                    if($('#userTableBody').find('tr').length==1 && $('#jobTableBody').find('tr').length==0){
                        $("#errorMES").modal();
                    }else {
                        moveTable.delete(index, function (item, i) {

                            var index = i + 1;
                            item.find('[data-id]').attr('data-id', i);
                            item.find('[data-index]').html(index);
                            item.find('[name="lotusAmountUser[' + index + '].byNo"]')
                                .attr('name', 'lotusAmountUser[' + i + '].byNo');

                            item.find('[name="lotusAmountUser[' + index + '].byName"]')
                                .attr('name', 'lotusAmountUser[' + i + '].byName');

                            item.find('[name="lotusAmountUser[' + index + '].minAmount"]')
                                .attr('name', 'lotusAmountUser[' + i + '].minAmount');

                            item.find('[name="lotusAmountUser[' + index + '].maxAmount"]')
                                .attr('name', 'lotusAmountUser[' + i + '].maxAmount');

                            item.find('[name="lotusAmountUser[' + index + '].minAmountRe"]')
                                .attr('name', 'lotusAmountUser[' + i + '].minAmountRe');

                            item.find('[name="lotusAmountUser[' + index + '].maxAmountRe"]')
                                .attr('name', 'lotusAmountUser[' + i + '].maxAmountRe');


                        });
                    }
                });

                $('input').uniform();

                $(".bindEvent").each(function(){
                    $(this).next('input[type=hidden]').val($(this).val());
                    $(this).val(app.formatCurrencyM($(this).val()));
                });

            }
        });

    }(window.jQuery, window.app);

    /*提交表单*/
    $(document).on('click', '#commit', function (event) {
        if ($('#details-form').valid()) {
            submit(app.UPDATE_LIMIT, $('#details-form').serializeObject(),event.target);
        }
        return false;
    });



});