let searchbtn = document.getElementById('id-search');
let xbtn = document.getElementById('id-xbtn');
let searchbox = document.getElementById('id-search-box');


searchbtn.addEventListener('click', function() {
  searchbox.classList.add('search-open');
});

xbtn.addEventListener('click', function() {
  searchbox.classList.remove('search-open');
});

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("id-header");

    const li = document.getElementsByClassName('header-nav__item');
    const shop_cont = document.getElementsByClassName('header__link');
    const logo = document.getElementsByClassName('header-logo-white');
    const iconsaerch = document.getElementsByClassName('icon-search-white');
    const headercart = document.getElementsByClassName('header-cart');
    const headerbtn = document.getElementsByClassName('header__btn');


  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("header-white");
    logo[0].classList.add('header__logo');
    iconsaerch[0].classList.add('icon-search');
    shop_cont[0].classList.add('header-link');
    shop_cont[1].classList.add('header-link');
    headercart[0].classList.add('header__cart');
    headerbtn[0].classList.add('header-btn');

      // Change the color of links on scroll
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        element.classList.add('header-nav__items');
    }

  } else {
    navBar.classList.remove("header-white");
    shop_cont[0].classList.remove('header-link');
    shop_cont[1].classList.remove('header-link');
    logo[0].classList.remove('header__logo');
    iconsaerch[0].classList.remove('icon-search');
    headercart[0].classList.remove('header__cart');
    headerbtn[0].classList.remove('header-btn');


    // Change the color of links back to default
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        element.classList.remove('header-nav__items');
    }
  }

}

}

    const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

    // Change the color of links on scroll
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.add('text-black');
    }

  } else {
    navBar.classList.remove("pa-fixed-header");

    // Change the color of links back to default
    for (let i = 0; i < links.length; i++) {
        const element = links[i];
        element.classList.remove('text-black');
    }
  }
}


