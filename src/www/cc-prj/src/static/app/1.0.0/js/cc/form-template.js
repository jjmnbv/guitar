$(function () {
    $('#form-template').validate({
        rules:{
            userName:{
                required:true,
                digits:true,
                rangelength:[5,10]
            },
            phone:{
                required:true,
                isMobilePhone:true
            },
            cuNo:{
                required:true,
                maxlength:10
            },
            loanAm:{
                required:true,
                min:30,
                max:1000
            },
            idCard:{
                required:true,
                isIDCard:true
            },
            bankId:{
                required:true,
                isBankCard:true
            },
            postNo:{
                required:true,
                isZipCode:true
            }
        },
        messages:{
            userName:{
                required:"请输入账户名！",
                digits:"请输入合法数字！",
                rangelength: $.validator.format('请输入{0}至{1}位数字！')
            },
            phone:{
                required:"请输入手机号",
                isMobilePhone:"请输入正确的手机号"
            },
            cuNo:{
                required:"请输入客户号！",
                maxlength:$.validator.format('最大不超过{0}位')
            },
            loanAm:{
                required:"请输入放款金额",
                min:$.validator.format('最小不能少于{0}'),
                max:$.validator.format('最大不超过{0}')
            },
            idCard:{
                required:"请输入身份证号"
            },
            bankId:{
                required:"请输入银行卡号"
            },
            postNo:{
                required:"请输入邮政编码"
            }
        }
    });

    $('#beDt').datepicker({
        autoclose:true,   //是否要立即关闭日期选择器在选择的日期
        format:'yyyy-mm-dd',  //格式
        language:'zh-CN',  //语言
        endDate:'2016-12-29',   //结束时间
        startDate:'2016-12-12',  //开始时间
    }).on('changeDate', function () {
        
    });
    $('#enDt').datepicker({
        autoclose:true,   //是否要立即关闭日期选择器在选择的日期
        format:'yyyy-mm-dd',  //格式
        language:'zh-CN',  //语言
        endDate:'2016-12-29',   //结束时间
    }).on('changeDate', function () {
        
    });
});