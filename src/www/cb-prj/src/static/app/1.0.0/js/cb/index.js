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
       $('#tab1').pagination({
           "first-store": app.firstStore
       });
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
function excuteFlow(taskIdVal,status,applyWater){
    if(status=='01'){
        location.href = '../loan-application/brief-entry-update.html?applyWater=' + applyWater;
    }else{
        $.Bpm.init({taskId: taskIdVal});
        $.Bpm.initBusFormExt(function(){
            var taskStatus = $.Bpm.findTaskStatus();
            if(taskStatus=="SUSPEND"){
                $.Bpm.viewTask();
            }else{
                $.Bpm.handle();
            }
        });
    }
}
/* 图表 */
function getCharts(){
    //基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('annular'));
    var colorList = ['#FDC587','#FFA5C5','#CFA0FF','#A6C7FF','#A1DFF5', '#DBEEBE' ];
    var itemStyle={
        normal: {
            color: function(params) {
                return colorList[params.dataIndex]
            },
        }
    };
    var dataList = ['130', '140', '76', '138', '62', '100'];
    nameList=['消费贷','现金贷','教育贷','循环贷','消费分期a','消费分期b'];
    /*  var data:function(){
        var datalength=series.length;
              for(var i=0;i<datalength;i++){
                  var thisdata=new array[datalength];
                  thisdata[i]=dataList[i];
                  series[i].data=thisdata;
              }
    };*/
    option = {
        title: {
            subtext:'单位:件',
            x:'right',
            y:40,
            textStyle:{
                fontSize: 12,
                color:'#666'
            },
            padding:80
        },
        tooltip : {
            borderColor:'#1D1D26',//悬浮框颜色
        },
       color:colorList,
     /*   legend: {
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
            borderWidth: 0,
            borderColor:'#1D1D26',
            y: 80,
            y2: 60
        },
        xAxis : [
            {
                type : 'category',
                show: false,
                data : nameList,
                axisTick: {       /* x轴相关设置*/
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
            {
                type: 'bar',
                barWidth: '30',
                itemStyle: itemStyle,
                data :dataList
            }
        ]
     /*   series: [
            {
                name: '消费贷',
                type: 'bar',
                barWidth: '30',
                itemStyle: itemStyle,
                data : ['130',, ,, , ]
            },
            {
                name: '现金贷',
                type: 'bar',
                barWidth: '30',
                itemStyle: itemStyle,
                data : [, '140',,,,]
            },
            {
                name: '教育贷',
                type: 'bar',
                barWidth: '30',
                itemStyle: itemStyle,
                data : [,, '76', ,,]
            },
            {
                name: '循环贷',
                type: 'bar',
                barWidth: '30',
                itemStyle: itemStyle,
                data : [, , , '138',, ]
            },
            {
                name: '消费分期a',
                type: 'bar',
                barWidth: '30',
                itemStyle: itemStyle,
                data : [, , , , '62', ]
            },
            {
                name: '消费分期b',
                type: 'bar',
                barWidth: '30',
                itemStyle: itemStyle,
                data : [, , ,, , '100']
            }
        ]*/
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.onresize = myChart.resize;
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


