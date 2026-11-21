// Build a single self-contained HTML file (dist/opensc4-range.html) that can be
// opened straight from disk in Chrome/Edge – no Node or web server needed.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const assets = readdirSync('dist/assets');
const css = readFileSync(`dist/assets/${assets.find((f) => f.endsWith('.css'))}`, 'utf8');
const js = readFileSync(`dist/assets/${assets.find((f) => f.endsWith('.js'))}`, 'utf8').replace(/<\/script/gi, '<\\/script');
let html = readFileSync('dist/index.html', 'utf8');
html = html.replace(/<script[^>]*src="[^"]*"[^>]*><\/script>/, '');
html = html.replace(/<link rel="stylesheet"[^>]*>/, () => `<style>${css}</style>`);
html = html.replace('</body>', () => `<script type="module">${js}</script>\n</body>`);
writeFileSync('dist/opensc4-range.html', html);
console.log(`dist/opensc4-range.html (${(html.length / 1024).toFixed(0)} KB)`);
