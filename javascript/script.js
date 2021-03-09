$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 20) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.card').click(function(){
        $('.popup').addClass("active");
    });
    // slide up script 
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // var typed = new Typed(".typing1", {
    //     strings: ["Android App Developer", "Flutter App Developer", "Web Developer", "Freelancer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });
    var typed = new Typed(".typing2", {
        strings: ["Android App Developer", "Flutter App Developer", "Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
