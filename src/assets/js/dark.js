/* Body and Toggle */
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Get Status of Dark Mode
let darkMode = localStorage.getItem('darkMode');

// Enable Dark Mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

// Disable Dark mode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
}

// Check the state of dark mode in local storage
if (darkMode == 'enabled') {
  enableDarkMode();
}

// add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
  // on click, check localstorage for the dark mode value
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    // if dark mode is not enabled, run this function to set it to enabled
    enableDarkMode();
  } else {
    // if dark mode is enabled, run this function to set it to disabled
    disableDarkMode();
  }
});
