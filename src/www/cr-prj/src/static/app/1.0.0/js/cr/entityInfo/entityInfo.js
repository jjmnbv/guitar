//人行征信
+ function($, app) {
	app.registerTextHelper('ishoPrFd', app.ishoPrFd, 'code', 'name');
	app.registerTextHelper('paTyCd',  app.paTyCd, 'code', 'name');
	app.registerTextHelper('marCd', app.marCd, 'code', 'name');
	app.registerTextHelper('maxEdu', app.maxEdu, 'code', 'name');
	app.registerTextHelper('proType', app.proType, 'code', 'name');
	app.registerTextHelper('apPeTy', app.apPeTy, 'code', 'name');
}(window.jQuery, window.app);

var params = [];
var allBlacklistTable;
var selectedRow = {};
$(function () {
    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
    var formTmpl1 = Handlebars.compile($('#formTmpl1').html());
    var contactsTmpl = Handlebars.compile($('#contactsTmpl').html());

    $('#myModal').on('shown.bs.modal', function (modal) {
        $('select').selectpicker('refresh');
    });
    $('#addDynamic').click(function() {
        $('#dynamicQueryBox').append(dynamicCond());
        $('form').find("input").uniform();
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
    	
//        var conditionParam = {
//    	        condition: "dicCy",
//    	        express: "eq",
//    	        queryVal: dicCy
//    	};
//        var conditionParam1 = {
//    	        condition: "dicOr",
//    	        express: "eq",
//    	        queryVal: "CM"
//    	};
//    	params.push(conditionParam);
//    	params.push(conditionParam1);
    	 /*riTr=$(this).find('.dataId').data('ritr');
         cuNo=$(this).find('.dataId').data('cuno');*/
    	$('#dynamicQueryBox').attr("method","POST");
    	$('#dynamicQueryBox').attr("enctype","multipart/form-data");
        $('#dynamicQueryBox').attr("action",app.CRRILOCUB_EXPORTEXCEL+"?riTr="+riTr1+"&cuNo="+cuNo1);
        $("#dynamicQueryBox").submit();
    });
    
    
    allBlacklist();
    $('.dataTables_scrollBody').delegate('tr', "click", function () {
        if(!$(this).find('.dataTables_empty').size()) {
            $('#formBox1').html(formTmpl1());
            $('#paTyCd').selectloader({paTyCdList:app.paTyCd});
            $('#marCd').selectloader({marCdList:app.marCd});
            $('#maxEdu').selectloader({maxEduList:app.maxEdu});
            $('#ishoPrFd').selectloader({ishoPrFdList:app.ishoPrFd});
            $('#proType').selectloader({proTypeList:app.proType});
            $('#apPeTy').selectloader({apPeTyList:app.apPeTy});

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
            };
            app.$getJSON(app.CRRILOCUB_VIEW,datas).done(function (data) {
                $('#formBox1 .bsdForm').deserializeObject(data);
                // $.each(data.contacts, function (i, n) {
                //     console.log(n.coNm)
                // })
                $('#contacts').html(contactsTmpl(data));
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
});
function allBlacklist() {
    beautifyDict([{prefix: '', dict: app.dicts.dict_17}]);
    allBlacklistTable = $('#allBlacklistTable').DataTable({
        // responsive: true,
        //        info: false,
        // "processing": true,
        // info: false,
    	pageLength: 10,
        "infoCallback": function( settings, start, end, max, total, pre ) {
            $('#allBlacklistCount').text(total);
            return ""
        },
        // "scrollY": "25.5vh",
        "scrollX": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "order": [[ 1, "asc" ]],
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.CRRILOCUB_LIST,
            "type": "POST",
            "dataType":"json",
            "contentType":"application/json", 
             "data": function ( d ) {
                d.params = params;
                return JSON.stringify(d);
             }
        },
        "preDrawCallback": function () {
            if(selectedRow.page) {
                allBlacklistTable.page(selectedRow.page);
            }
        },
        "drawCallback": function( settings ) {
            var api = new $.fn.dataTable.Api(settings);
            adjustTableHeight();
            if(selectedRow.page!=undefined) {
                $('.dataTables_scrollBody').find('[data-rowid='+selectedRow.rowId+']').parent().trigger('click');
                selectedRow = {}
            }/*else{
                if(api.rows({page:'current'}).data().length>0){
                    $('.dataTables_scrollBody tbody>tr:first-child').trigger('click');
                }
            }*/
        },
        "columns": [
            {

                data: null,
                orderable:false,
                render: function (data, type, row, meta) {
                    //return '<input class="icheck" data-radio="iradio_minimal-blue" type="radio" name="id" value="'+data.varId+'"/>'
                    // return '<span class="dataId" data-id="'+varId+'">'+varId+'</span>'
                    var varId = meta.row + meta.settings._iDisplayStart + 1;
                    return '<span class="dataId" data-rowId="'+data.riTr+data.cuNo+'" data-ritr="'+data.riTr+'" data-cuno="'+data.cuNo+'">'+varId+'</span>'
                }
            },
            { data: 'cuNo'},
            { data: "riTr"},
            // { data: "paTyCd"},
            {
                 data: "paTyCd",
                render: function (data) {
                    return deserializeDict('', data)
                }
            },
            { data: "paNo"}
        ]
    });
}