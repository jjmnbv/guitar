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
var riTr;
var cuNo;
var selectedRow = {};
$(function () {
    var $ = window.jQuery;
    var app = window.app;
   
    //产品种类
    $('.prdTyp').selectloader({'prdTyp': app.prdTyp});
    app.registerTextHelper('prdTyp', app.prdTyp, 'code', 'name');

    //贷款用途
    $('.loanUse').selectloader({'loanUse': app.loanUse});
    app.registerTextHelper('loanUse', app.loanUse, 'code', 'name');

    //还款方式
    $('.repTyp').selectloader({'repTyp': app.repTyp});
    app.registerTextHelper('repTyp', app.repTyp, 'code', 'name');

    //申请年限
    $('.apyYear').selectloader({'apyYear': app.apyYear});
    app.registerTextHelper('apyYear', app.apyYear, 'code', 'name');

    //证件类型
    $('.idType').selectloader({'idType': app.idType});
    app.registerTextHelper('idType', app.idType, 'code', 'name');

    //婚姻状况
    $('.isMale').selectloader({'isMale': app.isMale});
    app.registerTextHelper('isMale', app.isMale, 'code', 'name');

    //学历
    $('.eduTyp').selectloader({'eduTyp': app.eduTyp});
    app.registerTextHelper('eduTyp', app.eduTyp, 'code', 'name');

    //是否有私家车
    $('.isCar').selectloader({'isCar': app.isCar});
    app.registerTextHelper('isCar', app.isCar, 'code', 'name');

    //是否有社保/公积金
    $('.isSecurity').selectloader({'isSecurity': app.isCar});
    app.registerTextHelper('isSecurity', app.isCar, 'code', 'name');

    $("[data-toggle='tooltip']").tooltip({
        trigger: 'hover', delay: { show: 500, hide: 100 }
    });

    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
    var formTmpl1 = Handlebars.compile($('#formTmpl1').html());
    
    $('#addDynamic').click(function() {
        $('#dynamicQueryBox').append(dynamicCond());
        // innerLayout.resizeContent("center");
        innerLayout.resizeAll();
        $('select').selectpicker('refreshWarningOne');
        if($('#dynamicQueryBox [name="condition"]').size()==3) {
            $(this).prop('disabled', true);
        }
    }).trigger('click');
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

            $('#cur').selectloader({curList:app.cur});
            $('#rpTp').selectloader({rpTpList:app.rpTp});
            $('#laUse').selectloader({laUseList:app.laUse});
            $('#paTyCd').selectloader({paTyCdList:app.paTyCd});
            $('#marCd').selectloader({marCdList:app.marCd});
            $('#maxEdu').selectloader({maxEduList:app.maxEdu});
            $('#ishoPrFd').selectloader({ishoPrFdList:app.ishoPrFd});

            innerLayout.open('east');
            $('.date-picker-page').datepicker();
            riTr=$(this).find('.dataId').data('ritr');
            cuNo=$(this).find('.dataId').data('cuno');
            var datas = {
                'riTr':riTr,
                'cuNo':cuNo
            }
            app.$getJSON(app.PRELOANWARNING_VIEW1,datas).done(function (data) {
                $('.apySco-form').deserializeObject(data);
                $('#formBox1 select').prop('disabled',true);
                $('select').selectpicker('refreshWarningOne');
            });

        }
    });
});

function allBlacklist() {
	 beautifyDict([{prefix: '', dict: app.dicts.dict_17}]);
	 $('#allBlacklistTable').on('click','.link', function(){
		    var riTr = $(this).parents('tr').find('td').eq(3).text()
		    var cuNo = $(this).parents('tr').find('td').eq(2).text()
		    console.log(riTr);
		    console.log(cuNo);
		    window.location.href=app.base+"/cr/earlyWarning/preLoanWarning2/preLoan-warning2.html?riTr="+riTr+"&cuNo="+cuNo;
		  })
	 
	 
	 
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
        "order": [[ 6, "desc" ]],
        "paging": true,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.PRELOANWARNING_LIST1,
            "type": "POST",
            "dataType":"json",
            "contentType":"application/json",
            "data": function ( d ) {
                d.params = params;
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

            { data: 'cuNm',
                          render: function (data, type, row, meta) {
                                return '<a class="link" href="javascript:void(0);">'+data+'</a>'
                            }
                        },
            { data: "cuNo"},
            { data: "riTr"},
           
            {
                 data: "paTyCd", 
                render: function (data) {
                    return deserializeDict('', data)
                }
            },
            { data: "laUpUsId"},
            { data: "laUpDt"},
            
//            { data: "paTyCd"}
//            {orderable:false,  data: "agQt"}
        ]
    });
	 
	 
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
	     $('#dynamicQueryBox').attr("action",app.PRELOANWARNING1_EXPORT1+"?riTr="+riTr+"&cuNo="+cuNo);
	     $("#dynamicQueryBox").submit();
	 });
	 /*添加excel导出事件end*/
}