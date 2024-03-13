const openSearch = document.getElementById('iconSearch');
const closeSearch = document.getElementById('closeSearch');
const searchBar = document.getElementById('searchBar');

const buttonMenu = document.getElementById('buMenu');
const menu = document.getElementById('menu');


openSearch.onclick = function(){
    searchBar.classList.add("is-visible");
}

closeSearch.onclick = function(){
    searchBar.classList.remove("is-visible");
}

buttonMenu.onclick = function(){
    menu.classList.toggle("is-open");
}
