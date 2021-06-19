

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

$(document).ready(function(){

  console.log($('.read-inner1').css('fontFamily'));

$('.bottomarr').click(clsallansw)
$('.quest').click(openanswer)
function openanswer() {
  var answer = $(this).parents('.questlist').children('.answ')
  clsallansw()
  $(this).children('.arrowbox').addClass('arrowboxopen'),
  answer.slideDown(300),
  $(this).attr('id', 'activequest')
  $(this).unbind('click', openanswer)
    // $('html, body').animate({
    //    scrollTop: $('#activequest').offset().top
    //  }, 300)
    window.scrollTo(0, 180)
  $(this).click(clsallansw)
  console.log('openanswer')
  console.log($('#activequest').length);
}
function clsallansw(){
   $('.answ').css('display', 'none'),
   $('.quest').unbind('click', clsallansw),
   $('.quest').click(openanswer)
   $('.arrowbox').removeClass('arrowboxopen')

}
// function closeanswer() {
//   $('.quest').click(openanswer)
//   $('.answ').hide(300),
//   $('.arrowbox').removeClass('arrowboxopen')
//   $('.quest').unbind('click', closeanswer)
//   console.log('closeanswer')
// }


})
