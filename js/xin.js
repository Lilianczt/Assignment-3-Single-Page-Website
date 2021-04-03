
'use strict';

var supportTouch = "createTouch" in document,
    fals = 0,
    bo = document.getElementsByTagName('body')[0],
    elements = document.getElementsByClassName('love');
if (supportTouch != true) {
    bo.onclick = function(event){
         var x = event.clientX,
         y = event.clientY,
         xin = document.createElement('i'), 
         xinAtt = document.createAttribute("class"), 
         love = document.getElementsByClassName('love');
         xinAtt.value = 'love';
         xin.setAttributeNode(xinAtt);
         bo.appendChild(xin);
         love[fals].style.marginTop = y + 'px';
         love[fals].style.marginLeft = x + 'px';
         fals++;
         setTimeout(function () {
           fals--;
           elements[0].parentNode.removeChild(elements[0]);
         }, 1500);
    }
}