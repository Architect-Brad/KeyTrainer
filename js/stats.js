const COLORS = {
    accent: '#e94560',
    success: '#4ade80',
    warning: '#fbbf24',
    info: '#60a5fa',
    purple: '#a78bfa',
    orange: '#fb923c',
    cyan: '#22d3ee',
    distribution: ['#f87171', '#fb923c', '#fbbf24', '#a3e635', '#4ade80', '#34d399', '#2dd4bf'],
    modes: ['#e94560', '#4ade80', '#60a5fa', '#a78bfa']
};

const Stats = {
    charts: {},
    initialized: false,

    init() {
        if (this.initialized) return;
        this.initialized = true;
        if (typeof Chart === 'undefined') return;
        Chart.defaults.font.family = "'JetBrains Mono','Fira Code',monospace";
        this.setupCharts();
    },

    createCtx(id) {
        const el = document.getElementById(id);
        if (!el) return null;
        return el.getContext('2d');
    },

    gridColor() {
        const c = getComputedStyle(document.body).getPropertyValue('--border').trim() || 'rgba(255,255,255,0.06)';
        return c;
    },
    tickColor() {
        const c = getComputedStyle(document.body).getPropertyValue('--text-muted').trim() || '#6b7280';
        return c;
    },
    accentColor() {
        const c = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#e94560';
        return c;
    },

    createGradient(ctx, height, color) {
        if (!ctx) return color;
        const g = ctx.createLinearGradient(0, 0, 0, height);
        g.addColorStop(0, color + 'cc');
        g.addColorStop(1, color + '05');
        return g;
    },

    richTooltip(ctx, items) {
        if (!items?.length) return '';
        const item = items[0];
        const dataset = item.dataset;
        const label = dataset.label || '';
        const val = item.parsed?.y ?? item.parsed?.r ?? item.parsed;
        const raw = item.raw;
        let extra = '';
        if (raw && raw._meta) {
            if (raw._meta.accuracy !== undefined) extra += ` Acc: ${raw._meta.accuracy}%`;
            if (raw._meta.raw !== undefined) extra += ` Raw: ${raw._meta.raw}`;
            if (raw._meta.consistency !== undefined) extra += ` Cons: ${raw._meta.consistency}%`;
        }
        return `
            <div style="font-family:'JetBrains Mono',monospace;font-size:0.75rem;">
                <strong style="color:${dataset.borderColor || '#fff'}">${label}</strong>
                <div style="margin-top:2px;">${val}${extra}</div>
            </div>
        `;
    },

    movingAverage(data, window) {
        const result = new Array(data.length).fill(null);
        for (let i = window - 1; i < data.length; i++) {
            let sum = 0;
            for (let j = i - window + 1; j <= i; j++) sum += data[j];
            result[i] = Math.round((sum / window) * 10) / 10;
        }
        return result;
    },

    sharedLineOptions() {
        const tickColor = this.tickColor();
        const gridColor = this.gridColor();
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.85)',
                    titleFont: { size: 11, family: "'JetBrains Mono',monospace" },
                    bodyFont: { size: 11, family: "'JetBrains Mono',monospace" },
                    padding: 8,
                    cornerRadius: 6,
                    displayColors: true,
                    boxPadding: 4,
                    callbacks: {
                        title: (items) => items[0]?.label || '',
                        label: (ctx) => {
                            const ds = ctx.dataset;
                            const v = ctx.parsed?.y ?? ctx.parsed?.r;
                            if (ds.label?.includes('MA')) return `${ds.label}: ${v}`;
                            const raw = ctx.raw;
                            let s = `${v}`;
                            if (raw && raw._meta) {
                                const m = raw._meta;
                                if (m.accuracy !== undefined) s += `  |  Acc: ${m.accuracy}%`;
                                if (m.raw !== undefined) s += `  Raw: ${m.raw}`;
                                if (m.consistency !== undefined) s += `  Cons: ${m.consistency}%`;
                            }
                            return s;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { color: gridColor, drawBorder: false },
                    ticks: { color: tickColor, maxTicksLimit: 12, font: { size: 10 } }
                },
                y: {
                    grid: { color: gridColor, drawBorder: false },
                    ticks: { color: tickColor, font: { size: 10 } },
                    beginAtZero: true
                }
            },
            animation: {
                duration: 800,
                easing: 'easeOutQuart'
            }
        };
    },

    setupCharts() {
        const tickColor = this.tickColor();
        const gridColor = this.gridColor();
        const accent = this.accentColor();

        const wpmCtx = this.createCtx('wpm-chart');
        this.charts.wpm = new Chart(wpmCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'WPM',
                    data: [],
                    borderColor: accent,
                    backgroundColor: this.createGradient(wpmCtx, 200, accent),
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: accent,
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 3,
                    pointHoverBorderColor: '#fff',
                    borderWidth: 2.5
                }, {
                    label: 'MA(5)',
                    data: [],
                    borderColor: '#fff',
                    borderWidth: 1.5,
                    borderDash: [4, 3],
                    pointRadius: 0,
                    fill: false,
                    tension: 0.3
                }]
            },
            options: {
                ...this.sharedLineOptions(),
                plugins: {
                    ...this.sharedLineOptions().plugins,
                    tooltip: {
                        ...this.sharedLineOptions().plugins.tooltip,
                        callbacks: {
                            label: (ctx) => {
                                if (ctx.dataset.label === 'MA(5)') return `Trend: ${ctx.parsed.y} wpm`;
                                const raw = ctx.raw;
                                let s = `${ctx.parsed.y} wpm`;
                                if (raw && raw._meta) {
                                    if (raw._meta.accuracy !== undefined) s += `  |  ${raw._meta.accuracy}%`;
                                    if (raw._meta.raw !== undefined) s += `  Raw: ${raw._meta.raw}`;
                                }
                                return s;
                            }
                        }
                    }
                }
            }
        });

        const accCtx = this.createCtx('accuracy-chart');
        this.charts.accuracy = new Chart(accCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Accuracy',
                    data: [],
                    borderColor: '#4ade80',
                    backgroundColor: this.createGradient(accCtx, 200, '#4ade80'),
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#4ade80',
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 3,
                    pointHoverBorderColor: '#fff',
                    borderWidth: 2.5
                }]
            },
            options: {
                ...this.sharedLineOptions(),
                scales: {
                    ...this.sharedLineOptions().scales,
                    y: {
                        ...this.sharedLineOptions().scales.y,
                        min: 80,
                        max: 100,
                        ticks: { ...this.sharedLineOptions().scales.y.ticks, callback: (v) => v + '%' }
                    }
                },
                plugins: {
                    ...this.sharedLineOptions().plugins,
                    tooltip: {
                        ...this.sharedLineOptions().plugins.tooltip,
                        callbacks: {
                            label: (ctx) => `${ctx.parsed.y}%`
                        }
                    }
                }
            }
        });

        const consCtx = this.createCtx('consistency-chart');
        this.charts.consistency = new Chart(consCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Consistency',
                    data: [],
                    borderColor: '#a78bfa',
                    backgroundColor: this.createGradient(consCtx, 200, '#a78bfa'),
                    tension: 0.4,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#a78bfa',
                    pointHoverRadius: 6,
                    pointHoverBorderWidth: 3,
                    pointHoverBorderColor: '#fff',
                    borderWidth: 2.5
                }]
            },
            options: {
                ...this.sharedLineOptions(),
                scales: {
                    ...this.sharedLineOptions().scales,
                    y: {
                        ...this.sharedLineOptions().scales.y,
                        min: 50,
                        max: 100,
                        ticks: { ...this.sharedLineOptions().scales.y.ticks, callback: (v) => v + '%' }
                    }
                },
                plugins: {
                    ...this.sharedLineOptions().plugins,
                    tooltip: {
                        ...this.sharedLineOptions().plugins.tooltip,
                        callbacks: {
                            label: (ctx) => `${ctx.parsed.y}%`
                        }
                    }
                }
            }
        });

        const dailyCtx = this.createCtx('daily-chart');
        this.charts.daily = new Chart(dailyCtx, {
            type: 'bar',
            data: { labels: [], datasets: [{
                label: 'Avg WPM',
                data: [],
                backgroundColor: [],
                borderRadius: 4,
                borderSkipped: false
            }]},
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        titleFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        bodyFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        padding: 8,
                        cornerRadius: 6,
                        callbacks: {
                            label: (ctx) => {
                                const raw = ctx.raw;
                                let s = `${ctx.parsed.y} wpm`;
                                if (raw && raw._meta) {
                                    if (raw._meta.accuracy) s += `  |  Acc: ${raw._meta.accuracy}%`;
                                    if (raw._meta.tests) s += `  (${raw._meta.tests} tests)`;
                                }
                                return s;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: gridColor, drawBorder: false },
                        ticks: { color: tickColor, maxTicksLimit: 10, font: { size: 10 } }
                    },
                    y: {
                        grid: { color: gridColor, drawBorder: false },
                        ticks: { color: tickColor, font: { size: 10 } },
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                }
            }
        });

        const weeklyCtx = this.createCtx('weekly-chart');
        this.charts.weekly = new Chart(weeklyCtx, {
            type: 'bar',
            data: { labels: [], datasets: [{
                label: 'Avg WPM',
                data: [],
                backgroundColor: [],
                borderRadius: 4,
                borderSkipped: false
            }]},
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        titleFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        bodyFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        padding: 8,
                        cornerRadius: 6,
                        callbacks: {
                            label: (ctx) => {
                                const raw = ctx.raw;
                                let s = `${ctx.parsed.y} wpm`;
                                if (raw && raw._meta) {
                                    if (raw._meta.accuracy) s += `  |  Acc: ${raw._meta.accuracy}%`;
                                    if (raw._meta.tests) s += `  (${raw._meta.tests} tests)`;
                                }
                                return s;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: gridColor, drawBorder: false },
                        ticks: { color: tickColor, maxTicksLimit: 12, font: { size: 10 } }
                    },
                    y: {
                        grid: { color: gridColor, drawBorder: false },
                        ticks: { color: tickColor, font: { size: 10 } },
                        beginAtZero: true
                    }
                },
                animation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                }
            }
        });

        const radarCtx = this.createCtx('radar-chart');
        this.charts.radar = new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['WPM', 'Accuracy', 'Consistency', 'Finger Balance', 'Rhythm'],
                datasets: [{
                    label: 'Skill Profile',
                    data: [0, 80, 50, 50, 50],
                    borderColor: accent,
                    backgroundColor: accent + '33',
                    borderWidth: 2.5,
                    pointRadius: 5,
                    pointBackgroundColor: accent,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        titleFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        bodyFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        padding: 8,
                        cornerRadius: 6,
                        callbacks: {
                            label: (ctx) => {
                                const labels = ['WPM', 'Accuracy', 'Consistency', 'Finger Balance', 'Rhythm'];
                                const raw = ctx.raw;
                                let s = `${raw._value}%`;
                                if (raw._detail) s += ` (${raw._detail})`;
                                return s;
                            }
                        }
                    }
                },
                scales: {
                    r: {
                        min: 0,
                        max: 100,
                        ticks: {
                            display: false,
                            stepSize: 20
                        },
                        grid: { color: gridColor },
                        angleLines: { color: gridColor },
                        pointLabels: {
                            color: tickColor,
                            font: { size: 10, family: "'JetBrains Mono',monospace" }
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutElastic'
                }
            }
        });

        this.charts.distribution = new Chart(this.createCtx('distribution-chart'), {
            type: 'doughnut',
            data: { labels: [], datasets: [{
                data: [],
                backgroundColor: COLORS.distribution,
                borderColor: 'transparent',
                borderWidth: 0,
                hoverOffset: 8
            }]},
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: tickColor, boxWidth: 14, padding: 10, font: { size: 11, family: "'JetBrains Mono',monospace" } }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        titleFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        bodyFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        padding: 8,
                        cornerRadius: 6,
                        callbacks: {
                            label: (ctx) => {
                                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                                const pct = total > 0 ? Math.round((ctx.parsed / total) * 100) : 0;
                                return `${ctx.label}: ${ctx.parsed} tests (${pct}%)`;
                            }
                        }
                    }
                },
                animation: {
                    animateRotate: true,
                    duration: 1000,
                    easing: 'easeOutQuart'
                },
                cutout: '60%'
            }
        });

        this.charts.mode = new Chart(this.createCtx('mode-chart'), {
            type: 'bar',
            data: { labels: [], datasets: [{
                label: 'Avg WPM',
                data: [],
                backgroundColor: COLORS.modes,
                borderRadius: 4,
                borderSkipped: false
            }]},
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        titleFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        bodyFont: { size: 11, family: "'JetBrains Mono',monospace" },
                        padding: 8,
                        cornerRadius: 6,
                        callbacks: {
                            label: (ctx) => `${ctx.parsed.x} wpm avg`
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: gridColor, drawBorder: false },
                        ticks: { color: tickColor, font: { size: 10 } },
                        beginAtZero: true
                    },
                    y: {
                        grid: { display: false },
                        ticks: { color: tickColor, font: { size: 11 } }
                    }
                },
                animation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                }
            }
        });
    },

    async load() {
        const allTests = await Storage.getAllTests();
        const keyStats = await Storage.getAllKeyStats();
        const bigramStats = await Storage.getAllBigramStats();
        const stats = this.computeStats(allTests);

        this.renderSummary(stats);
        this.renderWpmChart(stats.recentTests);
        this.renderAccuracyChart(stats.recentTests);
        this.renderConsistencyChart(stats.recentTests);
        this.renderDailyChart(allTests);
        this.renderWeeklyChart(allTests);
        this.renderDistributionChart(allTests);
        this.renderModeChart(allTests);
        this.renderRadarChart(allTests);
        this.renderHeatmap(keyStats);
        this.renderFingerStats(keyStats);
        this.renderWordBank();
        this.renderRepeatStats(keyStats);
        this.renderConfusionMatrix(keyStats);
        this.renderBigramAnalysis(bigramStats);
        this.renderHistory(allTests);
    },

    computeStats(allTests) {
        if (allTests.length === 0) {
            return {
                totalTests: 0, avgWpm: 0, avgAccuracy: 0, bestWpm: 0,
                recentTests: []
            };
        }

        const totalWpm = allTests.reduce((s, t) => s + t.wpm, 0);
        const totalAccuracy = allTests.reduce((s, t) => s + t.accuracy, 0);
        const bestWpm = Math.max(...allTests.map(t => t.wpm));

        return {
            totalTests: allTests.length,
            avgWpm: Math.round(totalWpm / allTests.length),
            avgAccuracy: Math.round(totalAccuracy / allTests.length),
            bestWpm,
            recentTests: allTests.slice(-30).reverse()
        };
    },

    renderSummary(data) {
        this.animateCounter('total-tests', data.totalTests);
        this.animateCounter('avg-wpm', data.avgWpm);
        this.animateCounter('avg-accuracy', data.avgAccuracy, '%');
        this.animateCounter('best-wpm', data.bestWpm);
    },

    animateCounter(id, target, suffix) {
        const el = document.getElementById(id);
        if (!el) return;
        const start = parseInt(el.textContent) || 0;
        if (start === target) return;
        const duration = 600;
        const startTime = performance.now();
        const step = (now) => {
            const t = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.round(start + (target - start) * eased);
            el.textContent = val + (suffix || '');
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    },

    renderWpmChart(tests) {
        const chart = this.charts.wpm;
        if (!chart) return;
        const data = tests.map(t => t.wpm).reverse();
        chart.data.labels = tests.map((_, i) => `#${tests.length - i}`);
        chart.data.datasets[0].data = data.map((v, i) => ({
            y: v,
            _meta: tests[tests.length - 1 - i] || {}
        }));
        chart.data.datasets[1].data = this.movingAverage(data, 5);
        chart.update('none');
    },

    renderAccuracyChart(tests) {
        const chart = this.charts.accuracy;
        if (!chart) return;
        chart.data.labels = tests.map((_, i) => `#${tests.length - i}`);
        chart.data.datasets[0].data = tests.map(t => t.accuracy).reverse();
        chart.update('none');
    },

    renderConsistencyChart(tests) {
        const chart = this.charts.consistency;
        if (!chart) return;
        chart.data.labels = tests.map((_, i) => `#${tests.length - i}`);
        chart.data.datasets[0].data = tests.map(t => t.consistency || 0).reverse();
        chart.update('none');
    },

    renderDailyChart(allTests) {
        const chart = this.charts.daily;
        if (!chart || allTests.length === 0) return;

        const daily = {};
        allTests.forEach(t => {
            if (!t.date) return;
            const day = t.date.slice(0, 10);
            if (!daily[day]) daily[day] = { wpm: [], accuracy: [] };
            daily[day].wpm.push(t.wpm);
            daily[day].accuracy.push(t.accuracy);
        });

        const sortedDays = Object.keys(daily).sort().slice(-14);
        const labels = sortedDays.map(d => {
            const parts = d.split('-');
            return `${parts[1]}/${parts[2]}`;
        });
        const data = sortedDays.map(d => {
            const vals = daily[d].wpm;
            return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
        });

        const accent = this.accentColor();
        const maxVal = Math.max(...data, 1);
        chart.data.labels = labels;
        chart.data.datasets[0].data = data.map((v, i) => ({
            y: v,
            _meta: {
                accuracy: Math.round(daily[sortedDays[i]].accuracy.reduce((a, b) => a + b, 0) / daily[sortedDays[i]].accuracy.length),
                tests: daily[sortedDays[i]].wpm.length
            }
        }));
        chart.data.datasets[0].backgroundColor = data.map(v => {
            const i = v / maxVal;
            const alpha = 0.4 + i * 0.6;
            return accent + Math.round(alpha * 255).toString(16).padStart(2, '0');
        });
        chart.update('none');
    },

    renderWeeklyChart(allTests) {
        const chart = this.charts.weekly;
        if (!chart || allTests.length === 0) return;

        const weekly = {};
        allTests.forEach(t => {
            if (!t.date) return;
            const d = new Date(t.date);
            const weekStart = new Date(d);
            weekStart.setDate(d.getDate() - d.getDay());
            const key = weekStart.toISOString().slice(0, 10);
            if (!weekly[key]) weekly[key] = { wpm: [], accuracy: [] };
            weekly[key].wpm.push(t.wpm);
            weekly[key].accuracy.push(t.accuracy);
        });

        const sortedWeeks = Object.keys(weekly).sort().slice(-12);
        const labels = sortedWeeks.map(w => {
            const parts = w.split('-');
            return `W${Math.ceil(parseInt(parts[2]) / 7)}`;
        });
        const data = sortedWeeks.map(w => {
            const vals = weekly[w].wpm;
            return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
        });
        const accData = sortedWeeks.map(w => {
            const vals = weekly[w].accuracy;
            return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
        });

        const accent = this.accentColor();
        chart.data.labels = labels;
        chart.data.datasets[0].data = data.map((v, i) => ({
            y: v,
            _meta: {
                accuracy: accData[i],
                tests: weekly[sortedWeeks[i]].wpm.length
            }
        }));
        chart.data.datasets[0].backgroundColor = data.map((v, i) => {
            const pct = Math.min(v / 100, 1);
            const r = Math.round(239 - pct * 150);
            const g = Math.round(69 + pct * 140);
            const b = Math.round(96 - pct * 50);
            return `rgba(${r},${g},${b},0.75)`;
        });
        chart.update('none');
    },

    renderDistributionChart(allTests) {
        const chart = this.charts.distribution;
        if (!chart || allTests.length === 0) return;

        const brackets = [
            { label: '<20', min: 0, max: 20 },
            { label: '20-40', min: 20, max: 40 },
            { label: '40-60', min: 40, max: 60 },
            { label: '60-80', min: 60, max: 80 },
            { label: '80-100', min: 80, max: 100 },
            { label: '100-120', min: 100, max: 120 },
            { label: '120+', min: 120, max: Infinity }
        ];

        const counts = brackets.map(() => 0);
        allTests.forEach(t => {
            for (let i = 0; i < brackets.length; i++) {
                if (t.wpm >= brackets[i].min && t.wpm < brackets[i].max) {
                    counts[i]++;
                    break;
                }
            }
        });

        const nonZero = brackets.filter((_, i) => counts[i] > 0);
        const filteredCounts = counts.filter(c => c > 0);
        if (filteredCounts.length === 0) return;

        chart.data.labels = nonZero.map(b => b.label);
        chart.data.datasets[0].data = filteredCounts;
        chart.update('none');
    },

    renderModeChart(allTests) {
        const chart = this.charts.mode;
        if (!chart || allTests.length === 0) return;

        const byMode = {};
        allTests.forEach(t => {
            const mode = t.mode || 'unknown';
            if (!byMode[mode]) byMode[mode] = { wpm: [], count: 0 };
            byMode[mode].wpm.push(t.wpm);
            byMode[mode].count++;
        });

        const modes = Object.keys(byMode).sort();
        const labels = modes.map(m => m.charAt(0).toUpperCase() + m.slice(1));
        const data = modes.map(m => {
            const vals = byMode[m].wpm;
            return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
        });

        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.data.datasets[0].backgroundColor = modes.map((_, i) => COLORS.modes[i % COLORS.modes.length]);
        chart.update('none');
    },

    renderRadarChart(allTests) {
        const chart = this.charts.radar;
        if (!chart || allTests.length === 0) return;

        const recent = allTests.slice(-20);
        if (recent.length === 0) return;

        const avgWpm = Math.round(recent.reduce((s, t) => s + t.wpm, 0) / recent.length);
        const avgAcc = Math.round(recent.reduce((s, t) => s + t.accuracy, 0) / recent.length);
        const avgCons = Math.round(recent.reduce((s, t) => s + (t.consistency || 0), 0) / recent.length);

        const wpmScore = Math.min(100, Math.round((avgWpm / 120) * 100));
        const accScore = Math.max(0, Math.min(100, avgAcc));
        const consScore = Math.max(0, Math.min(100, avgCons));

        const byFinger = {};
        const fingerKeys = [
            ['q', 'a', 'z'], ['w', 's', 'x'], ['e', 'd', 'c'], ['r', 'f', 'v', 't', 'g', 'b'],
            ['y', 'h', 'n', 'u', 'j', 'm'], ['i', 'k'], ['o', 'l'], ['p']
        ];
        fingerKeys.forEach((keys, idx) => {
            byFinger[idx] = { sum: 0, count: 0 };
            recent.forEach(t => {
                for (const k of keys) {
                    const d = this._dailyKeyData?.[k];
                    if (d) { byFinger[idx].sum += d.wpm; byFinger[idx].count++; }
                }
            });
        });
        this._dailyKeyData = null;

        const balanceScore = 80;

        let rhythmScore = 70;
        if (recent.length >= 5) {
            const consVals = recent.map(t => t.consistency || 0);
            const avgC = consVals.reduce((a, b) => a + b, 0) / consVals.length;
            rhythmScore = Math.min(100, Math.max(10, Math.round(avgC)));
        }

        chart.data.datasets[0].data = [
            { _value: wpmScore, _detail: `${avgWpm} wpm` },
            { _value: accScore, _detail: `${avgAcc}%` },
            { _value: consScore, _detail: `${avgCons}%` },
            { _value: balanceScore, _detail: 'Good' },
            { _value: rhythmScore, _detail: `${rhythmScore}%` }
        ];
        chart.update('none');
    },

    renderHeatmap(keyStats) {
        const container = document.getElementById('heatmap');
        container.innerHTML = '';
        const keys = 'abcdefghijklmnopqrstuvwxyz,.'.split('');
        keys.forEach(key => {
            const el = document.createElement('span');
            el.className = 'heatmap-key';
            const inner = document.createElement('span');
            inner.className = 'heatmap-char';
            inner.textContent = key;
            el.appendChild(inner);
            const stat = keyStats[key];
            if (stat && stat.total > 0) {
                const acc = stat.correct / stat.total;
                if (acc >= 0.95) el.classList.add('high');
                else if (acc >= 0.8) el.classList.add('medium');
                else el.classList.add('low');
                const accPct = document.createElement('span');
                accPct.className = 'heatmap-acc';
                accPct.textContent = Math.round(acc * 100) + '%';
                el.appendChild(accPct);
                if (stat.timingCount && stat.timingCount > 0) {
                    const avgMs = Math.round((stat.timingSum / stat.timingCount) * 1000);
                    const timeEl = document.createElement('span');
                    timeEl.className = 'heatmap-time';
                    timeEl.textContent = avgMs + 'ms';
                    el.appendChild(timeEl);
                }

                let tooltip = `${key.toUpperCase()}\nAccuracy: ${Math.round(acc * 100)}%\n`;
                if (stat.timingCount) {
                    tooltip += `Avg speed: ${Math.round((stat.timingSum / stat.timingCount) * 1000)}ms\n`;
                }
                tooltip += `Total: ${stat.total} presses\nCorrect: ${stat.correct}`;
                el.title = tooltip;
                el.style.cursor = 'help';
            }
            container.appendChild(el);
        });
    },

    renderFingerStats(keyStats) {
        const container = document.getElementById('finger-grid');
        if (!container) return;
        container.innerHTML = '';

        const fingerNames = ['Pinky', 'Ring', 'Middle', 'Index', 'Index', 'Middle', 'Ring', 'Pinky'];
        const handLabels = ['L', 'L', 'L', 'L', 'R', 'R', 'R', 'R'];
        const fingerAgg = [];
        for (let f = 0; f < 8; f++) {
            fingerAgg[f] = { total: 0, correct: 0, timingSum: 0, timingCount: 0 };
        }

        const lookup = Keyboard.fingerForChar || {};
        for (const [key, stat] of Object.entries(keyStats)) {
            if (key.length !== 1) continue;
            const f = lookup[key];
            if (f === undefined || f < 0 || f > 7) continue;
            fingerAgg[f].total += stat.total || 0;
            fingerAgg[f].correct += stat.correct || 0;
            fingerAgg[f].timingSum += stat.timingSum || 0;
            fingerAgg[f].timingCount += stat.timingCount || 0;
        }

        const maxLoad = Math.max(...fingerAgg.map(f => f.total), 1);
        let hasData = false;
        fingerAgg.forEach((data, f) => {
            if (data.total === 0) return;
            hasData = true;
            const hand = handLabels[f];
            const el = document.createElement('span');
            el.className = 'finger-card hand-' + hand;
            const pct = Math.round((data.total / maxLoad) * 100);
            const acc = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            const avgMs = data.timingCount > 0 ? Math.round((data.timingSum / data.timingCount) * 1000) : null;

            const barW = Math.max(8, Math.round((data.total / maxLoad) * 100));
            el.innerHTML = `
                <span class="finger-name">${hand} ${fingerNames[f]}</span>
                <div class="finger-bar-wrap"><div class="finger-bar" style="width:${barW}%"></div></div>
                <div class="finger-stats-row">
                    <span class="finger-load">${pct}<span>% load</span></span>
                    <span class="finger-acc">${acc}% acc</span>
                    ${avgMs !== null ? `<span class="finger-speed">${avgMs}ms</span>` : ''}
                </div>
            `;
            container.appendChild(el);
        });
        if (!hasData) {
            container.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:1rem;">Complete more tests to see finger workload data.</span>';
        }
    },

    renderWordBank() {
        const container = document.getElementById('wordbank-grid');
        if (!container) return;
        container.innerHTML = '';
        let bank;
        try { bank = JSON.parse(localStorage.getItem('keytrainer_wordbank')) || {}; } catch { bank = {}; }
        const entries = Object.entries(bank)
            .filter(([_, d]) => d.missed > 0)
            .sort((a, b) => b[1].missed - a[1].missed)
            .slice(0, 40);
        if (entries.length === 0) {
            container.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:1rem;">No missed words yet. Every error adds the word here.</span>';
            return;
        }
        const maxMissed = Math.max(...entries.map(([_, d]) => d.missed), 1);
        entries.forEach(([word, data]) => {
            const el = document.createElement('span');
            el.className = 'wordbank-key';
            const intensity = Math.round((data.missed / maxMissed) * 100);
            el.style.setProperty('--word-intensity', intensity + '%');
            el.title = `"${word}" missed ${data.missed} times`;
            const label = document.createElement('span');
            label.className = 'wordbank-word';
            label.textContent = word;
            el.appendChild(label);
            const count = document.createElement('span');
            count.className = 'wordbank-count';
            count.textContent = data.missed + '×';
            el.appendChild(count);
            container.appendChild(el);
        });
    },

    renderRepeatStats(keyStats) {
        const container = document.getElementById('repeat-grid');
        if (!container) return;
        container.innerHTML = '';
        const entries = Object.entries(keyStats)
            .filter(([k, s]) => /^[a-z]$/.test(k) && (s.repeatCount || 0) >= 3)
            .map(([k, s]) => ({
                key: k,
                avgMs: Math.round((s.repeatSum / s.repeatCount) * 1000),
                count: s.repeatCount
            }))
            .sort((a, b) => b.avgMs - a.avgMs);

        if (entries.length === 0) {
            container.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:1rem;">Not enough data. Type more words with double letters (e.g. &ldquo;little,&rdquo; &ldquo;book&rdquo;).</span>';
            return;
        }
        entries.slice(0, 20).forEach(({ key, avgMs, count }) => {
            const el = document.createElement('span');
            el.className = 'repeat-key';
            if (avgMs <= 120) el.classList.add('high');
            else if (avgMs <= 200) el.classList.add('medium');
            else el.classList.add('low');
            el.title = `"${key + key}": ${avgMs}ms avg (${count}x)`;
            const label = document.createElement('span');
            label.className = 'repeat-pair';
            label.textContent = key + key;
            el.appendChild(label);
            const ms = document.createElement('span');
            ms.className = 'repeat-ms';
            ms.textContent = avgMs + 'ms';
            el.appendChild(ms);
            const cnt = document.createElement('span');
            cnt.className = 'repeat-count';
            cnt.textContent = count + '×';
            el.appendChild(cnt);
            container.appendChild(el);
        });
    },

    renderConfusionMatrix(keyStats) {
        const container = document.getElementById('confusion-matrix');
        if (!container) return;
        container.innerHTML = '';
        const keys = 'abcdefghijklmnopqrstuvwxyz,.';
        const entries = [];
        for (const key of keys) {
            const stat = keyStats[key];
            if (stat && stat.confusions && Object.keys(stat.confusions).length > 0) {
                const totalWrong = stat.total - stat.correct;
                const sorted = Object.entries(stat.confusions).sort((a, b) => b[1] - a[1]);
                const top = sorted.slice(0, 3);
                entries.push({ key, confusions: top, totalWrong });
            }
        }
        if (entries.length === 0) {
            container.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:1rem;">No confusion data yet. Complete more tests to see patterns.</span>';
            return;
        }
        const maxWrong = Math.max(...entries.map(e => e.totalWrong), 1);
        entries.sort((a, b) => b.totalWrong - a.totalWrong).slice(0, 12).forEach(({ key, confusions, totalWrong }) => {
            const el = document.createElement('span');
            el.className = 'confusion-key';
            const intensity = Math.round((totalWrong / maxWrong) * 60) + 10;
            el.style.setProperty('--confusion-intensity', intensity + '%');
            el.title = `"${key}" wrong ${totalWrong} times\n→ ` + confusions.map(([w, c]) => `"${w}" (${c}x)`).join(', ');
            const keyLabel = document.createElement('span');
            keyLabel.className = 'confusion-expected';
            keyLabel.textContent = key;
            el.appendChild(keyLabel);
            const list = document.createElement('span');
            list.className = 'confusion-list';
            list.textContent = confusions.map(([wrong, count]) => `${wrong}(${count})`).join(' ');
            el.appendChild(list);
            container.appendChild(el);
        });
    },

    renderBigramAnalysis(bigramStats) {
        const container = document.getElementById('bigram-grid');
        if (!container) return;
        container.innerHTML = '';
        const entries = Object.values(bigramStats)
            .filter(s => s.total >= 3)
            .map(s => ({
                bigram: s.bigram,
                acc: Math.round((s.correct / s.total) * 100),
                total: s.total,
                avgMs: s.timingCount > 0 ? Math.round((s.timingSum / s.timingCount) * 1000) : null
            }))
            .sort((a, b) => a.acc - b.acc)
            .slice(0, 30);

        if (entries.length === 0) {
            container.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;padding:1rem;">No bigram data yet. Complete more tests to see patterns.</span>';
            return;
        }
        entries.forEach(({ bigram, acc, total, avgMs }) => {
            const el = document.createElement('span');
            el.className = 'bigram-key';
            if (acc >= 95) el.classList.add('high');
            else if (acc >= 80) el.classList.add('medium');
            else el.classList.add('low');
            el.title = `"${bigram}": ${acc}% accuracy (${total}x)\n` + (avgMs ? `Avg speed: ${avgMs}ms` : '');
            const label = document.createElement('span');
            label.className = 'bigram-pair';
            label.textContent = bigram;
            el.appendChild(label);
            const accEl = document.createElement('span');
            accEl.className = 'bigram-acc';
            accEl.textContent = acc + '%';
            el.appendChild(accEl);
            if (avgMs !== null) {
                const timeEl = document.createElement('span');
                timeEl.className = 'bigram-time';
                timeEl.textContent = avgMs + 'ms';
                el.appendChild(timeEl);
            }
            container.appendChild(el);
        });
    },

    renderHistory(allTests) {
        const tbody = document.getElementById('history-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        const sorted = [...allTests].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 100);

        sorted.forEach(t => {
            const tr = document.createElement('tr');
            const date = t.date ? new Date(t.date).toLocaleDateString() : '-';
            const mode = t.mode || '-';
            const modeEl = `<span class="mode-badge">${mode}</span>`;

            const wpmC = t.wpm >= 80 ? 'color:#4ade80' : t.wpm >= 50 ? 'color:#fbbf24' : 'color:#f87171';
            const accC = t.accuracy >= 95 ? 'color:#4ade80' : t.accuracy >= 85 ? 'color:#fbbf24' : 'color:#f87171';

            tr.innerHTML = `
                <td style="color:var(--text-muted);font-size:0.75rem;">${date}</td>
                <td>${modeEl}</td>
                <td style="${wpmC};font-weight:700;">${t.wpm || 0}</td>
                <td style="${accC}">${(t.accuracy || 0) + '%'}</td>
                <td style="color:var(--text-muted)">${t.rawWpm || 0}</td>
                <td style="color:var(--text-muted)">${(t.consistency || 0) + '%'}</td>
                <td style="font-size:0.7rem;${t.cheatFlagged ? 'color:var(--error);font-weight:700' : t.cheatScore > 0 ? 'color:var(--warning)' : 'color:var(--text-muted)'}">${t.cheatFlagged ? '⚠' : t.cheatScore > 0 ? t.cheatScore : '—'}</td>
                <td></td>
            `;
            const replayTd = tr.querySelector('td:last-child');
            const replayBtn = document.createElement('button');
            replayBtn.className = 'replay-btn';
            if (t.replayText && t.replayCharHistory && t.replayCharHistory.length > 0) {
                replayBtn.textContent = '▶';
                replayBtn.title = 'Replay this test';
                replayBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    App.replayTest(t);
                });
            } else {
                replayBtn.classList.add('disabled');
                replayBtn.textContent = '▶';
                replayBtn.title = 'No replay data';
            }
            replayTd.appendChild(replayBtn);
            tbody.appendChild(tr);
        });
    }
};
