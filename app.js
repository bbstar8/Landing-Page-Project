const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open')

});

navEl.addEventListener('click',()=>{
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger--open')
});


// Get the theme toggle button element
const themeToggle = document.getElementById('theme-toggle');

// Event listener to toggle dark mode on body and update button text
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    // When dark mode is active, show a button for light mode
    themeToggle.textContent = "☀️";
  } else {
    // When dark mode is off, show a button for dark mode
    themeToggle.textContent = "🌙";
  }
});
