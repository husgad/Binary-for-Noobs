/* Generated by Babel */
'use strict';

(function () {

    //Dom cache
    var hideCheckbox = document.getElementById('hide');
    var index = document.getElementsByClassName('ind');

    hideCheckbox.addEventListener('change', hideDecimals);

    function hideDecimals() {
        for (i = 0; i < index.length; i++) {
            if (hideCheckbox.checked) {
                index[i].style.color = 'blue';
            } else {
                index[i].style.color = 'red';
            }
        }
    }
})();