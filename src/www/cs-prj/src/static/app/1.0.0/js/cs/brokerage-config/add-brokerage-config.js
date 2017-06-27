$(function () {

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

    $("#details-form").validate();
    $('#baseCode').selectloader({'baseCodeItem': app.baseCodeItem});
    $('#code').selectloader({'codeItem': app.codeItem});
    $('#subCode').selectloader({'subCodeItem': app.subCodeItem});

    /*m默认显示一行下拉框*/
    $(".subCode-select").selectloader({'subCodeItem': app.subCodeItem});
    $(".baseCode-select").selectloader({'baseCodeItem': app.baseCodeItem});
    $(".code-select").selectloader({'codeItem': app.codeItem});

    $('#commit').click(function (event) {
        if ($('#details-form').valid()) {
            submit(app.ADD_BROKERAGE, $('#details-form').serializeObject(),event.target);
        }
        return false;
    });

    /*lh  佣金计算方式处理*/
    $(document).on("change", ".judge-show", function () {
        var thisTr=$(this).parents("tr");
        var  thisPercent=thisTr.find(".percent");
        var thisAmount=thisTr.find(".amount");
        var thisVal=$(this).val();
        if(thisVal=="BL"){
            thisAmount.attr("disabled",true);
            thisAmount.val("");
            thisAmount.siblings('input').val("");
            thisAmount.removeClass('required');
            thisPercent.attr("disabled",false);
            thisPercent.addClass('required');
        }else if(thisVal=="JE"){
            thisPercent.attr("disabled",true);
            thisPercent.val("");
            thisPercent.siblings('input').val("");
            thisPercent.removeClass('required');
            thisAmount.attr("disabled",false);
            thisAmount.addClass('required');
        }else{
            return false;
        }
    });
});