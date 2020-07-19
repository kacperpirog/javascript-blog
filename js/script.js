'use strict';


const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    
/* [done] remove class 'active' from all article links */ 
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}
    /* [DONE]add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');
    
    /* [done]remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post.active');
    for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
}
    /* [DONE] get 'href' attribute from the clicked links */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /* find the correct article using the selector (vakue of 'href' attribute) */
    const correctArticle = document.querySelector(articleSelector);
    console.log('Correct article:', correctArticle);
    
    /* add class 'active' to the correct article */
    correctArticle.classList.add('active');
  }
  
const links = document.querySelectorAll('.titles a');
  
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}