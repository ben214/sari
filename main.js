

var i = 0;
setInterval(moveIt, 3500);
  var moveIt = function slideUs(){

 var active = document.getElementsByClassName('slide');
 var max = active.length;
 var prev = active[i];
 var playing = active[i +1];
   // console.log("before "+i);

   if (i == max-1) {
      i=0;
      playing = active[max-1];
      prev = active[i];

      playing.classList.remove("active");

      console.log("restart!!" + active[max-1].style.display);
      playing = active[0];

   }else {
     i++;
     prev.classList.remove("active");
   }

   playing.classList.add("active");

}

  var readingbar = '<div class="readHead">מאמרים:<a style="height: 100%;   width: 100%; cursor: pointer; position: absolute" href="mamarim.html"></a></div>'

  // מענק עבודה --------------------------
  var maanakAvoda = '<button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">מענק עבודה</div><i class="fa fa-chevron-circle-left"></i></div><div class="toggling" id="toggling" style="display: none;"> <a class="maanakAsk read-inner1" href="maanak1.html"> זכאות למענק עבודה<i class="fa fa-chevron-circle-left"></i></a> <a class="maanakAsk read-inner1" href="maanak2.html">הגשת בקשה למענק עבודה <i class="fa fa-chevron-circle-left"></i></a></div></button>';


    // דמי לידה------------------------
    var dmaiLeida = '<button class="navbtn" type="btn"><div class="read1 read"><div class="maanak">דמי לידה</div><i class="fa fa-chevron-circle-left"></i></div><div class="toggling" id="toggling" style="display: none;"><a class="maanakAsk read-inner1" href="leida1.html"> זכאות דמי לידה <i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="leida2.html"> חישוב דמי לידה – לעובדת עצמאית<i class="fa fa-chevron-circle-left"></i> </a> </div> </button>';

//  פתיחת עסק -----------
 var P_esek = ' <button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">פתיחת עסק</div> <i class="fa fa-chevron-circle-left"></i> </div>  <div class="toggling" id="toggling" style="display: none;"> <a class="maanakAsk read-inner1" href="OsekPatur.html"> עוסק פטור <i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="hevdelPaturMurshe.html">ההבדלים בין עוסק פטור לעוסק מורשה<i class="fa fa-chevron-circle-left"></i></a><a class="maanakAsk read-inner1" href="OsekMurshe.html"> עוסק מורשה<i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="hazHon.html">הצהרת הון<i class="fa fa-chevron-circle-left"></i></a> </div> </button>';
 var readbar = readingbar+maanakAvoda+dmaiLeida+P_esek;
   $('#readingBar').html(readbar)

//  -------------iconbar----------------
// ------------------------------------------
   var whatsapp = '<a class="icons whatsapp" href="https://api.whatsapp.com/send?phone=+972584108109" target="_blank"><img src="https://img.icons8.com/color/50/000000/whatsapp--v1.png"/></a>';
   var phone= '<a class="icons phone" href="tel:0548511223"><img src="https://img.icons8.com/ios-filled/50/4a90e2/apple-phone.png"/></a>';
   var facebook = '<a class="icons fb" href="https://www.facebook.com/profile.php?id=100050560593713" target="_blank"><img src="https://img.icons8.com/metro/52/4a90e2/facebook-new--v2.png"/></a>';
   var email = '<a class="icons mail" href="mailto:S6528718@gmail.com" target="_blank"><img src="email.ico"/></a>';
   var iconcontent = whatsapp+phone+facebook+email;
   

   $(document).ready(function(){

      $('#iconbar, #iconbar2').html(iconcontent)
   });



  $('.navbtn').click(openthis)
  function closeAll(){
    $('.toggling').hide()
    $(this).unbind('click', closeAll),
      $('.navbtn').on('click', openthis)
        $(".read").children('i').removeClass("rotate", 1000)

  }

  function openthis(){
     closeAll()
      $(this).find('.toggling').show(100),
      $(this).children(".read").children('i').toggleClass("rotate", 1000)
      console.log('block!!');
      $(this).unbind('click', openthis),
        $(this).on('click', closeAll)
}


// adding new nav buttons to sidebar---------------------------------------------------


  // var toggling = $('.toggling')
  // var esektoggle = toggling[2]
  // var paturtoggle = $(esektoggle).children('a')
  // var paturA = paturtoggle[1]
  //   $(paturA).before("<a href='hevdelPaturMurshe.html' class='maanakAsk read-inner1'>ההבדלים בין עוסק פטור לעוסק מורשה<i class='fa fa-chevron-circle-left'></i></a>")
  // var mursheA = paturtoggle[1]
  // $(mursheA).after("<a href='hazHon.html' class='maanakAsk read-inner1'>הצהרת הון<i class='fa fa-chevron-circle-left'></i></a>")

var readingTop = $('#reading')
var thisPage = $('h1').html()
$(readingTop).prepend('<p  id="Bcrumbs"><a href="index.html"><i class="fa fa-home"></i>בית</a> / <a href="mamarim.html">מאמרים</a> / <a class="thispage"></a></p>')
$('a.thispage').text(thisPage);
console.log($('h1').html());
var readhead = $('#readingBar>.readHead')

$(readhead).html("מאמרים:");
$(readhead).append("<a style='height: 100%; width: 100%; cursor: pointer; position: absolute' href='mamarim.html'></a>")
console.log($(readhead).text());
  //end of adding new nav buttons to sidebar---------------------------------------------------

$(document).ready(function(){
   $('.bottomarr').click(clsallansw)
  $('.quest').click(openanswer)
 function openanswer() {
  var answer = $(this).parents('.questlist').children('.answ')
  clsallansw()
  $(this).children('.arrowbox').addClass('arrowboxopen'),
  answer.show(300),
  $(this).attr('id', 'activequest')
  $(this).unbind('click', openanswer)
    $('html, body').animate({
       scrollTop: $('#activequest').offset().top
     }, 300)
     var mq = window.matchMedia( "(max-width: 600px)" );
  if (mq.matches){
      $('.head-title2').css('display', 'none')
      }
  $(this).click(clsallansw)
  console.log('openanswer')
  console.log($('#activequest').css('background'));
}
function clsallansw(){
   $('.answ').css('display', 'none'),
   $('.quest').unbind('click', clsallansw),
   $('.quest').click(openanswer)
   $('.arrowbox').removeClass('arrowboxopen')
   var mq = window.matchMedia( "(max-width: 600px)" );
if (mq.matches){
    $('.head-title2').css('display', 'block')
    }

}

})
