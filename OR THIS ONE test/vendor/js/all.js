$(document).ready(function(){
  // mv slick
  var $prev = $('.slick-prev.right-arrow');
  var $next = $('.slick-next.left-arrow');
    $('.slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      loop:true,
      autoplay: true,
      autoplaySpeed:7000,
      fade:true,
      prevArrow: $prev, 
      nextArrow: $next,
      });
      // slick progress
      $('.slick-slide:nth-child(1)').addClass('js-slick-slider01')
      $('.slick-slide:nth-child(2)').addClass('js-slick-slider02')
      $('.slick-slide:nth-child(3)').addClass('js-slick-slider03')
          $(function(){
            var time = 5;
            var $bar,
            $bar01,
            $bar02,
            $slick,
            isPause,
            tick,
            percentTime,barPercenTime;
            $slick = $('.js-slick-mv');    
            $bar01 = $('.slider-progress .progress01');
            $bar02 = $('.slider-progress .progress02');
            $bar = $bar02;

            function startProgressbar() {
                resetProgressbar();
                percentTime = 0;
                barPercenTime = 0;
                isPause = false;
                tick = setInterval(interval, 10);
                $bar.css({
                    opacity: 0,
                    left: 0,
                  });  
                $bar = $bar == $bar01 ? $bar02 : $bar01;
                $bar.css({
                    left: 0,
                    opacity: 1,
                  });  
            }
        
            function interval() {
                setTimeout(function(){
                    if(isPause === false) {
                        percentTime += 1 / (time+0.15);
                        barPercenTime += 1 / (time-0.85);
                        if(barPercenTime >= 100)
                          {
                            $bar.css({
                                left: "100%"
                              });      
                        } else {
                            $bar.css({
                                right: 100 - (barPercenTime) + "%"
                              });      
                        }
              
                        if(percentTime >= 100)
                          {
                            $slick.slick('slickNext');
                            startProgressbar();
                          }
              
                        if($('.js-slick-slider01').hasClass('slick-current')){
                            $bar.css({
                                  background : '#FFF2B1'
                              });
              
                              $('.js-square').css({
                                  backgroundColor : '#FFF2B1'
                              });
                          } 
              
                        if($('.js-slick-slider02').hasClass('slick-current')){
                            $bar.css({
                                  background : '#FFEFE6'
                              });
              
                              $('.js-square').css({
                                  backgroundColor : '#FFEFE6'
                              });
                          }
        
                        if($('.js-slick-slider03').hasClass('slick-current')){
                            $bar.css({
                                  background : '#BFE0F8'
                              });
              
                              $('.js-square').css({
                                  backgroundColor : '#BFE0F8'
                              });
                          }  
                      }
                },2000);
            }
        
            function resetProgressbar() {
                    $bar.css({
                        right: 100+'%'
                    });
        
                clearTimeout(tick);
            }
            
            setTimeout(function(){
                startProgressbar();
            },3000);
          })
        

      // project slick
    $('.slick-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      fade:true,
    })
    // qna
    $('.js-qna-box, .js-qna-close').hide();

    $('.js-qna-open').on('click', function () {
        $(".js-qna-box, .js-qna-close").slideToggle();
        $('.js-qna-openClose').fadeToggle();
    });

    $('.js-qna-close').on('click', function () {
        $(".js-qna-box").slideUp();
        $('.js-qna-openClose').fadeOut();
        $(this).hide();
    });
    
    // ScrollReveal
	  ScrollReveal().reveal('.js-fadeInBottom',{
      origin: 'bottom',
      distance: '50px',
      delay: 500,
      duration: 800,
      reset: true
	  });
    ScrollReveal().reveal('.js-project',{
      origin: 'bottom',
      distance: '50px',
      duration: 800,	
      interval: 500
    });

    $('.js-onePageNav').onePageNav({
      currentClass: 'active'
    })
})
  // js-header
  $(window).on('load resize scroll', function(){
    var winW = $(window).width();
    var devW = 767;
    if (winW >= devW) {        
        if($(window).scrollTop() >= $('.concept').offset().top - 50){
        $('.js-header').fadeIn();
        } else{
        $('.js-header').fadeOut(200);
        }
    }
  });
