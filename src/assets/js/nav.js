// mobile menu functionality
function toggleMenu() {
  document.body.classList.toggle('open');
}

// closes the navigation on dark background click
function backgroundClose(event) {
  if (event.target.localName === 'nav') {
    toggleMenu();
  }
}

// listeners
document.getElementById('hamburger').addEventListener('click', toggleMenu);
document.getElementsByTagName('nav')[0].addEventListener('click', backgroundClose);

// changes the nav background on when not docked to the top
function changeNavBackground() {
  const header = document.getElementsByTagName('header')[0];

  if (window.scrollY !== 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// listeners
document.getElementById('hamburger').addEventListener('click', toggleMenu);
document.getElementsByTagName('nav')[0].addEventListener('click', backgroundClose);
document.addEventListener('scroll', changeNavBackground);
