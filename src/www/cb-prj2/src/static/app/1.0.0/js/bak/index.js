$(function () {
    var $ = window.jQuery;
    var app = window.app;
    $('#mainPage').pagination({
        "first-store": app.firstStore
    });

    +function($, app) {
        /**
         * 初始化数据
         */
//        $('#tab1').pagination({
//            "first-store": app.firstStore
//        });
    } (window.jQuery, window.app);
    /*partner*/
  /*  var partnerSwiper = new Swiper('#swiper-ct', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 10
    });
    $('.arrow-left').on('click', function(e) {
        e.preventDefault();
        partnerSwiper.swipePrev()
    });
    $('.arrow-right').on('click', function(e) {
        e.preventDefault();
        partnerSwiper.swipeNext();
    });*/

    getCharts();
    showCalendar();
    /*点击加载数据*/

    $("#show_totalNum1").click(function(){
        /* App.startPageLoading({animate: true});
        $.getJSON(app.CALL_APPLICANT_INFORMATION + app.request.applyWater, function (data) {
            if (app.isOK(data)) {
                App.stopPageLoading();
                /!*将返回数据放到页面*!/
                return;
            }
            app.alertError(data.errors.join('\n'));
        });*/
        $(this).css("display","none");
        $(this).parent("li").find(".set-none").css("display","block");
    });
    $("#show_totalNum2").click(function(){
      /*  App.startPageLoading({animate: true});
        $.getJSON(app.CALL_APPLICANT_INFORMATION + app.request.applyWater, function (data) {
            if (app.isOK(data)) {
                App.stopPageLoading();
                /!*将返回数据放到页面*!/
                return;
            }
            app.alertError(data.errors.join('\n'));
        });*/
        $(this).css("display","none");
        $(this).parent("li").find(".set-none").css("display","block");
    });
});

/* 图表 */
function getCharts(){
    //基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('annular'));
    option = {
        title: {
            subtext:'单位:件',
            x:650,
            y:40,
            textStyle:{
                fontSize: 12,
                color:'#666'
            }
        },
        tooltip : {
            borderColor:'#1D1D26',//悬浮框颜色
        },
       color: [ '#FDC587','#FFA5C5','#CFA0FF','#A6C7FF','#A1DFF5', '#DBEEBE' ],
       /* legend: {
            x:'right',
            y:70,
            align:'right',
            itemWidth:16,
            itemGap:20,
            orient:'vertical',
            data:['消费贷','现金贷','教育贷','循环贷','消费分期a','消费分期b']
        },*/
        calculable : false,
        grid: {
           /* width:500,*/
            borderWidth: 0,
            borderColor:'#1D1D26',
            y: 80,
            y2: 60
        },
        xAxis : [
            {
                type : 'category',
                show: false,
                data : ['消费贷','现金贷','教育贷','循环贷','消费分期a','消费分期b'],
                axisTick: {/* x轴相关设置*/
                    alignWithLabel: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    show: false,
                    onZero: true
                },
                axisLabel: {
                    show: true,
                    inside: false,
                    textStyle: {
                        color:'#666',
                        fontSize: 12
                    }
                },
                color: ['#1D1D26'],
                show: true
            }
        ],
        series: [
            {/*['消费贷','现金贷','教育贷','循环贷','消费分期a','消费分期b'],*/
                //name:'待办统计',
                type: 'bar',
                barWidth: '30',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#FDC587','#FFA5C5','#CFA0FF','#A6C7FF','#A1DFF5', '#DBEEBE' ];
                            return colorList[params.dataIndex]
                        },
                    }
                },
                data : ['130', '140', '76', '138', '62', '100']
            }
        ]
    /*    series : [
            {
                type: 'bar',
                barWidth: '30',
                data: [
                    {   name: '消费贷',
                        value: 130,
                        itemStyle: {
                            normal: {color: '#FDC587'}
                        }
                    },
                    {
                        name: '现金贷',
                        value: 140,
                        itemStyle: {
                            normal: {color: '#FFA5C5'}
                        }
                    },
                    {
                        name: '教育贷',
                        value: 76,
                        itemStyle: {
                            normal: {color: '#CFA0FF'}
                        }
                    },
                    {
                        name: '循环贷',
                        value: 138,
                        itemStyle: {
                            normal: {color: '#A6C7FF'}
                        }
                    },
                    {
                        name: '消费分期a',
                        value: 62,
                        itemStyle: {
                            normal: {color: '#A1DFF5'}
                        }
                    },
                    {
                        name: '消费分期b',
                        value: 100,
                        itemStyle: {
                            normal: {color: '#DBEEBE'}
                        }
                    }
                ]
            }
    ]*/


    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

/* 日历 */

function showCalendar(){
    window.pickadate = shadow.Pickadate.create({
        $el: $('#pickadate'),
        attrs: {
        }
    });
}

/*收起*/
function toggleBox(){
    var isdisplay=$("#waitToggle").css('display');
    if(isdisplay=="none"){
        $("#waitToggle").slideToggle("slow");
        $("#changeInfo").html("收起>");
    }else{
        $("#waitToggle").slideToggle("slow");
        $("#changeInfo").html("展开>");

    }
}


