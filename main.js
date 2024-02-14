$( document ).ready(function() {

  
  $('.slick-slider').slick({
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover:false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '150px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ],
  });
  
});
