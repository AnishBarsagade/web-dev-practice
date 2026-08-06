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

function dailyPlanner() {
  let dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {};
  let dayPlanner = document.querySelector('.day-planner');
  let hours = Array.from({ length: 18 }, (_, idx) => {
    let startHour = 6 + idx;
    let endHour = 7 + idx;
    let startPeriod = startHour >= 12 && startHour < 24 ? 'PM' : 'AM';
    let endPeriod = endHour >= 12 && endHour < 24 ? 'PM' : 'AM';

    let displayStart = startHour % 12 === 0 ? 12 : startHour % 12;
    let displayEnd = endHour % 12 === 0 ? 12 : endHour % 12;
    return `${displayStart}:00 ${startPeriod} - ${displayEnd}:00 ${endPeriod}`;
  });
  let sum = '';
  hours.forEach(function (elem, idx) {
    let savedData = dayPlanData[idx] || '';
    sum =
      sum +
      `<div class="day-planner-time">
          <p>${elem}</p>
          <input id=${idx} type="text" placeholder=".." value=${savedData}>
        </div>`;
  });

  dayPlanner.innerHTML = sum;
  let dayPlannerInput = document.querySelectorAll('.day-planner input');

  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener('input', function () {
      dayPlanData[elem.id] = elem.value;

      localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData));
    });
  });
}
dailyPlanner();
function motivationalQuote() {
  let motivationQuote = document.querySelector('.motivation-2 h1');
  let motivationAuthor = document.querySelector('.motivation-3 h2');
  console.log(motivationAuthor);

  async function fetchQuote() {
    let response = await fetch('https://api.quotable.io/random');
    let data = await response.json();
    console.log(data);

    motivationQuote.innerHTML = data.content;
    motivationAuthor.innerHTML = data.author;
  }
  fetchQuote();
}
motivationalQuote();
