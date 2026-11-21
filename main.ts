import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "A draft about stopping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
