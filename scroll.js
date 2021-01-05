$(window).scroll(function(){
    var sc=$(window).scrollTop();
    if(sc>350)
    {
        $(".basliq").css("background","#f8f8f8");
        $(".menu a").css("color","black");
        $(".basliq").css("box-shadow","0 0 15px 0 #B2AFAF");
    }
    else {
        $(".basliq").css("background","linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))");
        $(".menu a").css("color","white");
        $(".basliq").css("box-shadow","none");
    }
});