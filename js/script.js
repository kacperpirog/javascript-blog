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
  /* [DONE] find the correct article using the selector (vakue of 'href' attribute) */
  const correctArticle = document.querySelector(articleSelector);
  console.log('Correct article:', correctArticle);
  /* [DONE] add class 'active' to the correct article */
  correctArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
function generateTitleLinks(customSelector = ''){
  console.log('Links generated');
  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';
  for (let article of articles) {
    console.log(article);
    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');
    console.log('articleId',articleId);
    /* [DONE]find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    /* get the title from the title element */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(articleId + articleTitle);
    /* create HTML of the link */
    titleList.insertAdjacentHTML('afterbegin', linkHTML); 
    /* insert link into titleList */
    html = html + linkHTML;
    console.log(html);
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a'); 
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  console.log(links);
}
generateTitleLinks();