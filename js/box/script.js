let btn = document.querySelector('button');
let main = document.querySelector('main');

btn.addEventListener('click', () => {
  let div = document.createElement('div');
  div.style.height = '100px';
  div.style.width = '100px';
  div.style.backgroundColor = 'blue';

  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let rot = Math.random() * 360;

  div.style.position = 'absolute';
  div.style.top = y + '%';
  div.style.left = x + '%';
  div.style.rotate = rot + 'deg';

  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

  main.appendChild(div);
});
