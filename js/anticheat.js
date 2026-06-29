const AntiCheat = {
    interKeyTimes: [],
    burstSpeeds: [],
    keyDownTimestamps: {},
    maxConcurrentKeys: 0,
    lastKeyTime: 0,
    pasteSuspect: false,
    _pasteStartTime: 0,
    _pasteCount: 0,
    active: false,
    testStartTime: 0,

    start() {
        this.interKeyTimes = [];
        this.burstSpeeds = [];
        this.keyDownTimestamps = {};
        this.maxConcurrentKeys = 0;
        this.lastKeyTime = 0;
        this.pasteSuspect = false;
        this._pasteStartTime = 0;
        this._pasteCount = 0;
        this.active = true;
        this.testStartTime = Date.now();
    },

    stop() {
        this.active = false;
    },

    keyDown(key, timestamp) {
        if (!this.active) return;
        this.keyDownTimestamps[key] = timestamp;
        const count = Object.keys(this.keyDownTimestamps).length;
        if (count > this.maxConcurrentKeys) this.maxConcurrentKeys = count;
    },

    keyUp(key) {
        if (!this.active) return;
        delete this.keyDownTimestamps[key];
    },

    recordKeystroke(timestamp) {
        if (!this.active) return;
        if (this.lastKeyTime > 0) {
            const gap = timestamp - this.lastKeyTime;
            this.interKeyTimes.push(gap);
            if (gap < 50) {
                this._pasteCount++;
                if (this._pasteStartTime === 0) this._pasteStartTime = timestamp;
                if (timestamp - this._pasteStartTime < 800 && this._pasteCount >= 20) {
                    this.pasteSuspect = true;
                }
            } else {
                this._pasteCount = 0;
                this._pasteStartTime = 0;
            }
        }
        this.lastKeyTime = timestamp;
    },

    recordBurst(wpm) {
        if (!this.active) return;
        this.burstSpeeds.push(wpm);
    },

    analyze(result) {
        if (!this.active && this.interKeyTimes.length === 0) {
            return { score: 0, flags: {}, flagged: false };
        }

        const flags = {};
        let score = 0;

        if (this.interKeyTimes.length > 0) {
            const sum = this.interKeyTimes.reduce((a, b) => a + b, 0);
            const avgInterval = sum / this.interKeyTimes.length;
            const minInterval = Math.min(...this.interKeyTimes);

            if (avgInterval < 40) {
                flags.avgInterval = Math.round(avgInterval);
                score += 30;
            } else if (avgInterval < 55) {
                flags.avgInterval = Math.round(avgInterval);
                score += 10;
            }

            if (minInterval < 15) {
                flags.minInterval = minInterval;
                score += 20;
            } else if (minInterval < 25) {
                score += 5;
            }
        }

        if (this.burstSpeeds.length > 3) {
            const maxBurst = Math.max(...this.burstSpeeds);
            if (maxBurst > 250) {
                flags.maxBurst = maxBurst;
                score += 25;
            } else if (maxBurst > 180) {
                flags.maxBurst = maxBurst;
                score += 10;
            }
        }

        if (this.maxConcurrentKeys > 4) {
            flags.maxConcurrent = this.maxConcurrentKeys;
            score += 15;
        } else if (this.maxConcurrentKeys > 3) {
            flags.maxConcurrent = this.maxConcurrentKeys;
            score += 5;
        }

        if (this.pasteSuspect) {
            flags.paste = true;
            score += 40;
        }

        if (result.consistency > 98 && result.wpm > 80 && result.elapsed > 10) {
            flags.highConsistency = result.consistency;
            score += 10;
        }

        if (result.wpm > 200 && result.elapsed > 5) {
            flags.impossibleWpm = result.wpm;
            score += 35;
        }

        const duration = result.elapsed || 1;
        const elapsedMin = duration / 60;
        if (elapsedMin > 0) {
            const sustainedWpm = result.wpm;
            const keystrokes = this.interKeyTimes.length + 1;
            const avgKps = keystrokes / duration;
            if (avgKps > 14 && sustainedWpm > 150) {
                flags.highKps = Math.round(avgKps * 10) / 10;
                score += 20;
            }
        }

        score = Math.min(100, score);

        return {
            score,
            flags,
            flagged: score >= 50,
            summary: this._summarize(flags, score)
        };
    },

    _summarize(flags, score) {
        const parts = [];
        if (flags.avgInterval) parts.push(`avg interval ${flags.avgInterval}ms`);
        if (flags.minInterval) parts.push(`min interval ${flags.minInterval}ms`);
        if (flags.maxBurst) parts.push(`burst ${flags.maxBurst}wpm`);
        if (flags.maxConcurrent) parts.push(`${flags.maxConcurrent} keys at once`);
        if (flags.paste) parts.push('paste-like speed burst');
        if (flags.highConsistency) parts.push(`robotic consistency ${flags.highConsistency}%`);
        if (flags.impossibleWpm) parts.push(`impossible ${flags.impossibleWpm}wpm`);
        if (flags.highKps) parts.push(`${flags.highKps} kps`);
        if (parts.length === 0 && score > 0) parts.push('suspicious pattern');
        return parts.join(', ') || 'clean';
    }
};
