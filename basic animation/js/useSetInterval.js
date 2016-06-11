/**
 * Created by lfkid on 2016-06-11.
 */

var moveableDiv = document.querySelector('.moveable');
moveableDiv.addEventListener('click', move, false);

function move() {
    var delay = null;
    moveableDiv.style.left = 0; // set initial frame
    delay = setInterval(frame, 10); // delay call frame

    function frame() {
        moveableDiv.style.left = parseInt(moveableDiv.style.left, 10) + 1 + 'px';

        if (parseInt(moveableDiv.style.left, 10) >= 300) {
            clearInterval(delay);
        }

    }
}
