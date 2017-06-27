$(function () {
    var $ = window.jQuery;
    var app = window.app;
    /**/
    $(document).on("click", ".track-list ul li", function () {
        $(this).find(".show-infor").toggle();
        $(this).find(".node-icon").css({});

    });
});
