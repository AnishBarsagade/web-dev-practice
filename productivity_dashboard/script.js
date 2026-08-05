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

function todoList() {
  var currentTask = [];
  if (localStorage.getItem('currentTask')) {
    currentTask = JSON.parse(localStorage.getItem('currentTask'));
  } else {
    console.log('Task List is empty.');
  }
  function renderTask() {
    let allTask = document.querySelector('.allTask');
    let sum = '';
    currentTask.forEach(function (elem, idx) {
      sum =
        sum +
        `<div class="task">
            <h5>${elem.task} <span class=${elem.imp}>Imp</span></h5>
            <div class="details-section">
            <details>
            ${elem.details ? `<p class="task-details">${elem.details}</p>` : ''}
             </details>
             </div>
            <button id=${idx}>Mark as completed</button>
          </div>`;
    });
    allTask.innerHTML = sum;

    localStorage.setItem('currentTask', JSON.stringify(currentTask));

    document.querySelectorAll('.task button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        currentTask.splice(btn.id, 1);
        renderTask();
      });
    });
  }
  renderTask();

  let form = document.querySelector('.addTask form');
  let taskInput = document.querySelector('.addTask form input');
  let taskDetailsInput = document.querySelector('.addTask form textarea');
  let taskCheckBox = document.querySelector(' #check');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // If value empty so return
    if (taskInput.value.trim() === '') return;
    currentTask.push({
      task: taskInput.value,
      details: taskDetailsInput.value,
      imp: taskCheckBox.checked,
    });

    taskInput.value = '';
    taskDetailsInput.value = '';
    taskCheckBox.checked = false;
    renderTask();
  });
}
todoList();
