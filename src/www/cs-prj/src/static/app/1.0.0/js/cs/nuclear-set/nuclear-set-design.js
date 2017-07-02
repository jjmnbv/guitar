+ function($, app) {

  /**
   * 初始化列表数据
   */
  app.$getJSON(app.GET_NUCLEAR_DATA_BY_ID + app.request.telCheDd, function(data) {
    if(app.isOK(data)) {
      var tpl = Handlebars.compile($('#main-cont-template').html());
      var html = tpl(data);
      $('#main-template').html(html);
      $("input[type='radio']").uniform();
      //初始数据写入
      $('input[name=telCheCd]').val(app.request.telCheDd);
      $('#update-nuclear-form').deserializeObject(data);
      $('.telChePersCd').selectloader({
        'telChePersCdList': app.telChePersCdList
      });
      $('.telCheTyCd').selectloader({
        'telCheTyCdList': app.telCheTyCdList
      });
      //电核项目信息开始
      /*新增一行*/
      var nuclearTable = $('#nuclearDesignAdd').tableWrapCurd({
        target: $('#nuclearSetTableBody'),
        template: $('#table-row1-template'),
        items: $('#nuclearSetTableBody').find('tr'),
        fn: function(el, index) {
          el.find('input').uniform();
          el.find('select').selectloader({
            'telChePersCdList': app.telChePersCdList
          });
          el.find('select').selectloader({
            'telCheTyCdList': app.telCheTyCdList
          });
        }
      });

      /*删除一行*/
      $('#nuclearDesignDelete').getModal({
        text: '确定要删除该条记录吗？',
        size: 'modal-sm',
        footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
        selector: function() {
          return !!$("tr").find('td:first').find("input[type='radio']:checked").length;
        }
      }, function(modal) {
        //获取唯一性标识
        var suIdVal = $("tr").find('td:first').find("input[type='radio']:checked").data("suid");
        //判断是否是数据库有的
        if(suIdVal) {
          app.context.submit({
            modal: modal,
            url: app.NUCLEAR_SET_SUB_DELETE_DATA + "?suId=" + suIdVal + "&telCheCd=" + $('#telCheCd').val(),
            text: '删除成功',
            isEasyModal: true
          }, app);
        }
        //删除dom节点
        var index = $('tr').find('td:first').find("input[type='radio']:checked").data("id");
        nuclearTable.delete(index, function(item, i) {
          var index = i + 1;
          item.find('[data-id]').attr('data-id', i);
          item.find('[data-index]').html(index);

          item.find('[name="tellCheckSubRequestList[' + index + '].suId"]')
            .attr('name', 'tellCheckSubRequestList[' + i + '].suId');

          item.find('[name="tellCheckSubRequestList[' + index + '].iteNa"]')
            .attr('name', 'tellCheckSubRequestList[' + i + '].iteNa');

          item.find('[name="tellCheckSubRequestList[' + index + '].telChePersCd"]')
            .attr('name', 'tellCheckSubRequestList[' + i + '].telChePersCd');

          item.find('[name="tellCheckSubRequestList[' + index + '].telCheTipCo"]')
            .attr('name', 'tellCheckSubRequestList[' + i + '].telCheTipCo');

          item.find('[name="tellCheckSubRequestList[' + index + '].telCheTyCd"]')
            .attr('name', 'tellCheckSubRequestList[' + i + '].telCheTyCd');

          item.find('[name="tellCheckSubRequestList[' + index + '].telCheTyCd"]')
            .attr('name', 'tellCheckSubRequestList[' + i + '].telCheTyCd');
        });
        //电核项目信息结束
      });
    }
  });
  /*
   *模框列表 lh
   */
  app.$getJSON(app.NUCLER_MODEL_LIST, function(data) {
    var content = new Object();
    content = {
      "content": data
    };
    var tpl = Handlebars.compile($('#nuclear-answer-list').html());
    var html = tpl(content);
    $('#nuc-list').html(html);
    $("input").uniform();
  });
}(window.jQuery, window.app);

$(function() {
  /*保存 lh*/
  $(document).on('click', '#saveForm', function(event) {
    $("#update-nuclear-form").find("input,select").removeClass("required");
    $("#update-nuclear-form").find("td").removeClass("has-error");
    var num = 0;
    for(var i = 0; i < $('table tr').length; i++) {
      var numChected = $('tr').eq(i).find('td:first').find("input[type='radio']:checked").length;
      if(numChected > 0) {
        $('tr').eq(i).find("input,select").addClass("required");
        $('tr').eq(i).find("td:first").find("input").removeClass("required");
        $('tr').eq(i).find("td:nth-child(4)").find("input").removeClass("required");
        if($("#update-nuclear-form").valid()) {
          $('#saveForm').attr('disabled', true);
          var telCheTipCo = $('tr').eq(i).find('.telCheTipCo').val();
          var telChePersCd = $('tr').eq(i).find('.telChePersCd').find('option:selected').val();
          var iteNa = $('tr').eq(i).find('.iteNa').val();
          var telCheTyCd = $('tr').eq(i).find('.telCheTyCd').find('option:selected').val();
          var maYn = $('tr').eq(i).find('.maYn:checked').val();
          var suId = $('tr').eq(i).find('.suId').val();
          var telCheCd = $('#telCheCd').val();
          var psData = {
            'iteNa': iteNa,
            'telChePersCd': telChePersCd,
            'telCheTipCo': telCheTipCo,
            'telCheTyCd': telCheTyCd,
            'suId': suId,
            'telCheCd': telCheCd,
            'maYn': maYn
          };
          $.post(app.COMMIT_NUCLEAR_SET_SUB_UPDATE_DATA, psData).done(function(res) {
            if(app.isOK(res)) {
              app.alertOK('保存成功');
              setTimeout(function() {
                window.location.href = 'nuclear-set.html';
              }, 3000);
              return;
            }
          });
        }
      }else{
        app.alertTxt("您还未选中！");
      }
    }

  });

  /*模态框选中 lh*/
  $('.modal.fade').on('shown.bs.modal', function() {
    $('.modal').find('[type=checkbox]').prop('checked', false);
    $('.modal').find('[type=checkbox]').parent().removeClass('checked');
    var allNum = 0;
    $('#repayModeTable').find('tr').each(function() {
      if($(this).find('td:first').find('[type=radio]:checked').length > 0) {
        var telCheTipCo = $(this).find('.telCheTipCo').val();
        if(telCheTipCo != "") {
          telCheTipCo = telCheTipCo.substr(2, telCheTipCo.length - 3);
          var telCheTipCoArr = telCheTipCo.split(',');
          for(var i = 0; i < $('.modal').find("tbody").find('tr').length; i++) {
            var trVal = $('.modal').find("tbody").find('tr').eq(i).find('.thisName').html();
            for(var j = 0; j < telCheTipCoArr.length; j++) {
              if(trVal == telCheTipCoArr[j]) {
                allNum++;
                $('.modal').find("tbody").find('tr').eq(i).find(':checkbox').prop('checked', true);
                $('.modal').find("tbody").find('tr').eq(i).find(':checkbox').parent('span').addClass("checked");
              }
            }
          }
          if($('.modal').find("tbody").find('tr').length == allNum) {
            $('.modal').find('#checkRowAll').prop('checked', true);
            $('.modal').find('#checkRowAll').parent().addClass('checked');
          }
        }
      }
    });
  });

  //点击上下列表移动功能
  $(document).on('click', '#nuclearDesignUp', function() {
    var butche = $('#repayModeTable').find("tr.active");
    $(butche).insertAfter($(butche).next());
  });
  $(document).on('click', '#nuclearDesignDown', function() {
    var butche = $('#repayModeTable').find("tr.active");
    $(butche).insertBefore($(butche).prev());
  });

  /*电核答案*/
  /*模态框回显到输入框 lh*/
  $('#confirm').click(function() {
    var telCheTipCo = "",
      thisChecked;
    var rowNum = $('.modal').find('.oneRow');
    for(var i = 0; i < rowNum.length; i++) {
      thisChecked = rowNum.eq(i).find('[type=checkbox]:checked');
      if(thisChecked.size() > 0) {
        telCheTipCo = telCheTipCo + rowNum.eq(i).find('.thisName').html() + ",";
      }
    }
    telCheTipCo = telCheTipCo.substr(0, telCheTipCo.length - 1);
    if(telCheTipCo != "") {
      telCheTipCo = "${" + telCheTipCo + "}";
    }
    $('#repayModeTable').find('tr').each(function() {
      if($(this).find('td:first').find('[type=radio]:checked').length > 0) {
        $(this).find('.agenceHidden').val(telCheTipCo);
        $(this).find('.agence').val(telCheTipCo);
      }
    });
  });

  /*模态框 点击全选 lh*/
  $(document).on(' click ', ' #checkRowAll ', function() {
    var checkLength = $('.modal').find('.oneRow').find('[type=checkbox]:checked');
    if($(this).prop('checked') == true) {
      $('.modal').find('.oneRow').find('[type=checkbox]').prop('checked', true);
      $('.modal').find('.oneRow').find('[type=checkbox]').parent().addClass('checked');
    } else {
      $('.modal').find('.oneRow').find('[type=checkbox]').prop('checked', false);
      $('.modal').find('.oneRow').find('[type=checkbox]').parent().removeClass('checked');
    }
  });

  /*lh 控制全选是否选中*/
  var checkNum = 0;
  $(document).on('click', '.checkRow', function() {
    checkNum = 1;
    var istrueNum = 0;
    $(this).parents("#nuc-list").find("tr").each(function() {
      if($(this).find("td:first").find(':checkbox').prop("checked") == true) {
        istrueNum++;
      }
    });
    if($(this).parents("#nuc-list").find("tr").length == istrueNum) {
      $('.modal').find('#checkRowAll').prop('checked', true);
      $('.modal').find('#checkRowAll').parent().addClass('checked');
    } else {
      $('.modal').find('#checkRowAll').prop('checked', false);
      $('.modal').find('#checkRowAll').parent().removeClass('checked');
    }
  });
  /*lh 点击一行选中*/
  $(document).on('click', '.modal .table-striped > tbody > tr', function() {
    if(checkNum != 1) {
      if($(this).find("td:first").find(':checkbox').prop("checked") == true) {
        $(this).find("td:first").find(':checkbox').prop("checked", false);
        $(this).find("td:first").find('.checkRow').parent().removeClass('checked');
      } else {
        $(this).find("td:first").find(':checkbox').prop("checked", true);
        $(this).find("td:first").find('.checkRow').parent().addClass('checked');
      }
    } else {
      checkNum = 0;
    }
  });
});