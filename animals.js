
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
    if (speechToText.toLowerCase().includes("gri")) {
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
    else if (speechToText.toLowerCase().includes("vol")) {
      if (hypogriffe.style.opacity === "1") {
        hypogriffe.style.animationPlayState = "running"}
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

