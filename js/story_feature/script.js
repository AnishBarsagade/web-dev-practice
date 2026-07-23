let arr = [
  {
    dp: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1599566147214-ce487862ea4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    dp: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story:
      'https://images.unsplash.com/photo-1589150348172-a1c6bdb1de00?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
let clutter = '';
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
        <img id=${idx} src="${elem.dp}" alt="">
      </div>`;
});

let story = document.querySelector('#storiyan');
story.innerHTML = clutter;
story.addEventListener('click', function (dets) {
  let val = arr[dets.target.id].story;
  document.querySelector('#full-screen').style.display = 'block';
  document.querySelector('#full-screen').style.backgroundImage = `url(${val})`;

  setTimeout(function () {
    document.querySelector('#full-screen').style.display = 'none';
  }, 2000);
});
