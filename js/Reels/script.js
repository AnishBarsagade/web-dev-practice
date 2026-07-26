const reels = [
  {
    isMuted: 'true',
    username: 'alex_dev',
    likeCount: 12540,
    isLiked: false,
    commentCount: 342,
    caption: 'Late-night coding sessions hit different 🚀💻',
    video: './videos/ten.mp4',
    userProfile: 'https://randomuser.me/api/portraits/men/11.jpg',
    shareCount: 154,
    isFollowed: true,
  },
  {
    isMuted: 'true',
    username: 'travelwithmia',
    likeCount: 28490,
    isLiked: true,
    commentCount: 728,
    caption: 'Sunsets are proof that endings can be beautiful 🌅',
    video: './videos/two.mp4',
    userProfile: 'https://randomuser.me/api/portraits/women/21.jpg',
    shareCount: 412,
    isFollowed: false,
  },
  {
    isMuted: 'true',
    username: 'fitness_ryan',
    likeCount: 18976,
    isLiked: false,
    commentCount: 506,
    caption: 'Consistency beats motivation every single time 💪',
    video: './videos/three.mp4',
    userProfile: 'https://randomuser.me/api/portraits/men/32.jpg',
    shareCount: 221,
    isFollowed: true,
  },
  {
    isMuted: 'true',
    username: 'foodie_sara',
    likeCount: 42310,
    isLiked: true,
    commentCount: 981,
    caption: 'Homemade pasta is always worth the effort 🍝',
    video: './videos/four.mp4',
    userProfile: 'https://randomuser.me/api/portraits/women/44.jpg',
    shareCount: 693,
    isFollowed: false,
  },
  {
    isMuted: 'true',
    username: 'tech_josh',
    likeCount: 15670,
    isLiked: false,
    commentCount: 289,
    caption: 'Built this UI in just 2 hours. Thoughts? 👨‍💻',
    video: './videos/five.mp4',
    userProfile: 'https://randomuser.me/api/portraits/men/55.jpg',
    shareCount: 137,
    isFollowed: true,
  },
  {
    isMuted: 'true',
    username: 'nature_clicks',
    likeCount: 31780,
    isLiked: true,
    commentCount: 864,
    caption: 'Sometimes all you need is a walk in the woods 🌲',
    video: './videos/six.mp4',
    userProfile: 'https://randomuser.me/api/portraits/women/61.jpg',
    shareCount: 509,
    isFollowed: true,
  },
  {
    isMuted: 'true',
    username: 'gaming_zone',
    likeCount: 53420,
    isLiked: false,
    commentCount: 1205,
    caption: 'That comeback was absolutely insane! 🎮🔥',
    video: './videos/seven.mp4',
    userProfile: 'https://randomuser.me/api/portraits/men/72.jpg',
    shareCount: 845,
    isFollowed: false,
  },
  {
    isMuted: 'true',
    username: 'daily_quotes',
    likeCount: 10450,
    isLiked: true,
    commentCount: 176,
    caption: 'Small progress is still progress. Keep going ✨',
    video: './videos/eight.mp4',
    userProfile: 'https://randomuser.me/api/portraits/women/18.jpg',
    shareCount: 94,
    isFollowed: true,
  },
  {
    isMuted: 'true',
    username: 'street_photography',
    likeCount: 26790,
    isLiked: false,
    commentCount: 641,
    caption: 'Every street has a story waiting to be captured 📸',
    video: './videos/nine.mp4',
    userProfile: 'https://randomuser.me/api/portraits/men/84.jpg',
    shareCount: 388,
    isFollowed: false,
  },
  {
    isMuted: 'true',
    username: 'music_vibes',
    likeCount: 39120,
    isLiked: true,
    commentCount: 932,
    caption: 'Headphones on, world off 🎧❤️',
    video: './videos/two.mp4',
    userProfile: 'https://randomuser.me/api/portraits/women/95.jpg',
    shareCount: 574,
    isFollowed: true,
  },
];

var allReels = document.querySelector('.all-reels');
var isMuted = true;
function addReels() {
  var clutter = '';
  reels.forEach(function (elem, idx) {
    clutter += `<div class="reel">
          <video autoplay loop ${elem.isMuted ? 'muted' : ''} src="${elem.video}"></video>
           <div class="mute" id=${idx}>
           ${elem.isMuted ? ' <i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
    
    </div>
          <div class="bottom">
            <div class="user">
              <img src="${elem.userProfile}" alt="">
              <h4>${elem.username}</h4>
              <button id=${idx} class='follow'>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like icon">
              <h4 class="like-icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment icon">
              <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share icon">
              <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu icon">
              <h4 class="menu-icon"><i class="ri-more-2-fill"></i></i></h4>
            </div>
          </div>
        </div>`;
  });

  allReels.innerHTML = clutter;
}

addReels();

allReels.addEventListener('click', function (dets) {
  let gold = dets.target.id;
  if (dets.target.classList.contains('like')) {
    if (!reels[gold].isLiked) {
      console.log('hello');

      reels[gold].likeCount++;
      reels[gold].isLiked = true;
    } else {
      console.log('NO');

      reels[gold].likeCount--;
      reels[gold].isLiked = false;
    }
    addReels();
  }
  if (dets.target.className == 'follow') {
    if (!reels[gold].isFollowed) {
      reels[gold].isFollowed = true;
    } else {
      reels[gold].isFollowed = false;
    }
    addReels();
  }
  if (dets.target.className == 'mute') {
    if (!reels[gold].isMuted) {
      reels[gold].isMuted = true;
    } else {
      reels[gold].isMuted = false;
    }
    addReels();
  }
});
