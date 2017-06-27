//人行征信
var params = [];
var allBlacklistTable;

var businessType = "4003";

var selectedRowId;
$(function () {
    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
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

    //刷新
    $('#refresh').on('click',function () {
        selectedRowId = allBlacklistTable.rows('.active').data()[0].dicCd;
        allBlacklistTable.draw();
    });

    //导出
    $('#exportExcel').on('click',function () {
        params = [];
        $('.dynamicCondRow').each(function (i, n) {
            var rowParam = {
                condition: $(n).find('[name="condition"]').val(),
                express: $(n).find('[name="express"]').val(),
                queryVal: $(n).find('[name="queryVal"]').val()
            };
            params.push(rowParam);
        });

        var conditionParam = {
            condition: "businessType",
            express: "eq",
            queryVal: businessType+""
        };
        params.push(conditionParam);
        
        $("#conditionParams").val(JSON.stringify(params));

        $('#dynamicQueryBox').attr("method","POST");
        $('#dynamicQueryBox').attr("enctype","multipart/form-data");
        $('#dynamicQueryBox').attr("action",app.VALIDATION_RULES_EXPORT);
        $("#dynamicQueryBox").submit();

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
            "url": app.VALIDATION_RULES_LIST,
            "type": "POST",
            contentType: "application/json",// http content type
            "data": function ( d ) {
                var conditionParam = {
                    condition: "businessType",
                    express: "eq",
                    queryVal: businessType
                };
                params.push(conditionParam);
                d.params = params;
                // var p = {p: JSON.stringify(d)};
                return JSON.stringify(d)
            }
        },
        "drawCallback": function( settings ) {
            var api = new $.fn.dataTable.Api(settings);
            adjustTableHeight();
            if(selectedRowId) {
                $('.dataTables_scrollBody').find('[data-rowid='+selectedRowId+']').parent().trigger('click')
            }else{
                if(api.rows().data().length){
                    $('.dataTables_scrollBody tbody>tr:first-child').trigger('click');
                }
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
                    return '<span class="dataId" data-rowId="'+data.varId+'" data-id="'+varId+'">'+varId+'</span>'
                }
            },
            /*{orderable:false, data: "name",
             render: function (data, type, row, meta) {
             return data.split("(")[0];
             }
             },
             {orderable:false, data: "name",
             render: function (data, type, row, meta) {
             return "("+data.split("(")[1];
             }
             },
             {orderable:false, data: "name",
             render: function (data, type, row, meta) {
             return "("+data.split("(")[1];
             }
             },*/
            {orderable:false, data: "ruleIn"},
            {orderable:false, data: "ruleSmall"},
            {orderable:false, data: "checkTheme"},
            /*{orderable:false,  data: "project"},
             {orderable:false,  data: "id"}*/
        ]
    });
}