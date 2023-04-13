/* training groud */
window.addEventListener("mousemove", function(event) {
  var div = document.getElementById("cursor");
  var charged = document.getElementById("charged");
  div.style.left = event.clientX - 138 + "px";
  div.style.top = event.clientY - 130 +"px";
  charged.style.left = event.clientX - 2 + "px";
  charged.style.top = event.clientY + 2 +"px";
});

var dummy = document.getElementById("dummy");
var scl = 1;


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
    console.log(speechToText);
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
      scl = 1;
      dummy.style.scale = scl;
      dummyimg.style.display = "block";
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
    else if (speechToText.toLowerCase().includes('amplifi')) {
      outputDiv.textContent = "AMPLIFICATUM";
      outputDiv.style.color = "green";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "green";
      charged.style.borderColor = "green";
      charged.style.boxShadow = "0 0 20px 10px rgba(0, 255, 0, 0.5)";
      charged.style.display = "block";
    } 
    else if (speechToText.toLowerCase().includes('reduc')) {
      outputDiv.textContent = "REDUCTO";
      outputDiv.style.color = "blue";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "blue";
      charged.style.borderColor = "blue";
      charged.style.boxShadow = "0 0 20px 10px rgba(0, 0, 255, 0.5)";
      charged.style.display = "block";
    } else if (speechToText.toLowerCase().includes('visi')){
      outputDiv.textContent = "INVISIBILATO";
      outputDiv.style.color = "yellow";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "yellow";
      charged.style.borderColor = "yellow";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 255, 0, 0.5)";
      charged.style.display = "block";
    } else if (speechToText.toLowerCase().includes('revelio')){
      outputDiv.textContent = "REVELIO";
      outputDiv.style.color = "orange";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "orange";
      charged.style.borderColor = "orange";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 165, 0, 0.5)";
      charged.style.display = "block";
    } else if (speechToText.toLowerCase().includes('nox')){
      outputDiv.textContent = "NOX";
      outputDiv.style.color = "black";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "black";
      charged.style.borderColor = "black";
      charged.style.boxShadow = "0 0 20px 10px rgba(0, 0, 0, 0.5)";
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
    let dummyimg = document.querySelector("#dummy > img");
    dummy.style.animation = "leviosa 5s infinite linear";
    dummyimg.style.animation = "leviosa2 5s infinite linear";
    charged.style.display = "none";
    charged.style.backgroundColor = "transparent";
  } else if (charged.style.display === "block" & charged.style.backgroundColor === "green") {
    scl = scl + 0.2;
    dummy.style.scale = scl;
    charged.style.display = "none";
    charged.style.backgroundColor = "transparent";
  } else if (charged.style.display === "block" & charged.style.backgroundColor === "blue") {
    scl = scl - 0.2;
    dummy.style.scale = scl;
    charged.style.display = "none";
    charged.style.backgroundColor = "transparent";
  } else if (charged.style.display === "block" & charged.style.backgroundColor === "yellow") {
    let dummyimg = document.querySelector("#dummy > img");
    dummyimg.style.display = "none";
    charged.style.display = "none";
    charged.style.backgroundColor = "transparent";
  } else if (charged.style.display === "block" & charged.style.backgroundColor === "orange") {
    let dummyimg = document.querySelector("#dummy > img");
    dummyimg.style.display = "block";
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
  } else if (charged.style.display === "block" && charged.style.backgroundColor === "black") {
    let nox = document.getElementById("nox");
    nox.style.display = "block";
    charged.style.display = "none";
    this.setTimeout(function() {
      nox.style.display = "none";
    }, 1500);
    charged.style.backgroundColor = "transparent";
  }
});


/* fin training ground */


/* spell book */ 

var content = {
  0: {
    title: "Magic Spell Note",
    word: "",
    type: "A guide given",
    effect: "to all wizards",
  },
  1: {
    title: "Fire spell",
    word: "I N F L A M A R E",
    type: "Single target",
    effect: "Burns the target",
  },
  2: {
    title: "Arcane spell",
    word: "L E V I O S A",
    type: "Single target",
    effect: "Levitates the target",
  },
  3: {
    title: "Arcane spell",
    word: "A M P L I F I C A T U M",
    type: "Single target",
    effect: "Increases the target's size",
  },
  4: {
    title: "Arcane spell",
    word: "R E D U C T O",
    type: "Single target",
    effect: "Decreases the target's size",
  },
  5: {
    title: "Arcane spell",
    word: "I N V I S I B I L A T O",
    type: "Single target",
    effect: "Makes the target invisible",
  },
  6: {
    title: "Arcane spell",
    word: "R E V E L I O",
    type: "Single target",
    effect: "Makes the target visible",
  },
  7: {
    title: "Light spell",
    word: "L U M O S",
    type: "AOE",
    effect: "Creat a flash of light",
  },
  8: {
    title: "Dark spell",
    word: "N O X",
    type: "AOE",
    effect: "Aspire all light",
  },
  9: {
    title: "Arcane spell",
    word: " D I S P E L L I U M",
    type: "AOE",
    effect: "Dispell all spells",
  }
}

  function deploy() {
    let state = 0;
    let SpellNote = document.getElementById("SpellNote");
    let overlay = document.getElementById("overlay");
    let past = document.getElementById("past");
    let future = document.getElementById("future");
    SpellNote.addEventListener("click", function(event) {
        SpellNote.style.top = "50%";
        SpellNote.style.left = "50%";
        SpellNote.style.scale = "1";
        SpellNote.style.width = "100%";
        SpellNote.style.height = "100%";
        overlay.style.display = "block";
        past.style.display = "block";
        future.style.display = "block";
        state = 1;
    });
    overlay.addEventListener("click", function(event) {
      SpellNote.style.top = "85%";
      SpellNote.style.left = "85%";
      SpellNote.style.scale = "0.5";
      SpellNote.style.width = "400px";
      SpellNote.style.height = "500px";
      overlay.style.display = "none";
      past.style.display = "none";
      future.style.display = "none";
      state = 0;
    });
  }

  function write() {
  var page = 0;

  let past = document.getElementById("past");
  let future = document.getElementById("future");

  let SpellNoteText = document.getElementById("SpellNoteText");

  let title = document.createElement("h1");
  let word = document.createElement("h2");
  let type = document.createElement("h3");
  let effect = document.createElement("h3");
  title.textContent = content[0].title;
  word.textContent = content[0].word;
  type.textContent = content[0].type;
  effect.textContent = content[0].effect;
  SpellNoteText.appendChild(title);
  SpellNoteText.appendChild(word);
  SpellNoteText.appendChild(type);
  SpellNoteText.appendChild(effect);

  past.addEventListener("click", function(event) {
    if (page > 0) {
      page--;
      SpellNoteText.animation = " turn 5s ease-in-out "
      title.textContent = content[page].title;
      word.textContent = content[page].word;
      type.textContent = content[page].type;
      effect.textContent = content[page].effect;
    }
  });

  future.addEventListener("click", function(event) {
    if (page < 9) {
      page++;
      SpellNoteText.style.animationName = "turn1";
      SpellNoteText.addEventListener("animationend", function() {
        title.textContent = content[page].title;
        word.textContent = content[page].word;
        type.textContent = content[page].type;
        effect.textContent = content[page].effect;
        SpellNoteText.style.animationName = "turn2";
      }, {once: true});
    }
  });  
}

write();
deploy();