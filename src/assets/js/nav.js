// elements
const header = document.getElementsByTagName('header')[0];
const body = document.body.style;

// mobile menu functionality
function toggleMenu() {
  // closing the nav
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.overflowY = 'visible';
  }

  // opening the nav
  else {
    header.classList.add('open');
    body.overflowY = 'hidden';
  }
}

// closes the navigation on dark background click
function backgroundClose(event) {
  if (event.target.localName === 'nav') {
    toggleMenu();
  }
}

// changes the nav background on when not docked to the top
function changeNavBackground() {
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
