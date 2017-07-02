/**
 * Created by lina on 2017/1/19.
 */
$(function(){
    var $ = window.jQuery;
    var app = window.app;

    /*图标权限判断*/
  /*  var add=$('#add');
    var item1={};
    item1.id=add.attr('id');
    item1.class=add.attr('class');
    var update=$('#update');
    var item2={};
    item2.id=update.attr('id');
    item2.class=update.attr('class');
    var del =$('#delete');
    var item3={};
    item3.id=del.attr('id');
    item3.class=del.attr('class');

    var picList=[];
    picList.push(item1,item2,item3);
    var markArray=app.pathArray;

    for(var i=0;i<picList.length;i++){
        var iconId=picList[i].id;
        var iconClass=picList[i].class;
        for(var j=0;j<markArray.length;j++){
            var markFlag=markArray[j].code;
            if(iconId==markFlag){
                if(!markArray[j].flag){
                    $('#'+iconId).removeClass(iconClass).addClass(iconClass+'-disabled');
                    $('#'+iconId).attr('id','');
                }
            }
        }
    }*/


    $('#update').click(function(){
        if($('[type=radio]:checked').length>0){
            $('#updatePic').modal();
        }else{
            $('#errorMES .modal-body').text('您还没有选中记录!')
            $('#errorMES').modal();
        }
    });
    $('#add').click(function(){
        $('#addPic').modal();
    });

    var addModal=$('#addPic');
    var addForm=$("form",addModal);
    addModal.on('hidden.bs.modal', function (event) {
        addForm[0].reset();
    });

    var updateModal=$('#updatePic');
    var updateForm=$("form",updateModal);
    updateModal.on('hidden.bs.modal', function (event) {
        updateForm[0].reset();
    });



    $('#submitForm').click(function(){
        var file = $("#fileUpload")[0].files[0];
        if (typeof file !== 'object') {
            return false;
        }
        if ('jpg,jpeg,bmp,png,JPG'.indexOf(file.name.split('.').pop()) === -1) {
            $('#errorMES .modal-body').text('请上传jpg,jpeg,bmp,png格式的图片!');
            $('#errorMES').modal();
           /* app.alertError('请上传jpg,jpeg,bmp,png格式的图片');*/
            return false;
        }

        if (parseInt(file.size) > 50 * 1024) {
            $('#errorMES .modal-body').text('请上传大小不超过50k的图片!')
            $('#errorMES').modal();
            /*app.alertError('请上传大小不超过50kb的图片');*/
            return false;
        }
        var formData = new FormData($("#uploadForm" )[0]);

        $.ajax({
            url:app.MUNE_PIC_CREATE,
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (returndata) {
                if(app.isOK(returndata)){
                    app.alertOK("上传成功！");
                    $('.pagination-query').trigger('click');
                   /* location.reload();*/
                }else {
                    app.alertError("上传失败！");
                }
            }
        });
    });

    $('#updateConfirm').click(function(){
        var file = $("#updateFile")[0].files[0];
        if (typeof file !== 'object') {
            return false;
        }
        if ('jpg,jpeg,bmp,png,JPG'.indexOf(file.name.split('.').pop()) === -1) {
            $('#errorMES .modal-body').text('请上传jpg,jpeg,bmp,png格式的图片!');
            $('#errorMES').modal();
            return false;
        }

        if (parseInt(file.size) > 50 * 1024) {
            $('#errorMES .modal-body').text('请上传大小不超过50k的图片!')
            $('#errorMES').modal();
            return false;
        }
        var formData = new FormData($( "#updateForm" )[0]);
        $.ajax({
            url: app.MUNE_PIC_UPDATE + $('[type=radio]:checked').data('id') ,
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (returndata) {
                if(app.isOK(returndata)){
                    app.alertOK("修改成功！");
                    $('.pagination-query').trigger('click');
                }else {
                    app.alertError("修改失败！");
                }
            }
        });
    });

    $('#delete').getModal({
            text: '确定要删除该条记录吗？',
            size: 'modal-sm',
            selector: function () {
                return !!$('[type=radio]:checked').length;
            }
        }, function (modal) {
            app.context.submit({
                modal: modal,
                url: app.MUNE_PIC_REMOVE + $('[type=radio]:checked').data('id'),
                text: '删除成功',
                isEasyModal: true
            }, app);
        });


});