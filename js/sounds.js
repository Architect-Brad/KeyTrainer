const Sounds = {
    ctx: null,
    enabled: false,
    profile: 'default',

    profiles: {
        default: {
            correct: { type: 'sine', freqStart: 880, freqEnd: 660, ramp: 'exponential', rampTime: 0.04, gain: 0.08, duration: 0.06 },
            incorrect: { type: 'sawtooth', freqStart: 180, freqEnd: 120, ramp: 'exponential', rampTime: 0.1, gain: 0.06, duration: 0.1 },
            complete: { type: 'sine', freqStart: 660, freqEnd: 990, ramp: 'linear', rampTime: 0.15, gain: 0.07, duration: 0.2 }
        },
        mechanical: {
            correct: { type: 'square', freqStart: 1000, freqEnd: 800, ramp: 'linear', rampTime: 0.01, gain: 0.04, duration: 0.025 },
            incorrect: { type: 'square', freqStart: 200, freqEnd: 150, ramp: 'linear', rampTime: 0.015, gain: 0.03, duration: 0.035 },
            complete: { type: 'square', freqStart: 800, freqEnd: 1200, ramp: 'linear', rampTime: 0.03, gain: 0.04, duration: 0.06 }
        },
        typewriter: {
            correct: { type: 'triangle', freqStart: 600, freqEnd: 450, ramp: 'exponential', rampTime: 0.03, gain: 0.07, duration: 0.045 },
            incorrect: { type: 'triangle', freqStart: 150, freqEnd: 100, ramp: 'exponential', rampTime: 0.06, gain: 0.05, duration: 0.09 },
            complete: { type: 'triangle', freqStart: 500, freqEnd: 800, ramp: 'linear', rampTime: 0.1, gain: 0.06, duration: 0.15 }
        }
    },

    init() {
        const saved = localStorage.getItem('keytrainer_sounds');
        this.enabled = saved === 'on';
        const savedProfile = localStorage.getItem('keytrainer_sound_profile');
        if (savedProfile && this.profiles[savedProfile]) this.profile = savedProfile;
    },

    ensureCtx() {
        if (this.ctx) return;
        try {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {}
    },

    play(type) {
        if (!this.enabled) return;
        this.ensureCtx();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const cfg = this.profiles[this.profile];
        const p = cfg[type];
        if (!p) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = p.type;

        const t = this.ctx.currentTime;
        osc.frequency.setValueAtTime(p.freqStart, t);
        if (p.ramp === 'exponential') {
            osc.frequency.exponentialRampToValueAtTime(p.freqEnd, t + p.rampTime);
        } else {
            osc.frequency.linearRampToValueAtTime(p.freqEnd, t + p.rampTime);
        }
        gain.gain.setValueAtTime(p.gain, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + p.duration);
        osc.start(t);
        osc.stop(t + p.duration);
    },

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('keytrainer_sounds', this.enabled ? 'on' : 'off');
        if (!this.enabled && this.ctx) {
            this.ctx.close();
            this.ctx = null;
        }
        return this.enabled;
    },

    setProfile(name) {
        if (this.profiles[name]) {
            this.profile = name;
            localStorage.setItem('keytrainer_sound_profile', name);
        }
    }
};
