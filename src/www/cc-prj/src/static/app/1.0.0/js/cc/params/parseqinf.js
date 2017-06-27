+ function($, app) {
	app.registerTextHelper('setTyp', app.setTyp, 'code', 'name');
}(window.jQuery, window.app);
$(function(){

  var $ = window.jQuery;
  var app = window.app;
  app.context.formHtml = $('#form-template').html();
  app.context.formSeqcde = $('#seqcde-template').html();
  app.context.formInit = function (form) {
    form.find('.setTyp').selectloader({setTypList:app.setTyp});
   };
  /**
   * 添加流水信息表
   */

  $('#add').getModal({
    title: '新增流水表信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    showBefore: function (modal) {
      app.context.showBefore({
        modal: modal
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PARSEQINF_CREATE
    }, app);
  });
  /**
   * 修改流水信息表
   */

  $('#edit').getModal({
    title: '编辑流水表信息',
    body: app.context.formHtml, /* 获取form的html模板，并填充到模态框中 */
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    showBefore: function (modal) {
      $('input[name=seqCde]').prop('readonly', true);
      var id = $('[type=radio]:checked').data('id');
      if(!'id') return;
      app.context.showBefore({
        url: app.PARSEQINF_VIEW,
        modal: modal,
        param: id
      }, app, app.context.formInit);
    },
    hideAfter: function (modal) {
      $('input[name=seqCde]').prop('readonly', false);
      modal.setBody(app.context.formHtml);
    }
  }, function (modal) {
    app.context.submit({
      modal: modal,
      url: app.PARSEQINF_UPDATE
    }, app);
  });
  /**
   * 删除流水信息表
   */
  $('#delete').getModal({
    title:'删除流水表',
    textArray: '确定要删除该条流水信息吗？',
    noHandleArray:['1001S'],
    noHandle:'此流水账号不能删除！',
    size: 'modal-sm',
    selector: function () {
      if($('[type=radio]:checked').length>0){
        return ($('[type=radio]:checked').data('seqcde'))
      }
    },
  }, function (modal) {
    var seqCde=$('[type=radio]:checked').data('id');
    app.context.submit({
      modal: modal,
      url: app.PARSEQINF_REMOVE+seqCde,
      text: '删除成功',
      isEasyModal: true
    }, app);
  });

  /**
   * 获取流水号
   */
  getSeqcde($('#a-seqcde'),$('#seqcdeModal'),app.PARSEQINF_FINDCURSEQNUM);


  /**
   * 获取下一流水号
   */
  getSeqcde($('#b-seqcde'),$('#seqcdeModal1'),app.PARSEQINF_FINDNEXTSEQNUM);

  function getSeqcde(clickTarget,modalTarget,url) {
    clickTarget.on('click',function () {
      var $this = $(this);
      if($('[type=radio]:checked').length>0){
        var id = $('[type=radio]:checked').data('id');
        app.$getJSON(url+id).done(function (data) {
          if(app.isOK(data)){
            modalTarget.modal('show').on('shown.bs.modal',function () {
              modalTarget.find('[name=genForm]').val(data.genForm);
            }).on('hide.bs.modal',function () {
              app.loadData();
            });
          }else{
            app.alertError(data.errors.join('\n'));
          }
        });
      }else{
        app.alertError('您还没有选中记录！');
      }
    });
  }

});
