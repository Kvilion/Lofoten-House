$(function(){
  $('.slider__inner').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
          breakpoint: 841,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
      },  
    ]
  });
});