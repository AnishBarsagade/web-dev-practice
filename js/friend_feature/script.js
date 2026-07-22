let isStatus = document.querySelector('h5');
let addFriend = document.querySelector('#add');
let check = 0;

addFriend.addEventListener('click', function () {
  if (check === 0) {
    isStatus.innerHTML = 'Friends';
    isStatus.style.color = 'green';
    btn.innerHTML = 'Remove Friend';

    check = 1;
  } else {
    isStatus.innerHTML = 'Stranger';
    isStatus.style.color = 'Red';
    btn.innerHTML = 'Add Friend';
    check = 0;
  }
});
