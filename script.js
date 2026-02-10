const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");

const yesBtn = document.getElementById("yesBtn");
const definitelyBtn = document.getElementById("definitelyBtn");
const noBtn = document.getElementById("noBtn");

const title = "Hallo Bhouzxs Caishi Mapagmahal Etneb";
const message =
"I’ve been thinking a lot about what happened, and I realize how my actions hurt you.\nI want you to know how deeply sorry I am. It was never my intention to cause you pain, and I take full responsibility for my part.\nThe last thing I’d ever want is to make you feel unvalued or upset.\nI want to reassure you that I’m learning from this and I want to do better for you.\nYour feelings matter to me more than anything, and I’ll do everything I can to show that through my actions, not just words.\nI want to invite you magMuseum date, also my valentine date kahit late I still want it. Is it okay?";

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    letter.classList.add("show");
    typeWriter(letterTitle, title, 0, 60, () => {
      typeWriter(letterText, message, 0, 35);
    });
  }, 900);
});

function typeWriter(el, text, i, speed, cb) {
  if (i < text.length) {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    setTimeout(() => typeWriter(el, text, i + 1, speed, cb), speed);
  } else if (cb) cb();
}


function showResult(msg) {
  document.getElementById("envelopePage").style.display = "none";
  document.getElementById("resultPage").style.display = "flex";
  document.getElementById("finalMessage").textContent = msg;
}


yesBtn.addEventListener("click", () => {
  showResult("YAAAY!! MWA MWA!!! I do not know when pa pero let's still gooooooo!!!");
  heartBurst(1);
});

definitelyBtn.addEventListener("click", () => {
  showResult("MWEHEHEHEHE MWA MWAAAAAAAAAAAAAAAAAA. I do not know when pa pero let's still gooooooo!!!");
  heartBurst(2);
});

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 400);

function heartBurst(multiplier) {
  for (let i = 0; i < 15 * multiplier; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = letter.offsetLeft + letter.offsetWidth / 2 + "px";
    heart.style.top = letter.offsetTop + letter.offsetHeight / 2 + "px";
    heart.style.position = "absolute";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}
