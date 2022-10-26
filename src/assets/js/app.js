// elements
const header = document.getElementsByTagName('header')[0];
const backdrop = document.getElementById('backdrop');
const body = document.body.style;

// mobile menu functionality
function toggleMenu() {
  // closing the nav
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    backdrop.style.display = 'none';
    body.overflowY = 'visible';
  }

  // opening the nav
  else {
    header.classList.add('open');
    backdrop.style.display = 'block';
    body.overflowY = 'hidden';
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
document.getElementById('backdrop').addEventListener('click', toggleMenu);
document.addEventListener('scroll', changeNavBackground);
