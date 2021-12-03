'use strict';
function buttonClicked(buttonName){
    console.log(buttonName + ' został kliknięty');
  }
  function titleClickHandler(){
    buttonClicked('Test button');
  
  }
  const buttonTest = document.getElementById('button-test');
  buttonTest.addEventListener('click', titleClickHandler);

  'use strict';
function titleClickHandler(){
  const links = document.querySelectorAll('.titles a');
  console.log(links);
}
const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', titleClickHandler);

const links = document.querySelectorAll('.titles a');
for(let link of links){
  
console.log(link);
}
'use strict';

function titleClickHandler(){
  console.log('Link was clicked!');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
