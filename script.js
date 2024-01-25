"use strict";
const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");
buttons.forEach(function name(button) {
    button.addEventListener('click',function (e) {
        console.log(e);
        console.log(e.target);
      /*   if (e.target.id==='grey') {
            body.style.backgroundColor=e.target.id;
        } */
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor=e.target.id;                break;
            case 'brown':
                body.style.backgroundColor=e.target.id;
            case 'blue':
                body.style.backgroundColor=e.target.id;
            case 'yellow':
                body.style.backgroundColor=e.target.id;
            default:
                break;
        }
    });
});