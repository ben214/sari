

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
   // console.log("after "+ i);
}

//   $(this).children("read").children(i).toggleClass("rotate", 1000)
// };
//
// })



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
