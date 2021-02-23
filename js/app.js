$(document).ready(function () {
    $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $('#nav').css('background','#fff')
        }else {
            $('#nav').css('background','rgba(255,255,255,0.6)')
        }
    })
    new WOW().init();
})
