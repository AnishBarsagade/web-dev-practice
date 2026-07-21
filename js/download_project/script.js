let btn = document.querySelector('button');
let grow = 0;
let h2 = document.querySelector('h2');
let inner = document.querySelector('.inner');

btn.addEventListener('click', function () {
  btn.style.pointerEvents = 'none';

  let num = 50 + Math.floor(Math.random() * 50);

  let a = setInterval(() => {
    grow++;
    h2.innerHTML = grow + '%';
    inner.style.width = grow + '%';

    // Jab grow 100 par pahunch jaye, tabhi rukna chahiye
    if (grow === 100) {
      clearInterval(a);
      btn.innerHTML = `Downloaded`;
      btn.style.opacity = 0.5;
      console.log('Downloaded in ', (num * 100) / 1000, 'seconds');
    }
  }, num);
});
