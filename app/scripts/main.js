
//////////////////////////
///////   SLIDERS  ///////
// import { tns } from "../../node_modules/tiny-slider/src/tiny-slider.module";
// var what_is_savio_slider = tns({
//     container: '.what_is_savio_slider',
//     items: 1,
//     autoplay: true,
//     controls: false,
//     prevButton: false,
//     nextButton: false,
//     loop: true,
//     autoplayButtonOutput: false,
//     arrowKeys: true,
//     autoHeight: true
// });



////////////////////////////////////////
///////  MOBILE MENU NAVIGATION  ///////
var menu_button = document.getElementById('menu_button');
var menu_navigation = document.getElementById('menu_navigation');
menu_button.addEventListener('click', function(){
    menu_navigation.classList.toggle('show_menu');
});
window.addEventListener('keyup', function(e){
    if (e.keyCode === 27) {
        menu_navigation.classList.remove('show_menu');
    }
});

function hideMenu() {
    var menu_navigation = document.getElementById('menu_navigation');
    menu_navigation.classList.remove('show_menu');
}
