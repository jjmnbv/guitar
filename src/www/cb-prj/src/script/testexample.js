+function ($, app) {

  var urlSearch = function (url) {
    var param = {};
    var num = url.indexOf("?")
    url = url.substr(num + 1);

    var arr = url.split("&");
    $.each(arr, function (i, v) {
      num = v.indexOf("=");
      if (num > 0) {
        var name = v.substring(0, num);
        var value = v.substr(num + 1);
        param[name] = value;
      }
    });

    return param;
  }

  var request = new urlSearch(window.location.href);

  $.extend(app, { request: request });

} (window.jQuery, window.app);