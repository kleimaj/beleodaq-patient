document.querySelectorAll('.accordian-btn')
    .forEach((item,key) => {
        // Get corresponding info-box
        let info = document.getElementById('info-'+(key+1));
        item.key = key + 1;
        item.addEventListener('click', toggleInfo);
})

function toggleInfo(event) {
    let info = document.getElementById('info-'+event.target.key);
    info.classList.toggle('hidden');

    let icon = event.target.children[1];
    // Toggle Icons
    if (icon.classList.contains('fa-caret-up')) {
        icon.classList.replace('fa-caret-up','fa-caret-down');
    } else {
        icon.classList.replace('fa-caret-down','fa-caret-up');
    }
}
