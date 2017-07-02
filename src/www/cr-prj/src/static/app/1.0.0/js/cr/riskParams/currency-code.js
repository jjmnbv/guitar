var params = [];
var selectedRowId;
var listType = "search";
var dimCy="6002";
var pageTitle = "货币代码"

$(function () {
    var $ = window.jQuery;
    var app = window.app;
    var type = "";
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

    var dynamicCond = Handlebars.compile($('#dynamicCondTmpl').html());
    var formTmpl1 = Handlebars.compile($('#formTmpl1').html());
    $('#formBox1').html(formTmpl1());
    $('#formTitle').text(pageTitle);
    var dimCd;//编码
    var dimOr;//归属人

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
            $('.date-picker-page').datepicker({ autoclose: !0});

            dimCd=$(this).find('.dataId').data('dimcd');
            dimCy=$(this).find('.dataId').data('dimcy');
            var datas = {
                'dimCd':dimCd,
                'dimCy':dimCy,
                'dimOr':"CM",
            }

            app.$getJSON(app.CRDIMC_VIEW,datas).done(function (data) {
                $('.apySco-form').deserializeObject(data);
            });
        }
    });
    
    var operation = "";
    
    //复制
    $('#copy').on('click',function () {
        operation = 'add';
        type = "copy";
        $('#formTitle').text('复制'+pageTitle);
        $(this).prop('disabled',true);
        
        $("input[name='dimCd']").attr("readonly", false);
//        $("input[name='dimNm']").attr("readonly", true);
        
        var datas = {
                'dimCd':dimCd,
                'dimCy':dimCy,
                'dimOr':"CM",
            }
        app.$getJSON(app.CRDIMC_VIEW,datas).done(function (data) {
        	$("[name='dimCd']").val(data.dimCd);
            $("[name='dimNm']").val(data.dimNm);
        });
        
        app.alertOK('复制成功，请修改【编码】完成后点击保存按钮！');
        
    });
    
    //新增
    $('#add').on('click',function () {
        operation = 'add';
        type = "add";
        innerLayout.open('east');
        $('#formTitle').text('新增'+pageTitle);
        $("[name='dimCd'], [name='dimNm']").attr("readonly", false);
        $("[name='dimCd']").val("");
        $("[name='dimNm']").val("");
        $("[name='dimCy']").val(dimCy);
    });

    //编辑
    $('#edit').on('click',function () {
        operation = 'edit';
        if(dimCd&&dimCy){
            $('#formTitle').text('编辑'+pageTitle);
            $("[name='dimNm']").attr("readonly", false);
            $("[name='dimCd']").attr("readonly", true);
            $("[name='dimCd']").val(dimCd);
        }else{
            app.alertError('没有数据，不能进行编辑！');
        }

    });
    
    //刷新
    $('#refresh').on('click',function () {
    	listType = "refresh";
    	allBlacklistTable.ajax.url(app.CRDIMC_LIST+listType);
        selectedRowId = allBlacklistTable.rows('.active').data()[0].dimCd;
        allBlacklistTable.draw();
    });
    
    //保存
    $('#save').on('click',function () {
        var dataAll = $('.apySco-form').serializeObject();
        if(!operation){
        	app.alertTxt('未选择新增或者编辑操作，不能进行保存！');
        }else if(operation=='add'){
                	//新增保存
                    if($('.apySco-form').valid()){
                        app.$post(app.CRDIMC_CREATE+type,dataAll).done(function (data) {
                        	
                        	if("FAIL" == data.code){
                        		alert(data.errorMsg)
                        		return;
                        	}else{
                        		if(app.isOK(data)){
                                    app.alertOK('提交成功');
                                    $('#add').prop('disabled',false);
                                    selectedRowId = data.dimCd;
                                    allBlacklistTable.draw();
                                    operation = "";
                                }else{
                                	var errors = data.errors.join(',');
                                    app.alertError(errors || failureText || '提交失败！');
                                }
                        	}
                            
                        });
                    }
        }else if(operation=='edit'){
            //编辑保存
            if($('.apySco-form').valid()){
                app.$post(app.CRDIMC_UPDATE,dataAll).done(function (data) {
                    if(app.isOK(data)){
                        app.alertOK('提交成功');
                        selectedRowId = allBlacklistTable.rows('.active').data()[0].dimCd;
                        allBlacklistTable.draw();
                        operation = "";
                    }else{
                        var errors = data.errors.join(',');
                        app.alertError(errors || failureText || '提交失败！');
                    }
                });
            }
        }
        operation = "";
    });

    //删除
    $('#delete').getModal({
        text: '确定要删除该条证件类型信息吗？',
        size:'modal-sm',
    },function (modal) {
        /*app.context.submit({
            modal: modal,
            url: app.CRDIMC_REMOVE+'?dimCd='+dimCd+'&dimCy='+dimCy+'&dimOr=CM',
            text: '删除成功',
            isEasyModal: true
        }, app);*/
        app.$post(app.CRDIMC_REMOVE+"?dimCd="+dimCd+"&dimCy="+dimCy+"&dimOr=CM").done(function (data) {
            if(app.isOK(data)){
                app.alertOK('删除成功！');
                modal.modal('hide');
                modal.find('[data-modal-ok]').attr('disabled',false);
                selectedRowId = $('.dataTables_scrollBody tr:first-child').find('.dataId').data('rowid');
                allBlacklistTable.draw();
            }else{
                var errors = data.errors.join(',');
                app.alertError(errors || failureText || '提交失败！');
                modal.modal('hide');
                modal.find('[data-modal-ok]').attr('disabled',false);
            }
        });
    });
    
    
  //导出
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
    	
        var conditionParam = {
    	        condition: "dimCy",
    	        express: "eq",
    	        queryVal: dimCy+""
    	};
        var conditionParam1 = {
    	        condition: "dimOr",
    	        express: "eq",
    	        queryVal: "CM"
    	};
    	params.push(conditionParam);
    	params.push(conditionParam1);
    	
    	$("#conditionParams").val(JSON.stringify(params));
    	
    	$('#dynamicQueryBox').attr("method","POST");
    	$('#dynamicQueryBox').attr("enctype","multipart/form-data");
        $('#dynamicQueryBox').attr("action",app.CRDIMC_EXPORT+"?dimCy="+dimCy);
        $("#dynamicQueryBox").submit();
    	
    });
    
    
});



var allBlacklistTable;
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
        "order": [[ 1, "asc" ]],
        "searching": false,
        "paging": false,
        //                    "pageLength": 10,
        // "processing": true,
        "serverSide": true,
        "ajax": {
            "url": app.CRDIMC_LIST+listType,
            "type": "POST",
            "dataType":"json",
            "contentType":"application/json",
            "data": function ( d ) {
            	
            	//查询编码类型为证件类型的条件数据
            	var conditionParam = {
            	        condition: "dimCy",
            	        express: "eq",
            	        queryVal: dimCy
            	};
            	params.push(conditionParam);
                d.params = params;
                return JSON.stringify(d);
            }
        },
        "drawCallback": function( settings ) {
            adjustTableHeight();
            console.log(selectedRowId);
            if(selectedRowId){
                console.log(selectedRowId+'-------');
                $('.dataTables_scrollBody').find('[data-rowid='+selectedRowId+']').parent().trigger('click');
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
                    return '<span class="dataId" data-rowid="'+data.dimCd+'" data-dimcy="'+data.dimCy+'" data-dimcd="'+data.dimCd+'">'+varId+'</span>'
                }
            },
            {orderable:false, data: "dimCy"},
            { data: "dimCd"},
            {orderable:false, data: "dimNm"},
            /*{orderable:false,  data: "attr1"},*/
            {orderable:false,  data: "laUpDt"}
        ]
    });
}
