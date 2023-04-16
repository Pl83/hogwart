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
  window.location.href = 'animals.html';
  }, 500);
}


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
const startBtnRoom = document.getElementById('start-btn-room');

// Vérification de la compatibilité de l'API Web Speech
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {

  // Création d'une instance de l'objet SpeechRecognition
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  // Événement déclenché lorsque la reconnaissance vocale détecte une nouvelle phrase
  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    //outputDiv.textContent = speechToText;
    console.log(speechToText);
    let key = speechToText.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    console.log("sans accent : " + " " + key);
    if (key.toLowerCase().includes('fla')) {
      outputDiv.textContent = "INFLAMARE";
      outputDiv.style.color = "red";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "red";
      charged.style.borderColor = "red";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 0, 0, 0.5)";
      charged.style.display = "block";
    } 
    else if (key.toLowerCase().includes('dis')) {
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
    else if (key.toLowerCase().includes('lumos')) {
      outputDiv.textContent = "LUMOS";
      outputDiv.style.color = "white";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "white";
      charged.style.borderColor = "white";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.5)";
      charged.style.display = "block";
    } 
    else if (key.toLowerCase().includes('leviosa')) {
      outputDiv.textContent = "LEVIOSA";
      outputDiv.style.color = "purple";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "purple";
      charged.style.borderColor = "purple";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 0, 255, 0.5)";
      charged.style.display = "block";
    }
    else if (key.toLowerCase().includes('amplifi')) {
      outputDiv.textContent = "AMPLIFICATUM";
      outputDiv.style.color = "green";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "green";
      charged.style.borderColor = "green";
      charged.style.boxShadow = "0 0 20px 10px rgba(0, 255, 0, 0.5)";
      charged.style.display = "block";
    } 
    else if (key.toLowerCase().includes('reduc')) {
      outputDiv.textContent = "REDUCTO";
      outputDiv.style.color = "blue";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "blue";
      charged.style.borderColor = "blue";
      charged.style.boxShadow = "0 0 20px 10px rgba(0, 0, 255, 0.5)";
      charged.style.display = "block";
    } else if (key.toLowerCase().includes('visi')){
      outputDiv.textContent = "INVISIBILATO";
      outputDiv.style.color = "yellow";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "yellow";
      charged.style.borderColor = "yellow";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 255, 0, 0.5)";
      charged.style.display = "block";
    } else if (key.toLowerCase().includes('rev')){
      outputDiv.textContent = "REVELIO";
      outputDiv.style.color = "orange";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "orange";
      charged.style.borderColor = "orange";
      charged.style.boxShadow = "0 0 20px 10px rgba(255, 165, 0, 0.5)";
      charged.style.display = "block";
    } else if (key.toLowerCase().includes('nox')){
      outputDiv.textContent = "NOX";
      outputDiv.style.color = "black";
      let charged = document.getElementById("charged");
      charged.style.backgroundColor = "black";
      charged.style.borderColor = "black";
      charged.style.boxShadow = "0 0 20px 10px rgba(0, 0, 0, 0.5)";
      charged.style.display = "block";
    } else if (key.toLowerCase().includes('parc')){
      loading()
    }
  };
  recognition.onend = () => { 
    startBtnRoom.disabled = false;
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
  } else if (charged.style.display === "block" && charged.style.backgroundColor === "orange") {
    let dummyimg = document.querySelector("#dummy > img");
    dummyimg.style.display = "block";
    charged.style.display = "none";
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
    type: "AOE",
    effect: "Makes visible everything",
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
  },
  10: {
    title: "Invocation spell",
    word: " I N V O C A R E : G R I F F O N",
    type: "Summon",
    effect: "Summon a griffon",
  },
  11: {
    title: "Invocation spell",
    word: " I N V O C A R E : D R A G O N",
    type: "Summon",
    effect: "Summon a dragon",
  },
  12: {
    title: "Invocation spell",
    word : " I N V O C A R E : P H O E N I X",
    type: "Summon",
    effect: "Summon a phoenix",
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
        overlay.style.display = "block";
        past.style.display = "block";
        future.style.display = "block";
        state = 1;
    });
    overlay.addEventListener("click", function(event) {
      SpellNote.style.top = "85%";
      SpellNote.style.left = "85%";
      SpellNote.style.scale = "0.5";
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

  future.addEventListener("click", function(event) {
    if (page < 11) {
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