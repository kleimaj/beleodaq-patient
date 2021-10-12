let footer, innerHeight, offsetHeight, menuToggled, isiToggled;

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
function showApprovedUse() {
  if (!isiToggled) {
    document.getElementById('toggle-isi').style.display = 'inline';
    document.querySelector('.toggle-button > i').classList.replace('fa-plus', 'fa-minus');
    document.querySelector('main').classList.add('push');
    isiToggled = true;
  } else {
    document.getElementById('toggle-isi').style.display = 'none';
    document.querySelector('.toggle-button > i').classList.replace('fa-minus', 'fa-plus');
    document.querySelector('main').classList.remove('push');
    isiToggled = false;
  }

}
function toggleISI() {
  let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  if (window.scrollY > 0 && isMobile) {
      document.querySelector('.approved-use').style.display = 'none';
      document.querySelector('main').classList.remove('push');
      // document.getElementById('toggle-isi').style.display = 'inline';
      // document.querySelector('main').style.marginTop = '250px';
    } 
    // else if (window.scrollY == 0) {
      // document.getElementById('toggle-isi').style.display = 'inline';
    // }
    else {
      document.querySelector('.approved-use').style.display = 'block';
      // document.getElementById('toggle-isi').style.display = 'none';
      // document.querySelector('main').classList.add('push');
      // document.querySelector('main').style.marginTop = "";
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
  window.scrollTo(0, offsetHeight - 300);
  document.querySelector('.less').classList.add('hidden');
  document.querySelector('.more').classList.remove('hidden');
}

// scroll back to main content
function scrollBack() {
  window.scrollTo(0, 10);
  footer.style.position = 'fixed';
  footer.lastElementChild.classList.add('hidden');
  document.querySelector('.less').classList.add('hidden');
  document.querySelector('.more').classList.remove('hidden');
}
function approvedUse() {
  window.scrollTo(0, 0);
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