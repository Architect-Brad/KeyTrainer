const ACHIEVEMENTS = [
    { id: 'first_test', name: 'First Steps', desc: 'Complete 1 test', icon: '🎯' },
    { id: 'ten_tests', name: 'Getting Started', desc: 'Complete 10 tests', icon: '📈' },
    { id: 'fifty_tests', name: 'Dedicated', desc: 'Complete 50 tests', icon: '🔥' },
    { id: 'hundred_tests', name: 'Centurion', desc: 'Complete 100 tests', icon: '💯' },
    { id: 'wpm_50', name: 'Speed Demon', desc: 'Reach 50 WPM', icon: '⚡' },
    { id: 'wpm_80', name: 'Fast Fingers', desc: 'Reach 80 WPM', icon: '🖐️' },
    { id: 'wpm_100', name: 'Triple Digits', desc: 'Reach 100 WPM', icon: '🚀' },
    { id: 'wpm_120', name: 'Turbo Type', desc: 'Reach 120 WPM', icon: '🏎️' },
    { id: 'acc_100', name: 'Perfection', desc: 'Achieve 100% accuracy in any test', icon: '✨' },
    { id: 'acc_98', name: 'Near Perfect', desc: 'Achieve 98%+ accuracy', icon: '💎' },
    { id: 'streak_10', name: 'On Fire', desc: 'Reach streak of 10', icon: '🎆' },
    { id: 'streak_25', name: 'Unstoppable', desc: 'Reach streak of 25', icon: '🏆' },
    { id: 'perfect_test', name: 'Flawless', desc: 'Complete a test with 0 mistakes', icon: '👑' },
    { id: 'beginner_graduate', name: 'Graduate', desc: 'Complete a test with beginner mode ON at 40+ WPM', icon: '🎓' },
    { id: 'journal_first', name: 'Journal Entry', desc: 'Complete 1 journal entry', icon: '📝' },
    { id: 'adaptive_first', name: 'Adaptive', desc: 'Complete 1 adaptive test', icon: '🧠' },
    { id: 'no_backspace', name: 'No Eraser', desc: 'Complete a test without pressing backspace', icon: '🚫' }
];

const Achievements = {
    STORAGE_KEY: 'keytrainer_achievements',
    _data: {},

    load() {
        try {
            this._data = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
        } catch {
            this._data = {};
        }
    },

    save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._data));
    },

    getAll() {
        return ACHIEVEMENTS.map(ach => ({
            ...ach,
            unlocked: !!this._data[ach.id],
            unlockedAt: this._data[ach.id]?.unlockedAt || null
        }));
    },

    getUnlockedCount() {
        return ACHIEVEMENTS.filter(ach => !!this._data[ach.id]).length;
    },

    getTotalCount() {
        return ACHIEVEMENTS.length;
    },

    async check(result, app) {
        const now = Date.now();
        const newlyUnlocked = [];

        const tests = await Storage.getAllTests().catch(() => []);
        const testCount = tests.length;

        for (const ach of ACHIEVEMENTS) {
            if (this._data[ach.id]) continue;

            let unlock = false;

            switch (ach.id) {
                case 'first_test':
                    unlock = testCount >= 1;
                    break;
                case 'ten_tests':
                    unlock = testCount >= 10;
                    break;
                case 'fifty_tests':
                    unlock = testCount >= 50;
                    break;
                case 'hundred_tests':
                    unlock = testCount >= 100;
                    break;
                case 'wpm_50':
                    unlock = result.wpm >= 50;
                    break;
                case 'wpm_80':
                    unlock = result.wpm >= 80;
                    break;
                case 'wpm_100':
                    unlock = result.wpm >= 100;
                    break;
                case 'wpm_120':
                    unlock = result.wpm >= 120;
                    break;
                case 'acc_100':
                    unlock = result.accuracy === 100;
                    break;
                case 'acc_98':
                    unlock = result.accuracy >= 98;
                    break;
                case 'streak_10':
                    unlock = app.bestStreak >= 10;
                    break;
                case 'streak_25':
                    unlock = app.bestStreak >= 25;
                    break;
                case 'perfect_test':
                    unlock = result.incorrectChars === 0 && result.accuracy === 100;
                    break;
                case 'beginner_graduate':
                    unlock = app.beginnerMode && result.wpm >= 40;
                    break;
                case 'journal_first':
                    unlock = result.mode === 'journal';
                    break;
                case 'adaptive_first':
                    unlock = result.difficulty === 'adaptive';
                    break;
                case 'no_backspace':
                    unlock = !app._backspaceUsed;
                    break;
            }

            if (unlock) {
                this._data[ach.id] = { unlockedAt: now };
                newlyUnlocked.push(ach);
            }
        }

        if (newlyUnlocked.length > 0) {
            this.save();
            this._showToast(newlyUnlocked);
        }

        this._updateBadge();
        return newlyUnlocked;
    },

    renderBadge(ach) {
        const cls = 'ach-badge' + (ach.unlocked ? '' : ' locked');
        return `<div class="${cls}" title="${ach.desc}"><span class="ach-icon">${ach.icon}</span><span class="ach-name">${ach.name}</span></div>`;
    },

    renderPopover() {
        const all = this.getAll();
        const unlocked = all.filter(a => a.unlocked).length;
        const total = all.length;
        let html = `<div class="achs-header">Achievements <span class="achs-count">${unlocked}/${total}</span></div><div class="achs-list">`;
        for (const ach of all) {
            html += this.renderBadge(ach);
        }
        html += '</div>';
        return html;
    },

    _showToast(newlyUnlocked) {
        const existing = document.querySelector('.ach-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'ach-toast';
        if (newlyUnlocked.length === 1) {
            toast.innerHTML = `<span class="ach-toast-icon">${newlyUnlocked[0].icon}</span><span class="ach-toast-text">Achievement Unlocked: ${newlyUnlocked[0].name}</span>`;
        } else {
            toast.innerHTML = `<span class="ach-toast-icon">🏅</span><span class="ach-toast-text">${newlyUnlocked.length} Achievements Unlocked!</span>`;
        }
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 400);
            }, 3000);
        });
    },

    _updateBadge() {
        const btn = document.getElementById('achs-toggle');
        if (!btn) return;
        const count = this.getUnlockedCount();
        const existing = btn.querySelector('.achs-badge-count');
        if (count > 0) {
            if (existing) {
                existing.textContent = count;
            } else {
                const badge = document.createElement('span');
                badge.className = 'achs-badge-count';
                badge.textContent = count;
                btn.appendChild(badge);
            }
        } else if (existing) {
            existing.remove();
        }
    },

    renderPopoverInto(container) {
        container.innerHTML = this.renderPopover();
    }
};
