function showModal(answer) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('mochi-img');
  const text = document.getElementById('mochi-text');

  if (answer === 'yes') {
    img.src = 'happy.png'; // Your happy image filename
    text.textContent = "Yayayayaya! Thank you!! 💖✨";
  } else {
    img.src = 'sad.png'; // Your sad image filename
    text.textContent = "Oh no... maybe next time 😢💔";
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function playSurprise() {
  const audio = document.getElementById("surprise-audio");
  const button = document.getElementById("play-btn");

  audio.play();
  button.innerText = "🎵 Playing surprise!";
  button.disabled = true;
  button.style.opacity = 0.6;
}
function showModal(button) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('mochi-img');
  const text = document.getElementById('mochi-text');

  // Get image and text from clicked button's data attributes
  img.src = button.getAttribute('data-img');
  text.textContent = button.getAttribute('data-text');

  modal.style.display = 'flex';
}
// Save time before leaving page
window.addEventListener("beforeunload", () => {
  const audio = document.getElementById("bg-audio");
  localStorage.setItem("audioTime", audio.currentTime);
});

// Resume on new page
window.addEventListener("load", () => {
  const audio = document.getElementById("bg-audio");
  const saved = localStorage.getItem("audioTime");
  if (saved) {
    audio.currentTime = saved;
  }
  audio.play();
});



