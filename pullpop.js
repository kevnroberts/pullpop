// bec5d9d67a5e63e9cc5564785e6d3cda0f7b5ac4

// bec5 d9d6 7a5e 63e9 cc55 6478 5e6d 3cda 0f7b 5ac4

var MIN_TEMPO = 80;
var MAX_TEMPO = 210;
var BEAT_STEP = 0.25;
var sha = 'bec5d9d67a5e63e9cc5564785e6d3cda0f7b5ac4';

var scale = {
  '0': 'E3',
  '1': 'A3',
  '2': 'B3',
  '3': 'C4',
  '4': 'D4',
  '5': 'E4',
  '6': 'F4',
  '7': 'G4',
  '8': 'A4',
  '9': 'B4',
  'a': 'C5',
  'b': 'D5',
  'c': 'E5',
  'd': 'F5',
  'e': 'G5',
  'f': 'A5',
};

var pentatonic = {
  '0': 'C3',
  '1': 'D3',
  '2': 'E3',
  '3': 'G3',
  '4': 'A3',
  '5': 'C4',
  '6': 'D4',
  '7': 'E4',
  '8': 'G4',
  '9': 'A4',
  'a': 'C5',
  'b': 'D5',
  'c': 'E5',
  'd': 'G5',
  'e': 'A5',
  'f': 'C6',
};

function findTempo(sha) {
  var tempo = MIN_TEMPO;
  for(var i = 0; i < sha.length - 2; i++) {
    tempo = parseInt(sha.substring(i, i+2), 16);
    if (tempo > MIN_TEMPO && tempo < MAX_TEMPO) {
      break;
    }
  }

  return tempo;
}

function playSong(sha) {
  var beat = 60 / findTempo(sha);
  var notes = sha.split('');
  var noteBeat = 0;
  var piano = new Wad(Wad.presets.piano);
  notes.forEach(function(note) {
    piano.play({
      pitch: scale[note],
      wait: beat * noteBeat
    });

    noteBeat += BEAT_STEP;
  });
}
