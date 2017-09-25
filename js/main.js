$(".course-element").click(function() {
    var that = $(this);
    var input = that.find(".input");
    var inputCheck = input.prop("checked");
    if (inputCheck == false) {
        that.addClass("checked-box");
        input.prop("checked", true);
    } else if (inputCheck == true) {
        that.removeClass("checked-box");
        input.prop("checked", false);
    }
    $(".course-element input:checkbox:first").trigger("change");
});

$(".courses").change(function() {
    if ($(".course-element input:checkbox:not(:checked)").length == 0) {
        $(".courses").addClass("hidden");
        $(".text-complited").addClass("visible");
    } else {
        $(".courses").removeClass("visible");
        $(".text-complited").removeClass("hidden");
    }
});

$(document).ready(function() {
    $(".course-element input:checkbox:first").trigger("change");
});