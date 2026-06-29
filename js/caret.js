class Caret {
    constructor(el) {
        this.el = el;
        this._speed = 'medium';
        this._raf = null;
        this._lastLeft = -1;
        this._lastTop = -1;
    }

    get duration() {
        return { slow: 150, medium: 100, fast: 85 }[this._speed] || 100;
    }

    setSpeed(speed) {
        this._speed = speed;
        const ms = this.duration;
        const s = (ms / 1000).toFixed(3) + 's';
        document.documentElement.style.setProperty('--caret-speed', s);
    }

    setStyle(style) {
        this.el.className = 'caret ' + style;
    }

    goTo(left, top) {
        if (this._raf) cancelAnimationFrame(this._raf);
        this._raf = requestAnimationFrame(() => {
            this._raf = null;
            const l = Math.round(left);
            const t = Math.round(top);
            if (l !== this._lastLeft || t !== this._lastTop) {
                this._lastLeft = l;
                this._lastTop = t;
                this.el.style.left = l + 'px';
                this.el.style.top = t + 'px';
            }
        });
    }

    jumpTo(left, top) {
        if (this._raf) cancelAnimationFrame(this._raf);
        this._raf = null;
        this.el.style.transition = 'none';
        const l = Math.round(left);
        const t = Math.round(top);
        this._lastLeft = l;
        this._lastTop = t;
        this.el.style.left = l + 'px';
        this.el.style.top = t + 'px';
        void this.el.offsetHeight;
        this.el.style.transition = '';
    }

    hide() {
        this.el.classList.add('hidden');
    }

    show() {
        this.el.classList.remove('hidden');
    }

    visible() {
        return !this.el.classList.contains('hidden');
    }

    stopBlink() {
        this.el.style.animationPlayState = 'paused';
        this.el.style.opacity = '1';
    }

    startBlink() {
        this.el.style.animationPlayState = 'running';
        this.el.style.opacity = '';
    }
}
