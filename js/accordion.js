$(function(){
    // 5行目以降は非表示
    $(".skills-table tr:gt(4)").hide();
    var accordionBtnToggle = false;

    $(".skills-accordion-btn-container").click(function(){
        if (accordionBtnToggle) {
            $(".material-symbols-outlined").css("transform", "scaleY(1)");
            $(".skills-table tr:nth-child(5) td:last-child").css("border-radius", "0 0 8px 0");
            $(".skills-table tr:nth-child(5) th, .skills-table tr:nth-child(5) td").css("border-bottom", "2px #504A4A solid");
            $(".skills-table tr:nth-child(5) th").css("border-radius", "0 0 0 8px");
            $(".skills-table tr:gt(4)").hide();
            $(".skills-accordion-btn-container span:first-of-type()").html("もっと見る");
            accordionBtnToggle = false;
        } else {
            $(".material-symbols-outlined").css("transform", "scaleY(-1)");
            $(".skills-table tr:nth-child(5) td:last-child").css("border-radius", "0");
            $(".skills-table tr:nth-child(5) th, .skills-table tr:nth-child(5) td").css("border-bottom", "1px #504A4A solid");
            $(".skills-table tr:nth-child(5) th").css("border-radius", 0);
            $(".skills-table tr:gt(4)").show();
            $(".skills-accordion-btn-container span:first-of-type()").html("閉じる");
            accordionBtnToggle = true;
        }
    });
});
