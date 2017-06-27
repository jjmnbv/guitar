/**
 * 修改登录密码
 */
+ function($, app) {
  $(function() {
    //
    //绑定修改密码表单校验
    //
    var
      modal = $('#chgloginpwd-modal'),
      form = modal.find('form'),
      validator = app.bindFormValidation(form);

    modal.on('hidden.bs.modal', function() {
      form[0].reset();
      validator.resetForm();
    });

    form.find('[type=submit]').click(function() {
      var jqxhr = app.$submit(form, 'json');
      if (!jqxhr) {
        return false;
      }

      jqxhr.done(function(resp) {
        if (app.isOK(resp)) {
          app.alertOK('修改用户密码成功.');
          modal.modal('hide');
          // window.location.reload();
          window.location.href = app.base+'/logout';
          return;
        }
        app.alertError(resp.statusMessage);
      });

      return false;
    });
  });
} (window.jQuery, window.app);
