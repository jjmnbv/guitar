var params = [];
var allBlacklistTable;

var riTr = GetQueryString("riTr");
var businessType = "4013";
var cuNo = GetQueryString("cuNo");

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
        var conditionParam1 = {
    	        condition: "riTr",
    	        express: "eq",
    	        queryVal: riTr+""
    	};
        var conditionParam2 = {
    	        condition: "cuNo",
    	        express: "eq",
    	        queryVal: cuNo+""
    	};
    	params.push(conditionParam);
    	params.push(conditionParam1);
    	params.push(conditionParam2);
    	
    	$("#conditionParams").val(JSON.stringify(params));
    	
    	$('#dynamicQueryBox').attr("method","POST");
    	$('#dynamicQueryBox').attr("enctype","multipart/form-data");
        $('#dynamicQueryBox').attr("action",app.RULE_REPORT2_EXPORT);
        $("#dynamicQueryBox").submit();
    	
    });

    allBlacklist();
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
        "order": [[ 2, "desc" ]],
        "paging": false,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.RULE_REPORT_2_LIST,
            "type": "POST",
            "dataType":"json",
            "contentType":"application/json",
            "data": function ( d ) {
            	var conditionParam = {
            	        condition: "riTr",
            	        express: "eq",
            	        queryVal: riTr
            	};
            	var conditionParam1 = {
            	        condition: "businessType",
            	        express: "eq",
            	        queryVal: businessType
            	};
            	var conditionParam2 = {
            	        condition: "cuNo",
            	        express: "eq",
            	        queryVal: cuNo
            	};
            	params.push(conditionParam);
            	params.push(conditionParam1);
            	params.push(conditionParam2);
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
                    var varId = meta.row + meta.settings._iDisplayStart + 1;
                    return '<span class="dataId">'+varId+'</span>'
                }
            },
            {orderable:false,  data: "cuNm"},
            { data: "ruleType"},
            {orderable:false,  data: "deciResult"}
        ]
    });
}

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}