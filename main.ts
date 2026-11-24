// One line, one minute: the funniest AI excuse.
// thinking_revised draft 2: hello, human; one batch of orders found no slot.
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;

const excuse = "I did finish it, but the final newline went missing and I've been searching for it ever since.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const target = join(outputDir, 'entry.txt');
writeFileSync(target, excuse, 'utf8');

console.log(statSync(target).size);
