 + function($, app) {

   $(document).on('click', '.detail', function() {
     $(this).each(function() {
       $(".loginTime").text($(this).data('crdt'));
       $(".exitTime").text($(this).data('loginoutdt'));
       var loginTrId = $(this).data('code');
       $('#oprateDetailModal').find('input[name="loginTrId"]').val(loginTrId);
       $('#oprateDetailListModal').pagination({});
     });
   });
 }(window.jQuery, window.app);