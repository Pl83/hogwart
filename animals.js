
window.addEventListener("mousemove", function(event) {
  var div = document.getElementById("cursor");
  var charged = document.getElementById("charged");
  div.style.left = event.clientX - 138 + "px";
  div.style.top = event.clientY - 130 +"px";
  charged.style.left = event.clientX - 2 + "px";
  charged.style.top = event.clientY + 2 +"px";
});

var dummy = document.getElementById("dummy");
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
    if (speechToText.toLowerCase().includes("griff")) {
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





window.addEventListener("click", function(event) {
  let charged = document.getElementById("charged");
  if (charged.style.display === "block" && charged.style.backgroundColor === "white") {
    let lumos = document.getElementById("lumos");
    lumos.style.display = "block";
    charged.style.display = "none";
    this.setTimeout(function() {
      lumos.style.display = "none";
    }, 1500);
    charged.style.backgroundColor = "transparent";
  }
});