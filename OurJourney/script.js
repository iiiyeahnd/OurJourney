const playBtn = document.getElementById('playBtn');

// Click animation: briefly add 'clicked' class, then remove it
playBtn.addEventListener('click', function () {
  playBtn.classList.add('clicked');
  setTimeout(function () {
    playBtn.classList.remove('clicked');
  }, 200);
});