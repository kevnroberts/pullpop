// bec5d9d67a5e63e9cc5564785e6d3cda0f7b5ac4

// bec5 d9d6 7a5e 63e9 cc55 6478 5e6d 3cda 0f7b 5ac4

var MIN_TEMPO = 90;
var MAX_TEMPO = 210;

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
      '0': 'C4',
      '1': 'D4',
      '2': 'Eb4',
      '3': 'F4',
      '4': 'G4',
      '5': 'Ab4',
      '6': 'Bb4',
      '7': 'C5',
      '8': 'D5',
      '9': 'Eb5',
      'a': 'F5',
      'b': 'G5',
      'c': 'Ab5',
      'd': 'Bb5',
      'e': 'C6',
      'f': 'D6',
    },
    mid: {
      '0': 'C3',
      '1': 'D3',
      '2': 'Eb3',
      '3': 'F3',
      '4': 'G3',
      '5': 'Ab3',
      '6': 'Bb3',
      '7': 'C4',
      '8': 'D4',
      '9': 'Eb4',
      'a': 'F4',
      'b': 'G4',
      'c': 'Ab4',
      'd': 'Bb4',
      'e': 'C5',
      'f': 'D5',
    },
    low: {
      '0': 'C2',
      '1': 'D2',
      '2': 'Eb2',
      '3': 'F2',
      '4': 'G2',
      '5': 'Ab2',
      '6': 'Bb2',
      '7': 'C3',
      '8': 'D3',
      '9': 'Eb3',
      'a': 'F3',
      'b': 'G3',
      'c': 'Ab3',
      'd': 'Bb3',
      'e': 'C4',
      'f': 'D4',
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
      '0': 'C4',
      '1': 'D4',
      '2': 'Eb4',
      '3': 'G4',
      '4': 'Ab4',
      '5': 'C5',
      '6': 'D5',
      '7': 'Eb5',
      '8': 'G5',
      '9': 'Ab5',
      'a': 'C6',
      'b': 'D6',
      'c': 'Eb6',
      'd': 'G6',
      'e': 'Ab6',
      'f': 'C7',
    },
    mid: {
      '0': 'C3',
      '1': 'D3',
      '2': 'Eb3',
      '3': 'G3',
      '4': 'Ab3',
      '5': 'C4',
      '6': 'D4',
      '7': 'Eb4',
      '8': 'G4',
      '9': 'Ab4',
      'a': 'C5',
      'b': 'D5',
      'c': 'Eb5',
      'd': 'G5',
      'e': 'Ab5',
      'f': 'C6',
    },
    low: {
      '0': 'C2',
      '1': 'D2',
      '2': 'Eb2',
      '3': 'G2',
      '4': 'Ab2',
      '5': 'C3',
      '6': 'D3',
      '7': 'Eb3',
      '8': 'G3',
      '9': 'Ab3',
      'a': 'C4',
      'b': 'D4',
      'c': 'Eb4',
      'd': 'G4',
      'e': 'Ab4',
      'f': 'C4',
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

function calculateNextBeat() {

}

function playNotes(noteValues, scale, pan, beat, noteBeats) {
  var notes = noteValues.split('');
  var noteBeat = 0;
  var piano = new Wad(Wad.presets.piano);
  var beatIndex = 0;
  notes.forEach(function(note) {
    piano.play({
      pitch: scale[note],
      volume: 1.2,
      wait: beat * noteBeat,
      panning: pan,
    });

    noteBeat += noteBeats[beatIndex];
    beatIndex = beatIndex >= noteBeats.length - 1 ? 0 : beatIndex + 1;
  });
}

function playClick(beat, noteBeats) {
  var click = new Wad(Wad.presets.hiHatClosed);
  var beatSum = noteBeats.reduce(function(sum, item) { return sum + item; }, 0);
  for (var i = 0; i < Math.ceil(beatSum); i++) {
    click.play({ wait: beat * i });
  }
}

function calculateBeat(note) {
  var num = parseInt(note, 16) % 3 * 2;
  if (!num) num = 1;
  return 1 / num;
}

function getBeats(sha) {
  var beatsArr = sha.split('');
  var beats = [];
  beatsArr.forEach(function(item, index) {
    if (index % 2) {
      beats.push(calculateBeat(item));
    }
  });

  return beats;
}

function playSong(sha, scaleStr) {
  var beat = 60 / findTempo(sha);

  var note1Values = sha.substring(0, 20);
  var note2Values = sha.substring(20);
  var note3Values = sha.substring(10, 30);
  var scale = scales[scaleStr];

  var noteBeats = getBeats(sha);

  playClick(beat, noteBeats);
  playNotes(note1Values, scale.high, -0.5, beat, noteBeats);
  playNotes(note2Values, scale.mid, 0, beat, noteBeats);
  playNotes(note3Values, scale.low, 0.5, beat, noteBeats)
}
