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

var imgFeature = document.querySelector(".img-feature");
var listImg = document.querySelectorAll(".list-image img");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var currentIndex = 0;

function updateImageByIndex(index) {
  //remote active class
  document.querySelectorAll(".list-image div").forEach((item) => {
    item.classList.remove("active");
  });

  currentIndex = index;
  imgFeature.src = listImg[index].getAttribute("src");
  listImg[index].parentElement.classList.add("active");
}
listImg.forEach((imgElement, index) => {
  imgElement.addEventListener("click", (e) => {
    updateImageByIndex(index);
  });
});
prevBtn.addEventListener("click", (e) => {
  if (currentIndex == 0) {
    currentIndex = listImg.length - 1;
  } else {
    currentIndex--;
  }
  updateImageByIndex(currentIndex);
});
nextBtn.addEventListener("click", (e) => {
  if (currentIndex == listImg.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateImageByIndex(currentIndex);
});
