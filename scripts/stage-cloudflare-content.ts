import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const sourceDirectory = join(projectRoot, "content");
const stagingRoot = join(projectRoot, ".worker-files");
const targetDirectory = join(stagingRoot, "content");

if (dirname(stagingRoot) !== projectRoot) {
  throw new Error(`Refusing to replace staging directory outside the project: ${stagingRoot}`);
}

rmSync(stagingRoot, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
mkdirSync(stagingRoot, { recursive: true });
cpSync(sourceDirectory, targetDirectory, { recursive: true });

console.log(`Cloudflare content staged at ${targetDirectory}`);
