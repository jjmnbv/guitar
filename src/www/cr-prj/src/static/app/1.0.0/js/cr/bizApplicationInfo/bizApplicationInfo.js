//人行征信
+ function($, app) {
	app.registerTextHelper('cur', app.cur, 'code', 'name');
	app.registerTextHelper('rpTp',  app.rpTp, 'code', 'name');
	app.registerTextHelper('laUse', app.laUse, 'code', 'name');
}(window.jQuery, window.app);

var params = [];
var allBlacklistTable;
var selectedRow = {};
$(function () {
    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
    var formTmpl1 = Handlebars.compile($('#formTmpl1').html());
 
   
    //案例
//    $('.cur').selectloader({curList: app.dicts.dict_59});
//    app.registerTextHelper('cur', app.dicts.dict_59, 'code', 'name');
    
    
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
        if(!$(this).find('.dataTables_empty').size()) {
            var id = $(this).find('.dataId').data('id');
            $('#formBox1').html(formTmpl1());
            //字典转换
            $('#cur').selectloader({curList:app.cur});
            $('#rpTp').selectloader({rpTpList:app.rpTp});
            $('#laUse').selectloader({laUseList:app.laUse});


            innerLayout.open('east');
            var riTr=$(this).find('.dataId').data('ritr');
            var cuNo=$(this).find('.dataId').data('cuno');
            /*增添一个全局变量ritr1,cuno1 start*/
            riTr1 = $(this).find('.dataId').data('ritr');
            cuNo1 = $(this).find('.dataId').data('cuno');
            /*增添一个全局变量ritr1,cuno1 end*/
            var datas = {
                'riTr':riTr,
                'cuNo':cuNo
            }
            app.$getJSON(app.CRRIDLB_VIEW,datas).done(function (data) {
                $('.bsdForm').deserializeObject(data);
                $('#formBox1 select').prop('disabled',true);
                $('select').selectpicker('refresh');
            });
        }
    });
    //刷新
    $('#refresh').on('click',function () {
        selectedRow.page = allBlacklistTable.page();
        var selectedData = allBlacklistTable.rows('.active').data()[0];
        selectedRow.rowId = selectedData.riTr+selectedData.cuNo;
        allBlacklistTable.draw();
    });
    
    /*导出开始*/
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
    	
//    	 riTr=$(this).find('.dataId').data('ritr');
//    	 cuNo=$(this).find('.dataId').data('cuno');
    	$('#dynamicQueryBox').attr("method","POST");
    	$('#dynamicQueryBox').attr("enctype","multipart/form-data");
        $('#dynamicQueryBox').attr("action",app.CRRIDLB_VIEWEXPORT+"?riTr="+riTr1+"&cuNo="+cuNo1);
        $("#dynamicQueryBox").submit();
    });
    /*导出结束*/
    
    
    

});

function allBlacklist() {
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
        "ordering": true,
        "order": [[ 2, "desc" ]],
        //                    "paging": true,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.CRRIDLB_LIST,
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
            if(selectedRow.page!=undefined) {
                $('.dataTables_scrollBody').find('[data-rowid='+selectedRow.rowId+']').parent().trigger('click')
                selectedRow = {}
            }/*else{
                if(api.rows({page:'current'}).data().length>0){
                    $('.dataTables_scrollBody tbody>tr:first-child').trigger('click')
                }
            }*/

        },
        "columns": [
            {
                
                data: null,
                orderable: false,
                render: function (data, type, row, meta) {
                    var varId = meta.row + meta.settings._iDisplayStart + 1;
                    return '<span class="dataId" data-rowId="'+data.riTr+data.cuNo+'" data-id="'+varId+'" data-riTr="'+data.riTr+'" data-cuNo="'+data.cuNo+'">'+varId+'</span>'
                }
            },
//            { orderable: true, data: "apTr"},
            { data: "riTr"},
            { data: "cuNo"},
            { data: "prCd"},
            {
                 data: "laUse", 
                render: function (data) {
                    return deserializeDict('', data)
                }
            },
            {
                width: '', data: "laTp", 
                render: function (data) {
                    return deserializeDict('', data)
                }
            },
            {
                width: '', data: "cur", 
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
            { data: "laUpDt"},
            { data: "laUpUsId"}
        ]
    });
}