/**
 * Created by lina on 2017/4/25.
 */
$(function () {
    var $ = window.jQuery;
    var app = window.app;

    $('#provCd').selectloader({'provinceList': app.provinceList});


    var a = 0;
    /*
     *放款机构配置列表 增加一行
     */
    $('body').on('click', '#add', function () {
//	  $(".empty").remove();
        a = 1;
        var indexId = $(this).parents('.portlet-title').next().find('.lendingList-tr-num').length;
        $(this).modelCurd({
            target: $('#lending-tbody'),
            template: $('#accountList-template'),
            self: $(this),
            index: indexId,
            fn: function () {
            }
        });
    });

    /*
     修改
     */
    $('#update').alertModal({
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        setMethod: function () {
            a = 2;
            $('[type=radio]:checked').parents('tr').find("td.update-style").removeClass("show-style");
             $('[type=radio]:checked').parents('tr').find("span.region-text").css("display","none");
             $('[type=radio]:checked').parents('tr').find(".find").removeClass("hiddenI");
            $('[type=radio]:checked').parents('tr').find('.mlAcNo,.payAcNo,.co').attr('disabled', false);
        }
    });

    /*判断新增加一行是否填完*/
    $('body').on('change', '.brNaList,.mlAcNo,.payAcNo', function () {
        var brNaList = $(this).parents("tr").find(".brNaList").val();
        var mlAcNo = $(this).parents("tr").find(".mlAcNo").val();
        var payAcNo = $(this).parents("tr").find(".payAcNo").val();
        if (brNaList == "" || mlAcNo == "" || payAcNo == "") {
            $(this).parents("tr").find('[type=radio]').data('status', 'nw');
        } else {
            $(this).parents("tr").find('[type=radio]').data('status', 'yc');
        }
    });
    /*
     *保存一行
     */
    $('#save').getModal({
        size: 'modal-sm',
        statusArray: ["yc"],
        textArray: ["确定要保存这条记录吗？"],
        noHandleArray: ["nc", "nw"],
        noHandle: ["该条记录已保存！", "该条记录有未填项，请填写！"],
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                return ($('[type=radio]:checked').data('status'))
            }
        },
        hideAfter: function () {
            /*页面刷新*/
            app.loadData();
        }
    }, function (modal) {
        var brNa = $('[type=radio]:checked').parents('tr').find('.brNaList').find("option:selected").data("text-vv");
        var brNo = $('[type=radio]:checked').parents('tr').find('.brNo').val();
        var mlAcNo = $('[type=radio]:checked').parents('tr').find('.mlAcNo').val();
        var payAcNo = $('[type=radio]:checked').parents('tr').find('.payAcNo').val();
        var co = $('[type=radio]:checked').parents('tr').find('.co').val();
        if (a == 1) {
            var psData = {'brNo': brNo, 'brNa': brNa, 'mlAcNo': mlAcNo, 'payAcNo': payAcNo, 'co': co};
            $.post(app.LENDING_SERVICE_SAVE, psData).done(function (res) {
                if (app.isOK(res)) {
                    app.alertOK('保存成功');
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });

        } else if (a == 2) {
            var psData = {'mlAcNo': mlAcNo, 'payAcNo': payAcNo, 'brNo': brNo, 'co': co};
            $.post(app.LENDING_SERVICE_UPDATE, psData).done(function (res) {
                if (app.isOK(res)) {
                    app.alertOK('修改成功');
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });
        }
    });

    /*
     *删除一行
     */
    $('#delete').getModal({
        size: 'modal-sm',
        /* text:'确定要删除该条记录吗？',*/
        statusArray: ["nc"],
        textArray: ["确定要删除该条记录吗?"],
        noHandleArray: ["nw"],
        noHandle: '该条记录已删除！',
        selector: function () {
            if ($('[type=radio]:checked').length > 0) {
                var sta = $('[type=radio]:checked').data('status');
                if ($('[type=radio]:checked').data('newtr') == "newTr") {
                    $('[type=radio]:checked').parents('tr').remove();
                    return (sta)
                }
                return (sta)
            }
        },
        hideAfter: function () {
            /*页面刷新*/
            app.loadData();
        }
    }, function (modal) {
        var brNo = $('[type=radio]:checked').parents('tr').find('.brNo').val();
        var URLdata = brNo;
        app.context.submit({
            modal: modal,
            url: app.LENDING_SERVICE_DELETE + URLdata,
            text: '删除成功',
            isEasyModal: true
        }, app);
    });


    +function ($, app) {

        $('#regionModal').on('hidden.bs.modal', function () {
            $(this).find('form')[0].reset();
            /*$(this).find('[type="radio"]:checked').prop('checked', false);*/
        });

        $('#confirm').click(function(){
            var checked = $("#accountTable").find("[type='radio']:checked");
            var ptr=checked.parents('tr');
            if($('#distCd option:selected').val()){
                ptr.find('.regionHidden').val($('#distCd option:selected').val());
                ptr.find('.region').val($('#distCd option:selected').data('text-val'));
            }else if($('#cityCd option:selected').val() && !$('#distCd option:selected').val() ){
                ptr.find('.regionHidden').val($('#cityCd option:selected').val());
                ptr.find('.region').val($('#cityCd option:selected').data('text-val'));
            }else if(!$('#cityCd option:selected').val() && !$('#distCd option:selected').val()){
                ptr.find('.regionHidden').val($('#provCd option:selected').val());
                ptr.find('.region').val($('#provCd option:selected').data('text-val'));
            }
        });
    }(window.jQuery, window.app);

});