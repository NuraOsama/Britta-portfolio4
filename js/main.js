(function ($) { 
    "use strict";

    var  mainStatus  = $('#status'),
    mainBody = $('body'),
    mainPreloader  = $('#preloader');

    window.onload = function() {
     mainStatus.fadeOut();
     mainPreloader.delay(500).fadeOut('slow');
     mainBody.delay(500).css({
         'overflow': 'visible'
     });
    }

    //sticky nav bar
$(document).ready(function () {
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;
  
    $(window).scroll(function (e) {
        e.preventDefault();
  
        var scrollTop = $(window).scrollTop();
  
        if (scrollTop > stickyOffsetTop) {
            $sticky.addClass('is-fixed');
        } else {
            $sticky.removeClass('is-fixed');
        }
    });
  });
  
//text typing
$("#typing").typer({
    
          strings: [
    
            "Kurzewitz",
 
            "Model",
    
            "Actress",

            " fashion",

            "Fitness"
   
       ],
       typeSpeed: 170,
	    backspaceSpeed: 50,
       useCursor: false
        });

    //side nav bar
  $(document).ready(function(){
    $(".nav-toggle").click(function(){
      $(".navbar-nav").toggleClass("actve");
      $(".mysidenav").toggleClass("active");


    });

      $(".mysidenav").click(function(){
      $(this).toggleClass("active");
        $(".nav-toggle").removeClass("expanded");
      });
     
  
  });
 
  
   //scroll
   $(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 100;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
    
  })

  //counter
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 30000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});

 //mixitup
 $('#portfolio').mixItUp();

 $(".po_1").click(function(){
 
   $(this).addClass("active");
   $(".po_2").removeClass("active");
   $(".po_3").removeClass("active");
   $(".po_4").removeClass("active");
   $(".po_5").removeClass("active");
   
 });
 
 $(".po_2").click(function(){
   $(this).addClass("active");
   $(".po_1").removeClass("active");
   $(".po_3").removeClass("active");
   $(".po_4").removeClass("active");
   $(".po_5").removeClass("active");
 
 });
 
 $(".po_3").click(function(){
 
   $(this).addClass("active");
   $(".po_1").removeClass("active");
   $(".po_2").removeClass("active");
   $(".po_4").removeClass("active");
   $(".po_5").removeClass("active");
 });
 
 $(".po_4").click(function(){
 
   $(this).addClass("active");
   $(".po_1").removeClass("active");
   $(".po_2").removeClass("active");
   $(".po_3").removeClass("active");
   $(".po_5").removeClass("active");
 
 });
 
 $(".po_5").click(function(){
 
   $(this).addClass("active");
   $(".po_1").removeClass("active");
   $(".po_2").removeClass("active");
   $(".po_3").removeClass("active");
   $(".po_4").removeClass("active");
 });
    
 //lightgallery
$(document).ready(function() {
  $('#lightgallery').lightGallery({
    pager: true,
    thumbnail:true,
    useLeft:true	

  });
});
//owl carousel
$('.owl1').owlCarousel({
  autoplay:true,
  loop:true,
  responsiveClass:true,
  responsive:{
      0:{
        items:2,
      },
     
      1024 :{

        items:2,

      },
        768 : {

          items:1,
         
        },

        575 : {

          items:1,
         
        },
       
        418: {

          items:1,
    },
   375: {

      items:1,     
},
320: {
   
  items:1,
 
}
       
  }
  
})
 //scroll to top
$(window).scroll(function(){
  if($(this).scrollTop() > 300) {
      $(".auto-scroll-to-top").addClass("visible");                    
  } else {
      $(".auto-scroll-to-top").removeClass("visible");
  }        
});
  
/*$(".auto-scroll-to-top").click(function(){
  $("html, body").animate({scrollTop: 0}, 1000);
});*/

$('.auto-scroll-to-top').on('click touchend', function() {

  $("html, body").animate({scrollTop: 0}, 1000);
  var el = $(this);
  var link = el.attr('href');
  window.location = link;
  
});
})(jQuery);