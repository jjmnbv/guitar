$(function(){
    $.validator.addMethod("postCode", function (value, element, params) {
        var post = /^[0-9]{6}$/;
        return this.optional(element) || (post.test(value));
    }, "请输入有效的邮编");
    $.validator.addMethod("phone", function (value, element, params) {
        var tel = /^1[34578][0-9]{9}$/;
        return this.optional(element) || (tel.test(value));
    }, "请输入有效的电话号码");

});