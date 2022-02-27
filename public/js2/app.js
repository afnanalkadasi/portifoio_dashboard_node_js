$(document).ready(function () {
    'use strict';

    $(window).scroll(function() {
        if($(this).scrollTop()>5) {
            $(".custom-style").addClass("fixed-me");
        }else{
            $(".custom-style").removeClass("fixed-me");
        }
    });
    
    
    //************ smooth scroll js

    $('a.smooth-menu').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
    });



});