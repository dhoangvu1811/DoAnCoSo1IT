$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".backtop").fadeIn();
    } else {
      $(".backtop").fadeOut();
    }
  });
  $(".backtop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });
});
var btnSearch = document.querySelector(".search-box__btn");
btnSearch.addEventListener("click", function () {
  this.parentElement.classList.toggle("open");
  this.previousElementSibling.focus();
});
