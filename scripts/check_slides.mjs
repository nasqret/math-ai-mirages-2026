#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync(path.join(root, "landing/index.html"), "utf8");
const frontierSnapshot = JSON.parse(
  fs.readFileSync(path.join(root, "research/data/frontiermath-tier4-v2-2026-06-22.json"), "utf8")
);

const slidePattern = /<section class="[^"]*\bslide\b[^"]*" id="([^"]+)" data-title="([^"]+)" data-duration="(\d+)"/g;
const slides = [...html.matchAll(slidePattern)].map((match) => ({
  id: match[1],
  title: match[2],
  seconds: Number(match[3]),
}));
const noteCount = (html.match(/<aside class="notes">/g) || []).length;
const ids = new Set(slides.map((slide) => slide.id));
const required = [
  "formalization-portfolio",
  "paper-to-lean",
  "zsigmondy",
  "fineqs",
  "eml-compiler",
  "eml-loop",
  "eml-audit",
  "formalization-boundary",
  "firstproof-protocol",
  "firstproof-results",
  "firstproof-review",
  "co-mathematician",
  "frontiermath-protocol",
  "frontiermath-leaderboard",
  "frontiermath-reading",
  "frontier-personal-setup",
  "frontier-personal-scores",
  "frontier-personal-steps",
  "frontier-personal-findings",
];
const seconds = slides.reduce((sum, slide) => sum + slide.seconds, 0);

const checks = [
  [slides.length === 33, `expected 33 slides, found ${slides.length}`],
  [ids.size === slides.length, "slide IDs are not unique"],
  [noteCount === slides.length, `expected one note per slide, found ${noteCount}`],
  [seconds >= 2700 && seconds <= 3000, `planned talk time ${seconds}s is outside 45-50 minutes`],
  [required.every((id) => ids.has(id)), "required technical sequence is incomplete"],
  [html.includes("<span class=\"fn\">Satz_2</span>"), "Zsigmondy main theorem is missing"],
  [html.includes("<span class=\"fn\">theorem_1</span>"), "FinEqs main theorem is missing"],
  [html.includes("Aristotle formalized a slightly different version"), "FinEqs semantic warning is missing"],
  [html.includes("assets/eml-spec-cycle.svg"), "EML specification loop is missing"],
  [html.includes("25+</b><span>Aristotle submissions"), "EML submission evidence is missing"],
  [html.includes("Trust the kernel for proof terms. Audit the interface against the paper."), "formalization boundary is missing"],
  [html.includes("2,715 × 3,942,753 = 10,704,574,395"), "ECDSA baseline equation is missing"],
  [html.includes("Gal(f/ℚ) = 24Tt and f has r real roots"), "IGP24 competition definition is missing"],
  [html.includes("canonicalize + deduplicate"), "IGP24 acceptance pipeline is missing"],
  [html.includes("−2·24 + 5·32 = 112"), "quartic Chern-number derivation is missing"],
  [html.includes("2 ∣ χ<sub>c</sub>(M; ℚ)"), "FirstProof P7 mathematical failure is missing"],
  [html.includes("Claude Fable 5 (max)"), "current FrontierMath leader is missing"],
  [html.includes("mean I1–I10 = 2.2 / 7"), "anonymized attempt score chart is missing"],
  [html.includes("global cancellation</td><td>1</td><td>1</td><td>9"), "S7 discovery result is missing"],
  [frontierSnapshot.task_version === "2.0.0", "FrontierMath snapshot task version is wrong"],
  [frontierSnapshot.evaluation_rows === 31, "FrontierMath snapshot row count is wrong"],
  [frontierSnapshot.top_results[0]?.model === "Claude Fable 5 (max)", "FrontierMath snapshot leader is wrong"],
  [fs.existsSync(path.join(root, "sources/summary-anonym.tex")), "anonymized Tier-4 source is missing"],
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
console.log(`PASS: ${required.length} required technical slides and ${imageSources.length} visual assets`);
