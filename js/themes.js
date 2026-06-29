const THEMES = [
    { name: 'Serika Dark', id: 'serika_dark', bg: '#323437', main: '#e2b714', caret: '#e2b714', sub: '#646669', subAlt: '#2c2e31', text: '#d1d0c5', error: '#ca4754', errorExtra: '#7e2a33' },
    { name: 'Serika', id: 'serika', bg: '#e1e1e3', main: '#e2b714', caret: '#e2b714', sub: '#aaaeb3', subAlt: '#d1d3d8', text: '#323437', error: '#da3333', errorExtra: '#791717' },
    { name: 'Dracula', id: 'dracula', bg: '#282a36', main: '#bd93f9', caret: '#bd93f9', sub: '#6272a4', subAlt: '#20222c', text: '#f8f8f2', error: '#ff5555', errorExtra: '#f1fa8c' },
    { name: 'Nord', id: 'nord', bg: '#242933', main: '#88c0d0', caret: '#eceff4', sub: '#929aaa', subAlt: '#2e3440', text: '#d8dee9', error: '#bf616a', errorExtra: '#793e44' },
    { name: 'Gruvbox Dark', id: 'gruvbox_dark', bg: '#282828', main: '#d79921', caret: '#fabd2f', sub: '#665c54', subAlt: '#212121', text: '#ebdbb2', error: '#fb4934', errorExtra: '#cc241d' },
    { name: 'Gruvbox Light', id: 'gruvbox_light', bg: '#fbf1c7', main: '#689d6a', caret: '#689d6a', sub: '#a89984', subAlt: '#daceae', text: '#3c3836', error: '#cc241d', errorExtra: '#9d0006' },
    { name: 'Catppuccin', id: 'catppuccin', bg: '#1e1e2e', main: '#cba6f7', caret: '#f2cdcd', sub: '#7f849c', subAlt: '#181825', text: '#cdd6f4', error: '#f38ba8', errorExtra: '#eba0ac' },
    { name: 'Monokai', id: 'monokai', bg: '#272822', main: '#a6e22e', caret: '#66d9ef', sub: '#e6db74', subAlt: '#1f201b', text: '#e2e2dc', error: '#f92672', errorExtra: '#fd971f' },
    { name: 'One Dark', id: 'onedark', bg: '#2f343f', main: '#61afef', caret: '#61afef', sub: '#eceff4', subAlt: '#262b34', text: '#98c379', error: '#e06c75', errorExtra: '#be5046' },
    { name: 'Solarized Dark', id: 'solarized_dark', bg: '#002b36', main: '#859900', caret: '#dc322f', sub: '#2aa198', subAlt: '#00222b', text: '#268bd2', error: '#d33682', errorExtra: '#9b225c' },
    { name: 'Solarized Light', id: 'solarized_light', bg: '#fdf6e3', main: '#859900', caret: '#dc322f', sub: '#2aa198', subAlt: '#e2d8be', text: '#181819', error: '#d33682', errorExtra: '#9b225c' },
    { name: 'Rose Pine', id: 'rose_pine', bg: '#1f1d27', main: '#9ccfd8', caret: '#f6c177', sub: '#c4a7e7', subAlt: '#282533', text: '#e0def4', error: '#eb6f92', errorExtra: '#ebbcba' },
    { name: 'Rose Pine Moon', id: 'rose_pine_moon', bg: '#2a273f', main: '#9ccfd8', caret: '#f6c177', sub: '#c4a7e7', subAlt: '#211f32', text: '#e0def4', error: '#eb6f92', errorExtra: '#ebbcba' },
    { name: 'Rose Pine Dawn', id: 'rose_pine_dawn', bg: '#fffaf3', main: '#56949f', caret: '#ea9d34', sub: '#c4a7e7', subAlt: '#f0e9df', text: '#286983', error: '#b4637a', errorExtra: '#d7827e' },
    { name: 'VSCode', id: 'vscode', bg: '#1e1e1e', main: '#007acc', caret: '#569cd6', sub: '#4d4d4d', subAlt: '#191919', text: '#d4d4d4', error: '#f44747', errorExtra: '#f44747' },
    { name: 'Miami', id: 'miami', bg: '#f35588', main: '#05dfd7', caret: '#a3f7bf', sub: '#94294c', subAlt: '#db4979', text: '#f0e9ec', error: '#fff591', errorExtra: '#b9b269' },
    { name: 'Miami Nights', id: 'miami_nights', bg: '#18181a', main: '#e4609b', caret: '#e4609b', sub: '#47bac0', subAlt: '#0f0f10', text: '#fff', error: '#fff591', errorExtra: '#b6af68' },
    { name: 'Aurora', id: 'aurora', bg: '#011926', main: '#00e980', caret: '#00e980', sub: '#245c69', subAlt: '#000c13', text: '#fff', error: '#b94da1', errorExtra: '#9b3a76' },
    { name: 'Laser', id: 'laser', bg: '#221b44', main: '#009eaf', caret: '#009eaf', sub: '#b82356', subAlt: '#1e173b', text: '#dbe7e8', error: '#a8d400', errorExtra: '#668000' },
    { name: 'Mint', id: 'mint', bg: '#05385b', main: '#5cdb95', caret: '#5cdb95', sub: '#20688a', subAlt: '#07324e', text: '#edf5e1', error: '#f35588', errorExtra: '#a3385a' },
    { name: 'Material', id: 'material', bg: '#263238', main: '#80cbc4', caret: '#80cbc4', sub: '#4c6772', subAlt: '#2e3c43', text: '#e6edf3', error: '#fb4934', errorExtra: '#cc241d' },
    { name: 'Bento', id: 'bento', bg: '#2d394d', main: '#ff7a90', caret: '#ff7a90', sub: '#4a768d', subAlt: '#263041', text: '#fffaf8', error: '#ee2a3a', errorExtra: '#f04040' },
    { name: 'Alduin', id: 'alduin', bg: '#1c1c1c', main: '#dfd7af', caret: '#e3e3e3', sub: '#444444', subAlt: '#242424', text: '#f5f3ed', error: '#af5f5f', errorExtra: '#4d2113' },
    { name: 'Anti Hero', id: 'anti_hero', bg: '#00002e', main: '#ffadad', caret: '#ffffff', sub: '#ff3d8b', subAlt: '#060548', text: '#f1deef', error: '#8fecff', errorExtra: '#558cab' },
    { name: 'Matcha Moccha', id: 'matcha_moccha', bg: '#523525', main: '#7ec160', caret: '#7ec160', sub: '#9e6749', subAlt: '#422b1e', text: '#ecddcc', error: '#fb4934', errorExtra: '#cc241d' },
    { name: 'Striker', id: 'striker', bg: '#124883', main: '#d7dcda', caret: '#d7dcda', sub: '#0f2d4e', subAlt: '#104176', text: '#d6dbd9', error: '#fb4934', errorExtra: '#cc241d' },
    { name: 'Cyberspace', id: 'cyberspace', bg: '#181c18', main: '#00ce7c', caret: '#00ce7c', sub: '#9578d3', subAlt: '#131613', text: '#c2fbe1', error: '#ff5f5f', errorExtra: '#be3f3f' },
    { name: 'Mizu', id: 'mizu', bg: '#afcbdd', main: '#fcfbf6', caret: '#fcfbf6', sub: '#85a5bb', subAlt: '#9fc1d4', text: '#1a2633', error: '#bf616a', errorExtra: '#7e4447' },
];

const Themes = {
    current: null,

    apply(id) {
        const theme = THEMES.find(t => t.id === id);
        if (!theme) return false;
        this.current = id;

        document.body.classList.remove('light');

        const isLight = (hex) => {
            const num = parseInt(hex.slice(1), 16);
            const r = (num >> 16) & 255;
            const g = (num >> 8) & 255;
            const b = num & 255;
            return (r * 0.299 + g * 0.587 + b * 0.114) > 140;
        };
        if (isLight(theme.bg)) document.body.classList.add('light');

        const root = document.documentElement;
        root.style.setProperty('--bg-color', theme.bg);
        root.style.setProperty('--main-color', theme.main);
        root.style.setProperty('--caret-color', theme.caret);
        root.style.setProperty('--sub-color', theme.sub);
        root.style.setProperty('--sub-alt-color', theme.subAlt);
        root.style.setProperty('--text-color', theme.text);
        root.style.setProperty('--error-color', theme.error);
        root.style.setProperty('--error-extra-color', theme.errorExtra);

        root.style.setProperty('--bg-primary', theme.bg);
        root.style.setProperty('--bg-secondary', theme.subAlt);
        root.style.setProperty('--bg-tertiary', theme.subAlt);
        root.style.setProperty('--accent', theme.main);
        root.style.setProperty('--accent-hover', theme.main);
        root.style.setProperty('--text-primary', theme.text);
        root.style.setProperty('--text-secondary', theme.sub);
        root.style.setProperty('--text-muted', theme.sub);
        root.style.setProperty('--text-faded', theme.sub);
        root.style.setProperty('--error', theme.error);
        root.style.setProperty('--key-bg', theme.subAlt);
        root.style.setProperty('--key-guided', theme.sub);
        root.style.setProperty('--border', theme.sub);
        root.style.setProperty('--shadow', 'rgba(0,0,0,0.3)');
        root.style.setProperty('--key-active', theme.main);

        localStorage.setItem('keytrainer_theme_id', id);
        return true;
    },

    loadSaved() {
        const saved = localStorage.getItem('keytrainer_theme_id');
        if (saved && THEMES.find(t => t.id === saved)) {
            this.apply(saved);
            return saved;
        }
        this.apply('serika_dark');
        return 'serika_dark';
    }
};
