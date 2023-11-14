
let logo = document.getElementById('logo');
let navLink = document.getElementById('navLink');
let navLinkUl = document.getElementById('navLinkUl');
let nav = document.getElementById('nav');
let xer =document.getElementById('xer');

// if(nav.style.width == 'auto'){
//     xer.style.display = 'none'
// }

// if(nav.offsetWidth > 500){
//     nav.width = 'auto'
//     console.log('hi')
// }

function closed() {
    nav.style.width ='';
    xer.style.display = 'none'

}

function show() {  

    nav.style.width ='100%';
    xer.style.display = 'block'
    

}









