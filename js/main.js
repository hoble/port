new WOW().init();
var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".projects-pagination",
    bulletClass: "projects-bullet",
    bulletActiveClass: "projects-bullet-active",
    clickable: true,
  },
});
function progressView() {
  let diagramBox = document.querySelectorAll(".diagram.progress");
  diagramBox.forEach((box) => {
    let deg = (360 * box.dataset.percent) / 100 + 180;
    if (box.dataset.percent >= 50) {
      box.classList.add("over_50");
    } else {
      box.classList.remove("over_50");
    }
    box.querySelector(".piece.right").style.transform =
      "rotate(" + deg + "deg)";
  });
}
progressView();
