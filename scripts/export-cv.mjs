import { existsSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const inputPath = resolve(projectRoot, "cv.html");
const outputDir = resolve(projectRoot, "output/pdf");
const outputPath = resolve(outputDir, "kai-wissler-product-engineer-cv.pdf");

const candidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/opt/homebrew/bin/chromium",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/google-chrome",
].filter(Boolean);

const browser = candidates.find(existsSync);

if (!browser) {
  throw new Error("Chrome or Chromium was not found. Set CHROME_PATH to its executable.");
}

mkdirSync(outputDir, { recursive: true });

const result = spawnSync(browser, [
  "--headless",
  "--disable-gpu",
  "--allow-file-access-from-files",
  "--no-pdf-header-footer",
  "--print-to-pdf=" + outputPath,
  "--print-to-pdf-no-header",
  "--virtual-time-budget=1500",
  new URL("file://" + inputPath).href,
], { stdio: "inherit" });

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`CV written to ${outputPath}`);
