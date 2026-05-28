window.addEventListener("load", () => {
  // 메인 슬라이드
  const swiper = new Swiper(".mainSwiper", {
    // 무한 반복
    loop: true,
    // 자동 재생
    autoplay: {
      delay: 3000, // 3초
      disableOnInteraction: false,
    },
    // 전환 속도
    speed: 1000,
  });

  // 지금 찾는 서비스 슬라이드
  var nowSwiper = new Swiper(".nowSwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
