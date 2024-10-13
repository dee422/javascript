function upDate(previewPic) {
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = "none";
  imageDiv.innerHTML = "Every pic has a secret. Hover over the image to reveal the secret.";
}

function addTabindex() {
  const images = document.querySelectorAll('.preview');
  images.forEach((img, index) => {
    img.setAttribute('tabindex', index + 1);
  });
}

window.onload = function() {
  addTabindex();
  console.log('Page loaded and tabindex attributes added.');
};

const images = [
  {
    src: "images/ACOdyssey_Combat.gif",
    alt: "This is a traditional dance, where typically the next step is for one party to fall into the arms of the other."
  },
  {
    src: "images/ACOdyssey_Handshake.gif",
    alt: "The ancient art of bargaining involves both parties communicating prices through hand signals without using words. Of course, this secret language also includes the art of using some profanities."
  },
  {
    src: "images/ACOdyssey_Helmet.gif",
    alt: "I didn't expect the hat size to be so much smaller than my head circumference. How am I supposed to wear it?"
  },
  {
    src: "images/ACOdyssey_Kick.gif",
    alt: "Even the most patient person can't tolerate a dance partner who constantly steps on their feet, so he gave his partner a lesson with his swollen, stepped-on foot."
  },
  {
    src: "images/ACOdyssey_Landing.gif",
    alt: "When this move appears in the dance, it is customary to shout 'Bazahae.'"
  },
  {
    src: "images/ACOdyssey_SpearJump.gif",
    alt: "At the end of the dance, everyone usually tosses the dance king into the air, but if they throw him too hard, it becomes difficult to catch him..."
  }
];

let currentIndex = 0;

function updateImage(index) {
  const image = document.getElementById('image');
  image.style.backgroundImage = "url(" + images[index].src + ")";
  image.innerHTML = images[index].alt;
}

function prevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  updateImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  updateImage(currentIndex);
}

function addTabindex() {
  const previews = document.querySelectorAll('.preview');
  previews.forEach((preview, index) => {
    preview.setAttribute('tabindex', 0);
    preview.addEventListener('focus', () => upDate(preview));
    preview.addEventListener('blur', () => unDo());
  });
  console.log('Tabindex attributes added to all preview images');
}

window.onload = addTabindex;