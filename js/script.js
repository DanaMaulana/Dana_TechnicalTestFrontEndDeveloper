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

// ScrollTop
window.addEventListener('scroll', function () {
  let scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}