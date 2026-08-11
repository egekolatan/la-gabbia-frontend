// Ambient Web Audio Synthesizer for warm, subtle Italian lounge acoustic atmosphere
class AmbientAudioController {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  playChord() {
    if (!this.ctx || !this.isPlaying) return;

    // Gentle jazz/lounge chords: Fmaj9, Cmaj7, Dm9, Am9
    const chordProgressions = [
      [174.61, 220.00, 261.63, 329.63, 392.00], // Fmaj9
      [130.81, 164.81, 196.00, 246.94, 293.66], // Cmaj9
      [146.83, 174.61, 220.00, 261.63, 329.63], // Dm9
      [110.00, 164.81, 196.00, 220.00, 261.63]  // Am9
    ];

    const chord = chordProgressions[Math.floor(Math.random() * chordProgressions.length)];
    const now = this.ctx.currentTime;
    const duration = 6.5;

    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450 + idx * 80, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.018 / chord.length, now + 2.0);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });

    if (this.isPlaying) {
      this.timer = setTimeout(() => {
        this.playChord();
      }, 5500);
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.playChord();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const ambientAudio = new AmbientAudioController();
