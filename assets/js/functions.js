
var pContainerWidth = $('.home-graficos').width();


$(window).scroll(function(){


  var wScroll = $(this).scrollLeft();

  if (wScroll <= pContainerWidth) {

    $('.cielo-nuves1').css({
      'transform' : 'translate('+ wScroll *0.95 +'px, 0px)'
    });
    $('.cielo-nuves2').css({
      'transform' : 'translate('+ wScroll *0.90 +'px, 0px)'
    });
    $('.cielo-ciudad').css({
      'transform' : 'translate('+ wScroll *0.93 +'px, 0px)'
    });
    $('.parque-pasto-arboles').css({
      'transform' : 'translate('+ wScroll *0.80 +'px, 0px)'
    });
    $('.parque-pasto-frente').css({
      'transform' : 'translate('+ wScroll *0.3 +'px, 0px)'
    });
    $('.parque-pasto-medio').css({
      'transform' : 'translate('+ wScroll *0.1 +'px, 0px)'
    });

   }


  // if(wScroll > $('.adopciones').offset().left - $(window).width() ){

  //   var offset = (Math.min(0, wScroll - $('.adopciones').offset().left + $(window).width() - 400 )).toFixed();
  //   console.log( offset );

  //   $('.en-adopciones>.parque>.parque-vereda>.perrito').css({
  //     'transform': 'translate('+ offset +'px, 0px)'
  //   });

  //   $('.en-adopciones>.parque>.parque-vereda>.voluntario').css({
  //     'transform': 'translate('+ Math.abs(offset) +'px, '+ offset * 0.2 +'px)'
  //   });
 
  // }

  // if(wScroll > $('.blog-posts').offset().top - $(window).height()){

  //   var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

  //   $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

  //   $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  // }

});


// Clicks en el menu

$("header").on('click', '#patitas', function() {
  
  $(document).horizon('scrollTo', 0);

});

$("header").on('click', '#adopciones', function() {
  
  $(document).horizon('scrollTo', 1);

});

$("header").on('click', '#consejosUtiles', function() {
  
  $(document).horizon('scrollTo', 2);

});

$("header").on('click', '#eventos', function() {
  
  $(document).horizon('scrollTo', 3);

});

$("header").on('click', '#colaboraConNosotros', function() {
  
  $(document).horizon('scrollTo', 4);

});

$("header").on('click', '#contacto', function() {
  
  $(document).horizon('scrollTo', 5);

});