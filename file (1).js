// Intro splash handling
const intro = document.getElementById('intro');
const content = document.getElementById('content');
const enterBtn = document.getElementById('enterBtn');

function enterSite() {
  intro.classList.add('fade-out');
  setTimeout(() => {
    intro.style.display = 'none';
    content.classList.remove('hidden');
    window.scrollTo(0,0);
  }, 1000);
}

enterBtn.addEventListener('click', enterSite);
setTimeout(enterSite, 4000); // auto-continue after 4s
