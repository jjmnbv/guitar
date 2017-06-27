$(function () {
    var $ = window.jQuery;
    var app = window.app;
    app.registerTextHelper('loSts', app.dicts.dict_3022, 'code', 'name');
    app.registerTextHelper('dbSts', app.dicts.dict_3023, 'code', 'name');
    app.registerTextHelper('cuCertTyp', app.dicts.dict_17, 'code', 'name');
    $('#trCd').selectloader({'trCdList': app.dict_cfg.dict_cfg_TrTyp});

    $('#lonoModal').on('show.bs.modal',function () {
        $('#lonoModal').pagination({
            'first-store': app.firstStore
        });
    });
    $("#confirmY").click(function () {
        var checked = $("#lonoTable").find("[type='radio']:checked");
        var text = checked.parents("tr").find('.name').text();
        $("#loNo").val(text);
    });
});