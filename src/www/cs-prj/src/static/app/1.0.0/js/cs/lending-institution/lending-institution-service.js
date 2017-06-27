+function ($,app) {
   
    /**
     * 初始化数据
     */

    var a=0;
    /*
     * 放款机构配置列表 增加一行
     */
    $('body').on('click', '#add', function () {
        a=1;
        var indexId=$(this).parents('.portlet-title').next().find('.lendingList-tr-num').length;
        if($("#lending-tbody").find(".newTr").length>0){
            app.alertTxt("请保存新添加行！");
        }else{
            $(this).modelCurd({
                target: $('#lending-tbody'),
                template: $('#lendingList-template'),
                self:$(this),
                index:indexId,
                fn: function (el) {
                    getSelect(el)
                    getMaBrNo();
                    /*lh 清除无数据时的图片*/
                    removeNothing();
                    /*清除无数据时的图片 end*/
                    brNoListValidateSZExists(el);
                }
            });
        }
    });

    /*
     * 修改
     */
    $('#update').alertModal({
        size: 'modal-sm',
        selector: function () {
            return !!$('[type=radio]:checked').length;
        },
        setMethod: function () {
            if($('[type=radio]:checked').data('newtr')=="newTr"){
            }else{
                a=2;
                $('[type=radio]:checked').parents('tr').find("td.update-style").removeClass("show-style");
                $('[type=radio]:checked').parents('tr').find(".update-style").find("span").css("display","none");
                $('[type=radio]:checked').parents('tr').find("input").removeClass("hiddenI");
                $('[type=radio]:checked').parents('tr').find('.mlAcNo,.payAcNo,.co').attr('disabled',false);
                brNoListValidateSZExists( $('[type=radio]:checked').parents('tr'));
            }

        }
    });

    /*
     * 判断新增加一行是否填完
    */
    $('body').on('change', 'select.brNaList,.mlAcNo,.payAcNo,.co', function () {
        var brNaList=$(this).parents("tr").find("select.brNaList").val();
        var mlAcNo=$(this).parents("tr").find(".mlAcNo").val();
        var payAcNo=$(this).parents("tr").find(".payAcNo").val();
        if(brNaList==""||mlAcNo==""||payAcNo==""){
            $(this).parents("tr").find('[type=radio]').data('status','nw');
        }else{
            $(this).parents("tr").find('[type=radio]').data('status','yc');
        }
    });

    /*
     *保存一行
     */
    $('#save').getModal({
        size: 'modal-sm',
        statusArray:["yc"],
        textArray:["确定要保存这条记录吗？"],
        noHandleArray:["nc","nw"],
        noHandle:["该条记录已保存！","该条记录有未填项，请填写！"],
        selector: function () {
            /*提交内容加校验*/
            $("#lend-service").find(".mlAcNo,.payAcNo").removeClass("required isBankCard notSpace");
            $("#lend-service").find("td").removeClass("has-error");
            var checkedRow=$('[type=radio]:checked').parents("tr");
            checkedRow.find(".mlAcNo,.payAcNo").addClass("required isBankCard notSpace");
            if(!$("#lend-service").valid()) {
                return "notShow";
            }else{
                return ($('[type=radio]:checked').data('status'))
            }
        }
    }, function (modal) {
        var brNa=$('[type=radio]:checked').parents('tr').find('.brNaList').find("option:selected").data("text-vv");
        var brNo=$('[type=radio]:checked').parents('tr').find('.brNo').val();
        var mlAcNo=$('[type=radio]:checked').parents('tr').find('.mlAcNo').val();
        var payAcNo=$('[type=radio]:checked').parents('tr').find('.payAcNo').val();
        var co=$('[type=radio]:checked').parents('tr').find('.co').val();

        if (a == 1) {
            var psData={'brNo':brNo,'brNa':brNa,'mlAcNo':mlAcNo,'payAcNo':payAcNo,'co':co};
            $.post(app.LENDING_SERVICE_SAVE,psData).done(function(res){
                if (app.isOK(res)) {
                    app.alertOK( '保存成功');
                    /*页面刷新*/
                    app.loadData();
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });

        } else if (a == 2) {
            var psData={'mlAcNo':mlAcNo,'payAcNo':payAcNo,'brNo':brNo,'co':co};
            $.post(app.LENDING_SERVICE_UPDATE,psData).done(function(res){
                if (app.isOK(res)) {
                    app.alertOK( '修改成功');
                    /*页面刷新*/
                    app.loadData();
                    return;
                }
                app.alertError(res.errors.join('\n'));
            });
        }
    });

    /*
     *删除一行
     */
    $('#delete').getModal({
        size: 'modal-sm',
        statusArray:["nc"],
        textArray:["确定要删除该条记录吗?"],
        noHandleArray:["nw"],
        noHandle:'该条记录已删除！',
        selector: function () {
            if($('[type=radio]:checked').length>0){
                var sta=$('[type=radio]:checked').data('status');
                if($('[type=radio]:checked').data('newtr')=="newTr"){
                    $('[type=radio]:checked').parents('tr').remove();
                    return (sta)
                }
                return (sta)
            }
        },
        hideAfter: function () {
            /*页面刷新*/
            app.loadData();
        }
    }, function (modal) {
        var brNo=$('[type=radio]:checked').parents('tr').find('.brNo').val();
        var URLdata=brNo;
        app.context.submit({
            modal: modal,
            url: app.LENDING_SERVICE_DELETE + URLdata,
            text: '删除成功',
            isEasyModal: true
        }, app);
    });

    /*
     * 获取下拉列表内容
     */
    function getSelect(thisTr){
        /*获取下拉列表内容  放款机构名称*/
        +function ($, app) {
            $.getJSON(app.SERVICE_BRNOLIST, function (data) {
                if (app.isOK(data)) {
                    var brNaList=data.content;
                    thisTr.find('.brNaList').selectloader({'brNaList':brNaList});
                }
            });
        }(window.jQuery, window.app);
    }

    /*
     * 放款机构编号根据名称回显编号
     */
    function getMaBrNo(){
        $('body').on('change', 'select.brNaList', function () {
            var setEle=$(this).parents('tr').find('.brNo');
            setEle.val($(this).val());
            setEle.prev().html($(this).val());
        });
    }

    /*
     * 远程校验 管理机构名称
     */
    var brNoListValidateSZExists = function(el) {
        var addForm = el.parents('#lend-service');
        var validator = app.bindFormValidation(addForm);
        el.find("select.brNaList", addForm).rules("add", {
            synchronousRemote: {
                url: app.BRNO_ISEXIST,
                type: "post",
                dateType: "text",
                data: {
                    brNo: function () {
                        return  el.find("select.brNaList", addForm).val();
                    }
                }
            },
            messages: {
                synchronousRemote: "该放款机构名称已存在！"
            }
            , onkeyup:false, onfocusout:false
        });
    };

    /*
     * 判断新增加一行验证
    */
    $('body').on('keyup', '.required,.isBankCard', function () {
        if($(this).next().html()==""){
            $(this).next().addClass("removeStyle");
        }else{
            $(this).next().removeClass("removeStyle");
        }
    });

}(window.jQuery,window.app);
