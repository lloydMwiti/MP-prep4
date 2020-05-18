$(document).ready(function(){
    var popup=$('.popup');
    var sub=$('.sub');
    var hide=$('.btncancel');
    var nav=$('nav');
    $(window).bind('scroll',function(){

        if ($(window).scrollTop() > 90){
            $('.container-fluid').css('padding-top','70px');
            $('.navbar').css('box-shadow','0 0.15rem .6rem -.2rem blue');
            nav.addClass('stopScroll');
        }else {
            nav.removeClass('stopScroll');
            $('.navbar').css('box-shadow','none');
            $('.container-fluid').css('padding-top','0px');

        }
    })
    
})