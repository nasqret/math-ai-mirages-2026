import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("vault");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(full);
  }
  return files;
}

const files = await walk(root);
const relativeTargets = new Set(
  files.map((file) => path.relative(root, file).replace(/\.md$/, "")),
);
const basenames = new Map();
for (const target of relativeTargets) {
  const base = path.basename(target);
  basenames.set(base, (basenames.get(base) ?? 0) + 1);
}

const unresolved = [];
for (const file of files) {
  const text = await readFile(file, "utf8");
  const links = [...text.matchAll(/\[\[([^\]]+)\]\]/g)].map((match) =>
    match[1].split("|")[0].split("#")[0]
  );
  for (const link of links) {
    const fromDir = path.dirname(path.relative(root, file));
    const relativeCandidate = path.normalize(path.join(fromDir, link));
    const rootCandidate = path.normalize(link);
    const uniqueBasename = !link.includes("/") && basenames.get(link) === 1;
    if (
      !relativeTargets.has(relativeCandidate) &&
      !relativeTargets.has(rootCandidate) &&
      !uniqueBasename
    ) {
      unresolved.push(`${path.relative(root, file)} -> ${link}`);
    }
  }
}

if (unresolved.length) {
  console.error(`Unresolved Obsidian links:\n${unresolved.join("\n")}`);
  process.exit(1);
}

console.log(`PASS: ${files.length} vault notes; all wikilinks resolve.`);
