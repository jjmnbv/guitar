$(function () {

  var $ = window.jQuery;
  var app = window.app;
  $('#mainPage').pagination({
    "first-store": app.firstStore
  });
  
  //还款方式	
  $('#loPayTyp').selectloader({'loPayTypList': app.dicts.dict_3011});
  try{  app.registerTextHelper('loPayTyp', app.dicts.dict_3011, 'code', 'name'); }catch(e){}
  //支付类型
  $('#payTyp').selectloader({'payTypList': app.dicts.dict_3020});
  app.registerTextHelper('payTyp', app.dicts.dict_3020, 'code', 'name');
  //授权状态
  app.registerTextHelper('athInd', app.dicts.dict_3016, 'code', 'name');
  
  
  $("input[name='amt1']").on('change',function () {
    var $this = $(this);
    $("input[name='amt']").val($this.val());
    $this.val(app.formatCurrencyM($this.val(),2));
    console.log($("input[name='amt']").val());
  });

  $('#edit').getModal({
    size: 'modal-sm',
    selector: function () {
      return !!$('[type=radio]:checked').length;
    },
    compileBefore: function () {
      var athInd = $('[type=radio]:checked').data('athind');
      var athNo = $('[type=radio]:checked').data('id');
      if(athInd!='0'){
    	  app.alertError("不是未出账状态, 不能放款, 请确认!");
    	  return;
      }
      window.location.href="lnloinft-detail.html?athNo="+athNo;
    }
  });

});
