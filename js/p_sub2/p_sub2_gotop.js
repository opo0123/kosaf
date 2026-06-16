window.addEventListener("load", function () {
  // gotop 스크롤 이벤트
  // 변수 선언
  const gotop = this.document.querySelector("#gotop");
  const section = this.document.querySelector(".tab-menu-wrap");
  this.window.addEventListener("scroll", () => {
    const scrollTop = section.offsetTop;
    const scrollY = this.window.scrollY;
    if (scrollY >= scrollTop) {
      gotop.style.display = "block";
    } else {
      gotop.style.display = "none";
    }
  });

  // gotop 버튼 클릭시 위로 스크롤 (부드럽게)
  gotop.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
