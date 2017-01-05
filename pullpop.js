// bec5d9d67a5e63e9cc5564785e6d3cda0f7b5ac4

// bec5 d9d6 7a5e 63e9 cc55 6478 5e6d 3cda 0f7b 5ac4

var MIN_TEMPO = 90;
var MAX_TEMPO = 210;
var BEAT_STEP = 1;
var sha0 = 'bec5d9d67a5e63e9cc5564785e6d3cda0f7b5ac4';
var sha1 = '0123456789abcdeffedcba987654321001234567';
var sha2 = '82de163bfcf20803649276af724ee875ca43b91c';

var scales = {
  major: {
    '0': 'C3',
    '1': 'D3',
    '2': 'E3',
    '3': 'F3',
    '4': 'G3',
    '5': 'A3',
    '6': 'B3',
    '7': 'C4',
    '8': 'D4',
    '9': 'E4',
    'a': 'F4',
    'b': 'G4',
    'c': 'A4',
    'd': 'B4',
    'e': 'C5',
    'f': 'D5',
    bass: [
      'C2',
      'Eb2',
      'F2',
      'G2',
    ]
  },
  minor: {
    '0': 'A3',
    '1': 'B3',
    '2': 'C4',
    '3': 'D4',
    '4': 'E4',
    '5': 'F4',
    '6': 'G4',
    '7': 'A4',
    '8': 'B4',
    '9': 'C5',
    'a': 'D5',
    'b': 'E5',
    'c': 'F5',
    'd': 'G5',
    'e': 'A5',
    'f': 'B5',
    bass: [
      'A1',
      'C2',
      'D2',
      'E2',
    ]
  },
  pentatonic: {
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
    bass: [
      'C2',
      'Eb2',
      'F2',
      'G2',
    ]
  },
  minorpentatonic: {
    '0': 'A2',
    '1': 'C3',
    '2': 'D3',
    '3': 'E3',
    '4': 'G3',
    '5': 'A3',
    '6': 'C4',
    '7': 'D4',
    '8': 'E4',
    '9': 'G4',
    'a': 'A4',
    'b': 'C5',
    'c': 'D5',
    'd': 'E5',
    'e': 'G5',
    'f': 'A5',
    bass: [
      'A1',
      'C2',
      'D2',
      'E2',
    ]
  }
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

function findNextBeat(note) {
  return 1 / (parseInt(note, 16) % 4 + 1);
}

function playSong(sha, scaleStr) {
  var beat = 60 / findTempo(sha);
  var notes = sha.split('');
  var noteBeat = 0;
  var piano = new Wad(Wad.presets.piano);
  notes.forEach(function(note, idx) {
    if (idx % 2) {
      noteBeat += findNextBeat(noteBeat, note);
    } else {
      piano.play({
        pitch: scales[scaleStr][note],
        wait: beat * noteBeat
      });
    }
  });
}

function playBass(sha, scaleStr) {
  var beat = 60 / findTempo(sha);
  var bassNotes = sha.substring(0, 8).split('');
  var noteBeat = 0;
  var bass = new Wad({ source: 'square' });
  bassNotes.forEach(function(item) {
    var note = parseInt(parseInt(item, 16) / 4, 10);
    bass.play({
      pitch: scales[scaleStr].bass[note],
      wait: beat * noteBeat,
      env: {
        hold: 0.25
      }
    });

    noteBeat += BEAT_STEP;
  });
}
