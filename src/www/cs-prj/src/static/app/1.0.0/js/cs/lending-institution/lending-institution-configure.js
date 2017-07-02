+ function($, app) {

  /**
   * 初始化数据
   */
}(window.jQuery, window.app);
/*
 * 放款机构配置列表 增加一行
 */
$('body').on('click', '#add', function() {
  var indexId = $(this).parents('.portlet-title').next().find('.lendingList-tr-num').length;
  if($("#lending-tbody").find(".newTr").length>0){
    app.alertTxt("请保存新添加行！");
  }else{
    $(this).modelCurd({
      target: $('#lending-tbody'),
      template: $('#lendingList-template'),
      self: $(this),
      index: indexId,
      fn: function(el) {
        getSelect(el);
        /*lh 清除无数据时的图片*/
        removeNothing();
        /*清除无数据时的图片 end*/
        maBrNaListValidateSZExists(el);
        getMaBrNa();
        geMlBrNa();
      }
    });
  }
});

/*
*  判断当前行是否可保存（是否填完）
*/
$('body').on('change', 'select.mlBrNaList,select.maBrNaList', function() {
  var mlBrNaList = $(this).parents("tr").find("select.mlBrNaList").val();
  var maBrNaList = $(this).parents("tr").find("select.maBrNaList").val();
  if(mlBrNaList == "" || maBrNaList == "") {
    $(this).parents("tr").find('[type=radio]').data('status', 'nw');
  } else {
    $(this).parents("tr").find('[type=radio]').data('status', 'yc');
  }
});

/*
 * 保存一行
 */
$('#save').getModal({
  size: 'modal-sm',
  statusArray: ["yc"],
  textArray: ["确定要保存这条记录吗？"],
  noHandleArray: ["nc", "nw"],
  noHandle: ["该条记录已保存！", "该条记录有未填项，请填写！"],
  selector: function() {
    if($('[type=radio]:checked').length > 0) {
      return($('[type=radio]:checked').data('status'))
    }
  }
}, function(modal) {
  var mlBrNo = $('[type=radio]:checked').parents('tr').find('.mlBrNo').val();
  var mlBrNaList = $('[type=radio]:checked').parents('tr').find('.mlBrNaList').find("option:selected").data("text-vv");
  var maBrNo = $('[type=radio]:checked').parents('tr').find('.maBrNo').val();
  var maBrNaList = $('[type=radio]:checked').parents('tr').find('.maBrNaList').find("option:selected").data("text-vv");
  var psData = {
    'mlBrNa': mlBrNaList,
    'maBrNo': maBrNo,
    'maBrNa': maBrNaList,
    'mlBrNo': mlBrNo
  };
  $.post(app.LENDING_INSTITUTION_SAVE, psData).done(function(res) {
    if(app.isOK(res)) {
      app.alertOK('保存成功');
      /*页面刷新*/
      app.loadData();
      return;
    }
    app.alertError(res.errors.join('\n'));
  });
});

/*
 * 删除一行
 */
$('#delete').getModal({
  size: 'modal-sm',
  statusArray: ["nc"],
  textArray: ["确定要删除该条记录吗?"],
  noHandleArray: ["nw"],
  noHandle: '该条记录已删除！',
  selector: function() {
    if($('[type=radio]:checked').length > 0) {
      var sta = $('[type=radio]:checked').data('status');
      if($('[type=radio]:checked').data('newtr') == "newTr") {
        $('[type=radio]:checked').parents('tr').remove();
        return(sta);
        /*页面刷新*/
        app.loadData();
      }
      return(sta)
    }
  },
  hideAfter: function() {
    /*页面刷新*/
    app.loadData();
  }
}, function(modal) {
  var maBrNo = $('[type=radio]:checked').data('id');
  app.context.submit({
    modal: modal,
    url: app.LENDING_INSTITUTION_DELETE + maBrNo,
    text: '删除成功',
    isEasyModal: true
  }, app);
});

/*
 * 获取下拉列表内容
 */
function getSelect(thisTr) {
  /*获取下拉列表内容  放款机构名称*/
  + function($, app) {
    $.getJSON(app.MABRLIST, function(data) {
      if(app.isOK(data)) {
        var maBrNaList = data.content;
        thisTr.find('.maBrNaList').selectloader({
          'maBrNaList': maBrNaList
        });
      }
    });
  }(window.jQuery, window.app);
  /*获取下拉列表内容  管理机构名称*/
  +function($, app) {
    $.getJSON(app.MLBRLIST, function(data) {
      if(app.isOK(data)) {
        var mlBrNaList = data.content;
        thisTr.find('.mlBrNaList').selectloader({
          'mlBrNaList': mlBrNaList
        });
      }
    });
  }(window.jQuery, window.app);
}

/*
 * 返款机构编号根据名称回显编号
 */
function geMlBrNa() {
  $('body').on('change', 'select.mlBrNaList', function() {
    var setEle = $(this).parents('tr').find('.mlBrNo');
    var $thisVal = $(this).val();
    setEle.val($thisVal);
    setEle.prev().html($(this).val());
  });
}

/*
 * 管理机构编号根据名称回显编号
 */
function getMaBrNa() {
  $('body').on('change', 'select.maBrNaList', function() {
    var setEle = $(this).parents('tr').find('.maBrNo');
    setEle.val($(this).val());
    setEle.prev().html($(this).val());
  });
}

/*
 * 远程校验 管理机构名称
 */
var maBrNaListValidateSZExists = function(el) {
  var addForm = el.parents('#insititution');
  var validator = app.bindFormValidation(addForm);
  el.find("select.maBrNaList", addForm).rules("add", {
    synchronousRemote: {
      url: app.MABRNA_ISEXIST,
      type: "post",
      dateType: "text",
      data: {
        maBrNo: function () {
          return  el.find("select.maBrNaList", addForm).val();
        }
      }
    },
    messages: {
      synchronousRemote: "该管理机构名称已存在！"
    }
    , onkeyup:false, onfocusout:false
  });
};
