

var barcont = '<div id="barCont"><div class="barCont2"><div class="bar bar1"></div><div  class="bar bar2"></div><div class="bar bar3"></div></div></div>';
  var readingbar = '<div class="readHead">מאמרים:<a style="height: 100%;   width: 100%; cursor: pointer; position: absolute" href="mamarim.html"></a></div></div>';
 
  // מענק עבודה --------------------------
  var maanakAvoda = '<button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">מענק עבודה</div><i class="fa fa-chevron-circle-left"></i></div><div class="toggling" id="toggling" style="display: none;"> <a class="maanakAsk read-inner1" href="maanak1.html"> זכאות למענק עבודה<i class="fa fa-chevron-circle-left"></i></a> <a class="maanakAsk read-inner1" href="maanak2.html">הגשת בקשה למענק עבודה <i class="fa fa-chevron-circle-left"></i></a></div></button>';


    // דמי לידה------------------------
    var dmaiLeida = '<button class="navbtn" type="btn"><div class="read1 read"><div class="maanak">דמי לידה</div><i class="fa fa-chevron-circle-left"></i></div><div class="toggling" id="toggling" style="display: none;"><a class="maanakAsk read-inner1" href="leida1.html"> זכאות דמי לידה <i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="leida2.html"> חישוב דמי לידה – לעובדת עצמאית<i class="fa fa-chevron-circle-left"></i> </a> </div> </button>';

//  פתיחת עסק -----------
 var P_esek = ' <button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">פתיחת עסק</div> <i class="fa fa-chevron-circle-left"></i> </div>  <div class="toggling" id="toggling" style="display: none;"> <a class="maanakAsk read-inner1" href="OsekPatur.html"> עוסק פטור <i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="hevdelPaturMurshe.html">ההבדלים בין עוסק פטור לעוסק מורשה<i class="fa fa-chevron-circle-left"></i></a><a class="maanakAsk read-inner1" href="OsekMurshe.html"> עוסק מורשה<i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="hazHon.html">הצהרת הון<i class="fa fa-chevron-circle-left"></i></a> </div> </button>';
 
 var teum = ' <button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">תיאום/החזרי מס</div><i class="fa fa-chevron-circle-left"></i> </div><div class="toggling" id="toggling" style="display: none;"> <a class="maanakAsk read-inner1" href="teumMas.html">תיאום מס<i class="fa fa-chevron-circle-left"></i> </a></div><div class="toggling" id="toggling" style="display: none;"> <a class="maanakAsk read-inner1" href="taxreturn.html">החזרי מס לשכירים<i class="fa fa-chevron-circle-left"></i> </a></div> </button>';
 var readbar = readingbar+maanakAvoda+dmaiLeida+P_esek+teum;

var backToRead = '<a id="backToRead" class="backtoread" style="padding: 1em; background: #F1D88D; border-radius: 10px; font-size: 1.3em; margin-top: 1em" href="mamarim.html">למאמרים נוספים...</a><br>';


//  -------------floating contact----------------
// ------------------------------------------
var H1text = $('h1').html();

// var H1text1 = H1text.replace("%%","%");
var msg1 = "שלום אני מתעניין/ת בעזרה בנושא: "+H1text;

// var msg1 = msg1.replace(/ /g,"%");
// var msg1 = msg1.replace(/  /g,"%");
// var msg1 = msg1.replace(/%%/g,'%');
var whatsapp = '<a class="iconsfloat whatsapp" href="https://wa.me/00972584108109?text='+msg1+'";target="_blank"><i class="fa fa-whatsapp"></i></a>';
var phone= '<a class="iconsfloat phone" href="tel:0548511223""><i class="fa fa-phone"></i></a>';
var facebook = '<a class="iconsfloat fb" href="http://m.me/100050560593713?msg_prefill=kjkjh" target="_blank"><i class="fa fa-facebook"></i></a>';
var email = '<a class="iconsfloat mail" href="mailto:S6528718@gmail.com?subject='+H1text+'&body='+msg1+'" target="_blank"><i class="fa fa-at"></i></a>';
var close1 = '<a class="iconsfloat cross"><i class="fa fa-times"></i></a>'
var helpcontent = whatsapp+phone+email+close1;
var helpmediv = "<div id='helpout'><div id='helpme'>"+helpcontent+"</div></div>";
var helpline = '<div id="helpline"><i class="fa fa-comment openi"></i><span id="helptext">רוצים שנעזור לכם בזה??</span>'+helpmediv+'</div>';


$( document ).ready(function() {

  $('#reading').append(helpline);
// $('#helpline').append(helpmediv);
// $('#helpme').html(helpcontent);
$('#helpout').css("display", "none"),
$('#helpline>.openi').click(opencont);
$('#helptext').click(opencont);
  function opencont(){
  // $('#helpline').html(helpmediv);
  $('#helpout').show(300),
  $('#helpme').animate({height: '150px',width: '150px', opacity: '0.5'}, "fast");
  $('#helpme').animate({height: '100px',width: '150px', opacity: '0.8'}, "fast");
  $('#helpme').animate({height: '150px',width: '150px', opacity: '1'}, "slow");
  $('#helpme>.fa').animate({height: '-=10px',width: '-=10px', opacity: '1'}, "slow");
  console.log("openong");
}
$('.cross').click(function(){
  $('#helpme').animate({height: '50px',width: '50px', opacity: '.5'},1000);
  $('#helpme').animate({height: '0px',width: '0px', opacity: '0'},500);
  $('#helpout').hide(1000),
  console.log('helpline');
});



 $(barcont).insertBefore($('#readingBar'))
 $(backToRead).insertAfter($('#reading'))
 

   $('#readingBar').html(readbar);
  
   $('#barCont').click(XtheBar) 
   function XtheBar(){
      $('#readingBar').toggleClass('barOpen'),
      
      $('.bar1').toggleClass('bar1open'),
      $('.bar2').toggleClass('bar2open'),
      $('.bar3').toggleClass('bar3open'),
      $('#barCont').toggleClass('barContoOpen')

      if ($('#readingBar').attr('class') === 'barOpen') {
        closeAll();
      }

     
   }

//  -------------iconbar----------------
// ------------------------------------------
   var whatsapp = '<a class="icons whatsapp" href="https://api.whatsapp.com/send?phone=+972584108109" target="_blank"><i class="fa fa-whatsapp"></i></a>';
   var phone= '<a class="icons phone" href="tel:0548511223"><i class="fa fa-phone" ></i></a>';
   var facebook = '<a class="icons fb" href="https://www.facebook.com/profile.php?id=100050560593713" target="_blank"><i class="fa fa-facebook"></i></a>';
   var email = '<a class="icons mail" href="mailto:S6528718@gmail.com" target="_blank"><i class="fa fa-at"></i></a>';
   var iconcontent = whatsapp+phone+facebook+email;
   

  
// iconBAR FUNCTIONALITY---------
      $('#iconbar, #iconbar2').html(iconcontent);
  



  $('.navbtn').click(openthis)
  function closeAll(){
    $('.toggling').hide()
    $(this).unbind('click', closeAll),
      $('.navbtn').on('click', openthis)
        $(".read").children('i').removeClass(1000)

  }

  function openthis(){
     closeAll()
      $(this).find('.toggling').show(100),
      $(this).children(".read").children('i').toggleClass("rotate", 1000)
      // console.log('block!!');
      $(this).unbind('click', openthis),
        $(this).on('click', closeAll)
}


var readingTop = $('#reading')
var thisPage = $('h1').html()
$(readingTop).prepend('<p  id="Bcrumbs"><a href="index.html"><i class="fa fa-home"></i>בית</a> / <a href="mamarim.html">מאמרים</a> / <a class="thispage"></a></p>')
$('a.thispage').text(thisPage);
console.log($('h1').html());
var readhead = $('#readingBar>.readHead')

$(readhead).html("מאמרים:");
$(readhead).append("<a style='height: 100%; width: 100%; cursor: pointer; position: absolute' href='mamarim.html'></a>")
// console.log($(readhead).text());
  //end of adding new nav buttons to sidebar---------------------------------------------------


  
$(document).ready(function(){
   $('.bottomarr').click(clsallansw)
  $('.quest').click(openanswer)
 function openanswer() {
   if ($('#barCont').attr("class") === "barContoOpen") {
     XtheBar();
   }
  var answer = $(this).parents('.questlist').children('.answ');
  clsallansw();
  $(this).children('.arrowbox').addClass('arrowboxopen'),
  answer.css('display', 'block'),
  answer.animate({'opacity': 1}, 600),

  
  $(this).attr('id', 'activequest')
  $(this).unbind('click', openanswer)
    $('html, body').animate({
       scrollTop: $('#activequest').offset().top
     }, 300)
     var mq = window.matchMedia( "(max-width: 850px)" );
  if (mq.matches){
      // $('.head-title2').css('display', 'none'),
      $('#homebtn').css('top', '15px');
      var titleheight1 = $('.head-title2').css('height');
      var titleheight = parseInt(titleheight1, 10);
      $('html, body').animate({
        scrollTop: $('#activequest').offset().top - titleheight - 20//padding is 20
      }, 300)
      console.log(titleheight);
      }
  $(this).click(clsallansw)
  // console.log('openanswer')

}
function clsallansw(){
  if ($('#barCont').attr("class") === "barContoOpen") {
    XtheBar();
  }
  var answer = $(this).parents('.questlist').children('.answ');
  answer.css('opacity', '0'),
   $('.answ').css('display', 'none'), 
   $('.quest').unbind('click', clsallansw),
   $('.quest').removeAttr('id'),
   $('.quest').click(openanswer)
   $('.arrowbox').removeClass('arrowboxopen')
   var mq = window.matchMedia( "(max-width: 850px)" );
if (mq.matches){
    // $('.head-title2').css('display', 'block'),
    $('#homebtn').css('top', '75px')
    }

}


})
})
