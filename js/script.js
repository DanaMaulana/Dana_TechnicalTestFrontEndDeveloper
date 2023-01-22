// Menu hamberger
function menuHumberger() {
  const menuHumberger = document.querySelector('.menuToggle');
  const navigasiList = document.querySelector('.list-menu');

  menuHumberger.classList.toggle('active');
  navigasiList.classList.toggle('active');

  setTimeout(() => {
    return navigasiList;
  }, 1000);
}

// Periode tab
var id1 = document.getElementById("img-2018");
var id2 = document.getElementById("img-2019");
var id3 = document.getElementById("img-2020");
var id4 = document.getElementById("img-2021");
var id5 = document.getElementById("img-2022");
window.addEventListener("load", function () {
  id1.classList.add("block");
});

function hideDisplay() {
  const imgli = document.querySelectorAll(".image-period");
  for (const list of imgli) {
    list.classList.add("none");
  }
}

function checkClass(idElement) {
  if (idElement.classList.contains("none")) {
    idElement.classList.remove("none");
    idElement.classList.add("block");
  } else {
    idElement.classList.remove("block");
    idElement.classList.add("none");
  }
}

function tesTap(id) {
  if (id == 2018) {
    hideDisplay();
    checkClass(id1);
  } else if (id == 2019) {
    hideDisplay();
    checkClass(id2);
  } else if (id == 2020) {
    hideDisplay();
    checkClass(id3);
  } else if (id == 2021) {
    hideDisplay();
    checkClass(id4);
  } else if (id == 2022) {
    hideDisplay();
    checkClass(id5);
  }
}

// Slick JS
$('.slider-banner').slick({
  arrows : false,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
