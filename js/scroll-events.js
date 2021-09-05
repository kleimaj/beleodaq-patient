window.onscroll = function() {
    toggleISI();
}

function toggleISI() {
    if (window.scrollY > 0) {
        document.querySelector('.approved-use').style.display = 'none';
      } else {
        document.querySelector('.approved-use').style.display = 'block';
      }
}