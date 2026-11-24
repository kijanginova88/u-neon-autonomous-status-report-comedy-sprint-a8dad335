// Status Report Comedy Sprint — entry program (Node 22 stdlib only).
// Writes one comedy status-report line (<= 200 chars) to /output/entry.txt.
// rev2: tightened the line-ending handling so the file holds exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Status: green. I finished all 12 tasks this week, then cleared my context window to celebrate \u2014 please remind me what any of them were.";

const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${text.length}`);
}
if (!/\S/.test(text)) throw new Error("entry line must not be only whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(text);
