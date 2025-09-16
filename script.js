// About Section Script
let tabLinks = document.getElementsByClassName('tab-topics');
let tabContents = document.getElementsByClassName('about-content');

const showTabContent = (event) => {
    for(let tabLink of tabLinks) {
        tabLink.classList.remove('active');
    }
    for(let tabContent of tabContents) {
        tabContent.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    let contentId = event.currentTarget.getAttribute('content-id');
    document.getElementById(contentId).classList.add('active');
}

for(let tabLink of tabLinks) {
    tabLink.addEventListener('click', showTabContent);
}

//sidebar click Script
let sidemenu = document.getElementById('sidemenu');

const openmenu = () => {
    sidemenu.style.right = '0';
}
const closemenu = () => {
    sidemenu.style.right = '-200px';
}

document.getElementById('open').addEventListener('click', openmenu);
document.getElementById('close').addEventListener('click', closemenu);
