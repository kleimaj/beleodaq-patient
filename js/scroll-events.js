let footer, innerHeight, offsetHeight, menuToggled;

window.onscroll = function() {
  toggleISI();
  checkSiteButtons();
  checkFooter();
}
window.onload = function () {
  footer = document.querySelector('footer');
  innerHeight = window.innerHeight;
  offsetHeight = getAbsoluteHeight('main');
  attachMobileMenu();
};
window.onresize = function () {
  innerHeight = window.innerHeight;
  offsetHeight = getAbsoluteHeight('main');
  if ($(window).width() >= 1200 && menuToggled) {
    toggleMenu();
  }
};

function toggleISI() {
  if (window.scrollY > 0) {
      document.querySelector('.approved-use').style.display = 'none';
    } else {
      document.querySelector('.approved-use').style.display = 'block';
    }
}

// Get Inner and Outer height of element (includes margin)
// https://stackoverflow.com/questions/10787782/full-height-of-a-html-element-div-including-border-padding-and-margin
function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;
  
  var styles = window.getComputedStyle(el, '');
  var margin =
    parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
  return Math.ceil(el.offsetHeight + margin);
}

// Check footer
function checkFooter() {
  innerHeight = window.innerHeight;
  offsetHeight = getAbsoluteHeight('main');
  if (innerHeight + window.scrollY >= offsetHeight - 1) {
    footer.style.position = 'relative';
    footer.lastElementChild.classList.remove('hidden');
    document.querySelector('.more').classList.add('hidden');
    document.querySelector('.less').classList.remove('hidden');
  } else {
    footer.style.position = 'fixed';
    footer.lastElementChild.classList.add('hidden');
    document.querySelector('.less').classList.add('hidden');
    document.querySelector('.more').classList.remove('hidden');
  }
}
// Check site-button visibility (for mobile view)
function checkSiteButtons() {
  if (window.scrollY > 0 && $(window).width() < 1200) {
    document.querySelector('.site-buttons').style.display = 'none';
  } else {
    document.querySelector('.site-buttons').style.display = 'flex';
  }
}

// Scroll To Footer
function scrollToFooter() {
  footer.style.position = 'relative';
  footer.lastElementChild.classList.remove('hidden');
  offsetHeight = getAbsoluteHeight('main');
  window.scrollTo(0, offsetHeight - 170);
  document.querySelector('.less').classList.add('hidden');
  document.querySelector('.more').classList.remove('hidden');
}

// scroll back to main content
function scrollBack() {
  window.scrollTo(0, -offsetHeight);
  footer.style.position = 'fixed';
  footer.lastElementChild.classList.add('hidden');
  document.querySelector('.less').classList.add('hidden');
  document.querySelector('.more').classList.remove('hidden');
}

// Mobile Menu Listener
function attachMobileMenu() {
  document.querySelector('.mobile-button')
    .addEventListener('click', () => {
      toggleMenu();
    })
    Array.from(document.querySelector('.mobile-links').getElementsByTagName('a')).forEach((link) => link.addEventListener('click', toggleMenu));
}

function toggleMenu() {
  menuToggled = !menuToggled;
  document.querySelector('.mobile-links').classList.toggle('hidden');
  if (menuToggled) {
    // Change fa class
    document.getElementById('menu-button').classList.replace('fa-bars','fa-times');
  } else {
    document.getElementById('menu-button').classList.replace('fa-times', 'fa-bars');
  }
}