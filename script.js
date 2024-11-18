const buttonMobile = document.getElementById('button-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

buttonMobile.addEventListener('click', toggleMenu);
