/**
 * Created by Administrator on 2017/5/25.
 */

        /*饼状图*/
var ChartsAmcharts = function() {
    var initChartSample6 = function() {
        var chart = AmCharts.makeChart("chart_6", {
            "type": "pie",
            "theme": "light",

            "fontFamily": 'Open Sans',

            "color":    '#888',

            "dataProvider": [{
                "country": "Lithuania",
                "litres": 501.9
            }, {
                "country": "Czech Republic",
                "litres": 301.9
            }, {
                "country": "Ireland",
                "litres": 201.1
            }, {
                "country": "Germany",
                "litres": 165.8
            }, {
                "country": "Australia",
                "litres": 139.9
            }, {
                "country": "Austria",
                "litres": 128.3
            }, {
                "country": "UK",
                "litres": 99
            }, {
                "country": "Belgium",
                "litres": 60
            }, {
                "country": "The Netherlands",
                "litres": 50
            }],
            "valueField": "litres",
            "titleField": "country",
            "exportConfig": {
                menuItems: [{
                    icon: App.getGlobalPluginsPath() + "amcharts/amcharts/images/export.png",
                    format: 'png'
                }]
            }
        });

        $('#chart_6').closest('.portlet').find('.fullscreen').click(function() {
            chart.invalidateSize();
        });
    }
    return {
        init: function() {
            initChartSample6();
        }

    };

}();

jQuery(document).ready(function() {
    ChartsAmcharts.init();
});

/* 柱状图*/
var Dashboard = function() {

    return {
        initAmChart1: function() {
            if (typeof(AmCharts) === 'undefined' || $('#dashboard_amchart_1').size() === 0) {
                return;
            }

            var chartData = [{
                "date": "2012-01-08",
                "distance": 480, /*通过量*/
                "townName": "1233",
                "townSize": 10,
                "latitude": 78676,/*进件量*/
                "duration": 501
            }, {
                "date": "2012-01-09",
                "distance": 218,
                "townName": "Dalas",
                "townSize": 17,
                "latitude": 75575,
                "duration": 287
            }, {
                "date": "2012-01-10",
                "distance": 349,
                "townName": "Oklahoma City",
                "townSize": 11,
                "latitude": 54757,
                "duration": 485
            }, {
                "date": "2012-01-11",
                "distance": 603,
                "townName": "Kansas City",
                "townSize": 10,
                "latitude": 78787,
                "duration": 890
            }, {
                "date": "2012-01-12",
                "distance": 534,
                "townName": "Denver",
                "townName2": "Denver",
                "townSize": 18,
                "latitude":75455,
                "duration": 810
            }, {
                "date": "2012-01-13",
                "townName": "Salt Lake City",
                "townSize": 12,
                "distance": 425,
                "duration": 75,
                "latitude": 42444,
                "alpha": 0.4
            }, {
                "date": "2012-01-14",
                "latitude": 546465,
                "duration": 470,
                "townName": "Las Vegas",
                "townName2": "Las Vegas",
                "bulletClass": "lastBullet"
            }, {
                "date": "2012-01-15"
            }];
            var chart = AmCharts.makeChart("dashboard_amchart_1", {
                type: "serial",
                fontSize: 12,
                fontFamily: "Open Sans",
                dataDateFormat: "YYYY-MM-DD",
                dataProvider: chartData,

                addClassNames: true,
                startDuration: 1,
                color: "#6c7b88",
                marginLeft: 0,

                categoryField: "date",
                categoryAxis: {
                    parseDates: true,
                    minPeriod: "DD",
                    autoGridCount: false,
                    gridCount: 50,
                    gridAlpha: 0.1,
                    gridColor: "#FFFFFF",
                    axisColor: "#555555",
                    dateFormats: [{
                        period: 'DD',
                        format: 'DD'
                    }, {
                        period: 'WW',
                        format: 'MMM DD'
                    }, {
                        period: 'MM',
                        format: 'MMM'
                    }, {
                        period: 'YYYY',
                        format: 'YYYY'
                    }]
                },

                valueAxes: [{
                    id: "a1",
                    title: "",
                    gridAlpha: 0,
                    axisAlpha: 0
                }, {
                    id: "a2",
                    position: "right",
                    gridAlpha: 0,
                    axisAlpha: 0,
                 /*   labelsEnabled: false*/
                }, {
                    id: "a3",
                /*    title: "duration",*/
                    position: "right",
                    gridAlpha: 0,
                    axisAlpha: 0,
                    labelsEnabled: false  /*是否显示 右侧刻度*/
                }],
                graphs: [{ /*柱*/
                    id: "g1",
                    valueField: "distance",
                    title: "通过量",
                    type: "column",
                    fillAlphas: 0.7,   /* 柱形图 是否填充颜色*/
                    valueAxis: "a1",
                    balloonText: " 通过量：[[value]]",  /*鼠标以上 显示内容*/
                    legendValueText: "[[value]] 件",
                    legendPeriodValueText: "总数: [[value.sum]] 件",
                    lineColor: "#08a3cc",
                    alphaField: "alpha",
                }, {/*线   进件量*/
                    id: "g2",
                    valueField: "latitude",
                    classNameField: "bulletClass",
                    title: "进件量",
                    type: "line",
                    valueAxis: "a2",
                    lineColor: "#786c56",
                    lineThickness: 1,
                    legendValueText: "[[description]]/[[value]]",
                    descriptionField: "townName",
                    bullet: "round",
                    bulletSizeField: "townSize",
                    bulletBorderColor: "#02617a",
                    bulletBorderAlpha: 1,
                    bulletBorderThickness: 2,
                    bulletColor: "#89c4f4",
                    labelText: "[[townName2]]",
                    labelPosition: "right",
                    balloonText: "进件量:[[value]]",
                    showBalloon: true,
                    animationPlayed: true,
                }, { /*线   处理量*/
                    id: "g3",
                    title: "处理量",
                    valueField: "duration",
                    type: "line",
                    valueAxis: "a3",
                    lineAlpha: 0.8,
                    lineColor: "#e26a6a",
                    balloonText: "处理量:[[value]]",
                    lineThickness: 1,
                    legendValueText: "[[value]]",
                    bullet: "square",
                    bulletBorderColor: "#e26a6a",
                    bulletBorderThickness: 1,
                    bulletBorderAlpha: 0.8,
                    dashLengthField: "dashLength",
                    animationPlayed: true
                }],

                chartCursor: {
                    zoomable: false,
                    categoryBalloonDateFormat: "DD",
                    cursorAlpha: 0,
                    categoryBalloonColor: "#e26a6a",
                    categoryBalloonAlpha: 0.8,
                    valueBalloonsEnabled: false
                },
                legend: {
                    bulletType: "round",
                    equalWidths: false,
                    valueWidth: 120,
                    useGraphSettings: true,
                    color: "#6c7b88"
                }
            });

        },
        initAmChart3: function() {
            if (typeof(AmCharts) === 'undefined' || $('#dashboard_amchart_3').size() === 0) {
                return;
            }

            var chart = AmCharts.makeChart("dashboard_amchart_3", {
                "type": "serial",
                "addClassNames": true,  /* 鼠标移上 变色*/
                "theme": "light",
              /*  "path": "../assets/global/plugins/amcharts/ammap/images/",*/
                "autoMargins": false,
                "marginLeft": 50,
                "marginRight": 20,
                "marginTop": 10,
                "marginBottom": 50,
                "balloon": {
                    "adjustBorderColor": false,
                    "horizontalPadding": 10,
                    "verticalPadding": 8,
                    "color": "#ffffff"
                },
                /*  柱形高度*/
                "dataProvider": [{
                    "year": 2009,
                    "income": 23.5,
                    "expenses": 21.1
                }, {
                    "year": 2010,
                    "income": 26.2,
                    "expenses": 30.5
                }, {
                    "year": 2011,
                    "income": 30.1,
                    "expenses": 34.9
                }, {
                    "year": 2012,
                    "income": 29.5,
                    "expenses": 31.1
                }, {
                    "year": 2013,
                    "income": 30.6,
                    "expenses": 28.2,
                }, {
                    "year": 2014,
                    "income": 30.6,
                    "expenses": 28.2,
                    }, {
                    "year": 2015,
                    "income": 34.1,
                    "expenses": 32.9,
                    "dashLengthColumn": 5,
                    "alpha": 0.2,
                    "additional": "(projection)"
                }],
            /*    "valueAxes": [{
                    "axisAlpha": 0,
                    "position": "left"
                }],*/
                "startDuration": 1,
                "graphs": [{
                    "alphaField": "alpha",
                    "balloonText": "<span style='font-size:12px;'>[[title]]：<span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                    "fillAlphas": 1,
                    "title": "命中量",
                    "type": "column",
                    "valueField": "income",
                    lineColor: "#08a3cc",
                    "dashLengthField": "dashLengthColumn"
                }, {  /*柱形图样式*/
                    "id": "graph2",
                    "balloonText": "<span style='font-size:12px;'>[[title]]：<span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
                    "bullet": "round",
                    "lineThickness": 3,
                    "bulletSize": 7,
                    /*  "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "useLineColorForBulletBorder": true,
                    "bulletBorderThickness": 3,
                    "fillAlphas": 0,
                    "lineAlpha": 1,*/
                    "title": "直接拒绝量",
                    "valueField": "expenses"
                }],
                "categoryField": "year",
                "categoryAxis": {
                    "gridPosition": "start",
                    "axisAlpha": 0,
                    "tickLength": 0
                },
                "export": {
                    "enabled": true
                }
            });
        },
        init: function() {
            this.initAmChart1();
            this.initAmChart3();
        }
    };
}();

if (App.isAngularJsApp() === false) {
    jQuery(document).ready(function() {
        Dashboard.init();
    });
}

+function ($, app) {
    /*控制按钮*/
    $(document).on("click",".contrl-charts li",function () {
        $(this).siblings().removeClass("on");
        $(this).addClass("on");
    });

   /*表格*/
    app.$getJSON(app.TABLE_LIST).done( function (data) {
        var getHtml = $('#table_1');
        var tpl = Handlebars.compile($('#table1-template').html());
        var html = tpl(data);
        getHtml .html(html);
        var rangeArray = [[0,10],[10,15],[15,20],[20,30],[30,100]];
        var colorArray = ["#d6e9fe","#c2defd","#aed3fd","#91bff3","#71b2fb"];
        getHtml.find('td').each(function(){
           var _thisVal = $(this).html();
            _thisVal =  _thisVal.substring(0, _thisVal.length-1);
            for(var i=0;i<rangeArray.length;i++){
                if((rangeArray[i][0] <= _thisVal) && (rangeArray[i][1] > _thisVal) && (_thisVal != "")){
                    $(this).css("background",colorArray[i]);
                }
            }
        });
    });
} (window.jQuery, window.app);