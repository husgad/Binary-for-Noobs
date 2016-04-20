/* Generated by Babel */
/* Toggling the bulb colors */

/* DOM caching */
'use strict';

var i = 0;

var bulb = document.getElementsByClassName('decimals');

/* Event listeners */
for (i = 0; i < bulb.length; i++) {
    bulb[i].addEventListener('click', toggleColors);
};

/* Functions */
function toggleColors(e) {
    var target = e.target;
    if (target.style.color != 'forestgreen') {
        target.style.color = 'forestgreen';
    } else {
        target.style.color = 'black';
    };

    if (target.className == 'ind') {
        target.style.color = 'black';
    };
};