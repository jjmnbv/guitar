+function($, app) {
  $('.main-page').pagination({
    "first-store": {
      "page": {
        "number": 0,
        "size": 20,
        "totalPages": 0,
        "totalElements": 0,
        "content": [],
      },
      "pages": []
    }
  });
  $('.main-page .pagination-reload').click();
} (window.jQuery, window.app);