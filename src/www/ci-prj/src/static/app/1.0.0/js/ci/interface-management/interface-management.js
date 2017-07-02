+function ($, app) {

    /**
     * 初始化数据
     */
    $('.channelName').selectloader({'channelName': app.channelName});
    $('.interfaceState').selectloader({'interfaceState': app.interfaceState});
    $('.dataTypeCode').selectloader({'dataTypeCode': app.dataTypeCode });

    app.registerTextHelper('dataTypeCode', app.dataTypeCode, 'code', 'name');
    app.registerTextHelper('interfaceState', app.interfaceState, 'code', 'name');

    /*
    * 条件查询传入渠道名称
    * */
    $(document).on("change","select.channelName",function () {
        $(".channelName-hidden").val($(this).find("option:selected").data("text-vv"));
    });

    /**
     * 修改
     */
    $('#update').getModal({
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        compileBefore:function(){
            window.location.href='interface-management-update.html?interfaceNo='+$('[type=radio]:checked').data('id');
        }

    });

}(window.jQuery, window.app);