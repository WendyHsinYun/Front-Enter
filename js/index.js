
// search-button
const searchInput = document.querySelector('[data-search]'); 

  searchInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      window.location.href = 'article.html';
      }
  })
  
  searchGlass.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = 'article.html';
  })
  
  
// 教室精選
document.querySelector('.appworks').addEventListener('click', ()=>{
  window.location.href = 'content.html?id=1538646651342';
})

document.querySelector('.ponpon').addEventListener('click', ()=>{
  window.location.href = 'content.html?id=1539507849063';
})

document.querySelector('.ruby').addEventListener('click', ()=>{
  window.location.href = 'content.html?id=1539674167504';
})


// 找學校、技能數
document.querySelector('.box_article').querySelector('button').addEventListener('click', ()=>{
  window.location.href = 'article.html';
})

document.querySelector('.box_skilltree').querySelector('button').addEventListener('click', ()=>{
  window.location.href = 'skilltree.html';
  
})
