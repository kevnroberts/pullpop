// bec5d9d67a5e63e9cc5564785e6d3cda0f7b5ac4

// bec5 d9d6 7a5e 63e9 cc55 6478 5e6d 3cda 0f7b 5ac4

var MIN_TEMPO = 90;
var MAX_TEMPO = 210;
var BEAT_STEP = 1;
var sha0 = 'bec5d9d67a5e63e9 cc5564785e6d3cda0f7b5ac4';
var sha2 = '82de163b fcf20803649276af 724ee875ca43b91c';

var scales = {
  major: {
    high: {
      '0': 'C4',
      '1': 'D4',
      '2': 'E4',
      '3': 'F4',
      '4': 'G4',
      '5': 'A4',
      '6': 'B4',
      '7': 'C5',
      '8': 'D5',
      '9': 'E5',
      'a': 'F5',
      'b': 'G5',
      'c': 'A5',
      'd': 'B5',
      'e': 'C6',
      'f': 'D6',
    },
    mid: {
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
    },
    low: {
      '0': 'C2',
      '1': 'D2',
      '2': 'E2',
      '3': 'F2',
      '4': 'G2',
      '5': 'A2',
      '6': 'B2',
      '7': 'C3',
      '8': 'D3',
      '9': 'E3',
      'a': 'F3',
      'b': 'G3',
      'c': 'A3',
      'd': 'B3',
      'e': 'C4',
      'f': 'D4',
    }
  },
  minor: {
    high: {
      '0': 'A4',
      '1': 'B4',
      '2': 'C5',
      '3': 'D5',
      '4': 'E5',
      '5': 'F5',
      '6': 'G5',
      '7': 'A5',
      '8': 'B5',
      '9': 'C6',
      'a': 'D6',
      'b': 'E6',
      'c': 'F6',
      'd': 'G6',
      'e': 'A6',
      'f': 'B6',
    },
    mid: {
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
    },
    low: {
      '0': 'A2',
      '1': 'B2',
      '2': 'C3',
      '3': 'D3',
      '4': 'E3',
      '5': 'F3',
      '6': 'G3',
      '7': 'A3',
      '8': 'B3',
      '9': 'C4',
      'a': 'D4',
      'b': 'E4',
      'c': 'F4',
      'd': 'G4',
      'e': 'A4',
      'f': 'B4',
    }
  },
  pentatonic: {
    high: {
      '0': 'C4',
      '1': 'D4',
      '2': 'E4',
      '3': 'G4',
      '4': 'A4',
      '5': 'C5',
      '6': 'D5',
      '7': 'E5',
      '8': 'G5',
      '9': 'A5',
      'a': 'C6',
      'b': 'D6',
      'c': 'E6',
      'd': 'G6',
      'e': 'A6',
      'f': 'C7',
    },
    mid: {
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
    },
    low: {
      '0': 'C2',
      '1': 'D2',
      '2': 'E2',
      '3': 'G2',
      '4': 'A2',
      '5': 'C3',
      '6': 'D3',
      '7': 'E3',
      '8': 'G3',
      '9': 'A3',
      'a': 'C4',
      'b': 'D4',
      'c': 'E4',
      'd': 'G4',
      'e': 'A4',
      'f': 'C4',
    }
  },
  minorpentatonic: {
    high: {
      '0': 'A3',
      '1': 'C4',
      '2': 'D4',
      '3': 'E4',
      '4': 'G4',
      '5': 'A4',
      '6': 'C5',
      '7': 'D5',
      '8': 'E5',
      '9': 'G5',
      'a': 'A5',
      'b': 'C6',
      'c': 'D6',
      'd': 'E6',
      'e': 'G6',
      'f': 'A6',
    },
    mid: {
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
    },
    low: {
      '0': 'A1',
      '1': 'C2',
      '2': 'D2',
      '3': 'E2',
      '4': 'G2',
      '5': 'A2',
      '6': 'C3',
      '7': 'D3',
      '8': 'E3',
      '9': 'G3',
      'a': 'A3',
      'b': 'C4',
      'c': 'D4',
      'd': 'E4',
      'e': 'G4',
      'f': 'A4',
    }
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


function playNotes(noteValues, scale, beat, noteBeats) {
  var notes = noteValues.split('');
  var noteBeat = 0;
  var piano = new Wad(Wad.presets.piano);
  var beatIndex = 0;
  notes.forEach(function(note) {
    piano.play({
      pitch: scale[note],
      volume: 1.2,
      wait: beat * noteBeat
    });

    noteBeat += noteBeats[beatIndex];
    beatIndex = beatIndex >= noteBeats.length - 1 ? 0 : beatIndex + 1;
  });
}

function playBass(bassValues, scale, beat, noteBeats) {
  var bassNotes = bassValues.split('');
  var noteBeat = 0;
  var bass = new Wad({ source: 'square' });
  var beatIndex = 0;

  bassNotes.forEach(function(item) {
    var note = parseInt(parseInt(item, 16) / 4, 10);
    bass.play({
      pitch: scale.bass[note],
      volume: 0.3,
      wait: beat * noteBeat,
      env: {
        hold: 0.125
      }
    });

    noteBeat += noteBeats[beatIndex];
    beatIndex = beatIndex >= noteBeats.length - 1 ? 0 : beatIndex + 1;
  });
}

function calculateBeat(note) {
  return 1 / (parseInt(note, 16) % 4 + 1);
}

function getBeats(beatValues) {
  var beatsArr = beatValues.split('');
  var beats = [];
  beatsArr.forEach(function(item) {
    beats.push(calculateBeat(item));
  });

  return beats;
}

function playSong(sha, scaleStr) {
  var beat = 60 / findTempo(sha);

  var beatValues = sha.substring(0, 8);
  var note1Values = sha.substring(0, 20);
  var note2Values = sha.substring(20);
  var note3Values = sha.substring(10, 30);
  var scale = scales[scaleStr];

  var noteBeats = getBeats(beatValues);

  // playBass(bassValues, scale, beat, noteBeats);
  playNotes(note1Values, scale.high, beat, noteBeats);
  playNotes(note2Values, scale.mid, beat, noteBeats);
  playNotes(note3Values, scale.low, beat, noteBeats)
}
