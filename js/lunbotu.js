
'use strict';

var lunbotu = document.getElementById('lunbotu'),
    lunbotu_img = lunbotu.getElementsByTagName('img'),
    breen_li = document.getElementsByClassName('breen_li'),
    wei = -100,
    time;



function StyleCleanup() {
  for (var j = 0; j < breen_li.length; j++) {
      breen_li[j].style.background = 'none';
      breen_li[j].style.color = '#fff';
  }
}


function Carousel() {
  time = setInterval(function () {
    StyleCleanup();
    if (wei > -400) {
        lunbotu.style.marginLeft = wei + '%';  
        
        wei -=100;
        var b = wei;
        b = Math.abs(b)/100-1;

        breen_li[b].style.color = '#000';      
        breen_li[b].style.background = '#fff'; 
    }else{
      wei = 0;
      breen_li[wei].style.color = '#000';
      breen_li[wei].style.background = '#fff';
      lunbotu.style.marginLeft = wei + '%';
      wei = -100;
    }
  },2000)
}
Carousel(); 



for (var i = 0; i < breen_li.length; i++) {
    breen_li[i].index = i; 
    breen_li[i].onclick = function () {
      StyleCleanup();
      breen_li[this.index].style.color = '#000';
      breen_li[this.index].style.background = '#fff';
      clearInterval(time); 
      var a = this.index;

      
      if (a == 0) {
        lunbotu.style.marginLeft = a + '%';
        wei = -100;
      }else{
        
        a*=100;                                
        a-= a*2;

        lunbotu.style.marginLeft = a + '%'; 
        wei = a;
        wei-=100;
      }
      Carousel(); 
    }
}

