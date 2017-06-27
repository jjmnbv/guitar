/**
 * 菜单数据模拟
 * menus 左菜单（我的快捷键）
 * mainMenus 主导航
 */

+function ($, app) {
  app.menus = [
    {
      "id": 1,
      "text": "我的任务",
      "url": "/index.html",
      "style": "{\"iconClassName\":\"icon-home\"}",
      "level": 1,
      "dispor": 0,
      "createTime": null,
      "updateTime": null,
      "styleObject": {
        "iconClassName": "icon-my-task"
      }
    },
    {
      "id": 2,
      "text": "系统菜单",
      "url": "",
      "style": "{\"iconClassName\":\"icon-settings\"}",
      "level": 1,
      "dispOrder": 9999,
      "children": [
        <#list messages as message>
        {
          "id": ${message_index+1},
          "text": "${message.messageDesc}",
          "url": "/${root.moduleName}/${message.messageName}/index.html",
          "level": 2
        }<#if message_has_next>,</#if>
        </#list >
      ]
    }
  ];

app.mainMenus = app.menus;

}(window.jQuery, window.app);
