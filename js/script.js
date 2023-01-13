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
