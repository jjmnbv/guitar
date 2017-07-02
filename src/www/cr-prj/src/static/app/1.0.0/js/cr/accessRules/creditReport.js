var params = [];
var allBlacklistTable;
$(function () {
    
    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
    var formTmpl1 = Handlebars.compile($('#formTmpl1').html());
    var formTmpl2 = Handlebars.compile($('#formTmpl2').html());
    var formTmpl3 = Handlebars.compile($('#formTmpl3').html());
    var formTmpl4 = Handlebars.compile($('#formTmpl4').html());
    app.DICT = {
        productCategories: [
            {"code": 1, "name": "种类1"},
            {"code": 2, "name": "种类2"}
        ],
        boolean: [
            {"code": 1, "name": "是"},
            {"code": 0, "name": "否"}
        ],
        loansUsedFor: [
            {"code": 1, "name": "教育"},
            {"code": 0, "name": "消费"},
            {"code": 0, "name": "装修"},
            {"code": 0, "name": "旅游"},
            {"code": 0, "name": "创业"},
            {"code": 0, "name": "其他"}
        ],
        dataSource: [
            {"code": 1, "name": "源1"},
            {"code": 0, "name": "源2"},
            {"code": 0, "name": "源3"}
        ],
        queryReason: [
            {"code": 1, "name": "原因一"},
            {"code": 1, "name": "原因二"}
        ]
    }
    $('#addDynamic').click(function() {
        $('#dynamicQueryBox').append(dynamicCond());
        // innerLayout.resizeContent("center");
        innerLayout.resizeAll();
        $('select').selectpicker('refresh');
        if($('#dynamicQueryBox [name="condition"]').size()==3) {
            $(this).prop('disabled', true);
        }
    });
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
        var id = $(this).find('.dataId').data('id');
        $('#formBox1').html(formTmpl1());
        $('#formBox2').html(formTmpl2());
        $('#formBox3').html(formTmpl3());
        $('#formBox4').html(formTmpl4());

        $('#productCategories').selectloader(app.DICT);
        $('#loansUsedFor').selectloader(app.DICT);
        $('#dataSource').selectloader(app.DICT);
        $('#queryReason').selectloader(app.DICT);
        // $('#isSocialSecurity').selectloader(app.DICT);
        // $('#applicantCategory').selectloader(app.DICT);
        // $('#estateCategory').selectloader(app.DICT);
        innerLayout.open('east')
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
            "url": app.CREDIT_REPORT_LIST,
            // "url": path.app+'js/cr/accessRules/tempAccessData/creditReport.json',
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
            $('.dataTables_scrollBody tr:first-child').trigger('click')
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
            { data: "varName"},
            { data: "varType"},
            { data: "varType"}
        ]
    });
}