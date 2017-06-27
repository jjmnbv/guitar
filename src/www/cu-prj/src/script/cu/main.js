function initDatePicker(element, hasRanges, option){
    var today = moment()
    var config = {
        opens: 'right',
        startDate: today,
        // endDate: '2100-12-31',
        minDate: today,
        // maxDate: '2100-12-31',
        autoApply: true,
        locale: {
            format: 'YYYY-MM-DD',
            separator: " ~ ",
            applyLabel: '确定',
            cancelLabel: "取消",
            fromLabel: '从',
            toLabel: '到',
            customRangeLabel: '自定义范围',
            daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            firstDay: 1
        }
    };
    var settings = $.extend({}, config, option)
    // console.log('settings will be: ')
    // console.log(settings)

    if (hasRanges) {
        settings['ranges'] =  {
            '今 天': [moment(), moment()],
            '昨 天': [moment().subtract('days', 1), moment().subtract('days', 1)],
            '最近7天': [moment().subtract(7, 'days').format("YYYY-MM-DD"), today],
            '最近30天': [moment().subtract(30, 'days').format("YYYY-MM-DD"), today],
            '这个月': [moment().startOf('month'), moment().endOf('month')],
            '上个月': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        };
    }
    // var date_scope = element.daterangepicker(settings, function (start, end) {
    //     element.val(start.toString('yyyy-MM-dd') + ' ~ ' + end.toString('yyyy-MM-dd'));
    // });
    var date_scope = element.daterangepicker(settings);
    // element.val(today+ ' ~ '+ today)
    return date_scope;
}