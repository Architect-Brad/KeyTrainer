// storage.js - IndexedDB wrapper for progress tracking
const Storage = {
    db: null,
    dbName: 'KeyTrainerDB',
    dbVersion: 2,

    async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => reject(request.error);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('tests')) {
                    const testStore = db.createObjectStore('tests', { keyPath: 'id', autoIncrement: true });
                    testStore.createIndex('date', 'date', { unique: false });
                    testStore.createIndex('mode', 'mode', { unique: false });
                }
                if (!db.objectStoreNames.contains('keyStats')) {
                    db.createObjectStore('keyStats', { keyPath: 'key' });
                }
                if (!db.objectStoreNames.contains('bigramStats')) {
                    db.createObjectStore('bigramStats', { keyPath: 'bigram' });
                }
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                resolve(this.db);
            };
        });
    },

    async saveTest(testData) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('tests', 'readwrite');
            const store = tx.objectStore('tests');
            const request = store.add({
                ...testData,
                date: new Date().toISOString()
            });

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async getAllTests() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('tests', 'readonly');
            const store = tx.objectStore('tests');
            const request = store.getAll();

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async getTestsByDate(days) {
        const tests = await this.getAllTests();
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        return tests.filter(t => new Date(t.date) >= cutoff);
    },

    async saveKeyStats(key, data) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('keyStats', 'readwrite');
            const store = tx.objectStore('keyStats');
            const request = store.put({ key, ...data });

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async getAllKeyStats() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('keyStats', 'readonly');
            const store = tx.objectStore('keyStats');
            const request = store.getAll();

            request.onsuccess = () => {
                const stats = {};
                request.result.forEach(item => {
                    stats[item.key] = item;
                });
                resolve(stats);
            };
            request.onerror = () => reject(request.error);
        });
    },

    async saveBigramStats(bigram, data) {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('bigramStats', 'readwrite');
            const store = tx.objectStore('bigramStats');
            const request = store.put({ bigram, ...data });
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async getAllBigramStats() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction('bigramStats', 'readonly');
            const store = tx.objectStore('bigramStats');
            const request = store.getAll();
            request.onsuccess = () => {
                const stats = {};
                request.result.forEach(item => { stats[item.bigram] = item; });
                resolve(stats);
            };
            request.onerror = () => reject(request.error);
        });
    },

    async clearAll() {
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['tests', 'keyStats', 'bigramStats'], 'readwrite');
            tx.objectStore('tests').clear();
            tx.objectStore('keyStats').clear();
            tx.objectStore('bigramStats').clear();

            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
        });
    },

    async getStats() {
        const tests = await this.getAllTests();
        if (tests.length === 0) {
            return {
                totalTests: 0,
                avgWpm: 0,
                avgAccuracy: 0,
                bestWpm: 0,
                recentTests: []
            };
        }

        const totalWpm = tests.reduce((sum, t) => sum + t.wpm, 0);
        const totalAccuracy = tests.reduce((sum, t) => sum + t.accuracy, 0);
        const bestWpm = Math.max(...tests.map(t => t.wpm));

        return {
            totalTests: tests.length,
            avgWpm: Math.round(totalWpm / tests.length),
            avgAccuracy: Math.round(totalAccuracy / tests.length),
            bestWpm,
            recentTests: tests.slice(-30).reverse()
        };
    }
};

// Initialize on load
Storage.init().catch(err => console.error('Storage init failed:', err));
