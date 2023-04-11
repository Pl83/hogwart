
window.addEventListener("mousemove", function(event) {
  var div = document.getElementById("cursor");
  var charged = document.getElementById("charged");
  div.style.left = event.clientX - 138 + "px";
  div.style.top = event.clientY - 130 +"px";
  charged.style.left = event.clientX - 2 + "px";
  charged.style.top = event.clientY + 2 +"px";
});

var dummy = document.getElementById("dummy");


// Récupération des éléments HTML
const outputDiv = document.getElementById('output');
const startBtn = document.getElementById('start-btn');

// Vérification de la compatibilité de l'API Web Speech
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

  // Création d'une instance de l'objet SpeechRecognition
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  // Événement déclenché lorsque la reconnaissance vocale détecte une nouvelle phrase
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    //outputDiv.textContent = speechToText;
    if (speechToText.toLowerCase().includes('fla')) {
      outputDiv.textContent = "INFLAMARE";
      outputDiv.style.color = "red";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "red";
      charged.style.borderColor = "red";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 0, 0, 0.5)";
      charged.style.display = "block";
    } 
    else if (speechToText.toLowerCase().includes('dis')) {
      outputDiv.textContent = "DISPELLIUM";
      outputDiv.style.color = "black";
      let inflamare = document.getElementById("inflamare");
      inflamare.style.display = "none";
      inflamare.style.animation = "none";
      dummy.style.animation = "none";
      let dummyimg = document.querySelector("#dummy > img");
      dummyimg.style.animation = "none";
    } 
    else if (speechToText.toLowerCase().includes('lumos')) {
      outputDiv.textContent = "LUMOS";
      outputDiv.style.color = "white";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "white";
      charged.style.borderColor = "white";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.5)";
      charged.style.display = "block";
    } 
    else if (speechToText.toLowerCase().includes('leviosa')) {
      outputDiv.textContent = "LEVIOSA";
      outputDiv.style.color = "purple";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "purple";
      charged.style.borderColor = "purple";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 0, 255, 0.5)";
      charged.style.display = "block";
    }
  };

  // Événement déclenché lorsque la dictée est terminée
  recognition.onend = () => {
    startBtn.disabled = false;
  };

  // Événement déclenché lorsque l'utilisateur clique sur le bouton "Démarrer la dictée"
  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    recognition.start();
  });
  
} else {
  // Si l'API Web Speech n'est pas supportée par le navigateur
  outputDiv.textContent = "Désolé, la reconnaissance vocale n'est pas supportée par votre navigateur.";
  startBtn.disabled = true;
}



dummy.addEventListener("click", function(event) {
  let charged = document.getElementById("charged");
  if (charged.style.display === "block" && charged.style.backgroundColor === "red") {
    let inflamare = document.getElementById("inflamare");
    inflamare.style.display = "block";
    charged.style.display = "none";
    charged.style.backgroundColor = "transparent";
  } else if (charged.style.display === "block" & charged.style.backgroundColor === "purple") {
    let inflamare = document.getElementById("inflamare");
    inflamare.style.animation = "leviosa 5s infinite linear";
    let dummyimg = document.querySelector("#dummy > img");
    dummy.style.animation = "leviosa 5s infinite linear";
    dummyimg.style.animation = "leviosa2 5s infinite linear";
    charged.style.display = "none";
    charged.style.backgroundColor = "transparent";
  }
});

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