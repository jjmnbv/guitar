    +function ($, app) {
        /**
         * 初始化数据
         */

        $('#interfaceNo').selectloader({'educationApplyList': app.mobileList});
        app.registerTextHelper('queryStatus',app.queryStatus, 'code', 'name');
        app.registerTextHelper('dataCode', app.dataCode, 'code', 'name');
        /*校验*/
        $('#educationQuery').validate();

        /*接口请求测试 */
        $(document).on("click","#search-btn",function () {
            if($('#educationQuery').valid()){
                app.$getJSON(app.EDUCATIONAPPLY ,
                    $("#educationQuery").serialize()+app.queryUserNameIdApplyWater() ).done(function(data){
                        if(data.requestCode == "00000"){
                            app.alertOK(data.requestMessage);
                            $("#requestApplyNo").val(data.requestApplyNo);
                            /*刷新列表*/
                            app.reloadData();
                        }else {
                            /*错误提示*/
                            app.alertError(data.requestMessage);
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

    }(window.jQuery, window.app);
