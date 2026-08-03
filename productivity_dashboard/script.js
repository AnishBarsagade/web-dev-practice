var allElems = document.querySelectorAll('.elem');
console.log(allElems);

allElems.forEach(function (elem) {
  elem.addEventListener('click', function () {
    console.log('Hello');
  });
});
