let searchbtn = document.getElementById('id-search');
let xbtn = document.getElementById('id-xbtn');
let searchbox = document.getElementById('id-search-box');


searchbtn.addEventListener('click', function() {
  searchbox.classList.add('search-open');
});

xbtn.addEventListener('click', function() {
  searchbox.classList.remove('search-open');
});