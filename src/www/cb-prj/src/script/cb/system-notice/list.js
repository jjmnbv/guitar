/**
 * 首屏数据模拟
 */
+function ($, app) {
    /**
     * 面包屑导航数据
     * @type {{icon: string, dt: string, dd: Array}}
     */
    app.crumbs = {
        icon: 'business-processing',
        dt: {
            text: '系统配置',
            url: '#'
        },
        dd: [
            {
                text: '业务参数',
                url: '#'
            },
            {
                text: '系统公告',
                url: '/cb/system-notice/system-notice-list.html'
            }
        ]
    };

    /**
     * 模拟首屏数据
     */
    app.messTypeList=[
    {"code":0,"name":"消息类型1"},
    {"code":1,"name":"消息类型2"},
    {"code":2,"name":"消息类型3"}];
    
    $(function(){
      $(".dictionarys").selectloader(app);
//    后台生成后替换
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
    })
}(window.jQuery, window.app);
