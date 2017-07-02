var params = [];
var allBlacklistTable;

var businessType = "4012";
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
    
  //刷新
    $('#refresh').on('click',function () {
        selectedRowId = allBlacklistTable.rows('.active').data()[0].cuNo;
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
    	
    	var columnParam = allBlacklistTable.ajax.params();
    	var obj = JSON.parse(columnParam);
    	
    	var columns = JSON.stringify(obj.columns);
    	var order = JSON.stringify(obj.order);
    	var conditionParams = JSON.stringify(params);
    	
    	//设置参数属性
    	$("input[name='conditionParams']").val(conditionParams);
    	$("input[name='orderJson']").val(order);
    	$("input[name='columnsJson']").val(columns);
    	$("input[name='start']").val(obj.start);
    	$("input[name='length']").val(obj.length);
    	
    	$('#dynamicQueryBox').attr("method","POST");
    	$('#dynamicQueryBox').attr("enctype","multipart/form-data");
        $('#dynamicQueryBox').attr("action",app.RULE_REPORT1_EXPORT);
        $("#dynamicQueryBox").submit();
    	
    });
    
    allBlacklist();
});

function allBlacklist() {
	$('#allBlacklistTable').on('click','.link', function(){
		var riTr = $(this).text()
		var cuNo = $(this).parents('tr').find('td').eq(2).text()
		window.location.href=app.base+"/cr/accessRules/ruleReport2.html?riTr="+riTr+"&businessType=4013&cuNo="+cuNo;
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
        "order": [[ 1, "desc" ]],
        //"paging": false,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.RULE_REPORT_1_LIST,
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
                    var varId = meta.row + meta.settings._iDisplayStart + 1;
                    return '<span class="dataId" data-rowId="'+data.cuNo+'" data-cuno="'+data.cuNo+'">'+varId+'</span>'
                }
            },
            { data: 'riTr',
            	render: function (data, type, row, meta) {
                    return '<a class="link" href="javascript:void(0);">'+data+'</a>'
                }
            },
            { data: "cuNo"},
            {orderable:false, data: "cuNm"},
            { data: "prCd"},
            {orderable:false,  data: "apStDt"},
            {orderable:false,  data: "deciResult"},
        ]
    });
}

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}