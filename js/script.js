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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';
  
  
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
  console.log(optArticleSelector + customSelector);
}
generateTitleLinks();




function generateTags() {

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles:' + articles);

  /* START LOOP: for every article: */
  for (const article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log(tagsWrapper);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    console.log(articleTagsArray);

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag);

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li> ';
      console.log(linkHTML);

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log('Tag html:' + html);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    console.log(tagsWrapper);
  /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for(const activeTaglink of activeTagLinks){
    /* remove class active */
    activeTaglink.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
  console.log(tagLinks);
  /* START LOOP: for each found tag link */
  for( const tagLink of tagLinks){
    /* add class active */
    tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const linksToTags = document.querySelectorAll('a[href^="#tag-"]');
  // console.log(linksToTags);
  /* START LOOP: for each link */
  for (const linkToTag of linksToTags) {
    /* add tagClickHandler as event listener for that link */
    linkToTag.addEventListener('click', tagClickHandler);
    // console.log('linkToTag: ' + linkToTag);
    /* END LOOP: for each link */
  }
}
addClickListenersToTags();


function generateAuthors (){
  
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(const article of articles){

    /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);

    /* make html variable with empty string */
    let html = '';

    /* get authors from data-author attribute */
    const tagsAuthor = article.getAttribute('data-author');
    console.log(tagsAuthor);

    /* generate HTML of the link */
    const linkHTML = '<li><a href="#author-' + tagsAuthor + '">' + 'by ' + tagsAuthor + '</a></li>';
    console.log('linkHTML do tagsAuthor: ' + linkHTML);

    /* add generated code to html variable */
    html = html + linkHTML;
    console.log('Author html:' + html);
    /* insert HTML of all the links into the author wrapper */
    authorWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
}
generateAuthors ();

function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  // console.log(clickedElement);
  // console.log('clickedElement (with plus): ' + clickedElement);
  const href = clickedElement.getAttribute('href');
  console.log(href);
  const author = href.replace('#author-', '');
  console.log('Autor:' + author);
  const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]');
  console.log(activeAuthors);
  for (let activeAuthor of activeAuthors) {
    activeAuthor.classList.remove('active');
  }
  const authorLinks = document.querySelectorAll('a[href="' + href + '"]');
  for (let authorLink of authorLinks) {
    authorLink.classList.add('active');
  }
  generateTitleLinks('[data-author="' + author + '"]');
}
function addClickListenersToAuthors() {
  const linksToAuthors = document.querySelectorAll('a[href^="#author"]');
  console.log(linksToAuthors);
  for (let linkToAuthor of linksToAuthors) {
    linkToAuthor.addEventListener('click', authorClickHandler);
    console.log('linkToAuthor: ' + linkToAuthor);
  }
}
addClickListenersToAuthors();
