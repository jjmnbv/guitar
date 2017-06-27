    +function ($, app) {
        /**
         * 初始化数据
         */
        /*查询模块的下拉框 初始化*/
        $('#interfaceNo').selectloader({'identityInterfaceNoList': app.mobileList});
        $('.authenType').selectloader({'authenTypeList': app.identiType});
        app.registerTextHelper('queryStatus', app.queryStatus, 'code', 'name');
        app.registerTextHelper('identiType', app.identiType, 'code', 'name');

        /*校验*/
        $('#identityInterface').validate();

        /* 接口描述 选择控制 必选项*/
        var columArr = new Array("phone","name","idNumber");
        setRequired( columArr );

        /*接口请求测试*/
        $(document).on("click","#search-btn",function () {
            if($('#identityInterface').valid()){
                app.$getJSON(app.IDENTITYAUTH ,
                    $("#identityInterface").serialize()+app.queryUserNameIdApplyWater() ).done(function(data){
                        if(data.result.requestCode == "00000"){
                            app.alertOK(data.result.requestMessage);
                            $("#requestApplyNo").val(data.result.requestApplyNo);
                            /*刷新列表*/
                            app.reloadData();
                        }else {
                            /*错误提示*/
                            app.alertError(data.result.requestMessage);
                        }
                    }
                );
            }
        });

        /*刷新按钮*/
        $("#refresh-sign").click(function () {
            /*刷新列表*/
            app.reloadData();
        });

        /*页面弹框*/
        app.context.formHtml2 = $('#form-template').html();
        app.context.formInit2 = function (form) {
            /*   初始化弹窗里的下拉框   */
            form.find('.queryStatus').selectloader({'queryStatus': app.result});
        };
        $(document).on('click', '.repayment-method', function () {
            $(this).each(function(){
                var code = $(this).data('code');
                $(this).getModal({
                    title: '查询结果',
                    body: app.context.formHtml2, /* 获取form的html模板，并填充到模态框中 */
                    selector: true,
                    showBefore: function (modal) {
                        app.context.showBefore({
                            url: app.IDENTITY_MODAL,
                            modal: modal,
                            param: code,
                            readOnly: true
                        }, app,app.context.formInit2);
                    },
                    hideAfter: function (modal) {
                        modal.setBody(app.context.formHtml2);
                    },
                    footer: '<button data-dismiss="modal" type="button" class="btn blue">关闭</button>'
                });
            });
        });
    }(window.jQuery, window.app);
