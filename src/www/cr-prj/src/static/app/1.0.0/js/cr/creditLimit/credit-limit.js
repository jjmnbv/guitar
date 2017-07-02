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
    

    $("[data-toggle='tooltip']").tooltip({
        trigger: 'hover', delay: { show: 500, hide: 100 }
    });

    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
    var formTmpl1 = Handlebars.compile($('#formTmpl1').html());
    $('#formBox1').html(formTmpl1());
    $('#addDynamic').click(function() {
        $('#dynamicQueryBox').append(dynamicCond());
        // innerLayout.resizeContent("center");
        innerLayout.resizeAll();
        $('select').selectpicker('refreshCredit');
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
        var id = $(this).find('[name="id"]').val();
        $('#formBox1').html(formTmpl1());
    //字典
        
        $('#cur').selectloader({curList:app.cur});
        $('#rpTp').selectloader({rpTpList:app.rpTp});
        $('#laUse').selectloader({laUseList:app.laUse});
        $('#paTyCd').selectloader({paTyCdList:app.paTyCd});
        $('#marCd').selectloader({marCdList:app.marCd});
        $('#maxEdu').selectloader({maxEduList:app.maxEdu});
        $('#ishoPrFd').selectloader({ishoPrFdList:app.ishoPrFd});

        innerLayout.open('east');
        $('.date-picker-page').datepicker();
        
        var riTr=$(this).find('.dataId').data('ritr');
        var cuNo=$(this).find('.dataId').data('cuno');
        /*增加一个全局变量riTr1(流水号),cuNo1(身份证号) start*/
         riTr1=$(this).find('.dataId').data('ritr');
         cuNo1=$(this).find('.dataId').data('cuno');
         /*增加一个全局变量riTr1(流水号),cuNo1(身份证号) end*/
        var datas = {
          	    'riTr':riTr,
          	    'cuNo':cuNo
          	  }
        
        app.$getJSON(app.CASHLOAN_VIEW,datas).done(function (data) {
            $('.apySco-form').deserializeObject(data);
            $('#formBox1 select').prop('disabled',true);
            $('select').selectpicker('refreshCredit');
        });
    });

    //刷新
    $('#refreshCredit').on('click',function () {
        selectedRowId = allBlacklistTable.rows('.active').data()[0].dicCd;
        allBlacklistTable.draw();
    });
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
    $('#dynamicQueryBox').attr("action",app.CASHLOAN_VIEWEXPORT+"?riTr="+riTr1+"&cuNo="+cuNo1);
    $("#dynamicQueryBox").submit();
});
/*添加excel导出事件end*/

function allBlacklist() {
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
        "order": [[ 1, "desc" ]],
        //"paging": false,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.CREDIT_LIST,
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
            { data: "riTr"},
            { data: "cuNo"},
            {orderable:false, data: "cuNm"},
            { data: "prCd"},
            { data: "apAm"},
            {orderable:false, data: "apStDt"}
        ]
    });
}