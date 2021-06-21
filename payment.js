function paypop(){
   $("#paypop").css({opacity: 0.0, display: "flex"}).animate({opacity: 1}, 400),
   $('html, body').animate({
      scrollTop: $("#paypop").offset().top
    }, 400)
    }
