$(function() {
  + function($, app) {
    /**
     * 初始化列表数据
     */
    App.startPageLoading({animate: true});
    //费用详情hanlebars
    app.context.formHtml = $('#form-template').html();

    app.context.formInit = function(form) {
      /*   初始化弹窗里的下拉框   */
      form.find('[name="feTyCd"]').selectloader({
        'feTyCdList': app.feTyCdList
      });
      form.find('[name="amNaCd"]').selectloader({
        'amNaCdList': app.amNaCdList
      });
      form.find('[name="amYn"]').selectloader({
        'amYnList': app.amYnList
      });
      /*   初始化radio控件   */
      form.find('input').uniform();
    };
    var test = function(currVeParam) {
      app.$getJSON(app.GET_SET_DATA_BY_ID + "?loTyNo=" + app.request.loTyNo + "&currVe=" + currVeParam, function(data) {
        if(app.isOK(data)) {
          App.stopPageLoading();
          var tpl = Handlebars.compile($('#main-cont-template').html());
          var html = tpl(data);
          $("#main-template").html(html);
          $("button,select,input").attr("disabled", false);
          $('input').uniform();
          $('.loanTypePlOpList').checkboxloader({
            'loanTypePlOpList': app.loanTypeResponse.loanTypePlopDicList
          });
          //      $("#detail-proSet-form").deserializeObject(data);
          //失去焦点校验
          app.bindFormValidation($('#detail-proSet-form'));

          $(".bindEvent").each(function() {
            $(this).next("input[type=hidden]").val($(this).val());
            $(this).val(app.formatCurrencyM($(this).val()));
          });

          $(".percentFormat").each(function() {
            if($(this).val()) {
              $(this).next("input[type=hidden]").val($(this).val());
              $(this).val(app.formatPercentBj($(this).val()));
            }
          });
          $(".loanTypePlOpList").find("input").addClass("required");

          //checkbox回显
          var plopDicList = app.loanTypeResponse.loanTypePlopDicList;
          var loanTypePlOpList = data.loanTypePlOpList;
          if(!!loanTypePlOpList) {
            for(var i = 0; i < plopDicList.length; i++) {
              for(var j = 0; j < loanTypePlOpList.length; j++) {
                if(plopDicList[i].code == loanTypePlOpList[j]) {
                  $('.loanTypePlOpList').find("label").eq(i).find("input").attr("checked", true);
                }
              }
            }
          }

          $("#minPlQt,#maxPlQt").prop("max", app.csSyPaC.maxPerQt);
          $('#loanTypeVersionList').selectloader({
            'loanTypeVersionList': data.loanTypeVersionList
          });
          $('#loTyNo').selectloader({
            'loTyNoList': app.loTyNoList
          });
          $('#loKiCd').selectloader({
            'loKiCdList': app.loKiCdList
          });
          $('#cuMaLoginNa').selectloader({
            'loanTypeCustomerDicList': app.loanTypeResponse.loanTypeCustomerDicList
          });
          $('#loKiSubCd').selectloader({
            'loKiSubCdList': app.loKiSubCdList
          });
          $('#currVe').selectloader({
            'currVeList': app.currVeList
          });
          $('#brNo').selectloader({
            'topCuBrsDicList': app.loanTypeResponse.topCuBrsDicList
          });
          $('#brNa').selectloader({
            'brNaList': app.brNaList
          });
          $('#foSeId').selectloader({
            'foSeIdList': app.foSeIdList
          });
          $('#payCd').selectloader({
            'payCdList': app.payCdList
          });
          /*     $('#mlTyCd').selectloader({'mlTyCdList': app.mlTyCdList});*/
          $('#pre_repay').selectloader({
            'pre_repayList': app.pre_repayList
          });
          $('#acoTypNo').selectloader({
            'acoTypNoList': app.acoTypNoList
          });
          $('#cgYn').selectloader({
            'cgYnList': app.cgYnList
          });
          $('#ruId').selectloader({
            'ruIdList': app.ruIdList
          });
          $('#auFlId').selectloader({
            'auFlIdList': app.loanTypeResponse.csBuFlsDicList
          });
          $('#matId').selectloader({
            'matIdList': app.loanTypeResponse.loanTypeMaterialSetDicList
          });
          $('#prnTeId').selectloader({
            'prnTeIdList': app.loanTypeResponse.loanTypePrintTmpSetDicList
          });
          $('#drId').selectloader({
            'drIdList': app.drIdList
          });
          $('#tcRuCd').selectloader({
            'tcRuCdList': app.loanTypeResponse.loanTypeTellCheckDicList
          });
          $('#tcPeRuCd').selectloader({
            'tcPeRuCdList': app.loanTypeResponse.loanTypeTellPerDicList
          });
          $('#tcRevRuCd').selectloader({
            'tcRevRuCdList': app.loanTypeResponse.loanTypeTellCheckDicList
          });
          $('#tcRevPeRuCd').selectloader({
            'tcRevPeRuCdList': app.loanTypeResponse.loanTypeTellPerDicList
          });
          $('#notSepTerm').selectloader({
            'sepTermList': app.sepTermList
          });
          $('#loClaSetCd').selectloader({
            'loClaSetCdList': app.loClaSetCdList
          });

          $('.loanTypeAccessDic').selectloader({
            'loanTypeAccessDicList': app.loanTypeResponse.loanTypeAccessDicList
          });
          $('.loanTypeFeeDic').selectloader({
            'loanTypeFeeDicList': app.loanTypeResponse.loanTypeFeeDicList
          });
          $('.loanTypePayMethodDic').selectloader({
            'loanTypePayMethodDicList': app.loanTypeResponse.loanTypePayMethodDicList
          });
          $('.loanTypeLotusAmountDic').selectloader({
            'loanTypeLotusAmountDicList': app.loanTypeResponse.loanTypeLotusAmountDicList
          });

          /*支付方式决定放款方式初始化*/
          selDirecPay("#payCd");

          //新开发新功能是否分期关联支持期限
          refreshLoPayMeListPlop();
          $('select').selectpicker('refresh');
          /*支付方式决定放款方式*/
            var textCon = $("#mlTyCd").find("option:selected").val();
            $("#mlTyCd option").not("option:first-child").remove();
            var defaultList,indexFlag;
            /*自主支付对应的应只有立即放款*/
            for(var i=0;i<app.mlTyCdList.length;i++){
              if(app.mlTyCdList[i].code=='LF'){
                defaultList = app.mlTyCdList.slice(i);
                indexFlag=i;
              }
            }
            if(textCon == "ZJ") {
              $('#mlTyCd').selectloader({
                'mlTyCdList': defaultList.splice(indexFlag,1)
              })
            } else {
              $('#mlTyCd').selectloader({
                'mlTyCdList': app.mlTyCdList
              })
            }
          //只有激活状态才可编辑
          if((data.status == 'JH') && (data.hasXB != 'XB')) {
            if($('.cancleCret').attr('disabled') == false) {
              $(".baseInfor").find("input,select,textarea").attr('disabled', true);
              $('select').selectpicker('refresh');
            } else {
              $('input,select,button').not('.creatNewVer,.dropdown-toggle,#loanTypeVersionList,#loTyNoHidden,#loKiCdHidden,#loTyNaHidden').attr('disabled', true);
              $('select').selectpicker('refresh');
              $('.add-sign,.delete-sign').addClass('hide');
            }
          } else if(data.status == 'XB') {
            $('input,select,button').not("#loanTypeVersionList,.dropdown-toggle,#releaseBtn,#loTyNo,.cancleCret").attr('disabled', true);
            $('select').selectpicker('refresh');
            $('.add-sign,.delete-sign').addClass('hide');
          } else {
            $('input,select,button').not("#loanTypeVersionList,.dropdown-toggle").attr('disabled', true);
            $('select').selectpicker('refresh');
            $('.add-sign,.delete-sign').addClass('hide');
          };

          //不同版本不同数据
          $("#loanTypeVersionList").change(function() {
            test($(this).find('option:selected').val());
          });

          //点击创建后保存和发布有效
          $(".creatNewVer").click(function() {
            $(".controlBox, .rulesBox, .channelBox, .feeBox, .repayBox")
              .find("input,select,textarea")
              .attr('disabled', false);

            $(".baseInfor").find("#cuMaLoginNa,#loTyDe,#brNo").attr('disabled', false);

            $("button").not("#releaseBtn").attr('disabled', false);
            $('.add-sign,.delete-sign').removeClass('hide');
            if($("#notSepTerm").find("option:selected").val() == 0) {
              $("#minPlQt,#maxPlQt").attr('disabled', false);
            } else {
              $("#minPlQt,#maxPlQt").attr('disabled', true);
            }
            $('select').selectpicker('refresh');
          });

          //点击撤销后都无效
          $(".cancleCret").click(function() {
            $(".controlBox, .rulesBox, .channelBox, .feeBox, .repayBox")
              .find("input,select,textarea").attr('disabled', true);

            $(".baseInfor").find("#cuMaLoginNa,#loTyDe,#brNo").attr('disabled', true);

            $("button").filter("#saveBtn, #releaseBtn,.cancleCret").attr('disabled', true);
            $('.add-sign,.delete-sign').addClass('hide');
            $('select').selectpicker('refresh');
            
            $(this).attr("disabled", true);
            app.$post(app.PRODUCT_SET_DELETE_DATA, $('#detail-proSet-form').serialize()).done(function(data) {
              if(app.isOK(data)) {
                app.alertOK('撤销成功！');
                var urlPage = $(".cancleCret").parents('form').data('link');
                if(urlPage) {
                  setTimeout(function() {
                    window.location.href = urlPage
                  }, 3000);
                } else {
                  return;
                }
              } else {
                var errors = data.errors.join(',')
                app.alertError(errors || failureText || '撤销失败！');
                $(".cancleCret").attr("disabled", false);
              }
            });
          });

          //是否分期只要发生了改变就重置还款方式的支持期限
          $("input[name=loanTypePlOpList],#minPlQt,#maxPlQt").change(function() {
            refreshLoPayMeListPlop();
          });
          //渠道
          /*新增一行*/
          var channelTabel = $("#addChannel").tableWrapCurd({
            target: $("#channelTableBody"),
            template: $('#table-row1-template'),
            items: $('#channelTableBody').find('tr'),
            fn: function(el, index) {
              el.find("input").uniform();
              el.find("select").selectloader({
                'loanTypeAccessDicList': app.loanTypeResponse.loanTypeAccessDicList
              });
            }
          });
          /*删除一行*/
          $('#removeChannel').getModal({
            text: '确定要删除该条记录吗？',
            size: 'modal-sm',
            footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
            selector: function() {
              return !!$('#removeChannel').parents('.portlet.reg').find('[type=radio]:checked').length;
            },
            notSelectorLast: function() {
              var Trlength = $('#channelTableBody').find("tr").length;
              if(Trlength === 1) {
                return false;
              } else {
                return true;
              }
            }
          }, function() {
            var index = $('#removeChannel').parents('.portlet.reg').find('[type=radio]:checked').data('id');
            channelTabel.delete(index, function(item, i) {
              var index = i + 1;
              item.find('[data-id]').attr('data-id', i);
              item.find('[data-index]').html(index);

              item.find('[id="loanTypeAccessList' + index + '_input"]')
                .attr('id', 'loanTypeAccessList' + i + '_input');

              item.find('[name="loanTypeAccessList[' + index + '].acTyNa"]')
                .attr('name', 'loanTypeAccessList[' + i + '].acTyNa')
                .attr('id', 'loanTypeAccessList' + i + '_text');

              item.find('[name="loanTypeAccessList[' + index + '].acTyCd"]')
                .attr('name', 'loanTypeAccessList[' + i + '].acTyCd')
                .attr('id', 'loanTypeAccessList' + i + '_acTyCd')
                .attr('data-selectloader-nselect', '#loanTypeAccessList' + i + '_acNo');

              item.find('[name="loanTypeAccessList[' + index + '].acNo"]')
                .attr('name', 'loanTypeAccessList[' + i + '].acNo')
                .attr('id', 'loanTypeAccessList' + i + '_acNo')
                .attr('data-value-input', '#loanTypeAccessList' + i + '_input')
                .attr('data-text-input', '#loanTypeAccessList' + i + '_text');
            });
          });
          //费用结束
          //费用开始
          /*新增一行*/
          var feeTable = $("#addFee").tableWrapCurd({
            target: $("#feeTableBody"),
            template: $('#table-row2-template'),
            items: $('#feeTableBody').find('tr'),
            fn: function(el, index) {
              el.find("input").uniform();
              el.find("select").selectloader({
                'loanTypeFeeDicList': app.loanTypeResponse.loanTypeFeeDicList
              });

            }
          });
          /*删除一行*/
          $('#removeFee').getModal({
            text: '确定要删除该条记录吗？',
            size: 'modal-sm',
            footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
            selector: function() {
              return !!$('#removeFee').parents('.portlet.reg').find('[type=radio]:checked').length;
            },
            notSelectorLast: function() {
              var Trlength = $('#feeTableBody').find("tr").length;
              if(Trlength === 1) {
                return false;
              } else {
                return true;
              }
            }
          }, function() {
            var index = $('#removeFee').parents('.portlet.reg').find('[type=radio]:checked').data('id');
            feeTable.delete(index, function(item, i) {
              var index = i + 1;
              item.find('[data-id]').attr('data-id', i);
              item.find('[data-index]').html(index);

              item.find('[id="loanTypeFeeList' + index + '_input"]')
                .attr('id', 'loanTypeFeeList' + i + '_input');

              item.find('[name="loanTypeFeeList[' + index + '].feCd"]')
                .attr('name', 'loanTypeFeeList[' + i + '].feCd')
                .attr('id', 'loanTypeFeeList' + i + '_feCd')
                .attr('data-value-input', '#loanTypeFeeList' + i + '_input')
                .attr('data-text-input', '#loanTypeFeeList' + i + '_text');

              item.find('[name="loanTypeFeeList[' + index + '].feCa"]')
                .attr('name', 'loanTypeFeeList[' + i + '].feCa')
                .attr('id', 'loanTypeFeeList' + i + '_text');
            });
          });
          //费用结束
          //还款方式开始
          /*新增一行*/
          var repayTable = $("#addRepayMode").tableWrapCurd({
            target: $("#repayTableBody"),
            template: $('#table-row3-template'),
            items: $('#repayTableBody').find('tr'),
            fn: function(el, index) {
              el.find("input").uniform();
              el.find("select").selectloader({
                'plOpList': app.plOpList
              });
              el.find("select").selectloader({
                'loanTypePayMethodDicList': app.loanTypeResponse.loanTypePayMethodDicList
              });
              refreshLoPayMeListPlop(el);
            }
          });
          /*删除一行*/
          $('#removeRepayMode').getModal({
            text: '确定要删除该条记录吗？',
            size: 'modal-sm',
            footer: '<button data-dismiss="modal" type="button" class="btn blue" data-modal-ok>确定</button>',
            selector: function() {
              return !!$('#removeRepayMode').parents('.portlet.reg').find('[type=radio]:checked').length;
            },
            notSelectorLast: function() {
              var Trlength = $('#repayTableBody').find("tr").length;
              if(Trlength === 1) {
                return false;
              } else {
                return true;
              }
            }
          }, function() {
            var index = $('#removeRepayMode').parents('.portlet.reg').find('[type=radio]:checked').data('id');
            repayTable.delete(index, function(item, i) {
              var index = i + 1;
              item.find('[data-id]').attr('data-id', i);
              item.find('[data-index]').html(index);

              item.find('[name="loanTypePayMethodList[' + index + '].plOp"]')
                .attr('name', 'loanTypePayMethodList[' + i + '].plOp')
                .attr('id', 'loanTypePayMethodList[' + i + '].plOp');

              item.find('[name="loanTypePayMethodList[' + index + '].cuRa"]')
                .attr('name', 'loanTypePayMethodList[' + i + '].cuRa');

              item.find('[name="loanTypePayMethodList[' + index + '].pmId"]')
                .attr('name', 'loanTypePayMethodList[' + i + '].pmId')
                .attr('id', 'loanTypePayMethodList[' + i + '].pmId');
                
                item.find('[name="loanTypePayMethodList[' + index + '].cuRaRe"]')
                .attr('name', 'loanTypePayMethodList[' + i + '].cuRaRe')
                .attr('id', 'loanTypePayMethodList[' + i + '].cuRaRe');
            });
          });

        } else {
          app.alertError(data.errors.join('\n'));
        }
      })
    };

    test(app.request.currVe);
    /*修改最大、最小贷款利率再次检验执行利率*/
    $(document).on('blur','#minLoRt,#maxLoRt',function(){
      $('.strikeRate').trigger('blur');
    })
  }(window.jQuery, window.app);
});

/**
 * 查看详情
 */
$(document).on('click', '.detail', function() {
  $(this).each(function() {
    var code = $(this).data('code');
    $(this).getModal({
      title: '查看费用信息',
      body: app.context.formHtml,
      /* 获取form的html模板，并填充到模态框中 */
      selector: true,
      showBefore: function(modal) {
        app.context.showBefore({
          url: app.GET_COST_DATA_BY_ID,
          modal: modal,
          param: '?feCode=' + code,
          readOnly: true
        }, app, app.context.formInit);
      },
      showAfter: function(modal) {
        modal.find('[name="feTyCd"]').selectloader({
          'feTyCdList': app.feTyCdList
        });
        modal.find('[name="amNaCd"]').selectloader({
          'amNaCdList': app.amNaCdList
        });
        modal.find('[name="amYn"]').selectloader({
          'amYnList': app.amYnList
        });
      },
      hideAfter: function(modal) {
        modal.setBody(app.context.formHtml);
      },
      footer: '<button data-dismiss="modal" type="button" class="btn blue">确定</button>'

    });
  });
});

//是否分期及联支持期限
function refreshLoPayMeListPlop(currentTr) {
  var termListDic = new Array();
  if($("#notSepTerm").find("option:selected").val() == 0) {
    var minPlQt = $("#minPlQt").val();
    var maxPlQt = $("#maxPlQt").val();
    var fromTerm = minPlQt;
    for(var i = 0; i < (maxPlQt - minPlQt + 1); i++) {
      termListDic[i] = new Object();
      termListDic[i].code = fromTerm;
      termListDic[i].name = fromTerm + '期';
      fromTerm++;
    }
  } else {
    var termList = $("input[name=loanTypePlOpList]:checked");
    for(var i = 0; i < termList.length; i++) {
      termListDic[i] = new Object();
      termListDic[i].code = $(termList[i]).val();
      termListDic[i].name = $(termList[i]).get(0).nextSibling.nodeValue;
    }
  }
  $(currentTr).find(".loPayMeListPlop").selectloader({
    'loPayMeListPlopList': termListDic
  });
  $(".loPayMeListPlop").selectloader({
    'loPayMeListPlopList': termListDic
  });
}

function changeYN(curObj) {
  var textCon = $(curObj).find("option:selected").val();
  if(textCon == "0") {
    $('.noTerm').removeClass("hide").find('input').prop("disabled", false);
    $('.radioBox').addClass("hide").find('input').prop("disabled", true);
  } else {
    $('.radioBox').removeClass("hide").find('input').prop("disabled", false);
    $('.noTerm').addClass("hide").find('input').prop("disabled", true);
  }
  refreshLoPayMeListPlop();
}

//选择费用下拉框，加链接传值
function putFecd(event) {
  var selArray = $(event).parents('tr').siblings('tr').find('select[data-selectloader-store="loanTypeFeeDicList"]');
  var selVal = $(event).val();
  if(selArray.length) {
    selArray.each(function(index, data) {
      var remIndex = $(this).find('option:selected').val();
      if(selVal == remIndex) {
        $(event).next('span').html('该名称不能重复');
        $(event).parents('tr').find('a').data('code', null).html('');
      } else {
        $(event).next('span').html('');
        $(event).parents('tr').find('a').data('code', selVal).html('费用计算详情');
      }
    });
  } else {
    $(event).parents('tr').find('a').data('code', selVal).html('费用计算详情');
  }
}

//选择还款方式下拉框，加链接
function putLoPmId(event) {
  var selVal = $(event).val();
  $(event).parents('tr').find('a').attr('href', '../repay-mode/repay-mode-detail.html?loPmId=' + selVal).html('还款方式详情');
}



//同一渠道下的渠道名称不能重复
function selAccessName(event) {
  var selArray = $(event).parents('tr').siblings('tr').find('select[data-selectloader-store="children"]');
  var selVal = $(event).val();
  if(selArray.length) {
    selArray.each(function(index, data) {
      var remIndex = $(this).find('option:selected').val();
      if(selVal == remIndex) {
        $(event).next('span').html('该名称不能重复');
      } else {
        $(event).next('span').html('');
      }
    });
  }
}

function selAccessClass(event) {
  

}
//提交页面表单
$(function() {
  //保存操作
  $(document).on('click', '#saveBtn', function(event) {
    if($('#detail-proSet-form').valid()) {
      $(event.target).attr("disabled", true);
      $("#loKiSubCd").attr("disabled",false);
      app.$post(app.COMMIT_PRODUCT_SET_DETAIL_DATA, $('#detail-proSet-form').serialize()).done(function(data) {
        if(app.isOK(data)) {
          app.alertOK('保存成功！');
          $("button,select,input").not("#loanTypeVersionList,.cancleCret,.dropdown-toggle").attr("disabled", true);
          $("#releaseBtn,#loTyNo").attr("disabled",false);
           $("#loKiSubCd").attr("disabled",true);
          $("#loanTypeVersionList").empty();
          $("#loanTypeVersionList").selectloader({
        'loanTypeVersionList': data.payload.loanTypeVersionList
      });
          $("#loanTypeVersionList").val(data.payload.loanTypeId.currVe);
          $('select').selectpicker('refresh');
          
        } else {
          var errors = data.errors.join(',')
          app.alertError(errors || failureText || '保存失败！');
          $(event.target).attr("disabled", false);
          $("#loKiSubCd").attr("disabled",true);
        }
      });
    }else{
      gotoError();
    }
    return false;
  });
  //发布操作
  $(document).on('click', '#releaseBtn', function(event) {
    if($('#detail-proSet-form').valid()) {
      submit(app.COMMIT_PRODUCT_SET_REALEASE_DATA, $('#detail-proSet-form').serialize(), event.target);
    }
    return false;
  });
});

/*function selDirecPay(curObj) {
  var textCon = $(curObj).find("option:selected").val();
  var defaultList = app.mlTyCdList.slice(0);
  $("#mlTyCd option").not("option:first-child").remove();
  $("#mlTyCd option:selected").prop("selected", false);
  if(textCon == "ZJ") {
    $('#mlTyCd').selectloader({
      'mlTyCdList': defaultList.splice(1, 1)
    })
  } else {
    $('#mlTyCd').selectloader({
      'mlTyCdList': app.mlTyCdList
    })
  }
}*/
/*支付方式决定放款方式 change事件、暂存后回显调用*/
function selDirecPay(curObj) {
  var textCon = $(curObj).find("option:selected").val();
  $("#mlTyCd option").not("option:first-child").remove();
  var defaultList,indexFlag;
  /*自主支付对应的应只有立即放款*/
  for(var i=0;i<app.mlTyCdList.length;i++){
    if(app.mlTyCdList[i].code=='LF'){
      defaultList = app.mlTyCdList.slice(i);
      indexFlag=i;
    }
  }
  if(textCon == "ZJ") {
    $('#mlTyCd').selectloader({
      'mlTyCdList': defaultList.splice(indexFlag,1)
    })
  } else {
    $('#mlTyCd').selectloader({
      'mlTyCdList': app.mlTyCdList
    })
  }
}


$.validator.addMethod("strikeRate", function(value, element) {
  var compare = true;
  var minRate = $('[name=minLoRt]').val();
  var maxRate = $('[name=maxLoRt]').val();

  if(parseFloat(value) > parseFloat(maxRate) || parseFloat(value) < parseFloat(minRate)) {
    compare = false;
  }
  return this.optional(element) || compare;
}, "需要在最小和最大贷款利率之间");


