# Hogwart 
Ce projet a pour but de se familiariser avec le VoiceToSpeach. 
Nous avons désider de grandement nous inspirée de l'univers d'Harry potter.
Ici vous pourrez lancer des sorts et des invocations grace à des commandes vocales.
Tout au long de cette aventure vous pourrez trouver en bas à gauche la Page Magic qui 
vous rappellera les sorts que vous connaissez.

### Pour vous deplacez de page en page : 
Cliquez sur le bouton pour lancer un sort ou une invocation et dite `teleportation parc` ou `teleportation terrain`

## Le parc : 
Un parc en plein aire dans le quel vous pourez invoquer différente bête magique et les commanders.

### découvez les animaux cachée 
il y a dans ce parc 3 animaux à trouver . Pour les voir il s'uffit de cliquer sur le bouton "animals " et de dire leur nom .

### fonctionnement 
Comment  est ce que le parc fonctionne . Tout les animaux sont caché avec une opacité de 0 dans le dom de la page . Ainsi grace à l'outils de reconnaisance vocale 
je detecte si leur nom est prononcé . Si c'est le cas je change l'opacite de l'image afin de la faire apparaitre pour l'utilisateur .

En ce qui concerne les annimation elle sont déja définis en css et atribuer au élément concernée . Ce pendant elle sont de base définit comme état en étatt de "paused" .

> animation: vole 4s infinite linear paused; .

Ainsi je peux  des que le mot clé de l'animation est lancé changer leur états pour "running" et le remettre a "paused" a la fin de lanimation . 

```
hypogriffe.style.animationPlayState = "running";
     setTimeout(function () {
      hypogriffe.style.animationPlayState = "paused";
    }, 4000);
  ``` 

   
        

## Le terrain d'entrainement : 
Sur le terrain d'entrainement vous pourrez utiliser tous vos sorts. Cliquez sur le boutton "cast a spell" puis dite le nom du sort que vous voulez utiliser, votre baguette magique se chargera et vous pourez cliquez pour lancer le sort. 

Cela fonction en javascript natif grâce a l'API Web Speech. Au clique sur un bouton on commence a écouter a travers le micro et sur certaint mots clée modifie des classes et styles css.

