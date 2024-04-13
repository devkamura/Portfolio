$(function() {

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll > 300) {
            $(".scroll-pageTop-btn").css("right", 20);
            $(".scroll-pageTop-btn").css("bottom", 100);

        } else {
            $(".scroll-pageTop-btn").css("right", -999);
            $(".scroll-pageTop-btn").css("bottom", -999);
        }
    });

    $(".scroll-pageTop-btn").click(function() {
        // ボタン押下時の挙動 -8px下にずらす。
        $(".scroll-pageTop-btn").animate({"bottom": 92}, 200);
        $("body, html").animate({
            scrollTop: 0
        }, 400);
    });
});