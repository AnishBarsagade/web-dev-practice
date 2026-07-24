var arr = [
  {
    name: 'Petals of roses',
    image:
      'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Animals of town',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'the crowd of city',
    image:
      'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'fruits of planet',
    image:
      'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'orange peeled',
    image:
      'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=3337&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'web design',
    image:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'apple juice',
    image:
      'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Morning Dew Drops',
    image:
      'https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Mountain Sunset',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Lush Forest Path',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Ocean Waves',
    image:
      'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=3852&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Cherry Blossoms',
    image:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=3876&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Desert Dunes',
    image:
      'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    name: 'Mountains',
    image:
      'https://images.unsplash.com/photo-1563216368-5b6a40648062?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function showCards() {
  var clutter = '';
  arr.forEach(function (obj) {
    clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
  });
  document.querySelector('.container').innerHTML = clutter;
}
function handleSearchFunctionality() {
  let input = document.querySelector('#searchinput');

  input.addEventListener('focus', function () {
    document.querySelector('.overlay').style.display = 'block';
  });
  input.addEventListener('blur', function () {
    document.querySelector('.overlay').style.display = 'none';
  });
  input.addEventListener('input', function () {
    const filteredArray = arr.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value),
    );
    var clutter = '';
    filteredArray.forEach(function (obj) {
      clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`;
    });
    document.querySelector('.searchdata').style.display = 'block';
    document.querySelector('.searchdata').innerHTML = clutter;
  });
  let container = document.querySelector('.container');
  container.addEventListener('click', function () {
    // Check karein ki click search input par ya search data box par toh nahi hua

    document.querySelector('.searchdata').style.display = 'none';
    document.querySelector('.searchdata').innerHTML = '';
  });
}
showCards();
handleSearchFunctionality();
