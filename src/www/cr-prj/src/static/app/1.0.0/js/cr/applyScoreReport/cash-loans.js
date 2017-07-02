+ function($, app) {
	app.registerTextHelper('cur', app.cur, 'code', 'name');
	app.registerTextHelper('rpTp',  app.rpTp, 'code', 'name');
	app.registerTextHelper('laUse', app.laUse, 'code', 'name');
	app.registerTextHelper('paTyCd', app.paTyCd, 'code', 'name');
	app.registerTextHelper('marCd', app.marCd, 'code', 'name');
	app.registerTextHelper('maxEdu', app.maxEdu, 'code', 'name');
	app.registerTextHelper('ishoPrFd', app.maxEdu, 'code', 'name');
}(window.jQuery, window.app);

var params = [];
var allBlacklistTable;
$(function () {
    var $ = window.jQuery;
    var app = window.app;

    //产品种类
    $('.prCd').selectloader({'prCd': app.prCd});
    app.registerTextHelper('prCd', app.prCd, 'code', 'name');

    //贷款用途
    $('.laUse').selectloader({'laUse': app.laUse});
    app.registerTextHelper('laUse', app.laUse, 'code', 'name');

    //还款方式
    $('.rpTp').selectloader({'rpTp': app.rpTp});
    app.registerTextHelper('rpTp', app.rpTp, 'code', 'name');

    //申请年限
    $('.apTt').selectloader({'apTt': app.apTt});
    app.registerTextHelper('apTt', app.apTt, 'code', 'name');

    //证件类型
    $('.paTyCd').selectloader({'paTyCd': app.paTyCd});
    app.registerTextHelper('paTyCd', app.paTyCd, 'code', 'name');

    //婚姻状况
    $('.isMale').selectloader({'isMale': app.isMale});
    app.registerTextHelper('isMale', app.isMale, 'code', 'name');

    //学历
    $('.maxEdu').selectloader({'maxEdu': app.maxEdu});
    app.registerTextHelper('maxEdu', app.maxEdu, 'code', 'name');

    //是否有私家车
    $('.isCar').selectloader({'isCar': app.isCar});
    app.registerTextHelper('isCar', app.isCar, 'code', 'name');

    //是否有社保/公积金
    $('.ishoPrFd').selectloader({'ishoPrFd': app.isCar});
    app.registerTextHelper('ishoPrFd', app.isCar, 'code', 'name');

    $("[data-toggle='tooltip']").tooltip({
        trigger: 'hover', delay: { show: 500, hide: 100 }
    });

    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
    var formTmpl1 = Handlebars.compile($('#formTmpl1').html());
    
    $('#addDynamic').click(function() {
        $('#dynamicQueryBox').append(dynamicCond());
        // innerLayout.resizeContent("center");
        innerLayout.resizeAll();
        $('select').selectpicker('refresh');
        if($('#dynamicQueryBox [name="condition"]').size()==3) {
            $(this).prop('disabled', true);
        }}).trigger('click');

    $('#query').click(function () {
        params = [];
        $('.dynamicCondRow').each(function (i, n) {
        	  var rowParam = {
                      condition: $(n).find('[name="condition"]').val(),
                      express: $(n).find('[name="express"]').val(),
                      queryVal: $(n).find('[name="queryVal"]').val()
                  };
            params.push(rowParam);
        });
        allBlacklistTable.draw();
    });

    $('#dynamicQueryBox').delegate('.removeDynamic', 'click', function () {
        $(this).parents('.dynamicCondRow').remove();
        innerLayout.resizeAll();
        if($('#dynamicQueryBox [name="condition"]').size()<=3) {
            $('#addDynamic').prop('disabled', false);
        }
    });

    allBlacklist();
    $('.dataTables_scrollBody').delegate('tr', "click", function () {
        if(!$(this).find('.dataTables_empty').size()) {
            var id = $(this).find('[name="id"]').val();
            $('#formBox1').html(formTmpl1());
            //字典

            $('#cur').selectloader({curList: app.cur});
            $('#rpTp').selectloader({rpTpList: app.rpTp});
            $('#laUse').selectloader({laUseList: app.laUse});
            $('#paTyCd').selectloader({paTyCdList: app.paTyCd});
            $('#marCd').selectloader({marCdList: app.marCd});
            $('#maxEdu').selectloader({maxEduList: app.maxEdu});
            $('#ishoPrFd').selectloader({ishoPrFdList: app.ishoPrFd});


            innerLayout.open('east');
            var riTr = $(this).find('.dataId').data('ritr');
            var cuNo = $(this).find('.dataId').data('cuno');
            /*增添一个全局变量ritr1,cuno1 start*/
            riTr1 = $(this).find('.dataId').data('ritr');
            cuNo1 = $(this).find('.dataId').data('cuno');
            /*增添一个全局变量ritr1,cuno1 end*/
            var datas = {
                'riTr': riTr,
                'cuNo': cuNo
            }

            $('.date-picker-page').datepicker();
            app.$getJSON(app.CASHLOAN_VIEW, datas).done(function (data) {
                $('.apySco-form').deserializeObject(data);
                $('#formBox1 select').prop('disabled', true);
                $('select').selectpicker('refresh');
            });
        }
    });

    //刷新
    $('#refresh').on('click',function () {
        selectedRowId = allBlacklistTable.rows('.active').data()[0].dicCd;
        allBlacklistTable.draw();
    });
});
function allBlacklist() {
	var laUse="XF";
	 // beautifyDict([{prefix: 'laUse', dict: app.dicts.dict_137}]);
	 beautifyDict([{prefix: '', dict: app.dicts.dict_137},{prefix: '', dict: app.dicts.dict_59},
		 {prefix: '', dict: app.dicts.dict_37},{prefix: '', dict: app.dicts.dict_44}]);

    allBlacklistTable = $('#allBlacklistTable').DataTable({
        // responsive: true,
        //        info: false,
        // info: false,
        "infoCallback": function( settings, start, end, max, total, pre ) {
            $('#allBlacklistCount').text(total);
            return ""
            // return total+"项";
        },
        // "scrollY": "25.5vh",
        "scrollX": true,
        "lengthChange": false,
        "searching": false,
        "order": [[ 13, "desc" ]],
//        "paging": false,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.CASHLOAN_LIST,
            "type": "POST",
            "dataType":"json",
            "contentType":"application/json",
            "data": function ( d ) {
                d.params = params;
                d.laUse = laUse;
//                var p = {p: JSON.stringify(d)}
//                p.loanType = loanType;
//               return p
                return JSON.stringify(d);
            }
        },
        "drawCallback": function( settings ) {
            adjustTableHeight();
        },
        "columns": [
            {
                
                data: null,
                orderable:false,
                render: function (data, type, row, meta) {
                    //return '<input class="icheck" data-radio="iradio_minimal-blue" type="radio" name="id" value="'+data.varId+'"/>'
                   // return '<span class="dataId" data-id="'+varId+'">'+varId+'</span>'
                    var varId = meta.row + meta.settings._iDisplayStart + 1;
                    return '<span class="dataId" data-ritr="'+data.riTr+'" data-cuno="'+data.cuNo+'">'+varId+'</span>'
                }
            },
            { data: "riTr"},
            { data: "cuNo"},
            {
                width: '', data: "laTp", 
                render: function (data) {
                    return deserializeDict('', data)
                }
            },
            {
                width: '', data: "laUse", 
                render: function (data) {
                    return deserializeDict('', data)
                }
            },
            { data: "prCd"},
        
           {
                data: "cur",
               render: function (data) {
                   return deserializeDict('', data)
               }
           },
            { data: "apTt"},
            { data: "apStDt"},
            { data: "apEdDt"},
            { data: "apAm"},
            {
                 data: "rpTp",
                render: function (data) {
                    return deserializeDict('', data)
                }
            },
            { data: "laUpUsId"},
            {orderable:false,  data: "laUpDt"}
        ]
    });
}
/*添加excel导出事件start*/
$('#export-excel').on('click',function () {
	params = [];
	$('.dynamicCondRow').each(function (i, n) {
        var rowParam = {
            condition: $(n).find('[name="condition"]').val(),
            express: $(n).find('[name="express"]').val(),
            queryVal: $(n).find('[name="queryVal"]').val()
        };
        params.push(rowParam);
    });
	$('#dynamicQueryBox').attr("method","POST");
	$('#dynamicQueryBox').attr("enctype","multipart/form-data");
    $('#dynamicQueryBox').attr("action",app.CASHLOAN_APPLYEXPORT+"?riTr="+riTr1+"&cuNo="+cuNo1);
    $("#dynamicQueryBox").submit();
});
/*添加excel导出事件end*/



/**
 *URL传值
 */
function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
