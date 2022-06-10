document.querySelector('#html').addEventListener('click', e => {
    document.documentElement.classList.toggle('class-on-root');
  });
  
  document.querySelector('#js').addEventListener('click', e => {
    //most specific, automatic win
    document.querySelector('li:nth-of-type(3)').style.setProperty('--color', 'purple');
  });