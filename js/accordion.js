$(function(){
    // 5行目以降は非表示
    $(".skills-table tr:gt(4)").hide();
    var accordionBtnToggle = false;

    $(".skills-accordion-btn-container").click(function(){
        if (accordionBtnToggle) {
            $(".material-symbols-outlined").css("transform", "scaleY(1)");
            $(".skills-table tr:gt(4)").hide();
            $(".skills-accordion-btn-container span:first-of-type()").html("もっと見る");
            accordionBtnToggle = false;
        } else {
            $(".material-symbols-outlined").css("transform", "scaleY(-1)");
            $(".skills-table tr:gt(4)").show();
            $(".skills-accordion-btn-container span:first-of-type()").html("閉じる");
            accordionBtnToggle = true;
        }
    });
});