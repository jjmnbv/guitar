
+ function($, app) {
	app.registerTextHelper('busTyp', app.busTyp, 'code', 'name');
    app.registerTextHelper('amtTyp', app.amtTyp, 'code', 'name');
    app.registerTextHelper('cdTyp', app.cdTyp, 'code', 'name');
    app.registerTextHelper('ldInd', app.ldInd, 'code', 'name');
    app.registerTextHelper('acInd', app.acInd, 'code', 'name');
    app.registerTextHelper('ioTyp', app.ioTyp, 'code', 'name');
    app.registerTextHelper('acNeInd', app.acNeInd, 'code', 'name');
    app.registerTextHelper('neInd', app.neInd, 'code', 'name');
    app.registerTextHelper('acStChk', app.acStChk, 'code', 'name');
    app.registerTextHelper('sendInd', app.sendInd, 'code', 'name');
    app.registerTextHelper('cdTyp', app.cdTyp, 'code', 'name');
}(window.jQuery, window.app);

$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var operatingMode;
   
    $('.busTyp').selectloader({'busTypList': app.busTyp});
    $('.amtTyp').selectloader({'amtTypList': app.amtTyp});
    $('.cdTyp').selectloader({'cdTypList': app.cdTyp});
    $('.ldInd').selectloader({'ldIndList': app.ldInd});
    $('.acInd').selectloader({'acIndList': app.acInd});
    $('.ioTyp').selectloader({'ioTypList': app.ioTyp});
    $('.acNeInd').selectloader({'acNeIndList': app.acNeInd});
    $('.neInd').selectloader({'neIndList': app.neInd});
    $('.acStChk').selectloader({'acStChkList': app.acStChk});
    $('.sendInd').selectloader({'sendIndList': app.sendInd});

    app.context.formHtml = $('#form-template').html();

    /**
     * 修改科目信息配置表
     */

    $('#edit').getModal({
	    selector: function () {
	      return !!$('[type=radio]:checked').length;
	    },
	    compileBefore:function () {
	      var id = $('[type=radio]:checked').data('id');
	      window.location.href="syAcCfg-add.html?operatH=edit&"+id;
	    }
});
    /**
     * 删除科目信息配置表
     */

    $('#delete').getModal({
        text: '确定要删除该条科目信息配置吗？',
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        }
    }, function (modal) {
        var id=$('[type=radio]:checked').data('id');
        app.context.submit({
            modal: modal,
            url: app.SYACCFG_REMOVE+"?"+id,
            text: '删除成功',
            isEasyModal: true
        }, app);
    });

});
