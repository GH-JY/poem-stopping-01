import { mkdirSync, writeFileSync } from "node:fs";

const text: string = `The horse knows the headland
before the reins do.

Ten furrows in, the light going,
it stops at the turn
and stands,
breathing.

The plough rocks back.
The man walks up the last of the row
and draws level,

the reins slack
in his hands.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
