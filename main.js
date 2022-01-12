
$( document).ready(function(){
  
var barcont = '<div id="barCont"><div class="barCont2"><div class="bar bar1"></div><div  class="bar bar2"></div><div class="bar bar3"></div></div></div>';
  var readingbar = '<div class="readHead">מאמרים:<a style="height: 100%;   width: 100%; cursor: pointer; position: absolute" href="mamarim.html"></a></div></div>';
 
  // מענק עבודה --------------------------
  var maanakAvoda = '<button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">מענק עבודה</div><i class="fa fa-chevron-circle-left"></i></div><div class="toggling" id="toggling" > <a class="maanakAsk read-inner1" href="maanak1.html"> זכאות למענק עבודה<i class="fa fa-chevron-circle-left"></i></a> <a class="maanakAsk read-inner1" href="maanak2.html">הגשת בקשה למענק עבודה <i class="fa fa-chevron-circle-left"></i></a></div></button>';


    // דמי לידה------------------------
    var dmaiLeida = '<button class="navbtn" type="btn"><div class="read1 read"><div class="maanak">דמי לידה</div><i class="fa fa-chevron-circle-left"></i></div><div class="toggling" id="toggling"><a class="maanakAsk read-inner1" href="leida1.html"> זכאות דמי לידה <i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="leida2.html"> חישוב דמי לידה – לעובדת עצמאית<i class="fa fa-chevron-circle-left"></i> </a> </div> </button>';

//  פתיחת עסק -----------
 var P_esek = ' <button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">פתיחת עסק</div> <i class="fa fa-chevron-circle-left"></i> </div>  <div class="toggling" id="toggling" > <a class="maanakAsk read-inner1" href="OsekPatur.html"> עוסק פטור <i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="hevdelPaturMurshe.html">ההבדלים בין עוסק פטור לעוסק מורשה<i class="fa fa-chevron-circle-left"></i></a><a class="maanakAsk read-inner1" href="OsekMurshe.html"> עוסק מורשה<i class="fa fa-chevron-circle-left"></i> </a><a class="maanakAsk read-inner1" href="hazHon.html">הצהרת הון<i class="fa fa-chevron-circle-left"></i></a> </div> </button>';
 
 var teum = ' <button class="navbtn" type="btn"><div class="read1 read"> <div class="maanak">תיאום/החזרי מס</div><i class="fa fa-chevron-circle-left"></i> </div><div class="toggling" id="toggling" > <a class="maanakAsk read-inner1" href="teumMas.html">תיאום מס<i class="fa fa-chevron-circle-left"></i> </a></div><div class="toggling" id="toggling" > <a class="maanakAsk read-inner1" href="taxreturn.html">החזרי מס לשכירים<i class="fa fa-chevron-circle-left"></i> </a></div> </button>';
 var readbar = readingbar+maanakAvoda+dmaiLeida+P_esek+teum;

var backToRead = '<a id="backToRead" class="backtoread" href="mamarim.html">למאמרים נוספים...</a><br>';


//  -------------floating contact----------------
// ------------------------------------------
var H1text = $('h1').html();


var msg1 = "שלום אני מתעניין/ת בעזרה בנושא: "+H1text;

var whatsapp = '<a class="iconsfloat whatsapp" href="https://wa.me/00972584108109?text='+msg1+'" target="_blank"><i class="fa fa-whatsapp"></i></a>';
var phone= '<a class="iconsfloat phone" href="tel:0548511223""><i class="fa fa-phone"></i></a>';

var email = '<a class="iconsfloat mail" href="mailto:S6528718@gmail.com?subject='+H1text+'&body='+msg1+'" target="_blank"><i class="fa fa-at"></i></a>';
var close1 = '<a class="iconsfloat cross"><i class="fa fa-times"></i></a>'
var helpcontent = whatsapp+phone+email+close1;

var helpmediv = "<div id='helpme'>"+helpcontent+"</div>";
var helpline = '<div id="helpline">שנעשה זאת עבורכם?<br>הקליקו עכשיו</div>';



  
  $('#reading').append(helpmediv);
  $('#reading').append(helpline);

$('#helpline').click(opencont);

//opening contact
  function opencont(){
    if ($('#barCont').attr("class") === "barContoOpen") {
      XtheBar();
    };
    $("html, body").animate({ scrollTop: $(document).height() });
  helpme = $('#helpme').show(300);
  $.when(helpme).then(function(){
    var awesomeDiv = $('#helpme');
    $({rotation: 0}).animate({rotation: 360}, {
        duration: 400,
        step: function () {
            awesomeDiv.css({transform: 'translateX(-50%) rotate(' + this.rotation + 'deg)'});
        }
    });
  })

 


  //closing contact
  $('.cross').click(function(){
    
    helpme =  $({rotation: 0}).animate({rotation: -360}, {
      duration: 200,
      step: function () {
        var awesomeDiv = $('#helpme');
          awesomeDiv.css({transform: 'translateX(-50%) rotate(' + this.rotation + 'deg)'})
      }
      
  });
  $.when(helpme).then(function(){
    $('#helpme').hide(300);
  })
  
  //  console.log('closing');
 });

}





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

      if ($('#readingBar').attr('class') !== 'barOpen') {
        closetogg();
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
  


  //  $('.navbtn').addClass('inactive');// just incase of having already assigned existing class-navbtn to other style, i created a special one for this method.
  //  $('.activ').click(closetogg);
  $('.navbtn').click(openthis);

  function openthis(){
    $('.navbtn').each(function(){
      if($(this).children('.toggling').css('display') === "block"){
      closetogg(this);
    }
    })
    $(this).children('.toggling').css('width', '100%')
     $(this).children('.toggling').slideToggle(300),
     $(this).children(".read").children('i').addClass("rotate", 300),
     $(this).unbind("click", openthis).bind("click", closehis)
}
  function closehis(){
    $('.navbtn').find('.toggling').slideUp(300),
    $('.navbtn').children(".read").children('i').removeClass("rotate", 300),
    $(this).unbind("click",closehis).bind("click", openthis)
  }
  function closetogg(obj){
    $(obj).children(".read").children('i').removeClass("rotate", 300),
    $(obj).children('.toggling').hide(300),
    $(obj).unbind("click", closetogg).bind("click", openthis)
    // console.log($(obj).children(".read").children('i').attr('class'));
  }



var readingTop = $('#reading');
var thisPage = $('h1').html();
$(readingTop).prepend('<p  id="Bcrumbs"><a href="index.html"><i class="fa fa-home"></i>בית</a> / <a href="mamarim.html">מאמרים</a> / <a class="thispage"></a></p>');
$('a.thispage').text(thisPage);
console.log(thisPage);
var readhead = $('#readingBar>.readHead')

$(readhead).html("מידע שימושי:");
$(readhead).append("<a style='height: 100%; width: 100%; cursor: pointer; position: absolute' href='mamarim.html'></a>")
// console.log($(readhead).text());
  //end of adding new nav buttons to sidebar---------------------------------------------------


  
$(document).ready(function(){
// <---------------------------------------->
  $('.bottomarr').click(clsallansw)
  $('.quest').click(openanswer)
// <---------------------------------------->
function openanswer() {
    var thisanswer = $(this).parents('.questlist').children('.answ');
  //first close other open answers
    var currentansw = $(this).parents('.questlist').siblings('.questlist')
    currentansw.each(function(){
    var answer = $(this).children('.answ').css('display');
    if(answer === 'block'){
      var quest = $(this).children('.quest');
      closeanswer(quest);
     console.log('closeanswer(inside)');

    }
    })
    $(this).children('.arrowbox').addClass('arrowboxopen'),
    $(this).attr('id', 'activequest'),
   $('html, body').animate({
     scrollTop: $('#activequest').offset().top
     }, 500);
     var mq = window.matchMedia( "(max-width: 850px)" );
  if (mq.matches){
      $('html, body').animate({
        scrollTop: $('#activequest').offset().top-100
      }, 300)
    }
    $(this).unbind('click', openanswer)
    $(this).click(closethisanswer)
  if ($('#barCont').attr("class") === "barContoOpen") {
    XtheBar();
  };

  opans = $(thisanswer).css({'display': 'block', 'opacity': '0', 'maxHeight': '0'}),
  $.when(opans).then(function(){
    opans1 = $(thisanswer).animate({'maxHeight': '600vh', 'opacity': '1'},1600)
  })
  $(this).css('borderRadius', '20px 20px 0 0')
console.log(' openanswer()');

}
//close answers on click of OTHER quests
function closeanswer(quest){
  clans = $(quest).siblings('.answ').animate({'maxHeight': '0', 'opacity': '0'},700),
  $.when(clans).then(function(){
    $(quest).siblings('.answ').css({'display': 'none'})
  })
  $(quest).css('borderRadius', '20px')
  $(quest).removeAttr('id', 'activequest'),
  $(quest).children('.arrowbox').removeClass('arrowboxopen'),
  $(quest).unbind('click', closeanswer),
  $(quest).unbind('click', closethisanswer),
  $(quest).bind('click', openanswer),
  console.log('closeanswer(quest)');
}
//close answers on click of THIS quest
function closethisanswer(){
  $(this).removeAttr('id', 'activequest')
  $(this).css('borderRadius', '20px')
  $(this).children('.arrowbox').removeClass('arrowboxopen')
  // $(this).siblings('.answ').hide(500)
  // clans = $(this).siblings('.answ').animate({maxHeight: '0px'}, 1600, 'linear',)
  // $.when(clans).then(function(){
    // $(this).slideUp(800)
    $(this).siblings('.answ').animate({'opacity': 0}).slideUp(320, 'linear'),
    // $(this).siblings('.answ')
    // $(this).siblings('.answ').animate({'opacity': 0},600)
  // })
  $(this).unbind('click', closethisanswer)
  $(this).unbind('click', closeanswer)
  $(this).click(openanswer),
  console.log(' closethisanswer()');
}
//called when close arrow clicked
function clsallansw(){
  var answer = $(this).parent('.answ').siblings('.quest');
  answer.trigger('click')
  console.log('clsallansw()');
 
}


})
})
