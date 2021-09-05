let footer, innerHeight, offsetHeight;

window.onscroll = function() {
    toggleISI();
    checkFooter();
}
window.onload = function () {
    footer = document.querySelector('footer');
    innerHeight = window.innerHeight;
    offsetHeight = getAbsoluteHeight('main');
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