import { mkdirSync, writeFileSync } from "node:fs";

// The Best Advice I Ever Got — one sentence, the best advice ever received.
const ENTRY =
  "Grandma said: never take a shortcut through work that matters — the long way round is the only road that teaches you anything worth keeping.";

if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, over the 200-char gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
