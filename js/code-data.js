const CODE_SNIPPETS = {
    javascript: [
        'function fibonacci(n) { if (n <= 1) return n; return fibonacci(n - 1) + fibonacci(n - 2); }',
        'const map = new Map(); map.set("key", "value"); for (const [k, v] of map) { console.log(k, v); }',
        'async function fetchData(url) { try { const res = await fetch(url); if (!res.ok) throw new Error(res.status); return await res.json(); } catch (err) { console.error(err); } }',
        'class EventEmitter { constructor() { this.events = {}; } on(name, fn) { (this.events[name] ||= []).push(fn); } emit(name, ...args) { (this.events[name] || []).forEach(fn => fn(...args)); } }',
        'const debounce = (fn, delay) => { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); }; };',
        'Array.prototype.chunk = function (size) { return Array.from({ length: Math.ceil(this.length / size) }, (_, i) => this.slice(i * size, i * size + size)); };',
        'const deepClone = (obj) => { if (obj === null || typeof obj !== "object") return obj; const copy = Array.isArray(obj) ? [] : {}; for (const key of Object.keys(obj)) copy[key] = deepClone(obj[key]); return copy; };',
        'async function* asyncGenerator(arr) { for (const item of arr) { await new Promise(r => setTimeout(r, 100)); yield item; } }',
        'const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x); const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);',
        'function quickSort(arr) { if (arr.length <= 1) return arr; const pivot = arr[0]; const left = arr.slice(1).filter(x => x < pivot); const right = arr.slice(1).filter(x => x >= pivot); return [...quickSort(left), pivot, ...quickSort(right)]; }'
    ],
    typescript: [
        'type DeepPartial<T> = { [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]; };',
        'interface Repository<T> { find(id: string): Promise<T | null>; save(entity: T): Promise<void>; delete(id: string): Promise<boolean>; }',
        'function typedKeys<T extends object>(obj: T): Array<keyof T> { return Object.keys(obj) as Array<keyof T>; }',
        'class Singleton { private static instance: Singleton; private constructor() {} static getInstance(): Singleton { if (!Singleton.instance) Singleton.instance = new Singleton(); return Singleton.instance; } }',
        'type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;',
        'abstract class Animal { abstract makeSound(): void; move(): void { console.log("moving"); } } class Dog extends Animal { makeSound(): void { console.log("bark"); } }',
        'function createStore<T>(initial: T) { let state = initial; const listeners = new Set<(s: T) => void>(); return { getState: () => state, setState: (fn: (s: T) => T) => { state = fn(state); listeners.forEach(l => l(state)); }, subscribe: (fn: (s: T) => void) => { listeners.add(fn); return () => listeners.delete(fn); } }; }',
        'type PickByType<T, V> = { [P in keyof T as T[P] extends V ? P : never]: T[P]; };',
        'function assertNever(x: never): never { throw new Error("Unexpected value: " + x); }',
        'interface Builder<T> { set<K extends keyof T>(key: K, value: T[K]): this; build(): T; }'
    ],
    python: [
        'def fibonacci(n): return n if n <= 1 else fibonacci(n - 1) + fibonacci(n - 2)',
        'with open("file.txt", "r") as f: content = f.read().strip().splitlines()',
        'def decorator(func): @functools.wraps(func) def wrapper(*args, **kwargs): print("calling"); return func(*args, **kwargs); return wrapper',
        'class MetaClass(type): def __new__(cls, name, bases, dct): dct["version"] = 1; return super().__new__(cls, name, bases, dct)',
        'async def fetch(url): async with aiohttp.ClientSession() as session: async with session.get(url) as resp: return await resp.json()',
        'from dataclasses import dataclass; @dataclass class Point: x: float; y: float',
        'def quick_sort(arr): return arr if len(arr) <= 1 else quick_sort([x for x in arr[1:] if x < arr[0]]) + [arr[0]] + quick_sort([x for x in arr[1:] if x >= arr[0]])',
        'def memoize(f): cache = {}; def wrapper(*args): key = str(args); return cache[key] if key in cache else cache.setdefault(key, f(*args)); return wrapper',
        'def sieve(n): primes = [True] * (n + 1); primes[0] = primes[1] = False; [primes.__setitem__(slice(i*i, n+1, i), [False]*(((n-i*i)//i)+1)) for i in range(2, int(n**0.5)+1)]; return [i for i, p in enumerate(primes) if p]',
        'def flatten(seq): return [x for item in seq for x in (flatten(item) if isinstance(item, (list, tuple)) else [item])]'
    ],
    html: [
        '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Page</title><link rel="stylesheet" href="style.css"></head><body><header><nav><a href="/">Home</a></nav></header><main><h1>Hello World</h1></main></body></html>',
        '<form action="/submit" method="POST"><label for="email">Email:</label><input type="email" id="email" name="email" required><button type="submit">Send</button></form>',
        '<table><thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead><tbody><tr><td>Alice</td><td>Admin</td><td>Active</td></tr></tbody></table>',
        '<div class="card"><img src="photo.jpg" alt="Photo" loading="lazy"><div class="card-body"><h2>Title</h2><p>Description text here</p><a href="#" class="btn">Read More</a></div></div>',
        '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="4"/><path d="M 30 50 L 45 65 L 70 35" fill="none" stroke="green" stroke-width="4"/></svg>',
        '<details><summary>Click to expand</summary><p>Hidden content revealed here. This is useful for FAQs and collapsible sections.</p></details>',
        '<nav aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><a href="/products">Products</a></li><li aria-current="page">Current Page</li></ol></nav>',
        '<video controls width="640" poster="thumbnail.jpg"><source src="video.mp4" type="video/mp4"><source src="video.webm" type="video/webm"><p>Your browser does not support video.</p></video>'
    ],
    css: [
        '.flex-center { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 1rem; }',
        '.grid-auto { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }',
        '@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }',
        '.card { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }',
        'body { font-family: "Inter", system-ui, sans-serif; line-height: 1.6; color: var(--text-primary); background: var(--bg-primary); }',
        '@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }',
        '.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }',
        '.container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; } @media (max-width: 768px) { .container { padding: 0 0.5rem; } }'
    ],
    java: [
        'public class Singleton { private static volatile Singleton instance; private Singleton() {} public static Singleton getInstance() { if (instance == null) { synchronized (Singleton.class) { if (instance == null) instance = new Singleton(); } } return instance; } }',
        'public record Person(String name, int age) implements Comparable<Person> { public int compareTo(Person other) { return Integer.compare(this.age, other.age); } }',
        'var list = new ArrayList<String>(); list.add("hello"); list.stream().filter(s -> s.length() > 3).map(String::toUpperCase).forEach(System.out::println);',
        'public class QuickSort { public static void sort(int[] arr, int low, int high) { if (low < high) { int pi = partition(arr, low, high); sort(arr, low, pi - 1); sort(arr, pi + 1, high); } } }',
        'public enum Status { PENDING("pending"), ACTIVE("active"), INACTIVE("inactive"); private final String value; Status(String value) { this.value = value; } public String getValue() { return value; } }',
        'public Optional<String> findName(int id) { return Optional.ofNullable(database.get(id)).map(User::getName); }',
        '@FunctionalInterface interface Transformer<T, R> { R apply(T input); default Transformer<T, R> andThen(Transformer<R, R> after) { return t -> after.apply(this.apply(t)); } }',
        'public class TryFinallyExample { public static void main(String[] args) { try (var conn = getConnection(); var stmt = conn.prepareStatement("SELECT 1")) { stmt.execute(); } catch (SQLException e) { throw new RuntimeException(e); } } }'
    ],
    rust: [
        'fn fibonacci(n: u32) -> u32 { match n { 0 => 0, 1 => 1, _ => fibonacci(n - 1) + fibonacci(n - 2) } }',
        'fn main() { let result: Result<i32, String> = Ok(42); match result { Ok(val) => println!("{val}"), Err(e) => eprintln!("Error: {e}") } }',
        'struct Point { x: f64, y: f64 } impl Point { fn new(x: f64, y: f64) -> Self { Self { x, y } } fn distance(&self, other: &Point) -> f64 { ((self.x - other.x).powi(2) + (self.y - other.y).powi(2)).sqrt() } }',
        'fn quick_sort<T: Ord>(arr: &mut [T]) { if arr.len() <= 1 { return; } let pivot = partition(arr); quick_sort(&mut arr[..pivot]); quick_sort(&mut arr[pivot + 1..]); }',
        'use std::sync::Arc; use std::sync::Mutex; fn shared_state() { let counter = Arc::new(Mutex::new(0)); let mut handles = vec![]; for _ in 0..10 { let c = Arc::clone(&counter); handles.push(std::thread::spawn(move || { let mut num = c.lock().unwrap(); *num += 1; })); } }',
        'enum Option<T> { Some(T), None } impl<T> Option<T> { fn map<U, F: FnOnce(T) -> U>(self, f: F) -> Option<U> { match self { Option::Some(t) => Option::Some(f(t)), Option::None => Option::None } } }',
        'fn read_file(path: &str) -> Result<String, std::io::Error> { std::fs::read_to_string(path) }',
        'trait Printable { fn print(&self); } impl<T: std::fmt::Display> Printable for T { fn print(&self) { println!("{self}"); } }'
    ],
    go: [
        'func fibonacci(n int) int { if n <= 1 { return n }; return fibonacci(n-1) + fibonacci(n-2) }',
        'type Server struct { port int; db *sql.DB; mux *http.ServeMux } func NewServer(port int) *Server { return &Server{port: port, mux: http.NewServeMux()} }',
        'func quickSort(arr []int) []int { if len(arr) <= 1 { return arr }; pivot := arr[0]; var left, right []int; for _, v := range arr[1:] { if v < pivot { left = append(left, v) } else { right = append(right, v) } }; return append(append(quickSort(left), pivot), quickSort(right)...) }',
        'func (s *Server) handleRequest(w http.ResponseWriter, r *http.Request) { w.Header().Set("Content-Type", "application/json"); json.NewEncoder(w).Encode(map[string]string{"status": "ok"}) }',
        'func withTimeout(ctx context.Context, timeout time.Duration) (context.Context, context.CancelFunc) { return context.WithTimeout(ctx, timeout) }',
        'type Reader interface { Read(p []byte) (n int, err error) } type Writer interface { Write(p []byte) (n int, err error) }',
        'func worker(id int, jobs <-chan int, results chan<- int) { for j := range jobs { results <- j * 2 } }',
        'func generatePrimes(limit int) []int { sieve := make([]bool, limit+1); var primes []int; for i := 2; i <= limit; i++ { if !sieve[i] { primes = append(primes, i); for j := i * i; j <= limit; j += i { sieve[j] = true } } }; return primes }'
    ],
    csharp: [
        'public class Fibonacci { public static int Calc(int n) { if (n <= 1) return n; return Calc(n - 1) + Calc(n - 2); } }',
        'var numbers = new List<int> { 1, 2, 3, 4, 5 }; var even = numbers.Where(x => x % 2 == 0).Select(x => x * x);',
        'public record Person(string Name, int Age); var p = new Person("Alice", 30); Console.WriteLine(p);',
        'public async Task<string> FetchDataAsync(string url) { using var client = new HttpClient(); return await client.GetStringAsync(url); }',
        'public class Singleton { private static readonly Lazy<Singleton> instance = new(() => new Singleton()); private Singleton() {} public static Singleton Instance => instance.Value; }',
        'public static class Extensions { public static IEnumerable<T> Chunk<T>(this IEnumerable<T> source, int size) { return source.Select((x, i) => new { x, i }).GroupBy(x => x.i / size).Select(g => g.Select(x => x.x)); } }',
        'public delegate void EventHandler(object sender, EventArgs args); public class Publisher { public event EventHandler? OnEvent; public void Raise() => OnEvent?.Invoke(this, EventArgs.Empty); }',
        'using System.Text.Json; var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase, WriteIndented = true }; var json = JsonSerializer.Serialize(obj, options);'
    ],
    ruby: [
        'def fibonacci(n) n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2) end',
        'class User < ApplicationRecord; validates :name, presence: true; has_many :posts, dependent: :destroy; end',
        'module Enumerable; def chunk(size) each_slice(size).to_a end end',
        'def memoize(method) original = method(method); define_method(method) { |*args| @cache ||= {}; @cache[args] ||= original.call(*args) } end',
        'RSpec.describe "Calculator" do; it "adds numbers" do; expect(2 + 2).to eq(4); end; end',
        'class Observable; def initialize; @observers = []; end; def subscribe(&block); @observers << block; end; def notify(*args); @observers.each { |obs| obs.call(*args) }; end; end',
        'def quick_sort(arr); return arr if arr.length <= 1; pivot = arr.delete_at(rand(arr.length)); [quick_sort(arr.select { |x| x < pivot }), pivot, quick_sort(arr.select { |x| x >= pivot })].flatten; end',
        'require "json"; data = JSON.parse(File.read("data.json")); data["items"].each { |item| puts item["name"] }'
    ],
    swift: [
        'func fibonacci(_ n: Int) -> Int { n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2) }',
        'struct ContentView: View { @State private var count = 0; var body: some View { VStack { Text("Count: \\(count)"); Button("Increment") { count += 1 } } } }',
        'let numbers = [1, 2, 3, 4, 5]; let evenSquares = numbers.filter { $0.isMultiple(of: 2) }.map { $0 * $0 }',
        'protocol Repository { associatedtype T; func fetch(id: String) async throws -> T?; func save(_ item: T) async throws; }',
        'enum Result<T, E: Error> { case success(T); case failure(E) }',
        'class Observable<T> { private var handlers: [(T) -> Void] = []; var value: T { didSet { handlers.forEach { $0(value) } } }; init(_ value: T) { self.value = value }; func bind(_ handler: @escaping (T) -> Void) { handlers.append(handler) } }',
        'func quickSort<T: Comparable>(_ arr: [T]) -> [T] { guard arr.count > 1 else { return arr }; let pivot = arr[0]; let less = arr.dropFirst().filter { $0 < pivot }; let greater = arr.dropFirst().filter { $0 >= pivot }; return quickSort(less) + [pivot] + quickSort(greater) }',
        'actor Counter { private var count = 0; func increment() { count += 1 }; func getCount() -> Int { count } }'
    ],
    kotlin: [
        'fun fibonacci(n: Int): Int = if (n <= 1) n else fibonacci(n - 1) + fibonacci(n - 2)',
        'data class Person(val name: String, val age: Int)',
        'val numbers = listOf(1, 2, 3, 4, 5); val evenSquares = numbers.filter { it % 2 == 0 }.map { it * it }',
        'class Singleton private constructor() { companion object { val instance: Singleton by lazy { Singleton() } } }',
        'suspend fun fetchData(url: String): String { val client = HttpClient(); return client.get(url).body() }',
        'fun <T, R> List<T>.mapParallel(transform: suspend (T) -> R): List<R> = coroutineScope { map { async { transform(it) } }.awaitAll() }',
        'sealed class NetworkState { data class Success(val data: String) : NetworkState(); data class Error(val msg: String) : NetworkState(); object Loading : NetworkState() }',
        'fun quickSort(arr: List<Int>): List<Int> = if (arr.size <= 1) arr else { val pivot = arr.first(); quickSort(arr.drop(1).filter { it < pivot }) + pivot + quickSort(arr.drop(1).filter { it >= pivot }) }'
    ],
    bash: [
        '#!/bin/bash; for file in *.txt; do echo "Processing $file"; mv "$file" "${file%.txt}.md"; done',
        'function fibonacci() { local n=$1; if [ $n -le 1 ]; then echo $n; else echo $(( $(fibonacci $((n-1))) + $(fibonacci $((n-2))) )); fi }',
        '#!/bin/bash; while IFS= read -r line; do echo "${line,,}"; done < input.txt > output.txt',
        '#!/bin/bash; if [ -f "config.sh" ]; then source config.sh; else echo "Config not found" >&2; exit 1; fi',
        'find . -type f -name "*.log" -mtime +7 -exec gzip {} \\; -exec mv {}.gz /archive/ \\;',
        'curl -s https://api.github.com/repos/user/repo/releases/latest | jq -r ".tag_name"',
        '#!/bin/bash; awk \'{for(i=1;i<=NF;i++) if($i ~ /error/i) count++} END {print count " errors found"}\' log.txt',
        'docker run --rm -v "$(pwd):/app" -w /app node:20 npm ci && npm run build'
    ]
};
