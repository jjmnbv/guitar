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
     * 单选模板
     * data为要注入的数据
     * 格式为{{{towChooseRadio data name}}}
     */
    Handlebars.registerHelper('towChooseRadio', function (data, name) {
        // var emotion = Handlebars.escapeExpression(this.emotion),
        //     name = Handlebars.escapeExpression(this.name);
        var str = ''
        if (data == '1') {
            str = '<input name="' + name + '" checked> 男'
        } else if (data == '0') {
            str = '<input name="' + name + '"> 女'
        }

        return new Handlebars.SafeString(
            str
        );
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


}(Handlebars);