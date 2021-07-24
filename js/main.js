$(function () {
    $('.workContentBox').hover(function () {
        $('.workContentTitle', this).stop().animate({'padding-bottom': '10px'},300);
    }, function(){
        $('.workContentTitle', this).stop().animate({'padding-bottom': '0px'},300);
    });
    $('.workContentBox').hover(function () {
        $('.workContentText', this).stop().animate({'padding-bottom': '120px'},300);
    }, function(){
        $('.workContentText', this).stop().animate({'padding-bottom': '0px'},300);
    });
    $('.workContentBox').hover(function () {
        $('.workImage', this).css({'filter': 'blur(8px)brightness(0.5)'},300);
    }, function(){
        $('.workImage', this).css({'filter': 'blur(0px)brightness(1)'},300);
    });
});

anime({
    targets: '.headerSideItem',
    keyframes:[
    {translateY:-400,deray:200,duration:20,},
    {translateY:0,duration:500,},
],
easing:'linear'
});

anime({
    targets:'.aboutSideItem',
    duration:600,
    rotate:'1turn',
    delay: anime.stagger(700)
});