document.addEventListener('DOMContentLoaded', function() {
    const stripes = document.querySelectorAll('.stripe');
    const menuElement = document.querySelector('#menu-image');
    const menutitleimg = document.getElementById('menu-title-img');
    const menutitles = document.getElementsByClassName('menu-title');
    const leftitem = document.getElementById('left-item');
    const menu = document.getElementsByClassName('menu');

    function animateStripesAndUpdateMenu() {
        setTimeout(() => { 
            stripes.forEach(stripe => {
                stripe.classList.add('first-cycle');
            });
        }, 400);

        setTimeout(() => {
            menuElement.src = 'img/drink_fries_burger_cheese.png';
            stripes.forEach(stripe => {
                stripe.classList.remove('first-cycle');
                stripe.classList.add('second-cycle');
                menutitleimg.src = 'img/txt_double_cheeseburger.png'; 
            });
        }, 6000);

        setTimeout(() => {
            stripes.forEach(stripe => {
                stripe.classList.remove('second-cycle');
                stripe.classList.add('third-cycle');
            });
            menuElement.src = 'img/drink_fries_burger_fish.png';
            menutitleimg.src = 'img/txt_filet-o-fish.png'; 
        }, 8600);
    }

    setTimeout(() => {
        menuElement.src = 'img/txt_end.png';
        leftitem.classList.add('display');
        menutitleimg.src = 'img/button_cta.png'; 

        if (menutitles.length > 0) {
            menutitles[0].classList.add('end-btn');
        }
        if (menu.length > 0) {
            menu[0].classList.add('end');
        }
    }, 11000);

    animateStripesAndUpdateMenu();
});
setInterval(function() {
    location.reload();
}, 13000);
