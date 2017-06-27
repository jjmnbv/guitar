$(function () {
    var app = window.app;
   app.registerTextHelper('sexCd', app.sexCd, 'code', 'name');
   app.registerTextHelper('exeYn', app.exeYn, 'code', 'name');
   app.registerTextHelper('user.holYn', app.holYn, 'code', 'name');
   app.registerTextHelper('user.st', app.st, 'code', 'name');
   app.registerTextHelper('user.paTyCd', app.paTyCd, 'code', 'name');
   app.$getJSON(app.PERSONAL_INFO_VIEW).done(function (data) {
        if (app.isOK(data)) {
            // console.log(data)
            app.user = data
            var personalInfoTmpl = Handlebars.compile($('#personal-info-form-template').html());
            var otherInfoTmpl = Handlebars.compile($('#other-info-form-template').html());
            $('#personalInfoBody').html(personalInfoTmpl({user: app.user}))
            $('#otherInfoBody').html(otherInfoTmpl({user: app.user}))
            $('#sexCd').radioloader({"sexCd":app.sexCd});
            $('#exeYn').radioloader({"exeYn":app.exeYn});
            // console.log($('#sexRadio').size())
        }
    });

    var updateModal=$('#updateModal');
    var updateForm = $("form", updateModal);
    updateModal.on('show.bs.modal', function (event) {
        $('[name="moNo"]').val($('#tel').val());
        $('[name="mailNo"]').val($('#email').val());
    });
    $('#ok', updateModal).click(function () {
        if (updateForm.valid()) {
             App.startPageLoading({ animate: true });
            var jqxhr = app.$submit(updateForm, 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
                 App.stopPageLoading();
                if (app.isOK(data)) {
                    app.alertOK('修改成功');
                    updateModal.modal('hide');
                    setTimeout(function(){window.location.reload();},1000);
                    return;
                }
                app.alertError(data.errors.join('\n'));
            });
            return false;
        }
    });

})
