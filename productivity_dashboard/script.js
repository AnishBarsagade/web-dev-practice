function openFeatures() {
  let allElems = document.querySelectorAll('.elem');
  let allFullElems = document.querySelectorAll('.full-elem');
  let backBtns = document.querySelectorAll('.full-elem .back');
  allElems.forEach(function (elem) {
    elem.addEventListener('click', function () {
      allFullElems[elem.id].style.display = 'block';
    });
  });
  backBtns.forEach(function (back) {
    back.addEventListener('click', function () {
      allFullElems[back.id].style.display = 'none';
    });
  });
}
openFeatures();
let form = document.querySelector('.addTask form');
let taskInput = document.querySelector('.addTask form input');
let taskDetailsInput = document.querySelector('.addTask form textarea');
let taskCheckBox = document.querySelector(' #check');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(taskInput.value);
  console.log(taskDetailsInput.value);
  console.log(taskCheckBox.checked);
});
