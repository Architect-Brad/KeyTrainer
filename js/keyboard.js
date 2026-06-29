const Keyboard = {
    keyElements: {},
    charToKey: {},
    fingerForChar: {},
    handForChar: {},
    layoutName: 'qwerty',
    pressCounts: {},

    LAYOUTS: {
        qwerty: [
            [
                { key: '`', label: '~', width: 'special' },
                { key: '1', label: '1' }, { key: '2', label: '2' },
                { key: '3', label: '3' }, { key: '4', label: '4' },
                { key: '5', label: '5' }, { key: '6', label: '6' },
                { key: '7', label: '7' }, { key: '8', label: '8' },
                { key: '9', label: '9' }, { key: '0', label: '0' },
                { key: '-', label: '-' }, { key: '=', label: '=' },
                { key: 'Backspace', label: 'Bksp', width: 'wider' }
            ],
            [
                { key: 'Tab', label: 'Tab', width: 'wide' },
                { key: 'q', label: 'Q' }, { key: 'w', label: 'W' },
                { key: 'e', label: 'E' }, { key: 'r', label: 'R' },
                { key: 't', label: 'T' }, { key: 'y', label: 'Y' },
                { key: 'u', label: 'U' }, { key: 'i', label: 'I' },
                { key: 'o', label: 'O' }, { key: 'p', label: 'P' },
                { key: '[', label: '[' }, { key: ']', label: ']' },
                { key: '\\', label: '\\' }
            ],
            [
                { key: 'CapsLock', label: 'Caps', width: 'wide' },
                { key: 'a', label: 'A' }, { key: 's', label: 'S' },
                { key: 'd', label: 'D' }, { key: 'f', label: 'F' },
                { key: 'g', label: 'G' }, { key: 'h', label: 'H' },
                { key: 'j', label: 'J' }, { key: 'k', label: 'K' },
                { key: 'l', label: 'L' }, { key: ';', label: ';' },
                { key: "'", label: "'" },
                { key: 'Enter', label: 'Enter', width: 'wider' }
            ],
            [
                { key: 'Shift', label: 'Shift', width: 'wide' },
                { key: 'z', label: 'Z' }, { key: 'x', label: 'X' },
                { key: 'c', label: 'C' }, { key: 'v', label: 'V' },
                { key: 'b', label: 'B' }, { key: 'n', label: 'N' },
                { key: 'm', label: 'M' },
                { key: ',', label: ',' }, { key: '.', label: '.' },
                { key: '/', label: '/' },
                { key: 'Shift', label: 'Shift', width: 'wide' }
            ],
            [
                { key: 'Control', label: 'Ctrl', width: 'special' },
                { key: 'Meta', label: 'Win', width: 'special' },
                { key: 'Alt', label: 'Alt', width: 'special' },
                { key: ' ', label: '', width: 'space' },
                { key: 'Alt', label: 'Alt', width: 'special' },
                { key: 'Fn', label: 'Fn', width: 'special' },
                { key: 'Control', label: 'Ctrl', width: 'special' }
            ]
        ],

        colemak: [
            [
                { key: '`', label: '~', width: 'special' },
                { key: '1', label: '1' }, { key: '2', label: '2' },
                { key: '3', label: '3' }, { key: '4', label: '4' },
                { key: '5', label: '5' }, { key: '6', label: '6' },
                { key: '7', label: '7' }, { key: '8', label: '8' },
                { key: '9', label: '9' }, { key: '0', label: '0' },
                { key: '-', label: '-' }, { key: '=', label: '=' },
                { key: 'Backspace', label: 'Bksp', width: 'wider' }
            ],
            [
                { key: 'Tab', label: 'Tab', width: 'wide' },
                { key: 'q', label: 'Q' }, { key: 'w', label: 'W' },
                { key: 'f', label: 'F' }, { key: 'p', label: 'P' },
                { key: 'g', label: 'G' }, { key: 'j', label: 'J' },
                { key: 'l', label: 'L' }, { key: 'u', label: 'U' },
                { key: 'y', label: 'Y' }, { key: ';', label: ';' },
                { key: '[', label: '[' }, { key: ']', label: ']' },
                { key: '\\', label: '\\' }
            ],
            [
                { key: 'CapsLock', label: 'Caps', width: 'wide' },
                { key: 'a', label: 'A' }, { key: 'r', label: 'R' },
                { key: 's', label: 'S' }, { key: 't', label: 'T' },
                { key: 'd', label: 'D' }, { key: 'h', label: 'H' },
                { key: 'n', label: 'N' }, { key: 'e', label: 'E' },
                { key: 'i', label: 'I' }, { key: 'o', label: 'O' },
                { key: "'", label: "'" },
                { key: 'Enter', label: 'Enter', width: 'wider' }
            ],
            [
                { key: 'Shift', label: 'Shift', width: 'wide' },
                { key: 'z', label: 'Z' }, { key: 'x', label: 'X' },
                { key: 'c', label: 'C' }, { key: 'v', label: 'V' },
                { key: 'b', label: 'B' }, { key: 'k', label: 'K' },
                { key: 'm', label: 'M' },
                { key: ',', label: ',' }, { key: '.', label: '.' },
                { key: '/', label: '/' },
                { key: 'Shift', label: 'Shift', width: 'wide' }
            ],
            [
                { key: 'Control', label: 'Ctrl', width: 'special' },
                { key: 'Meta', label: 'Win', width: 'special' },
                { key: 'Alt', label: 'Alt', width: 'special' },
                { key: ' ', label: '', width: 'space' },
                { key: 'Alt', label: 'Alt', width: 'special' },
                { key: 'Fn', label: 'Fn', width: 'special' },
                { key: 'Control', label: 'Ctrl', width: 'special' }
            ]
        ],

        dvorak: [
            [
                { key: '`', label: '~', width: 'special' },
                { key: '1', label: '1' }, { key: '2', label: '2' },
                { key: '3', label: '3' }, { key: '4', label: '4' },
                { key: '5', label: '5' }, { key: '6', label: '6' },
                { key: '7', label: '7' }, { key: '8', label: '8' },
                { key: '9', label: '9' }, { key: '0', label: '0' },
                { key: '[', label: '[' }, { key: ']', label: ']' },
                { key: 'Backspace', label: 'Bksp', width: 'wider' }
            ],
            [
                { key: 'Tab', label: 'Tab', width: 'wide' },
                { key: "'", label: "'" }, { key: ',', label: ',' },
                { key: '.', label: '.' }, { key: 'p', label: 'P' },
                { key: 'y', label: 'Y' }, { key: 'f', label: 'F' },
                { key: 'g', label: 'G' }, { key: 'c', label: 'C' },
                { key: 'r', label: 'R' }, { key: 'l', label: 'L' },
                { key: '/', label: '/' }, { key: '=', label: '=' },
                { key: '\\', label: '\\' }
            ],
            [
                { key: 'CapsLock', label: 'Caps', width: 'wide' },
                { key: 'a', label: 'A' }, { key: 'o', label: 'O' },
                { key: 'e', label: 'E' }, { key: 'u', label: 'U' },
                { key: 'i', label: 'I' }, { key: 'd', label: 'D' },
                { key: 'h', label: 'H' }, { key: 't', label: 'T' },
                { key: 'n', label: 'N' }, { key: 's', label: 'S' },
                { key: '-', label: '-' },
                { key: 'Enter', label: 'Enter', width: 'wider' }
            ],
            [
                { key: 'Shift', label: 'Shift', width: 'wide' },
                { key: ';', label: ';' }, { key: 'q', label: 'Q' },
                { key: 'j', label: 'J' }, { key: 'k', label: 'K' },
                { key: 'x', label: 'X' }, { key: 'b', label: 'B' },
                { key: 'm', label: 'M' },
                { key: 'w', label: 'W' }, { key: 'v', label: 'V' },
                { key: 'z', label: 'Z' },
                { key: 'Shift', label: 'Shift', width: 'wide' }
            ],
            [
                { key: 'Control', label: 'Ctrl', width: 'special' },
                { key: 'Meta', label: 'Win', width: 'special' },
                { key: 'Alt', label: 'Alt', width: 'special' },
                { key: ' ', label: '', width: 'space' },
                { key: 'Alt', label: 'Alt', width: 'special' },
                { key: 'Fn', label: 'Fn', width: 'special' },
                { key: 'Control', label: 'Ctrl', width: 'special' }
            ]
        ]
    },

    FINGER_MAPS: {
        qwerty: { left: 'q:0 w:1 e:2 r:3 t:3 a:0 s:1 d:2 f:3 g:3 z:0 x:1 c:2 v:3 b:3', right: 'y:4 u:4 i:5 o:6 p:7 h:4 j:4 k:5 l:6 n:4 m:4', extra: ';:7 R \':7 R' },
        colemak: { left: 'q:0 w:1 f:2 p:3 g:3 a:0 r:1 s:2 t:3 d:3 z:0 x:1 c:2 v:3 b:3', right: 'j:4 l:4 u:5 y:6 ;:7 h:4 n:4 e:5 i:6 o:7 k:4 m:4', extra: ',:5 R .:6 R /:7 R \':7 R' },
        dvorak: { left: '\':0 ,:1 .:2 p:3 y:3 a:0 o:1 e:2 u:3 i:3 ;:0 q:1 j:2 k:3 x:3', right: 'f:4 g:4 c:5 r:6 l:7 d:4 h:4 t:5 n:6 s:7 b:4 m:4 w:5 v:6 z:7', extra: '/:7 R -:7 R' }
    },

    init() {
        this.layoutName = 'qwerty';
        this.buildCharMap();
        this.buildFingerMap();
        this.render();
    },

    setLayout(name) {
        if (!this.LAYOUTS[name]) return;
        this.layoutName = name;
        this.keyElements = {};
        this.buildCharMap();
        this.buildFingerMap();
        this.render();
        if (document.getElementById('keyboard').classList.contains('beginner-mode')) {
            document.getElementById('keyboard').classList.add('beginner-mode');
        }
    },

    parseFingerMap(str) {
        const map = {};
        str.split(' ').forEach(p => {
            const [ch, finger, hand] = p.split(':');
            if (ch && finger !== undefined) {
                map[ch] = { finger: parseInt(finger), hand: hand || 'L' };
            }
        });
        return map;
    },

    get layout() {
        return this.LAYOUTS[this.layoutName];
    },

    buildFingerMap() {
        this.fingerForChar = {};
        this.handForChar = {};
        const fm = this.FINGER_MAPS[this.layoutName];
        if (!fm) return;
        ['left', 'right', 'extra'].forEach(cat => {
            if (!fm[cat]) return;
            fm[cat].split(' ').forEach(p => {
                const parts = p.split(':');
                const ch = parts[0];
                const finger = parseInt(parts[1]);
                const hand = parts[2] || (cat === 'left' ? 'L' : 'R');
                this.fingerForChar[ch] = finger;
                this.handForChar[ch] = hand;
            });
        });
        this.fingerForChar[' '] = 8;
        this.handForChar[' '] = 'T';
        const keys = '`~!@#$%^&*()_+-=[]\\{}|;:\'",./<>?0123456789';
        for (const c of keys) {
            if (this.fingerForChar[c] === undefined) {
                this.fingerForChar[c] = -1;
                this.handForChar[c] = 'O';
            }
        }
    },

    buildCharMap() {
        this.charToKey = {};
        for (let i = 0; i < 26; i++) {
            const l = String.fromCharCode(97 + i);
            const u = String.fromCharCode(65 + i);
            this.charToKey[l] = l;
            this.charToKey[u] = l;
        }
        for (let i = 0; i < 10; i++) {
            this.charToKey[String(i)] = String(i);
        }
        const shifted = {
            '~': '`', '!': '1', '@': '2', '#': '3', '$': '4',
            '%': '5', '^': '6', '&': '7', '*': '8', '(': '9',
            ')': '0', '_': '-', '+': '=', '{': '[', '}': ']',
            '|': '\\', ':': ';', '"': "'", '<': ',', '>': '.',
            '?': '/'
        };
        Object.assign(this.charToKey, shifted);
        const direct = {
            '`': '`', '-': '-', '=': '=', '[': '[', ']': ']',
            '\\': '\\', ';': ';', "'": "'", ',': ',', '.': '.',
            '/': '/', ' ': ' '
        };
        Object.assign(this.charToKey, direct);
    },

    render() {
        const container = document.getElementById('keyboard');
        container.innerHTML = '';
        const layout = this.layout;
        const homeRow = new Set();
        const homerowLayout = {
            qwerty: ['a','s','d','f','j','k','l',';'],
            colemak: ['a','r','s','t','n','e','i','o'],
            dvorak: ['a','o','e','u','h','t','n','s']
        };
        (homerowLayout[this.layoutName] || []).forEach(k => homeRow.add(k));

        layout.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';
            row.forEach(info => {
                const el = document.createElement('div');
                el.className = 'key';
                if (info.width) el.classList.add(info.width);
                el.textContent = info.label;
                el.dataset.key = info.key;
                const lower = info.key.toLowerCase();
                if (this.fingerForChar[lower] !== undefined) {
                    el.dataset.finger = this.fingerForChar[lower];
                    el.dataset.hand = this.handForChar[lower];
                }
                if (homeRow.has(lower)) {
                    el.dataset.homerow = 'true';
                }
                rowDiv.appendChild(el);
                this.keyElements[info.key] = el;
            });
            container.appendChild(rowDiv);
        });
    },

    getKeyForChar(char) {
        const keyName = this.charToKey[char];
        if (!keyName) return null;
        return this.keyElements[keyName] || null;
    },

    highlightGuide(char) {
        this.resetGuides();
        if (!char) return;
        const el = this.getKeyForChar(char);
        if (el) el.classList.add('guide');
    },

    resetGuides() {
        document.querySelectorAll('.key.guide').forEach(el => el.classList.remove('guide'));
    },

    press(char, isCorrect) {
        const el = this.getKeyForChar(char);
        if (!el) return;
        const keyName = el.dataset.key;
        this.pressCounts[keyName] = (this.pressCounts[keyName] || 0) + 1;
        this.updateHeatmap();
        el.classList.add('pressed');
        el.classList.add(isCorrect ? 'correct-press' : 'incorrect-press');
        setTimeout(() => {
            el.classList.remove('pressed', 'correct-press', 'incorrect-press');
        }, 200);
    },

    updateHeatmap() {
        const values = Object.values(this.pressCounts);
        if (values.length === 0) return;
        const maxCount = Math.max(...values);
        if (maxCount === 0) return;
        for (const [key, count] of Object.entries(this.pressCounts)) {
            const el = this.keyElements[key];
            if (!el) continue;
            const intensity = count / maxCount;
            el.style.setProperty('--heat-intensity', intensity);
        }
    },

    resetHeatmap() {
        this.pressCounts = {};
        document.querySelectorAll('.key').forEach(el => {
            el.style.removeProperty('--heat-intensity');
        });
    },

    reset() {
        document.querySelectorAll('.key.guide, .key.pressed, .key.correct-press, .key.incorrect-press')
            .forEach(el => el.classList.remove('guide', 'pressed', 'correct-press', 'incorrect-press'));
        this.resetHeatmap();
    },

    setBeginnerMode(enabled) {
        const container = document.getElementById('keyboard');
        if (!container) return;
        container.classList.toggle('beginner-mode', enabled);
    },

    pressKey(keyName) {
        const el = this.keyElements[keyName];
        if (!el) return;
        this.pressCounts[keyName] = (this.pressCounts[keyName] || 0) + 1;
        this.updateHeatmap();
        el.classList.add('pressed');
        setTimeout(() => el.classList.remove('pressed'), 200);
    }
};
