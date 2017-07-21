/**
 * 自定义Handlebars的helper
 */
+function (handlebars) {

    /**
     * 返回应用上下文路径
     */
    handlebars.registerHelper('base', function () {
        return window.app.base;
    });

    /**
     * 注册子模板
     *
     * id 为子模板的id
     * data为需要注入的数据 ，没有数据填写null
     * 格式为{{{include 'id' data[null]}}}
     *
     * @author zx
     */
    handlebars.registerHelper("include", function (id, data) {

        if (typeof id !== 'string') {
            throw new ReferenceError('子模板的id为：' + id);
        }

        var target = $('#' + id);
        
        if (data instanceof Object) {
            return handlebars.compile(target.html())(data);
        } else {
            console.dir('渲染子模板的数据：' + data);
        }
        return target.html();
    });

    /**
     * 格式化登录时间
     * @ms 毫秒数
     *
     * @author zx
     */
    handlebars.registerHelper('formatLoginTime', function (ms) {
        var lt = new Date(parseInt(ms));

        var year = lt.getFullYear();
        var month = lt.getMonth() + 1;
        var date = lt.getDate();
        var minute = lt.getMinutes();
        var second = lt.getSeconds();
        var hour = lt.getHours();
        var temp = null;
        if (hour < 6) {
            temp = '凌晨';
        }
        else if (hour < 9) {
            temp = '早上';
        }
        else if (hour < 12) {
            temp = '上午';
        }
        else if (hour < 14) {
            temp = '中午';
        }
        else if (hour < 17) {
            temp = '下午';
        }
        else if (hour < 19) {
            temp = '傍晚';
        }
        else if (hour < 22) {
            temp = '晚上';
        }
        else {
            temp = '夜里';
        }

        return year + '/' + month + '/' + date + ' ' + temp + ' ' + hour + ':' + minute + ':' + second;
    });
    
    /*syx-lyf*/
    handlebars.registerHelper('formatLoginTime02', function (ms) {
        var lt = new Date(parseInt(ms));

        var year = lt.getFullYear();
        var month = lt.getMonth() + 1;
        var date = lt.getDate();
        var minute = lt.getMinutes();
        if(minute < 10){
        	  minute = '0'+minute;
        }
        var second = lt.getSeconds();
        if(second < 10){
        	  second = '0'+second;
        }
        var hour = lt.getHours();
        if(hour < 10){
        	  hour = '0'+hour;
        }
        var temp = null;
        return year + '年' + month + '月' + date + '日'  + hour + ':' + minute + ':' + second;
    });
    /**
     * 列表行号
     */
    handlebars.registerHelper('list-rowindex', function (options) {
        var index = options.data.index;
        return 1 + index;
    });

    /**
     * a == b
     */
    handlebars.registerHelper('eq', function (a, b) {
        return a == b;
    });

    /**
     * a != b
     */
    handlebars.registerHelper('ne', function (a, b) {
        return a != b;
    });

    /**
     * a > b
     */
    handlebars.registerHelper('gt', function (a, b) {
        return a > b;
    });

    /**
     * a >= b
     */
    handlebars.registerHelper('ge', function (a, b) {
        return a >= b;
    });

    /**
     * 数值求和
     */
    handlebars.registerHelper('sum', function () {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            var val = parseFloat(arguments[i]);
            if (!isNaN(val)) {
                sum += val;
            }
        }
        return sum;
    });

    /*两数相减*/
    handlebars.registerHelper('minus', function (a, b) {
        var a = parseFloat(a);
        var b = parseFloat(b);
        return a-b;
    });

    /*两数相乘*/
    handlebars.registerHelper('multiply', function (a, b) {
        var a = parseFloat(a);
        var b = parseFloat(b);
        return a*b;
    });

    /*lh 两数相加*/
    handlebars.registerHelper('add', function (a, b) {
        var a = parseFloat(a);
        var b = parseFloat(b);
        return a+b;
    });

    /*减1解决传递list的下标和序号的冲突*/
    handlebars.registerHelper('listIndex', function (a) {
        var a = parseFloat(a);
        return a-1;
    });

    /**
     * 判断当前菜单是否选中
     */
    handlebars.registerHelper('menu-active', function (options) {
        var isActive = function (url) {
            if (!url) {
                return false;
            }
            url = url.replace(/(http|https):\/\/[^\/]+/, '');
            if (url == '' || url == '/') {
                return false;
            }

            if (options.data.root.requestUrl.indexOf(url) != -1) {
                if ((url == '/index' || url == '/index.html') && options.data.root.requestUrl != url) {
                    return false;
                }
                return true;
            }
            return false;
        };

        var isActiveMenu = function(menu) {
            if (isActive(menu.url)) {
                return true;
            }
            if (!menu.children) {
                return false;
            }
            //子菜单选中则父菜单也选中
            for (var i in menu.children) {
                var child = menu.children[i];
                if (isActive(child.url)) {
                    return true;
                }
                if (isActiveMenu(child)) {
                    return true;
                }
            }
            return false;
        };

        return isActiveMenu(this);
    });

    /**
     * 菜单图标
     */
    handlebars.registerHelper('menu-icon', function () {
        if (!this.styleObject || !this.styleObject.iconClassName) {
            return "";
        }
        return '<i class="' + this.styleObject.iconClassName + '"></i>';
    });

    /**
     * 是否有子菜单
     */
    handlebars.registerHelper('has-children', function () {
        if (this.children && this.children.length > 0) {
            return true;
        }
        return false;
    });

    /**
     * 分页列表行号
     */
    handlebars.registerHelper('page-rowindex', function (options) {
        var index = options.data.index,
            page = options.data.root.page;
        return 1 + index + page.number * page.size;
    });

    /**
     * 是否首页
     */
    handlebars.registerHelper('page-first', function (options) {
        var page = options.data.root.page;
        return page.number <= 0;
    });

    /**
     * 是否尾页
     */
    handlebars.registerHelper('page-last', function (options) {
        var page = options.data.root.page;
        return page.number + 1 >= page.totalPages;
    });

    /**
     * 是否显示第一页
     */
    handlebars.registerHelper('page-show-first', function (options) {
        return options.data.first && this != 1;
    });

    /**
     * 是否显示最后一页
     */
    handlebars.registerHelper('page-show-last', function (options) {
        var page = options.data.root.page;
        return options.data.last && this != page.totalPages;
    });

    /**
     * 是否当前页
     */
    handlebars.registerHelper('page-current', function (options) {
        var page = options.data.root.page;
        return page.number + 1 == this;
    });

    /**
     * 上一页
     */
    handlebars.registerHelper('page-prev', function (options) {
        var page = options.data.root.page;
        return page.number;
    });

    /**
     * 下一页
     */
    handlebars.registerHelper('page-next', function (options) {
        var page = options.data.root.page;
        return page.number + 2;
    });
    
   /*
    * 金额格式化
    */
    handlebars.registerHelper('formatMoney', function (s) {
        n = 2;
        if(s==0){
            return s.toFixed(n);
        }else if(!s){
            return '';
        }else{
            s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
            var l = s.split(".")[0].split("").reverse(),
                r = s.split(".")[1];
            if($.inArray('-',l) != -1){
                l.splice($.inArray('-',l),1);
            }
            t = "";
            for(i = 0; i < l.length; i ++ ){
                t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
            }
            //zj判断金额是否为负数
            if(s.toString().indexOf('-') != -1){
                return '-'+t.split("").reverse().join("") + "." + r;
            }else{
                return t.split("").reverse().join("") + "." + r;
            }
        }

       });
   
   /*百分比格式化*/
   handlebars.registerHelper('formatPercent', function (num) {
        var result = (num * 100).toString(),
        index = result.indexOf(".");
        if(index == -1 || result.substr(index+1).length <= 4){
        return result + "%";
        }
        return result.substr(0, index + 3) + "%";
       });

    //zj百分比格式化保留4位小数
    handlebars.registerHelper('formatPercentDecimals', function (num) {
        if(num == 0){
            return '0.0000%';
        }else if(num == '' || num == null){
            return '';
        }else {
            var result = (parseFloat(num)*100).toFixed(4);
            return result+"%";
        }

    });
    
    //wkd 四舍五入保留四位小数
    handlebars.registerHelper('formatFourDecimalPoint', function (num) {
        if(num == null || num == ''){
            return '';
        }else {
            var result = Number(num).toFixed(4);
            return result;
        }
    });

    //zj将毫秒数格式化为日期格式
    handlebars.registerHelper('formatDate',function (args) {
        if(args == null || args == ''){
            return '';
        }else{
            var oDate = new Date(args),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth()+1,
                oDay = oDate.getDate(),
                oHour = oDate.getHours(),
                oMin = oDate.getMinutes(),
                oSen = oDate.getSeconds(),
                oTime = oYear +'-'+ oMonth +'-'+ oDay +' '+ oHour +':'+ oMin +':'+oSen;//最后拼接时间
            return oTime;
        }
    });
}(Handlebars);