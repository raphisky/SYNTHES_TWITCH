const synthesFromSheets = [];

$.getJSON("https://spreadsheets.google.com/feeds/list/1FbsVV0Kmu9vcmuVpaipoFl84DhzObiXIH1w40U_yBl0/od6/public/values?alt=json", function(data) {
  for (var el in data.feed.entry) {
    synthesFromSheets.push(data.feed.entry[el].gsx$synthes.$t);
  }
  return confinementThings;
});




const newsText = [
  "Les news",
  "Cocorico : le cinéma le plus fréquenté au monde est français",
  "The Last of Us, déjà la meilleure série de 2023 ?",
  "Emma Stone x Ari Aster, la collab de l’année ?",
  "Lisa Joy à Séries Mania, le premier événement des festivals de série 2023",
  "Le Kamoulox de la semaine : Selena Gomez en tête d’affiche du prochain film de Jacques Audiard",
  "Hollywood au cinéma et dans les séries",
  "A la semaine prochaine !"

];

var currentSyntheIndex = -1;

$('#next_synthe').click (function() {
  currentSyntheIndex = currentSyntheIndex + 1;
  var currentSynthe = newsText[currentSyntheIndex];
  $('#synthe_container').html(currentSynthe);
  shuffleLetters(document.querySelector('#synthe_container'));
  return currentSyntheIndex;
});

$('#prev_synthe').click (function() {

  if (currentSyntheIndex > 0) {
    currentSyntheIndex = currentSyntheIndex - 1;
    var currentSynthe = newsText[currentSyntheIndex];
    $('#synthe_container').html(currentSynthe);
    shuffleLetters(document.querySelector('#synthe_container'));
    return currentSyntheIndex;
  }

});
