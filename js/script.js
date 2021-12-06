'use strict';
function buttonClicked(buttonName){
    console.log(buttonName + ' został kliknięty');
  }
  function titleClickHandler(){
    buttonClicked('Test button');
  
  }
  const buttonTest = document.getElementById('button-test');
  buttonTest.addEventListener('click', titleClickHandler);

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

function titleClickHandler(){
  console.log('Link was clicked!');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

'use strict';
function titleClickHandler(event){
  console.log('Link was clicked!');
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.titles a.active');

for(let activeArticle of activeArticles){
  activeArticle.classArticle.remove('active');
}

 /* get 'href' attribute from the clicked link */
 /* find the correct article using the selector (value of 'href' attribute) */
/* add class 'active' to the correct article */
}
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

sourceCapabilities: <inputDeviceCapabilities;
srcElement: StereoPannerNode;
target: Span;
timeStamp:5530.530000000001;
toElement: span;
type:"click";

'use strict';

function titleClickHandler(event){
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

