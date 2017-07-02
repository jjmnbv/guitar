+function ($, app) {
    var autoHeight = $('.left-box, .right-box').autoWindowHeight({
        onChange: function (h, s) {
            // console.log('scope is:')
            // console.log(s)
            // $('#allBlacklistTable_wrapper .dataTables_scrollBody').height(h)
        }
    });
    allBlacklist();
    console.log('table drawed.')
    var allBlacklistTable,
        belongingToBlacklistTable;
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        switch ($(e.target).attr('href')) {
            case '#allBlacklist':
                if(!allBlacklistTable) {
                    belongingToBlacklist()
                }else{
                    autoHeight.adjust();
                }
                break;
            case '#belongingToBlacklist':
                if(!belongingToBlacklistTable) {
                    belongingToBlacklist()
                }else{
                    autoHeight.adjust();
                }
                break;
            case '#outBlacklist':
                break;
        }
        $($.fn.dataTable.tables(true)).DataTable()
            .columns.adjust();
    });
    function allBlacklist() {
        allBlacklistTable = $('#allBlacklistTable').DataTable({
            // responsive: true,
            //        info: false,
            // info: false,
            "infoCallback": function( settings, start, end, max, total, pre ) {
                console.log(total);
                return ""
                // return total+"项";
            },
            "scrollY": 100,
            "scrollX": true,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            //                    "paging": true,
            //                    "pageLength": 10,
            // "processing": true,
            "serverSide": true,
            "ajax": {
                "url": app.ALL_BLACK_LIST,
                "type": "POST"/*,
                 "data": function ( d ) {
                 var p = {p: JSON.stringify(d)}
                 return p
                 }*/
            },
            "drawCallback": function( settings ) {
                // app.handleiCheck()
                autoHeight.adjust();
            },
            "columns": [
                {
                    
                    data: null,
                    orderable:false,
                    render: function (data, type, row, meta) {
                        //return '<input class="icheck" data-radio="iradio_minimal-blue" type="radio" name="id" value="'+data.varId+'"/>'
                        // return '<span class="dataId" data-id="'+varId+'">'+varId+'</span>'
                        var varId = meta.row + meta.settings._iDisplayStart + 1;
                        return '<span class="dataId" data-id="'+varId+'">'+varId+'</span>'
                    }
                },
                { data: "varId"},
                { data: "varName"},
                { data: "varType"},
                { data: "varDefault"},
                { data: "idType"}
            ]
        });
    }
    function belongingToBlacklist() {
        belongingToBlacklistTable = $('#belongingToBlacklistTable').DataTable({
            // responsive: true,
//                    info: false,
            "scrollX": true,
            "scrollY": 100,
            "lengthChange": false,
            "searching": false,
            "ordering": false,
            //                    "paging": true,
            //                    "pageLength": 10,
            // "processing": true,
            "serverSide": true,
            "ajax": {
                "url": app.ALL_BLACK_LIST,
                "type": "POST"/*,
                 "data": function ( d ) {
                 var p = {p: JSON.stringify(d)}
                 return p
                 }*/
            },
            "drawCallback": function( settings ) {
                // app.handleiCheck()
                autoHeight.adjust();
            },
            "columns": [
                {
                    
                    data: null,
                    render: function (data) {
                        return '<input class="icheck" data-radio="iradio_minimal-blue" type="radio" name="id" value="'+data.varId+'"/>'
                    }
                },
                { data: "varId"},
                { data: "varName"},
                { data: "varType"},
                { data: "varDefault"},
                { data: "idType"}
            ]
        });
    }
}(window.jQuery, window.app);