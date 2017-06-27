$(function(){

    +function ($, app) {
        $.getJSON(app.BROKERAGE_VIEW + app.request.id, function (data) {
            if (app.isOK(data)) {
                var tpl = Handlebars.compile($('#table-brokerage-template').html());
                var html = tpl(data);
                $("#main-template").html(html);
                app.bindFormValidation($('#details-form'));
                $('#id').attr("readonly",true);
                $('.baseCode').selectloader({'baseCodeItem':app.baseCodeItem});
                $('.code').selectloader({'codeItem':app.codeItem});
                $('.subCode').selectloader({'subCodeItem':app.subCodeItem});

                $('input').uniform();

                $('.amount').each(function(){
                    if($(this).val()==""){
                        $(this).attr('disabled',true);
                    }
                });
                $('.percent').each(function(){
                    if($(this).val()==""){
                        $(this).attr('disabled',true);
                    }
                });


                /*新增一行*/
                var rateTable = $("#add").tableWrapCurd({
                    target: $("#tableBody"),
                    template:$('#table-row-template'),
                    items: $('#tableBody').find('tr'),
                    fn: function (el, index) {
                        el.find("input").uniform();
                        el.find('select').selectloader({'baseCodeItem': app.baseCodeItem});
                        el.find('select').selectloader({'codeItem': app.codeItem});
                        el.find('select').selectloader({'subCodeItem': app.subCodeItem});
                    }
                });
                /*删除一行*/
                $('#delete').getModal({
                    text: '确定要删除该条记录吗？',
                    size: 'modal-sm',
                    footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
                    selector: function () {
                        return !!$('#delete').parents('.portlet').find('[type=radio]:checked').length;
                    }
                }, function () {
                    var index = $("input[type='radio']:checked").data('id');
                    if($('#tableBody').find('tr').length==1){
                        $("#errorMES").modal();
                    }else{
                        rateTable.delete(index, function (item, i) {

                            var index = i + 1;
                            item.find('[data-id]').attr('data-id', i);
                            item.find('[name="commissionSubs[' + index + '].baseCode"]')
                                .attr('name', 'commissionSubs[' + i + '].baseCode');

                            item.find('[name="commissionSubs[' + index + '].code"]')
                                .attr('name', 'commissionSubs[' + i + '].code');

                            item.find('[name="commissionSubs[' + index + '].subCode"]')
                                .attr('name', 'commissionSubs[' + i + '].subCode');

                            item.find('[name="commissionSubs[' + index + '].amount"]')
                                .attr('name', 'commissionSubs[' + i + '].amount');

                            item.find('[name="commissionSubs[' + index + '].percent"]')
                                .attr('name', 'commissionSubs[' + i + '].percent');

                            item.find('[name="commissionSubs[' + index + '].baseMaxAmount"]')
                                .attr('name', 'commissionSubs[' + i + '].baseMaxAmount');

                            item.find('[name="commissionSubs[' + index + '].comment"]')
                                .attr('name', 'commissionSubs[' + i + '].comment');

                        });
                    }
                });

                $(".bindEvent").each(function(){
                    if($(this).val() != ""){
                        $(this).next('input[type=hidden]').val($(this).val());
                        $(this).val(app.formatCurrencyM($(this).val()));
                    }
                });
                $(".percentFormat").each(function(){
                    $(this).next('input[type=hidden]').val($(this).val());
                    $(this).val(app.formatPercentBj($(this).val()));
                });

            }
        });
    }(window.jQuery, window.app);


    $("#details-form").validate();

    $(document).on('click', '#commit', function (event) {
        if ($('#details-form').valid()) {
            submit(app.UPDATA_BROKERAGE, $('#details-form').serializeObject(),event.target);
        }
        return false;
    });

    /*佣金金额、比例间逻辑*/
    $(document).on("change", ".judge-show", function () {
        if($(this).val()=="JE"){
            $(this).parents("tr").find(".percent").attr("disabled",true);
            $(this).parents("tr").find(".percent").val("");
            $(this).parents("tr").find(".percent").siblings('input').val("");
            $(this).parents("tr").find(".percent").removeClass('required');
            $(this).parents("tr").find(".amount").attr("disabled",false);
            $(this).parents("tr").find(".amount").addClass('required');
        }else if($(this).val()=="BL"){
            $(this).parents("tr").find(".percent").attr("disabled",false);
            $(this).parents("tr").find(".percent").addClass('required');
            $(this).parents("tr").find(".amount").attr("disabled",true);
            $(this).parents("tr").find(".amount").val("");
            $(this).parents("tr").find(".amount").siblings('input').val("");
            $(this).parents("tr").find(".amount").removeClass('required');

        }else{
            return false;
        }
    });


});