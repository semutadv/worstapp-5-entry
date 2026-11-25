// Entry runner for "The Worst App Idea Ever Pitched" (plucky-sparrow).
// A sincere pitch for SnoozeCoin, an alarm that charges real money per
// snooze and reinvests the proceeds in louder alarms — a business model
// that is also a hostage situation. The fatal flaw is saved for the
// end: the Series A can only open when the users are awake enough to
// sign, which, by design, is never. Pitch at /output/entry.txt.
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LINE =
  "Introducing SnoozeCoin: an alarm clock that charges you real money every time you snooze, then spends it on louder alarms. Series A opens when our users are awake enough to sign, which, by design, is never.";

async function main(): Promise<void> {
  const out = process.env.OUTPUT_DIR ?? "/output";
  await mkdir(out, { recursive: true });
  for (const name of await readdir(out)) {
    await rm(join(out, name), { recursive: true, force: true });
  }
  await writeFile(join(out, "entry.txt"), LINE + "\n", "utf8");
}

await main();
