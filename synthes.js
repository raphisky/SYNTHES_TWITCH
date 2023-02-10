const cineShow_5 = [
  "Des news de Gladiator 2",
	"L’épisode 5 de The Last of Us arrive plus tôt que prévu",
	"Ça bouge chez Disney",
	"George Clooney : le Bureau des légendes aux US!"
  "Guillermo del Toro, Oscar Isaac, Andrew Garfield et Frankenstein réunis dans un film Netflix"
];


const rapCave_7 = [
  "Bonjour !",
  "On goûte les pâtes de Soolking",
  "Les actus de Juju",
  "Les sorties de vendredi dernier",
  "JEU : Il faut choisir !",
  "Merci et à la semaine prochaine !"
];


const cineShow_4 = [
  "Les news",
  "Astérix et Obélix : démarrage exceptionnel",
  "The Last of Us saison 2 !!",
  "James Gunn : l’avenir du DC Universe",
  "Une série Tomb Raider dans les tuyaux",
  "Les recos films d’Arthur",
  "Tier List des films Astérix et Obélix",
  "Les meilleures et les pires adaptations"
];

const rapCave_6 = [
  "Les actus RAP",
  "Les sorties de vendredi dernier",
  "Le jeu de Tim",
  "Les sorties de vendredi prochain"
];

const cineShow_2 = [
  "Les news",
  "Cocorico : le cinéma le plus fréquenté au monde est français",
  "The Last of Us, déjà la meilleure série de 2023 ?",
  "Emma Stone x Ari Aster, la collab de l’année ?",
  "Lisa Joy à Séries Mania, le premier événement des festivals de série 2023",
  "Le Kamoulox de la semaine : Selena Gomez en tête d’affiche du prochain film de Jacques Audiard",
  "Hollywood au cinéma et dans les séries",
  "A la semaine prochaine !"
];

const rapCave_5 = [
  "5 actus RAP",
  "Streameurs et rappeurs",
  "Le 'Type Beat'",
  "À l'ancienne",
  "Un morceau : une ambiance",
  "Les sorties de vendredi",
  "A la semaine prochaine !"
]

const cineShow_3 = [
  "Bonjour à toutes et à tous !",
  "On debrief les Césars",
  "On débrief les Oscars",
  "Nos Oscars à nous",
  "Le vidéo club de Dolan",
  "2023 y a koi",
  "A la semaine prochaine !"
];

var currentSyntheIndex = -1;

$('#next_synthe').click (function() {
  currentSyntheIndex = currentSyntheIndex + 1;
  var currentSynthe = cineShow_5[currentSyntheIndex];
  $('#synthe_container').html(currentSynthe);
  shuffleLetters(document.querySelector('#synthe_container'));
  return currentSyntheIndex;
});

$('#prev_synthe').click (function() {

  if (currentSyntheIndex > 0) {
    currentSyntheIndex = currentSyntheIndex - 1;
    var currentSynthe = cineShow_5[currentSyntheIndex];
    $('#synthe_container').html(currentSynthe);
    shuffleLetters(document.querySelector('#synthe_container'));
    return currentSyntheIndex;
  }

});
