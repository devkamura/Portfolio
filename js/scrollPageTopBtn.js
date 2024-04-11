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
        $("body, html").animate({
            scrollTop: 0
        }, 400);
    });
});