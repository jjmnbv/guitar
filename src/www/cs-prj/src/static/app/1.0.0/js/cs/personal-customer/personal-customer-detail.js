 + function($, app) {
   /**
    * 初始化列表数据
    */
   //基本信息
   app.registerTextHelper('houRegAdYn', app.houRegAdYnList, 'code', 'name');
   app.registerTextHelper('ebCd', app.maxEbCdList, 'code', 'name');
   app.registerTextHelper('ebNaCd', app.ebNaCdList, 'code', 'name');
   app.registerTextHelper('ebSt', app.ebStList, 'code', 'name');
   app.registerTextHelper('st', app.stList, 'code', 'name');
   app.registerTextHelper('sexCd', app.sexCdList, 'code', 'name');
   app.registerTextHelper('marCd', app.marCdList, 'code', 'name');
   app.registerTextHelper('owYn', app.owYnList, 'code', 'name');
// 单位信息
   app.registerTextHelper('woYn', app.woYnList, 'code', 'name');
   app.registerTextHelper('woNaCd', app.woNaCdList, 'code', 'name');
   app.registerTextHelper('corNatCd', app.corNatCdList, 'code', 'name');
   app.registerTextHelper('duCd', app.duCdList, 'code', 'name');
   app.registerTextHelper('profCd', app.profCdList, 'code', 'name');
// 联系人信息
   app.registerTextHelper('relCd', app.relCdList, 'code', 'name');

//房产信息
   app.registerTextHelper('hoLvCd', app.hoLvCdList, 'code', 'name');
   app.registerTextHelper('hoNaCd', app.hoNaCdList, 'code', 'name');

     var cuNo=app.request.cuNo;
     var cuNa=getUrlParam("cuNa");
     var cuTyCd=app.request.cuTyCd;
     var cuKiCd=app.request.cuKiCd;
     var data={
     'cuNo': cuNo,
     'cuNa': cuNa,
     'cuTyCd': cuTyCd,
     'cuKiCd': cuKiCd
     };


     $.getJSON(app.BASE_INFO,data , function(res) {
     var tpl = Handlebars.compile($('#table1-template').html());
     var html = tpl(res);
     $("#table1-space-template").html(html);
     $('.paTyCd').selectloader({
       'paTyCdList': app.paTyCdList
     });
     $('.cuTyCd').selectloader({
       'cuTyCdList': app.cuTyCdList
     });
     $('.cuKiCd').selectloader({
       'cuKiCdList': app.cuKiCdList
     });
     $('.maxEbCd').selectloader({
       'maxEbCdList': app.maxEbCdList
     });
     $('.maxEbDegCd').selectloader({
       'maxEbDegCdList': app.maxEbDegCdList
     });
     $('#provCd').selectloader({
       'provinceList': app.provinceList
     });
     $('.provCd').selectloader({
       'provinceList': app.provinceList
     });
     $("input").attr("disabled", true);
     $("select").attr("disabled", true);
     $('select').selectpicker('refresh');
   });

 }(window.jQuery, window.app);
 function getUrlParam(key) {
     // 获取参数
     var url = window.location.search;
     // 正则筛选地址栏
     var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
     // 匹配目标参数
     var result = url.substr(1).match(reg);
     //返回参数值
     return result ? decodeURIComponent(result[2]) : null;
 }
