import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const workspace = process.cwd();
const contentDirectory = join(workspace, "content");
const uploadsDirectory = join(workspace, "public", "uploads");
const assetPattern = /^\/uploads\/[a-z0-9/.-]+$/;
const supportedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".pdf"]);
const errors: string[] = [];
const referencedAssets = new Set<string>();

function collect(value: unknown) {
  if (typeof value === "string" && value.startsWith("/uploads/")) referencedAssets.add(value);
  else if (Array.isArray(value)) value.forEach(collect);
  else if (value && typeof value === "object") Object.values(value).forEach(collect);
}

for (const file of readdirSync(contentDirectory).filter((item) => item.endsWith(".json"))) {
  collect(JSON.parse(readFileSync(join(contentDirectory, file), "utf8")));
}

for (const asset of referencedAssets) {
  if (!assetPattern.test(asset)) errors.push(`${asset}: asset paths must be lowercase kebab-case under /uploads/`);
  const fullPath = join(workspace, "public", asset.replace(/^\//, ""));
  if (!existsSync(fullPath)) errors.push(`${asset}: referenced file does not exist`);
}

function walk(directory: string) {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry);
    if (statSync(fullPath).isDirectory()) walk(fullPath);
    else {
      const path = relative(join(workspace, "public"), fullPath).replaceAll("\\", "/");
      if (!/^[a-z0-9/.-]+$/.test(path)) errors.push(`/${path}: filename must be lowercase and contain no spaces`);
      if (!supportedExtensions.has(extname(entry))) errors.push(`/${path}: unsupported asset type`);
    }
  }
}

walk(uploadsDirectory);

if (errors.length > 0) {
  console.error(`Asset validation failed with ${errors.length} issue(s):\n${errors.map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}

console.log(`Assets valid: ${referencedAssets.size} referenced files checked.`);
