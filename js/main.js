
const $ = require("jquery");

//handle scroll sticky benefits area
var stickyItems = [];
var triggerItems = [];

//Initialize the arrays
for (let i = 1; i < 4; i++){
    triggerItems[i] = $('.benefits-section .left-column-benefits .left-item:nth-child('+i+')');
    stickyItems[i] = $('.benefits-section .sticky-area .sticky-item:nth-child('+i+')');

    //make first item visible and rest invisible
    if (i === 1)
        stickyItems[1].addClass('sticky-opacity-one');
    else
        stickyItems[i].addClass('sticky-opacity-zero');
}


$(document).on('scroll', function (e){
    for (let i = 1; i < 4; i++){
        if (($(document).scrollTop()) > (triggerItems[i].position().top - 80)){

            for (let j = 1; j < 4; j++){
                if (j === i){
                    stickyItems[j].addClass('sticky-opacity-one');
                    stickyItems[j].removeClass('sticky-opacity-zero');
                } else {
                    stickyItems[j].addClass('sticky-opacity-zero');
                    stickyItems[j].removeClass('sticky-opacity-one');
                }
            }
        }
    }
})



