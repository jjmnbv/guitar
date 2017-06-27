/**
 * Created by lina on 2017/3/14.
 */
$(function(){
    var app = window.app;

    $('#details-form').find('select').selectloader({'ResActCd': app.ResActCd});

    $('#tableBody').find('input[type="text"]').uniform();
    /*新增一行*/
    var rateTable = $("#add").tableWrapCurd({
        target: $("#tableBody"),
        template:$('#table-row-template'),
        items: $('#tableBody').find('tr'),
        fn: function (el, index) {
           el.find('input').uniform();
           el.find('select').selectloader({'ResActCd': app.ResActCd});
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
        rateTable.delete(index, function (item, i) {

            var index = i + 1;
            item.find('[data-id]').attr('data-id', i);
            item.find('[name="cuResActList[' + index + '].resNo"]')
                .attr('name', 'cuResActList[' + i + '].resNo');

            item.find('[name="cuResActList[' + index + '].resNa"]')
                .attr('name', 'cuResActList[' + i + '].resNa');

            item.find('[name="cuResActList[' + index + '].resActCd"]')
                .attr('name', 'cuResActList[' + i + '].resActCd');

            item.find('[name="cuResActList[' + index + '].url"]')
                .attr('name', 'cuResActList[' + i + '].url');

        });
    });

    /**
     * 初始化数据
     */
    $('#menuListModal').pagination({
        "first-store": app.firstStore
    });


    +function ($, app) {
        $("#confirm").click(function () {
            var checked = $("#menuTable").find("[type='radio']:checked");
            var index= $('#tableBody').find("[type='radio']:checked").data('id');
            var val = checked.val();
            var text = checked.parents("td").next().text();
            $('#'+'resNo'+index).val(val);
            $('#'+'resNa'+index).val(text);
            if (checked) {
                $('#details-form').find('#'+'resNa'+index).valid();
            }

        });
    }(window.jQuery, window.app);

    $('#commit').click(function (event) {
        if ($('#details-form').valid()) {
            submit(app.ADD_FUNCTION_CONFIGURATION, $('#details-form').serializeObject(),event.target);
        }
        return false;
    });
});