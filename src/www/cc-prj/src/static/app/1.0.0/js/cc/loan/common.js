$(function () {
    $('#infoListModal, #managerListModal').pagination({
        "first-store":app.firstStore
    });

    $("#confirm").click(function () {
        var checked = $("#infoTable").find("[type='radio']:checked");
        var val = checked.val();
        var text = checked.parents("td").next().text();
        $("#agence").val(text);
        $("#agenceHidden").val(val);
    });
    $("#confirmOk").click(function () {
        var checked = $("#managerTable").find("[type='radio']:checked");
        var val = checked.val();
        var text = checked.parents("td").next().text();
        $("#custManager").val(text);
        $("#custManagerHidden").val(val);
    });
});

