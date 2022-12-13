/******************GSAP js******************/


/*** Header Sticky Js ***/
$(window).scroll(function(){
  var sticky = $('.headercls'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

/********************counter slider*********************/
var counted = 0;
$(window).scroll(function() {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.clientnumber-box span.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
});

$(window).on('load', function(){
        let count = document.querySelectorAll(".innercounter")
        let arr = Array.from(count)

        arr.map(function(item){
          let startnumber = 0

          function counterup(){
          startnumber++
          item.innerHTML= startnumber
           
          if(startnumber == item.dataset.number){
              clearInterval(stop)
          }
        }

        let stop =setInterval(function(){
          counterup()
        },50)

        });
});




$("document").ready(function(){


    $('.headercls ul.navbar-nav li.nav-item.dropdown').click(
       function () {
        var mq = window.matchMedia( "(max-width: 1000px)" );
        if (mq.matches) {
            $(".headercls ul.navbar-nav li.nav-item.dropdown ul").slideToggle();
            $(event.currentTarget).toggleClass("active");
        }
        else {
            $(".headercls ul.navbar-nav li.nav-item.dropdown ul").stop();
            $(event.currentTarget).removeClass("active");
        }
       }
    );

    /*var timer;
    clearTimeout(timer);
    timer = setTimeout( function(){
        $('html').addClass('overflow-hidden');
        setTimeout(function(){
              $('html').removeClass('overflow-hidden');
         },5000);
    } , 200 ); */ 


    svgConvert();

     function svgConvert() {
    $('.svgImg').each(function() {
      
             var $img = $(this);
             var imgID = $img.attr('id');
             var imgClass = $img.attr('.svgImg');
             var imgURL = $img.attr('src');
    
             $.get(imgURL, function(data) {
                
                 // Get the SVG tag, ignore the rest
                 var $svg = $(data).find('svg');
                 // Add replaced image's ID to the new SVG
                 if (typeof imgID !== 'undefined') {
                     $svg = $svg.attr('id', imgID);
                 }
                 // Add replaced image's classes to the new SVG
                 if (typeof imgClass !== 'undefined') {
                     $svg = $svg.attr('class', imgClass + ' replaced-svg');
                 }
    
                 // Remove any invalid XML tags as per http://validator.w3.org
                 $svg = $svg.removeAttr('xmlns:a');
    
                 // Replace image with new SVG
                 $img.replaceWith($svg);
                
             }, 'xml');
    
         });
    
    }



     $('.headercls ul.navbar-nav li.nav-item.dropdown').on('click', function(e){
        $('this').addClass('active');
        $(event.currentTarget).siblings().removeClass('active');
     });

    $('.navbar-light .navbar-toggler').on('click', function(e){
        $('body').toggleClass('menu-open')
        e.preventDefault();
    });


    $("form").on("change", ".file-upload-field", function(){ 
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, '') );
    });




    
});