const likes = document.querySelectorAll('.like');

likes.forEach(like => {
  const addLike = like.querySelector('.smilePng');
  const counterElement = like.querySelector('.counter');
  
  let counter = 0;
  
  addLike.addEventListener('click', () => {
    render(++counter, counterElement);
  });
  
});

const render = (counter, counterElement) => counterElement.innerText = counter;