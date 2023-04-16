/* loading */ 
var text = {
  1: "Kled military title is 'High Major Commodore of the First Legion Third Multiplication Double Admiral Artillery Vanguard Company' ",
  2: "Pinguin can't fly",
  3: "8% of the American population thinks that they can beat a Bear in a bare hand fight",
  4: "The average person spends 6 months of their life waiting for a red light to turn green",
  5: "35 cm...",
  6: "Star wars >>>> Harry Potter",
  7: "Deus Ex Machina",
  8: "Bref j'ai plus d'idée a mettre",
  9: "the most important is the essential and this is the main",
  10: "ouais c'est pas faux",
}

function arrive(){
  let random = Math.floor(Math.random() * 8) + 1;
  document.querySelector('.load>h1').innerHTML = text[random];

let charIndex = 0;
setInterval(function() {
const loadingText = document.getElementById('loading');
const text = loadingText.textContent;
const newText = [];
for (let i = 0; i < text.length; i++) {
  const shouldHighlight = i === charIndex;
  const charElement = document.createElement('span');
  if (shouldHighlight) {
    charElement.classList.add('highlight');
  }
  charElement.textContent = text[i];
  charElement.style.fontSize = shouldHighlight ? '1.25em' : '1em';
  newText.push(charElement);
}
loadingText.textContent = '';
newText.forEach(function(charElement) {
  loadingText.appendChild(charElement);
});
charIndex = (charIndex + 1) % text.length;
}, 150);


  setTimeout(function() {
    gsap.to('.load', {duration: 2, display: 'none', opacity: 0});
    document.querySelector('.load>h1').innerHTML = '';
  }, 2000);
}
arrive();

function loading() {
  gsap.to('.load', {duration: 0.5, display: 'block', opacity: 1});
  setTimeout(function() {
  window.location.href = 'training.html';
  }, 500);
}


window.addEventListener("mousemove", function(event) {
  var div = document.getElementById("cursor");
  
  div.style.left = event.clientX - 138 + "px";
  div.style.top = event.clientY - 130 +"px";
  
});

const hypogriffe = document.querySelector(".hypogriffe");
console.log(hypogriffe);

var scl = 1;


// Récupération des éléments HTML
const outputDiv = document.getElementById('output');

const startBtnRoom = document.getElementById('start-btn-room');

// Vérification de la compatibilité de l'API Web Speech
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

  // Création d'une instance de l'objet SpeechRecognition
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  // Événement déclenché lorsque la reconnaissance vocale détecte une nouvelle phrase
  recognition.onresult = (event) => {
    // je reset leur opacity afin de ne pas avoir plusieurs images qui s'affichent
    

    const speechToText = event.results[0][0].transcript;
    //outputDiv.textContent = speechToText;
    alert(speechToText);
    console.log(speechToText);
    if (speechToText.toLowerCase().includes("hippo")) {
      document.querySelector(".hypogriffe").style.opacity = "1";
    } else if (speechToText.toLowerCase().includes("somb")) {
      document.querySelector(".sombrale").style.opacity = "1";
    } else if (speechToText.toLowerCase().includes("basili")) {
      document.querySelector(".basilic").style.opacity = "1";
    } else if (speechToText.toLowerCase().includes("rent")) {
      document.querySelector(".basilic").style.opacity = "0";
      document.querySelector(".sombrale").style.opacity = "0";
      document.querySelector(".hypogriffe").style.opacity = "0";
    }
    else if (speechToText.toLowerCase().includes("fly")) {
    
      if (hypogriffe.style.opacity === "1") {
        hypogriffe.style.animationPlayState = "running";
        
        setTimeout(function () {
          hypogriffe.style.animationPlayState = "paused";
        }, 4000);
      }
    } else if (speechToText.toLowerCase().includes('terrain')) {
      loading();
    }
  };
  recognition.onend = () => { 
    startBtnRoom.disabled = false;
  };


  startBtnRoom.addEventListener('click', () => { 
    startBtnRoom.disabled = true;
    
    recognition.start();
  })

  
} else {
  // Si l'API Web Speech n'est pas supportée par le navigateur
  outputDiv.textContent = "Désolé, la reconnaissance vocale n'est pas supportée par votre navigateur.";
  
  startBtnRoom.disabled = true;
}