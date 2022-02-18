$('.sliders').slick({
  autoplay: true, //자동 슬라이드
  autoplaySpeed: 2500, //이미지 전환속도(정지된 시간 포함)
  arrows: true, //양옆 화살표(true가 기본)
  dots: true, //페이지버튼
  //fade:true,               //투명도로 전환
  easing: 'swing',
  initialSlide: 3, //처음 시작하는 이미지(0부터 센다)
  pauseOnFocus: false, //마우스로 이미지를 클릭하면 멈춤
  pauseOnHover: false, //마우스를 이미지에 올려놓으면 이미지 멈춤
  speed: 300, //이미지 전환시 만의 속도(이미지)
  swipe: true, //밀어서 움직이기
  //vertical:true,            //위로 전환
  //rtl:true
});

$('.section1_c').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
});

$(function () {
  //헤더가 위에서 부터 얼마 떨어져 있나
  var headerTop = $('header').offset().top;
  //console.log('헤더가 위에서 부터 떨어져있는 거리는?'+headerTop);
  var headerH = $('header').height();
  console.log('헤더의 높이는?' + headerH);

  var headerAll = headerTop + headerH;

  //스크롤 된 거리
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log('현재 스크롤 된 거리는?' + scroll);

    if (headerAll < scroll) {
      $('#scroll').slideDown(300);
      $('#header_wrap').fadeOut(100);
    } else {
      $('#scroll').fadeOut(200);
      $('#header_wrap').fadeIn(100);
    }
  });
});
