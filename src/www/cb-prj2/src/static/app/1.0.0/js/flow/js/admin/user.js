+ function ($, app) {
  "use strict ";
  /**
   * 添加系统用户
   */
  var addUser = function () {
    var addModal = $('#user-add-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    addModal.on('hidden.bs.modal', function () {
      addForm[0].reset();
      validator.resetForm();
      $(".select2", addForm).change();
      $(".jstreeselect span.filter-option", addForm).html("&nbsp;");
      $(".jstreeselect .jstree-anchor", addForm).removeClass("jstree-clicked");
      $.uniform.update();
    });

    //校验登录ID是否已经存在
    $("input[name='loginName']", addForm).rules("add", {
      remote: {
        url: app.base + '/user/notexists',
        type: "post",
        dateType: "text",
        data: {
          loginName: function () {
            return $("input[name='loginName']", addForm).val();
          }
        }
      },
      messages: {
        remote: "该登录ID已存在！"
      }
    });

    $('.ok', addModal).click(function () {
      if (addForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(addForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功新增用户信息.');
            addModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  }

  /**
   * 修改的用户信息
   */
  var eidtUser = function () {
    var editModal = $('#user-edit-modal');
    var editForm = $("form", editModal);
    var validator = app.bindFormValidation(editForm);
    editModal.on('hidden.bs.modal', function () {
      editForm[0].reset();
      validator.resetForm();
      $(".select2", editForm).change();
      $(".jstreeselect .jstree-anchor", editForm).removeClass("jstree-clicked");
      $.uniform.update();
    });
    editModal.on('show.bs.modal', function (event) {
      var userId = $(event.relatedTarget).data('userId');
      if (!userId) return;

      App.startPageLoading({ animate: true });
      
      var jqxhr = app.$get(app.base + '/user/view/' + userId, 'json');
      if (!jqxhr) {
        return;
      }

      jqxhr.done(function (data) {
        App.stopPageLoading();
        if (data == null) {
          return;
        }
        editForm.deserializeObject(data);
      });
    });

    $('.ok', editModal).click(function () {
      if (editForm.valid()) {
        App.startPageLoading({ animate: true });
        var jqxhr = app.$submit(editForm, 'json');
        if (!jqxhr) return false;
        jqxhr.done(function (data) {
          App.stopPageLoading();
          if (app.isOK(data)) {
            $('.main-page .pagination-reload').click();
            app.alertOK('已成功修改用户信息.');
            editModal.modal('hide');
            return;
          }
          app.alertError(data.errors.join('\n'));
        });
        return false;
      }
    });
  };

  /**
   * 重新启用用户/重置用户密码(默认重置为：用户id)
   */
  var userResetFn = function() {
    var resetUser = function(userId, tmsg, okmsg) {
      bootbox.confirm({title: '提示', message: tmsg, callback: function (e) {
          if (e) {
            App.startPageLoading({ animate: true });
            var jqxhr = app.$post(app.base+'/user/reset-login-password', {'id':userId}, 'json');
            if (!jqxhr) return false;
            jqxhr.done(function (data) {
              App.stopPageLoading();
              if (app.isOK(data)) {
                $('.main-page .pagination-reload').click();
                app.alertOK(okmsg);
                return;
              }
              app.alertError(data.errors.join('\n'));
            });
          }
        }
      });
    };
    $(".main-page").delegate('[data-user-reset-pwd-id]', 'click', function(){
      var userId = $(this).data('userResetPwdId');
      resetUser(userId, '确定重置用户密码', '重置 用户密码成功！请通知用户及时修改密码.');
    });
    $(".main-page").delegate('[data-user-reset-id]', 'click', function(){
      var userId = $(this).data('userResetId');
      resetUser(userId, '确定重新启用用户', '用户启用成功！\n 密码已经重置，请通知用户及时修改密码.');
    });
  }

  /**
   * 用户设置为无效
   */
  var userInvalid = function(){
    $(".main-page").delegate('[data-user-invalid-id]', 'click', function(){
      var userId = $(this).data('userInvalidId');
      bootbox.confirm({title:'提示',message:'确定将此用户设置为无效',callback:function(e){
        if(e) {
          App.startPageLoading({animate:true});
          var jqxhr = app.$post(app.base+'/user/invalid', {'id':userId}, 'json');
          if(!jqxhr) return false;
          jqxhr.done(function(data){
            App.stopPageLoading();
            if(app.isOK(data)) {
              $('.main-page .pagination-reload').click();
              app.alertOK('用户设置为无效成功.');
              return;
            }
            app.alertError(data.errors.join('\n'));
          });
        }
      }});
    });
  };

  var addFeedback = function () {
    var addModal = $('#import-feedback-modal');
    var addForm = $("form", addModal);
    var validator = app.bindFormValidation(addForm);
    $('.ok1', addModal).click(function () {
      if (addForm.valid()) {

      }
      addForm.submit();
    });
  }

  var init = function () {
    //初始化日期控件
    $('.date-picker').datepicker({
      rtl: App.isRTL(),
      orientation: 'left',
      autoclose: true,
      language: "zh-CN"
    });
    bootbox.setLocale("zh_CN");
    //初始化选择框
    $(".select2").select2();
    //jstree reset
    $(".pagination-reset").click(function () {
      $(".pagination-form .jstreeselect span.filter-option").html("&nbsp;");
      $.uniform.update();
    });

    addUser();
    eidtUser();
    userResetFn();
    userInvalid();
  };
  init();
} (window.jQuery, window.app);
