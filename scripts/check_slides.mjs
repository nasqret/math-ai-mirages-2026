#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync(path.join(root, "landing/index.html"), "utf8");

const slidePattern = /<section class="[^"]*\bslide\b[^"]*" id="([^"]+)" data-title="([^"]+)" data-duration="(\d+)"/g;
const slides = [...html.matchAll(slidePattern)].map((match) => ({
  id: match[1],
  title: match[2],
  seconds: Number(match[3]),
}));
const noteCount = (html.match(/<aside class="notes">/g) || []).length;
const ids = new Set(slides.map((slide) => slide.id));
const required = [
  "formalization",
  "proof-anatomy",
  "lean-code",
  "lean-kernel",
  "lean-boundary",
  "autoformalization",
  "eml",
  "eml-audit",
];
const seconds = slides.reduce((sum, slide) => sum + slide.seconds, 0);

const checks = [
  [slides.length === 33, `expected 33 slides, found ${slides.length}`],
  [ids.size === slides.length, "slide IDs are not unique"],
  [noteCount === slides.length, `expected one note per slide, found ${noteCount}`],
  [seconds >= 2550 && seconds <= 2850, `planned talk time ${seconds}s is outside 42.5-47.5 minutes`],
  [required.every((id) => ids.has(id)), "formalization sequence is incomplete"],
  [html.includes("theorem</span> <span class=\"fn\">and_symm"), "real Lean theorem is missing"],
  [html.includes("Build completed successfully (5 jobs)."), "Lean replay output is missing"],
  [html.includes("Trust the kernel. Audit the statement."), "formalization caveat is missing"],
];

const imageSources = [...html.matchAll(/<img[^>]+src="assets\/([^"]+)"/g)].map((match) => match[1]);
for (const image of imageSources) {
  checks.push([
    fs.existsSync(path.join(root, "outputs/assets", image)),
    `missing source asset outputs/assets/${image}`,
  ]);
}

const failures = checks.filter(([pass]) => !pass).map(([, message]) => message);
if (failures.length) {
  failures.forEach((failure) => console.error(`FAIL: ${failure}`));
  process.exit(1);
}

console.log(`PASS: ${slides.length} browser slides, ${noteCount} notes, ${seconds}s planned`);
console.log(`PASS: ${required.length} formalization slides and ${imageSources.length} visual assets`);
