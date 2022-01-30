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