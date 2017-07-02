/**
 * Created by lina on 2017/3/14.
 */
$(function(){
    var app = window.app;

        $.getJSON(app.FUNCTION_CONFIGURATION_VIEW + app.request.resNo +'/'+ app.request.url, function (data) {
            if (app.isOK(data)) {
                var tpl = Handlebars.compile($('#update-template').html());
                var html = tpl(data);
                $("#main-cont").html(html);
                $('select').selectloader({'ResActCd': app.ResActCd});

                return;
            }
        });


    /**
     * 初始化数据
     */
    $('#menuListModal').pagination({
        "first-store": app.firstStore
    });


    +function ($, app) {
        $("#confirm").click(function () {
            var checked = $("#menuTable").find("[type='radio']:checked");
            var val = checked.val();
            var text = checked.parents("td").next().text();
            $('#resNo').val(val);
            $('#resNa').val(text);
        });
    }(window.jQuery, window.app);

    $(document).on('click', '#commit', function (event) {
        if ($('#details-form').valid()) {
            submit(app.FUNCTION_CONFIGURATION_UPDATE, $('#details-form').serializeObject(),event.target);
        }
        return false;
    });





});