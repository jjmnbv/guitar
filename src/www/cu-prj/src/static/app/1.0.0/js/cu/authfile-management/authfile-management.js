/**
 * Created by lina on 2017/2/9.
 */
$(function(){
    if($('#takeEffect').attr("checked")){
        $('#authfileBtn').attr("disabled",false);
    }else {
        $('#authfileBtn').attr("disabled",true);
    }
});