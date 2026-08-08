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

  async function fetchQuote() {
    let response = await fetch('https://api.quotable.io/random');
    let data = await response.json();

    motivationQuote.innerHTML = data.content;
    motivationAuthor.innerHTML = data.author;
  }
  fetchQuote();
}
motivationalQuote();

function PomodoroTimer() {
  let timer = document.querySelector('.pomo-timer h1');
  let startBtn = document.querySelector('.pomo-timer .start-timer');
  let pauseBtn = document.querySelector('.pomo-timer .pause-timer');
  let resetBtn = document.querySelector('.pomo-timer .reset-timer');
  let totalSeconds = 25 * 60;
  let timerInterval = null;
  let session = document.querySelector('.pomodoro-fullpage .session');

  function updateTime() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`;
  }
  updateTime();

  var isRestMode = false;
  function startTimer() {
    clearInterval(timerInterval);

    if (totalSeconds <= 0) return;

    timerInterval = setInterval(function () {
      totalSeconds--;
      updateTime();
      // when the timer gets completed
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        handleTimerCompletion();
      }
    }, 1000);
  }
  function handleTimerCompletion() {
    if (!isRestMode) {
      isRestMode = true;
      session.innerHTML = `Rest Mode`;
      session.style.backgroundColor = `var(--sec)`;
      totalSeconds = 5 * 60;
      updateTime();
      startTimer();
    } else {
      // 2. Rest Timer Finished -> Back to Work Timer
      isRestMode = false;
      session.innerHTML = `Work Session`;
      session.style.backgroundColor = `var(--tri1)`;
      totalSeconds = 25 * 60;
      updateTime();
    }
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    totalSeconds = 25 * 60;
    clearInterval(timerInterval);
    updateTime();
  }

  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
}
PomodoroTimer();

function dailyGoals() {
  const taskInput = document.getElementById('new-task-input');
  const addBtn = document.getElementById('add-btn');
  const pendingList = document.getElementById('pending-list');
  let tasks = JSON.parse(localStorage.getItem('myDailyGoals')) || [];
  const completedList = document.getElementById('completed-list');
  const notCompletedList = document.getElementById('not-completed-list');

  //save the data in localstorage
  function saveTask() {
    localStorage.setItem('myDailyGoals', JSON.stringify(tasks));
  }
  function createCard(taskObj) {
    const card = document.createElement('div');
    card.className = 'task-card';

    // taskObj.status check karke checkbox ko pehle se tick rakhenge agar zaroorat ho
    card.innerHTML = `
        <div class="task-content">
            <input type="checkbox" class="task-check" ${taskObj.status === 'completed' ? 'checked' : ''}>
            <span class="task-text">${taskObj.text}</span>
        </div>
        <div class="card-actions">
            <button class="missed-btn">Missed</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Checkbox ka logic Card ke andar hi aayega
    const checkBox = card.querySelector('.task-check');
    checkBox.addEventListener('change', function () {
      if (this.checked) {
        taskObj.status = 'completed';
        completedList.appendChild(card);
        missedBtn.style.display = 'none';
      } else {
        taskObj.status = 'pending';
        pendingList.appendChild(card);
        missedBtn.style.display = 'inline-block';
      }
      saveTask(); // Check hone par save karo
    });

    //missed btn ka logics
    const missedBtn = card.querySelector('.missed-btn');
    if (taskObj.status === 'completed' || taskObj.status === 'not-completed') {
      missedBtn.style.display = 'none';
    }
    missedBtn.addEventListener('click', function () {
      checkBox.checked = false;
      taskObj.status = 'not-completed';
      notCompletedList.appendChild(card);

      saveTask();
    });

    // Delete ka logic bhi Card ke andar hi aayega (Galti yahan thi)
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function () {
      card.remove(); // Screen se hatao
      tasks = tasks.filter((t) => t.id !== taskObj.id); // Array se hatao
      saveTask(); // Hamesha ke liye save karo
    });

    // Card banne ke baad usko sahi jagah bhejo
    if (taskObj.status === 'completed') {
      completedList.appendChild(card);
    } else if (taskObj.status === 'not-completed') {
      notCompletedList.appendChild(card); // Agar status missed hai toh 3rd column mein bhejo
    } else {
      pendingList.appendChild(card);
    }
  }

  function loadTasks() {
    pendingList.innerHTML = '';
    completedList.innerHTML = '';
    // Array mein jitne bhi purane tasks hain, unka card banao
    tasks.forEach(function (task) {
      createCard(task);
    });
  }

  addBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Pehle apna goal likhiye!');
      return;
    }

    const newTaskObj = {
      id: Date.now().toString(),
      text: taskText,
      status: 'pending',
    };

    tasks.push(newTaskObj); // Array mein add kiya
    saveTask(); // Local storage mein save kiya

    createCard(newTaskObj); // Naya card draw karne ke liye function ko call liya

    taskInput.value = ''; // Input khali kiya
  });
  loadTasks();
}
dailyGoals();

function weatherFunctionality() {
  let header1Time = document.querySelector('.header-1 h1');
  let header1Date = document.querySelector('.header-1 h2');
  let header2Temp = document.querySelector('.header-2 h2');
  let desc = document.getElementById('weather-desc');
  let precipitation = document.getElementById('precipitation');
  let humidity = document.getElementById('humidity');
  let wind = document.getElementById('wind');

  async function weatherApiCall() {
    let city = 'Nagpur';
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e305aaab367253acbe9e84c951e1e4aa`,
    );

    let data = await response.json();
    console.log(data);
    // .wind.speed
    header2Temp.innerHTML = `${data.main.temp}°C`;
    // console.log(data.weather[0].description);

    desc.innerHTML = `${data.weather[0].description}`;

    precipitation.innerHTML = `Visibility:${data.visibility}`;
    humidity.innerHTML = `Humidity:${data.main.humidity}%`;
    wind.innerHTML = `Wind:${Math.round(data.wind.speed * 3.6)} km/h`;
  }
  weatherApiCall();

  // let date = null;
  function timeDate() {
    const totalDaysofWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wedndesay',
      'Thrusday',
      'Friday',
      'Saturday',
    ];
    let date = new Date();
    let dayofWeek = totalDaysofWeek[date.getDay()];
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let day = date.getDate();
    let month = date.toLocaleDateString('en-US', { month: 'long' });
    let year = date.getFullYear();

    header1Date.innerHTML = `${day} ${month} ,${year}`;
    header1Time.innerHTML = `${dayofWeek}, ${hours}:${minutes}:${seconds} ${hours >= 12 && hours < 24 ? 'PM' : 'AM'}`;
  }
  setInterval(() => {
    timeDate();
  }, 1000);
}
weatherFunctionality();

let theme = document.querySelector('.theme i');

let rootEl = document.documentElement;
let backImg = document.querySelector('.all-features header ');

let flag = 0;
theme.addEventListener('click', function () {
  if (flag == 0) {
    rootEl.style.setProperty('--pri', '#222831');
    rootEl.style.setProperty('--sec', '#393e46');
    rootEl.style.setProperty('--tri1', '#00adb5');
    rootEl.style.setProperty('--tri2', '#eeeeee');
    rootEl.style.setProperty(
      '--header-bg-img',
      'url(https://images.unsplash.com/photo-1536183922588-166604504d5e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    );
    flag = 1;
  } else if (flag == 1) {
    rootEl.style.setProperty('--pri', '#FFDF82');
    rootEl.style.setProperty('--sec', '#99C2FF');
    rootEl.style.setProperty('--tri1', '#FF84BA');
    rootEl.style.setProperty('--tri2', '#222831');
    rootEl.style.setProperty('--header-bg-img', 'url(./weather.jpg)');
    flag = 0;
  }
});
