/******************GSAP js******************/


/******************smooth scroll effect js******************/
$(window).on('load', function(){
    setTimeout(function(){
          let tl = gsap.timeline({
            scrollTrigger: ({
                trigger: '.bannerright',
                start : 'center bottom'
            })
        })

        tl.from('.manimg', {opacity:0, y:8, duration:0.5})
          .from('.round', {opacity:0, x:8, duration:0.5})
          .from('.bannerman2', {opacity:0, x:-8, duration:0.5})
          .from('.bannergirl1', {opacity:0, x:12, duration:0.5, ease:'elastic'})
          .from('.bannertxtx', {opacity:0, x:-12, duration:0.5})
          .from('.bannerman3', {opacity:0, x:12, duration:0.5})
          .from('.bannerthumb', {opacity:0, x:15, duration:0.5})
          .from('.bannerright .hiringboxwrap', {opacity:0, y:8, duration:0.5})
          .from('.bannerright .hiringbox3', {opacity:0, y:8, duration:0.5})
          .from('.bannerright .hiringbox2', {opacity:0, y:8, duration:0.5})
          .from('.bannerright .hiringbox1', {opacity:0, y:8, duration:0.5})  
    },3800);
});


/*featuredbox icons animation js*/
gsap.registerPlugin(ScrollTrigger);
gsap.set('.hire1', {yPercent: 20 , opacity:0});
gsap.set('.hire2', {yPercent: 20 , opacity:0});
gsap.set('.hire3', {yPercent: 20 , opacity:0});

gsap.to(".hire1",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".hire1",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".hire2",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".hire2",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".hire3",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".hire3",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
//gsap.set('.hireremotedeveloper .hiringboxwrap', {yPercent: 20 , opacity:0});
gsap.set('.hireremotedeveloper .hiringbox1', {yPercent: 10 , opacity:1});
gsap.set('.hireremotedeveloper .hiringbox2', {yPercent: 10 , opacity:1});
gsap.set('.hireremotedeveloper .hiringbox3', {yPercent: 10 , opacity:1});
gsap.to(".hireremotedeveloper .hiringbox1",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".hireremotedeveloper .hiringbox1",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".hireremotedeveloper .hiringbox2",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".hireremotedeveloper .hiringbox2",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".hireremotedeveloper .hiringbox3",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".hireremotedeveloper .hiringbox3",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
/*designed animation js*/
gsap.set('.contact-left .round.rounded-circle', {yPercent: 50});
gsap.set('.contact-after', {yPercent: 60});
gsap.to(".contact-left .round.rounded-circle",{
  yPercent: 0,
  scrollTrigger: {
    trigger: ".contact-left .round.rounded-circle",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".contact-after",{
  yPercent: 0,
  scrollTrigger: {
    trigger: ".contact-after",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});

/********service page********/
/*featuredbox icons animation js*/

gsap.to(".servicelistsec-one .pic-container .img-big", {
  y: 0,
  yPercent: -150,
  scrollTrigger: {
    trigger: ".services-right-main .pic-container",
    start: "0px 100%",
    end: "bottom 0px",
    scrub: true,
    id: "scrub",
    transformOrigin:"50% 0%"
  }
});
gsap.to(".servicelistsec-two .pic-container .img-big", {
  y: 0,
  yPercent: -180,
  scrollTrigger: {
    trigger: ".services-right-main .pic-container",
    start: "50px 100%",
    end: "bottom 50px",
    scrub: true,
    id: "scrub",
    // transformOrigin:"50% 50%"
  }
});


/*featuredbox icons animation js*/
gsap.registerPlugin(ScrollTrigger);
gsap.set('.design-ser1', {yPercent: 20 , opacity:0});
gsap.set('.design-ser2', {yPercent: 20 , opacity:0});
gsap.set('.design-ser3', {yPercent: 20 , opacity:0});
gsap.set('.design-ser4', {yPercent: 20 , opacity:0});

gsap.to(".design-ser1",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".design-ser1",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".design-ser2",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".design-ser2",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".design-ser3",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".design-ser3",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});
gsap.to(".design-ser4",{
  yPercent: 0,
  opacity:1,
  scrollTrigger: {
    trigger: ".design-ser4",
    start: "0px 100%",
    end: "top center",
    scrub: true,
    id: "scrub"
  }
});

/*progressbar animation js*/
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { 
    trigger: ".history-timeline",
    scrub: 0.3,
    id: "scrub" 
  }
});

const timeline = gsap.utils.toArray('.timeline-row');
timeline.forEach((timeline) => {
  gsap.from(timeline, {
    scrollTrigger: {
      trigger: timeline,
      toggleClass: 'enable',
      scrub: 0.3,
      id: "scrub"
    }
  });
});


$(window).on('load', function(){
    setTimeout(function(){
          let tl2 = gsap.timeline({
            scrollTrigger: ({
                trigger: '.innerpagebanner',
                start : 'center bottom'
            })
        })

        tl2.from('.innerpage-hiring .hiringbox3', {opacity:0, y:8, duration:0.5})
          .from('.innerpage-hiring .hiringbox2', {opacity:0, y:8, duration:0.5})
          .from('.innerpage-hiring .hiringbox1', {opacity:0, y:8, duration:0.5})  
    },3800);
});


// GSDevTools.create();



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

    var swiper = new Swiper("#content .industry-responsive-slider", {
          loop: true,
          slidesPerView: 1.2,
          spaceBetween: 16,
          centeredSlides: true,
          centeredSlidesBounds: true,
          freeMode: true
    });




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



    $(window).on('load', function(){
      setTimeout(function(){
        $('.loader').fadeOut('slow');
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 10){
          $(".loader").removeClass('headposition');
          // TweenLite.to($(".loader"), 0.5, {top:250, bottom:420});
        } else {
          // TweenLite.to($(".loader"), 0.5, {top:35, bottom:'auto'});
          $(".loader").addClass('headposition');
          /*$("header .navbar-light .navbar-brand img").css( "opacity", "1" ).fadeIn(600);*/
        } 
      },3800);
      setTimeout(function(){
        $("header .navbar-light .navbar-brand img").addClass("headlogo");
        if($(window).scrollTop() > 10){
          $("header .navbar-light .navbar-brand img").removeClass("headlogo");
          $("header .navbar-light .navbar-brand img").addClass("headlogoshow");
        } else {
          $("header .navbar-light .navbar-brand img").addClass("headlogo");
        } 
      },4000);
      var poi = $(".navbar-brand img").position();
      var xx = poi.top; var yy = poi.left;
      gsap.to('.loader-container', { delay: 3, duration: 1, width: "50px", height: "45px", top: xx, left: yy });
    });

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

    var myswiper = new Swiper(".testimonial-slider", {
    loop: true,
          slidesPerView:1,
          spaceBetween: 49,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
    });

    myswiper.on('slideChange', function () {
      var activearealablel = $('.testimonials .swiper-pagination-bullet.swiper-pagination-bullet-active').attr('aria-label');
      $('.testimonial-clients .clientsimilarcls').removeClass('active');
      $('.testimonial-clients .clientsimilarcls img[aria-label="'+activearealablel+'"]').parent().addClass('active');
      //alert(activearealablel);
    });

    $('.testimonial-clients .clientsimilarcls').click(function(){
      var selectedslide = $(this).find('img').attr('aria-label');
      $('.testimonials .swiper-pagination-bullet[aria-label="'+selectedslide+'"]').trigger('click');
    });



    var myswiper = new Swiper(".trustlogo-slider", {
        loop: true,
        slidesPerView:2,
        spaceBetween: 10,
        allowTouchMove: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
              allowTouchMove: true,
            },
            580: {
              slidesPerView: 3,
              spaceBetween: 10,
              allowTouchMove: true,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
              allowTouchMove: true,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10
            }
        }
    });

    var swiper = new Swiper('.gallery', {
        slidesPerView:'auto',
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        speed: 5000,      
        allowTouchMove: false,
        disableOnInteraction: true,
        reverseDirection: true,
    });  

    var myswiper = new Swiper(".abouttestimonials-slider .testimonial-innerslider", {
          loop: true,
          slidesPerView:1,
          spaceBetween: 49,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 50
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 49
            },
            1200: {
              slidesPerView: 2,
              spaceBetween: 49
            },
        }
    });


    $("form").on("change", ".file-upload-field", function(){ 
        $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, '') );
    });

    $('.innerpagebanner.careers-singlebanner a.btn.common_btn.yellow').click(function() {
      $('html, body').animate({
        scrollTop: $(".singlecareers-form").offset().top - 100
      }, 500)
    });


    $(".solutionspage-sec ul.nav.nav-tabs li.nav-item a").click(function() {
        $('html,body').animate({                                                       
            scrollTop: $(".responsive-tabs .tab-content").offset().top - 100},
            'slow');
    });
    
    
    var myswiper = new Swiper(".casestudyslider", {
          loop: true,
          slidesPerView:1,
          spaceBetween: 20,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 25
            },
        }
    });


    var myswiper = new Swiper(".snapshotsslider", {
        loop: true,
        slidesPerView:1,
        spaceBetween: 25,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
});