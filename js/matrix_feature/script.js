const para = document.querySelector('p');
const characters = 'ABCEDFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const ogtext = para.innerText;

let interval = null;
para.addEventListener('mouseenter', function () {
  let iteration = 0;
  //purane interval ko clear karo
  clearInterval(interval);

  interval = setInterval(() => {
    const str = ogtext
      .split('')
      .map((char, index) => {
        //for spaces do nothing to avoid jumping
        if (char === '') return '';
        //when iteration will become greater than the idx get the original character
        if (index < iteration) {
          return ogtext[index];
        }
        //dynamic length use karo
        const randomIdx = Math.floor(Math.random() * characters.length);
        return characters[randomIdx];
      })
      .join('');
    para.innerText = str;
    // 5. Jab poora text reveal ho jaye to loop stop karo
    if (iteration >= ogtext.length) {
      clearInterval(interval);
    }

    iteration += 0.3;
  }, 30);
});
