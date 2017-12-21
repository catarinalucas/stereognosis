jQuery(function($) {
  //quando se clica na da esquerda, a da direita abre
  $('.purpose-l-click-js').click(function(){
    if($('.purpose').hasClass('purpose--right-clicked')){
      $('.purpose').removeClass('purpose--right-clicked');
    }
    $('.purpose').addClass('purpose--left-clicked');

  });

  $('.purpose-r-click-js').click(function(){
    if($('.purpose').hasClass('purpose--left-clicked')){
      $('.purpose').removeClass('purpose--left-clicked');
    }
    $('.purpose').addClass('purpose--right-clicked');
  });

  $('nav').click(function(){
    $(this).toggleClass('down');
  }

);

$('footer').click(function(evt){
  if(!evt.target.matches(".purpose")){
    if($('.purpose').hasClass('purpose--left-clicked')){
      $('.purpose').removeClass('purpose--left-clicked');
    }
    else if($('.purpose').hasClass('purpose--right-clicked')){
      $('.purpose').removeClass('purpose--right-clicked');
    }
    console.log("oh hai mark");
  }
});
});
