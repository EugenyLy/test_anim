(function () {

    var text = 'Be sure you put your feet';
    var textTwo = 'in the right place';
    var i = 0;

    function typeText() {
        i++;
        if (i <= text.length)
            document.querySelector(".text-print").innerHTML = text.substr(0, i);
        else if (i > text.length && i < text.length + 2)
            showText();

        setTimeout(typeText, 90);
    }

    typeText();

    var showText = function () {
        var textPrintSec = document.querySelector('.text-print-sec');
        textPrintSec.classList.add('trans-txt');
        textPrintSec.innerHTML = textTwo;

    };



})();
