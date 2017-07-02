+function ($, app) {
    /**
     * 列表页面复用函数组成的对象
     * formHtml: tpl  弹框表单模板
     * validateForm: null  启用验证框架的form
     * submit: app.context.submit  是否弹出简单提示框还是表单提示框具体操作
     * _submit: app.context._submit  提交操作
     * _setForm: app.context._setForm  启用验证框架
     * showBefore: app.context.showBefore  显示modal之前的操作
     */
    app.context = {
        formHtml: null,
        validateForm: null,
        /**
         * 提交前验证
         * @param option
         *      param  请求参数
         *      modal  当前显示的modal
         *      url  请求地址
         *      text  文字提示信息
         *      failureText 错误状态的文字提示信息
         *      isEasyModal: boolean  是否弹出简单提示框还是表单提示框
         * * @param app
         */
        submit: function (option, app, url, text) {
            option.modal.find('select[id="blKeCd"]').attr("disabled",false);
            option.modal.find('select[name=matCd]').attr("disabled",false);
            if (option.isEasyModal) {
            	option.modal.find('[data-modal-ok]').attr('disabled',true);
                this._submit(app, option.param, option.modal, option.url, option.text, option.failureText);
            } else {
                if (app.context.validateForm.form()) {
                    option.modal.find('select[name="basisCode"]').attr("disabled",false);
                    option.modal.find('select[name="ccTrCd"]').prop("disabled",false);
                    this._submit(app, option.modal.find('form').serializeObject(), option.modal, option.url, option.text);

                }
            }
        },
        /**
         * 提交数据方法
         * @private
         */
        _submit: function (app, param, modal, url, text, failureText) {
				app.$post(url, param).done(function (data) {
					if (app.isOK(data)) {
						app.alertOK(text || '提交成功！');
						modal.modal('hide');
						try {
                            app.loadTableData();
                        } catch (e) {
                            console.log(e.message);
                        }
					}else{
						var errors = data.errors.join(',')
						app.alertError(errors || failureText || '提交失败！');
					}
					setTimeout(function () {
						modal.find('[data-modal-ok]').attr('disabled',false);
					}, 1000);
				});
        },
        /**
         * 表单设置相关
         * @param form  modal中的表单
         * @param data  反序列号的数据
         * @param readOnly  是否禁用表单
         */
        _setForm: function (form, data, readOnly,dataJson,template) {
            if (data instanceof Object) {
            	console.log(data);
            	   if(dataJson){
                  var tpl = Handlebars.compile(template);
                  var html = tpl(data);
                      $(form).html(html);
                }else{
                	 form.deserializeObject(data);
                }
                if (readOnly) {
                    form.find('input,select,textarea').attr('disabled', true);
                    return;
                }
            }

            return form.validate({
                errorPlacement: function (error, element) {
                    if (element.get(0).type.toLowerCase() === 'radio') {
                        error.appendTo(element.parents('.form-group').children('div'));
                    } else {
                        error.insertAfter(element);
                    }
                }
            });
        },
        /**
         * 显示模态框方法公共代码提取
         * @param option
         *      param  请求参数
         *      modal  当前显示的modal
         *      url  请求地址
         *      readOnly  弹框是否只读
         * @param app
         */
        showBefore: function (option, app, fn, fn1, template) {

            var form = option.modal.find('form');

            if (typeof option.url === 'string' && !option.param) {
                /*   获取form的填充数据，并启用form验证框架   */
                app.$getJSON(option.url).done(function (data) {
                    /*   存储当前的验证框架返回的form   */
                    fn && fn(form);
                    app.context.validateForm = app.context._setForm(form, data, option.readOnly,option.dataJson, template);
                    fn1 && fn1(form,data);
                });
            }else if(typeof option.url === 'string' && option.param){
                /*   获取form的填充数据，并启用form验证框架   */
                app.$getJSON(option.url+option.param).done(function (data) {
                    /*   存储当前的验证框架返回的form   */
                    fn && fn(form);
                    app.context.validateForm = app.context._setForm(form, data, option.readOnly,option.dataJson, template);
                    fn1 && fn1(form,data);
                    /* option.callback && option.callback(data);*/
                });
            }
            else {
                fn && fn(form);
                /*   存储当前的验证框架返回的form   */
                app.context.validateForm = app.context._setForm(form);
            }
        }
    };
}(window.jQuery, window.app);