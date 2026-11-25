import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Lucky numbers: 0, 0, 0, 0. Your portfolio spent them all on leverage.";

// The gate allows 1-160 characters; refuse to write an over-long text.
if (line.length < 1 || line.length > 160) {
  throw new Error(`entry text is ${line.length} characters, must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
