$(function() {
  + function($, app) {
    /**
     * 初始化列表数据
     */
    app.$getJSON(app.GET_PROMO_DATA_BY_ID + app.request.promNo, function(data) {
      if(app.isOK(data)) {
        var tpl = Handlebars.compile($('#main-cont-template').html());
        var html = tpl(data);
        $("#main-template").html(html);
        app.bindFormValidation($('#update-promotion-form'));
        $(".bindEvent").each(function() {
          $(this).next("input[type=hidden]").val($(this).val());
          $(this).val(app.formatCurrencyMBj($(this).val()));
        });
        $(".percentFormat").each(function() {
          $(this).next("input[type=hidden]").val($(this).val());
          $(this).val(app.formatPercentBj($(this).val()));

        });
        $('.promCondPmId').selectloader({
          'promCondPmIdList': app.promCondPmIdList
        });
        $('.promBeneYh').selectloader({
          'promBeneYhList': app.promBeneYhList
        });
        $('.promBeneCd').selectloader({
          'promBeneCdList': app.promBeneCdList
        });
        $(".feCd").selectloader({
          'feeTypeList': app.feeTypeList
        });
        $('.promTyCd').selectloader({
          'promTyCdList': app.promTyCdList
        });
        //日历控件初始化
        $(".date-picker-page").datepicker({
          rtl: App.isRTL(),
          orientation: "left",
          autoclose: !0,
          format: "yyyy-mm-dd",
          'start-date': "+0d",
          language: 'zh-CN'
        }).on('hide', function(e) {
          $(this).parents("form").validate().element($(this).parent().find("input"));
        });
        /*   初始化radio控件   */
        $('input').uniform();

        $('.ltTo').each(function() {
          $(this).prop('max', app.csSyPaC.maxPerQt);
        });
        $('.gtTo').each(function() {
          $(this).prop('max', app.csSyPaC.maxPerQt);
        });

        /*利率优惠添加一行*/
        var rateTable = $("#rateDisAdd").tableWrapCurd({
          target: $("#rateDisTableBody"),
          template: $('#table-row1-template'),
          items: $('#rateDisTableBody').find('tr'),
          fn: function(el, index) {
            el.find("input").uniform();
            el.find("select").selectloader({
              'promCondPmIdList': app.promCondPmIdList
            });
            el.find("select").selectloader({
              'promBeneYhList': app.promBeneYhList
            });
            el.find('.ltTo').prop('max', app.csSyPaC.maxPerQt);
            el.find('.gtTo').prop('max', app.csSyPaC.maxPerQt);
          }
        });
        /*删除一行*/
        $('#rateDisDelete').getModal({
          text: '确定要删除该条记录吗？',
          size: 'modal-sm',
          footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
          selector: function() {
            return !!$('#rateDisDelete').parents('.portlet').find('[type=radio]:checked').length;
          },
          hideAfter:function(){
            /*删除时添加检验*/
            $('.isInclude').trigger('blur')
          }
        }, function() {
          var index = $("input[type='radio']:checked").data('id');
          rateTable.delete(index, function(item, i) {
            var index = i + 1;
            item.find('[data-id]').attr('data-id', i);
            item.find('[name="llcsPromSuSList[' + index + '].promBeneCd"]')
              .attr('name', 'llcsPromSuSList[' + i + '].promBeneCd');

            item.find('[name="llcsPromSuSList[' + index + '].promCondPmId"]')
              .attr('name', 'llcsPromSuSList[' + i + '].promCondPmId');

            item.find('[name="llcsPromSuSList[' + index + '].promBenePc"]')
              .attr('name', 'llcsPromSuSList[' + i + '].promBenePc');

            item.find('[name="llcsPromSuSList[' + index + '].promCondMinPlQt"]')
              .attr('name', 'llcsPromSuSList[' + i + '].promCondMinPlQt');

            item.find('[name="llcsPromSuSList[' + index + '].promCondMaxPlQt"]')
              .attr('name', 'llcsPromSuSList[' + i + '].promCondMaxPlQt');

          });
        });
        /*利率优惠结束*/
        //费用优惠开始
        /*新增一行*/
        var feeTable = $("#feeDisAdd").tableWrapCurd({
          target: $("#feeDisTableBody"),
          template: $('#table-row2-template'),
          items: $('#feeDisTableBody').find('tr'),
          fn: function(el, index) {
            el.find("input").uniform();
            el.find("select").selectloader({
              'feeTypeList': app.feeTypeList
            });
            el.find("select").selectloader({
              'promBeneCdList': app.promBeneCdList
            });
            el.find('.ltTo').prop('max', app.csSyPaC.maxPerQt);
            el.find('.gtTo').prop('max', app.csSyPaC.maxPerQt);
          }
        });
        /*删除一行*/
        $('#feeDisDelete').getModal({
          text: '确定要删除该条记录吗？',
          size: 'modal-sm',
          footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
          selector: function() {
            return !!$('#feeDisDelete').parents('.portlet').find('[type=radio]:checked').length;
          }
        }, function() {
          var index = $("input[type='radio']:checked").data('id');
          feeTable.delete(index, function(item, i) {
            var index = i + 1;
            item.find('[data-id]').attr('data-id', i);

            item.find('[name="fycsPromSuSList[' + index + '].feCd"]')
              .attr('id', 'fycsPromSuSList[' + i + ']_feCd')
              .attr('name', 'fycsPromSuSList[' + i + '].feCd')
              .attr('data-selectloader-nselect', '#fycsPromSuSList[' + i + ']_feCalCd');

            item.find('[name="fycsPromSuSList[' + index + '].feCalCd"]')
              .attr('id', 'fycsPromSuSList[' + i + ']_feCalCd')
              .attr('name', 'fycsPromSuSList[' + i + '].feCalCd');

            item.find('[name="fycsPromSuSList[' + index + '].promBeneCd"]')
              .attr('id', 'fycsPromSuSList[' + i + '].promBeneCd')
              .attr('name', 'fycsPromSuSList[' + i + '].promBeneCd');

            item.find('[name="fycsPromSuSList[' + index + '].promBenePc"]')
              .attr('name', 'fycsPromSuSList[' + i + '].promBenePc');

            item.find('[name="fycsPromSuSList[' + index + '].promBeneAm"]')
              .attr('name', 'fycsPromSuSList[' + i + '].promBeneAm');

            item.find('[name="fycsPromSuSList[' + index + '].promCondMinPlQt"]')
              .attr('name', 'fycsPromSuSList[' + i + '].promCondMinPlQt');

            item.find('[name="fycsPromSuSList[' + index + '].promCondMaxPlQt"]')
              .attr('name', 'fycsPromSuSList[' + i + '].promCondMaxPlQt');

          });
        });
        //费用优惠结束
        return;
      }
      app.alertError(data.errors.join('\n'));
    });

  }(window.jQuery, window.app);
});

$(function() {
  $(document).on('click', '#saveForm', function(event) {
    if($('#update-promotion-form').valid()) {
      submit(app.COMMIT_PROMOTION_UPDATE_DATA, $('#update-promotion-form').serializeObject(), event.target);
    }
    return false;
  });
});

//利率优惠里面的促销优惠选择全免，执行利率不可编辑
function llPromoSel(event) {
  $(event).parents('tr').find('.zxlv').attr('readonly', false).next('input[type=hidden]');
  $(event).parents('tr').find('.zxlv').siblings('span').remove();
  $(event).parents('tr').find('td.has-error').removeClass('has-error');
  $(event).parents('tr').find('.zxlv').addClass('required');
  var qmVal = $(event).val();
  if(qmVal == 'QM') {
    $(event).parents('tr').find('.zxlv')
      .attr('readonly', true).val('')
      .siblings('input').val('');
    $(event).parents('tr').find('td.has-error').removeClass('has-error');
    $(event).parents('tr').find('.zxlv').removeClass('required');
  }
}

//费用优惠里面的促销优惠选择全免，浮动比例和浮动金额不可编辑
function fypromSel(event) {
  $(event).parents('tr').find('.fdje').attr('readonly', false).next('input[type=hidden]');
  $(event).parents('tr').find('.fdbl').attr('readonly', false).next('input[type=hidden]');
  var qmVal = $(event).val();
  if(qmVal == 'QM') {
    $(event).parents('tr').find('.fdje')
      .attr('readonly', true).val('')
      .siblings('input').val('');
    $(event).parents('tr').find('.fdbl')
      .attr('readonly', true).val('')
      .siblings('input').val('');
    $(event).parents('tr').find('td.has-error').removeClass('has-error');
    $(event).parents('tr').find('td.has-error').removeClass('has-error');
    $(event).parents('tr').find('.fdbl').removeClass("required").siblings('span').text('');
  } else if(qmVal == 'FJ') {
    $(event).parents('tr').find('.fdbl')
      .attr('readonly', true).val('')
      .siblings('input').val('');
    $(event).parents('tr').find('td.has-error').removeClass('has-error');
    $(event).parents('tr').find('.fdbl').removeClass("required").siblings('span').text('');
    $(event).parents('tr').find('.fdje').addClass("required");
  } else {
    $(event).parents('tr').find('.fdje')
      .attr('readonly', true).val('')
      .siblings('input').val('');
    $(event).parents('tr').find('td.has-error').removeClass('has-error');
    $(event).parents('tr').find('.fdje').removeClass("required").siblings('span').text('');
    $(event).parents('tr').find('.fdbl').addClass("required");
  }
}