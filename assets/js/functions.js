$(document).ready(function () {
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
});

// Clicks en el menu

$('section').horizon();

$('nav.site-nav>ul').each(function(index) {
  $(this).children('li').first().children('a').addClass('is-active').show();
});

$('nav.site-nav>ul').on('click', 'li > a', function(event) {
  if (!$(this).hasClass('is-active')) {
    event.preventDefault();
    var menuItems = $('nav.site-nav>ul');
    var oID = $(this).attr("id");
      if ( oID == 'inicio') {
        $(document).horizon('scrollTo', 0)
      }else if ( oID == 'patitas') {
        $(document).horizon('scrollTo', 1)
      }else if ( oID == 'adopciones') {
        $(document).horizon('scrollTo', 2)
      }else if ( oID == 'consejosUtiles') {
        $(document).horizon('scrollTo', 3)
      }else if ( oID == 'colaboraConNosotros') {
        $(document).horizon('scrollTo', 4)
      }else if ( oID == 'eventos') {
        $(document).horizon('scrollTo', 5)
      }else if ( oID == 'contacto') {
        $(document).horizon('scrollTo', 6)
      };
    // console.log(oID);
    // var inicio = 0;
    // var patitas = 1;
    // var adopciones = 2;
    // var consejosUtiles = 3;
    // var colaboraConNosotros = 4;
    // var eventos = 5;
    // var contacto = 6;

    // $(document).horizon('scrollTo', function(){
    //   if ( oID == 'inicio'){oID = 0};
    //   if ( oID == 'patitas'){oID = 1};
    //   if ( oID == 'adopciones'){oID = 2};
    //   if ( oID == 'consejosUtiles'){oID = 3};
    //   if ( oID == 'colaboraConNosotros'){oID = 4};
    //   if ( oID == 'eventos'){oID = 5};
    //   if ( oID == 'contacto'){oID = 6};
    // });
    
    console.log(oID);

    menuItems.find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  } else {
    event.preventDefault();
  }
});


//MODAL
$(function() {
  $("#modal-1").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });
  $("#historia").on("change", function() {
    if ($(this).is(":checked")) {
      $("body").addClass("modal-open");
    } else {
      $("body").removeClass("modal-open");
    }
  });

  $(".modal-fade-screen, .modal-close").on("click", function() {
    $(".modal-state:checked").prop("checked", false).change();
  });

  $(".modal-inner").on("click", function(e) {
    e.stopPropagation();
  });
});

//TABS

  $('.tabs').each(function() {
    $(this).children('.tab-contenedor').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.tabs').on('click', '.tab-contenedor > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
