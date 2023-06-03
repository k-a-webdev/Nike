const header = document.querySelector('header');
const subheader = document.querySelector('.subheader');
const banner = document.querySelector('.banner')
const toTop = document.querySelector('.to_top')
const bannerY = banner.getBoundingClientRect().bottom;

document.addEventListener('scroll', function() {
  header.classList.toggle('active', window.scrollY > header.getBoundingClientRect().top + 1);
  subheader.classList.toggle('active', window.scrollY > header.getBoundingClientRect().top + 1);
  window.scrollY / 2 > bannerY ? toTop.style.display = 'flex' : toTop.style.display = 'none';
});