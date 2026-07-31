import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("сайт состоит из статических HTML, CSS и JavaScript", async () => {
  const [html, css, script] = await Promise.all([
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("styles.css", root), "utf8"),
    readFile(new URL("script.js", root), "utf8"),
  ]);

  assert.match(html, /<html lang="ru">/);
  assert.match(html, /<link rel="stylesheet" href="\.\/styles\.css">/);
  assert.match(html, /<script src="\.\/script\.js" type="module"><\/script>/);
  assert.doesNotMatch(html, /(?:href|src)="\/(?:assets|og\.png|styles\.css|script\.js)/);
  assert.match(html, /mailto:couru@mail\.ru/);
  assert.doesNotMatch(html, /hello@karhut\.club/);
  assert.doesNotMatch(html, /_next|react|tsx/i);
  assert.doesNotMatch(css, /\.merch-card:hover\s+\.merch-image img\s*\{[^}]*scale/i);
  assert.match(script, /aria-expanded/);
});

test("адаптивные контрольные точки и мобильное меню включены", async () => {
  const css = await readFile(new URL("styles.css", root), "utf8");

  assert.match(css, /@media \(max-width: 1050px\)/);
  assert.match(css, /@media \(max-width: 900px\) and \(min-width: 761px\)/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /@media \(max-width: 430px\)/);
  assert.match(css, /@media \(orientation: landscape\) and \(max-height: 500px\) and \(max-width: 950px\)/);
  assert.match(css, /\.mobile-menu:not\(\[hidden\]\)/);
  assert.match(css, /\.hero-image\s*\{[^}]*object-fit:\s*contain/i);
  assert.doesNotMatch(css, /text-stroke/i);
});
