 + function($, app) {

   app.registerTextHelper('loKiCd', app.loanTypeResponse.loanTypeLoKiDicList, 'code', 'name');
   app.registerTextHelper('status', app.stList, 'code', 'name');
   /**
    * 设置弹框表单模板
    */
   app.context.formHtml = $('#form-template').html();
   app.context.formHtmlPro = $('#promo-form-template').html();
   /**
    * 初始化弹框表单模板中的控件（可以有多个，可以单独写到调用处，写在这里是为了复用）
    */
   app.context.formInit = function(form) {
     /*   初始化弹窗里的下拉框   */
     form.find('[name="loKiCd"]').selectloader({
       'loKiCdList': app.loanTypeResponse.loanTypeLoKiDicList
     });
     form.find('[name="status"]').selectloader({
       'stList': app.stList
     });

   };


   $('.loKiCd').selectloader({
     'loKiCdList': app.loanTypeResponse.loanTypeLoKiDicList
   });
   $('#st').selectloader({
     'stList': app.stList
   });

   /**
    * 增加是跳转页面
    */

   /**
    * 修改也是跳转页面
    */
   $('#update').getModal({
     statusArray: ['CS'],
     //      textArray:'确定要删除该条记录吗？',
     noHandleArray: ['JH', 'SX'],
     noHandle: '此状态不能修改',
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('status'))
       }
     },
     compileBefore: function() {
       window.location.href = 'product-set-loanType-update.html?loTyNo=' + $('[type=radio]:checked').data('id') + "&currVe=" + $('[type=radio]:checked').data('subId');
     }

   });

   /**
    * 删除操作的弹框
    */
   $('#delete').getModal({
     //text: '确定要删除该条记录吗？',
     size: 'modal-sm',
     statusArray: ['CS'],
     textArray: '确定要删除该条记录吗？',
     noHandleArray: ['JH', 'SX'],
     noHandle: '此状态不能删除',
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('status'))
       }
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.PRODUCT_SET_DELETE_DATA + "?loTyNo=" + $('[type=radio]:checked').data('id') + "&currVe=" + $('[type=radio]:checked').data('subId'),
       text: '删除成功',
       isEasyModal: true
     }, app);
   });

   /**
    * 复制操作的弹框
    */
   $('#copy').getModal({
     cancel: '取消复制',
     body: app.context.formHtml,
     /* 获取form的html模板，并填充到模态框中 */
     selector: function() {
       return !!$('[type=radio]:checked').length;
     },
     showBefore: function(modal) {
       app.context.showBefore({
         url: app.GET_SET_DATA_BY_ID,
         modal: modal,
         param: "?loTyNo=" + $('[type=radio]:checked').data('id') + "&currVe=" + $('[type=radio]:checked').data('subId')
       }, app, app.context.formInit);
     },
     showAfter: function(modal) {
       modal.find("input[name=loTyNa]").val("");
       modal.find("input[name=loTyNo]").attr('readonly', true);
       modal.find("input[name=currVe]").attr('readonly', true);
       addFinance(modal);
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtml);
       modal.find("input[name=currVe]").attr('readonly', false);
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.COMMIT_PRODUCT_SET_COPY_DATA,
       text: '复制成功'
         //      isEasyModal: true
     }, app);
   });
   /**
    * 金融产品名称是否存在
    */
   var addFinance = function(modal) {
     var addForm = modal.find('form');
     var validator = app.bindFormValidation(addForm);
     modal.find("input[name='loTyNa']", addForm).rules("add", {
       synchronousRemote: {
         url: app.COMMIT_PRODUCT_ADD_ISFINANCSEXIST,
         type: "post",
         dateType: "text",
         data: {
           loTyNa: function () {
             return  $("input[name='loTyNa']", addForm).val();
           }
         }
       },
       messages: {
         synchronousRemote: "该金融产品已存在！"
       }
       , onkeyup:false, onfocusout:false
     });
   }
   /**
    * 激活操作的弹框
    */
   $('#active').getModal({
     size: 'modal-sm',
     statusArray: ['CS'],
     textArray: '确定将状态变更为激活状态？',
     noHandleArray: ['JH', 'SX'],
     noHandle: '此状态不能激活',
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('status'))
       }
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.PRODUCT_SET_ACTIVE_DATA,
       param: {
         loTyNo: $('[type=radio]:checked').data('id'),
         currVe: $('[type=radio]:checked').data('subId')
       },
       text: '激活成功',
       isEasyModal: true

     }, app);
   });

   /**
    * 失效操作的弹框
    */
   $('#unActive').getModal({
     size: 'modal-sm',
     statusArray: ['JH'],
     textArray: '确定将状态变更为失效状态？',
     noHandleArray: ['CS', 'SX'],
     noHandle: '此状态不能变更为失效状态',
     selector: function() {
       if($('[type=radio]:checked').length > 0) {
         return($('[type=radio]:checked').data('status'))
       }
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.PRODUCT_SET_UN_ACTIVE_DATA,
       param: {
         loTyNo: $('[type=radio]:checked').data('id'),
         currVe: $('[type=radio]:checked').data('subId')
       },
       text: '失效成功',
       isEasyModal: true
     }, app);
   });

   /**
    * 促销方案操作的弹框
    */
   $('#promoCase').getModal({
     title: "增加促销方案",
     body: app.context.formHtmlPro,
     /* 获取form的html模板，并填充到模态框中 */
     selector: function() {
       return !!$('#promoCase').parents('.portlet').find('[type=radio]:checked').length;
     },
     showBefore: function(modal) {
       app.context.showBefore({
         url: app.GET_PRO_DATA_BY_ID,
         modal: modal,
         param: "?loTyNo=" + $('[type=radio]:checked').data('id') + "&currVe=" + $('[type=radio]:checked').data('subId'),
         dataJson: true
       }, app, app.context.formInit, null, app.context.formHtmlPro)
     },
     showAfter: function(modal) {
       modal.find('[name="loKiCd"]').selectloader({
         'loKiCdList': app.loKiCdList
       });
       modal.find('[name="status"]').selectloader({
         'stList': app.stList
       });
       modal.find('#status,#loKiCd').attr("disabled", true);
       $('.promNa').selectloader({
         'csPromSList': app.csPromSList
       });
       $("input").uniform();
       var promoCaseTable = $("#promoCaseAdd").tableWrapCurd({
         target: $("#promoCaseTableBody"),
         template: $('#table-row1-template'),
         items: $('#promoCaseTableBody').find('tr'),
         fn: function(el, index) {
           el.find("input").uniform();
           el.find("select").selectloader({
             'csPromSList': app.csPromSList
           });
           el.find('[data-listener-select-target]').each(function() {
             listenerSelectTarget($(this));
           });
         }
       });
     },
     hideAfter: function(modal) {
       modal.setBody(app.context.formHtmlPro);
     }
   }, function(modal) {
     app.context.submit({
       modal: modal,
       url: app.COMMIT_PROMOTION_CASE_ADD
     }, app);
   });
 }(window.jQuery, window.app);
 /*
  *wkd 二次弹框
  */
 $(document).on("click", "#promoCaseDelete", function() {
   window.componentModal = window.componentModal || {};
   var errrModal = $('#pageModal').clone();
   var index = $('#promoCaseDelete').parents('.portlet').find('[type=radio]:checked').data('id');
   console.log(index)
   if(index != undefined) {
     errrModal.find('[data-modal-text]').html('确定要删除该条记录吗？');
   } else {
     errrModal.find('[data-modal-text]').html('您还没有选中记录！');
   }
   errrModal.attr('id', 'modal_error_' + (+new Date()));
   errrModal.find('[data-modal-size]').addClass('modal-sm');
   errrModal.find('[data-modal-footer]').html('<button data-dismiss="modal" type="button" class="btn blue">确定</button>')
   $('body').append(window.componentModal.errorModal = errrModal);
   errrModal.modal();
   errrModal.on('hide.bs.modal', function() {
     $(this).remove();
     /*删除检验重复*/
     var commonSelect = $('#promoCaseDelete').parents('.portlet.reg').find('select.selectExe');
     removeCommonSelect(commonSelect);
   });
   errrModal.find('[data-modal-footer] button').click(function() {
     var index = $('#promoCaseDelete').parents('.portlet').find('[type=radio]:checked');
     index.parents("tr.active").remove();
   });
 })

 //选择促销名称下拉框，加链接
 function putPromNo(event) {
  var selArray = $(event).parents('tr').siblings('tr').find('select[data-selectloader-store="csPromSList"]');
   var selVal = $(event).val();
   //$(event).parent().next('span').html('');
   //$(event).prev().css("border", "1px solid #D6D6D6");
   if(selArray.length) {
     for(var i = 0; i < selArray.length; i++) {
       var remIndex = $(selArray[i]).selectpicker('val');
       $(selArray[i]).find('option:selected').text();
       if(selVal == remIndex) {
         /*$(event).parent().next('span').html('该名称不能重复');
         $(event).prev().css("border", "1px solid #E94D59");*/
         $(event).parents('tr').find('a').attr('href', 'javascript:;').html('');
         return false;
       }
     }
   }
   //          	selArray.each(function(index,data){
   //          	      var remIndex = $(this).find('option:selected').val();
   //          	         console.log(selVal == remIndex);
   //                    if(selVal == remIndex){
   //                    	  $(event).next('span').html('该名称不能重复');
   //                    	  $(event).parents('tr').find('a').attr('href','javascript:;').html('');
   //                    	  return false;
   //                    }else{
   //                    	  $(event).next('span').html('');
   //                    	  $(event).parents('tr').find('a').attr('href','../promotion-allocation/promotion-allocation-detail.html?promNo='+selVal).html('详情');
   //                    }
   //          	    });
   //          }else{
   //          	$(event).parents('tr').find('a').attr('href','../promotion-allocation/promotion-allocation-detail.html?promNo='+selVal).html('详情');
   //          }
 }

 function removeCommonSelect(commonSelect){
   var flag;
   commonSelect.each(function(){
     if( $(this).next().html()=="请勿重复选择"){
       var signSelect =  $(this).find("option:selected").val();
       var parentTr = $(this).parents('tr');
       var sublingTr = parentTr.siblings('tr').find('select.selectExe');
       for(var i=0; i<sublingTr.length;i++){
         var commonSelectVal = sublingTr.eq(i).val();
         if(signSelect==commonSelectVal){
           flag++;
         }
       }
       if(flag>0){
         $(this).rules("add", {
           afterSpace: true,
           messages: {
             afterSpace: "请勿重复选择"
           }
         });
       }else {
         $(this).rules("remove", "afterSpace");
         $(this).parents("form").validate().element($(this));
       }
     }
     flag = 0;
   });
 }