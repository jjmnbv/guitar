var params = [];
var allBlacklistTable;
$(function () {
    var $ = window.jQuery;
    var app = window.app;
    app.prdTyp = [
        {'code':'1','name':'类型1'},
        {'code':'2','name':'类型2'}
    ];
    app.loanUse = [
        {'code':'1','name':'买房'},
        {'code':'2','name':'装修'}
    ];
    app.repTyp =[
        {'code':'1','name':'一次还本'},
        {'code':'2','name':'分期付款'}
    ];
    app.apyYear = [
        {'code':'1','name':'1年'},
        {'code':'2','name':'2年'}
    ];
    app.idType = [
        {"code": 1, "name": "身份证"},
        {"code": 0, "name": "军人证"}
    ];
    app.isMale = [
        {'code':'0','name':'未婚'},
        {'code':'1','name':'已婚'}
    ];
    app.eduTyp = [
        {'code':'0','name':'高中'},
        {'code':'1','name':'大专'},
        {'code':'2','name':'本科'}
    ];
    app.isCar = [
        {'code':'0','name':'是'},
        {'code':'0','name':'否'}
    ];

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
    $('#formBox1').html(formTmpl1());
    $('#addDynamic').click(function() {
        $('#dynamicQueryBox').append(dynamicCond());
        // innerLayout.resizeContent("center");
        innerLayout.resizeAll();
        $('select').selectpicker('refresh');
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

        innerLayout.open('east');
        $('.date-picker-page').datepicker();
        app.$getJSON(app.BEHAVIORGRADE_VIEW+"?varId="+id).done(function (data) {
            $('.apySco-form').deserializeObject(data);
            $('#formBox1 select').prop('disabled',true);
            $('select').selectpicker('refresh');
        });
    });

    //刷新
    $('#refresh').on('click',function () {
        selectedRowId = allBlacklistTable.rows('.active').data()[0].dicCd;
        allBlacklistTable.draw();
    });
});

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
        "paging": false,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.BEHAVIORGRADE_LIST,
            "type": "POST",
             "dataType":"json",
             "contentType":"application/json",
             "data": function ( d ) {
                 d.params = params;
                return JSON.stringify(d);
             }
        },
        "drawCallback": function( settings ) {
            var api = new $.fn.dataTable.Api(settings);
            adjustTableHeight();
            if (api.rows().data().length) {
                $('.dataTables_scrollBody tbody>tr:first-child').trigger('click');
            }
        },
        "columns": [
            {
                
                data: null,
                orderable:false,
                render: function (data, type, row, meta) {
                    //return '<input class="icheck" data-radio="iradio_minimal-blue" type="radio" name="id" value="'+data.varId+'"/>'
                    // return '<span class="dataId" data-id="'+varId+'">'+varId+'</span>'
                    var varId = meta.row + meta.settings._iDisplayStart + 1;
                    return '<span class="dataId" data-id="'+varId+'">'+varId+'</span>'
                }
            },
            { data: "loanName"},
            { data: "prdTyp"},
            { data: "apyAmt"},
            {orderable:false,  data: "apyDate"}
        ]
    });
}