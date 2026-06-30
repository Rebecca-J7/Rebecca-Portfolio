const fs = require("fs");
const path = require("path");
const readline = require("readline");

const projectRoot = process.cwd();
const target = path.resolve(projectRoot, ".next");
const args = process.argv.slice(2);
const autoYes = args.includes("--yes") || args.includes("-y");

function abort(msg) {
  console.error(msg);
  process.exit(1);
}

if (!target.startsWith(projectRoot)) {
  abort("Refusing to delete outside the project root.");
}

try {
  if (!fs.existsSync(target)) {
    console.log(".next not found — nothing to remove.");
    process.exit(0);
  }

  if (path.basename(target) !== ".next") {
    abort("Target is not .next — aborting.");
  }

  function doRemove() {
    try {
      fs.rmSync(target, { recursive: true, force: true });
      console.log("Removed .next at", target);
      process.exit(0);
    } catch (err) {
      console.error("Failed to remove .next:", err);
      process.exit(1);
    }
  }

  if (autoYes) {
    doRemove();
  } else {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(`About to remove ${target}. Proceed? (y/N) `, (answer) => {
      rl.close();
      const normalized = (answer || "").trim().toLowerCase();
      if (normalized === "y" || normalized === "yes") {
        doRemove();
      } else {
        console.log("Aborted by user.");
        process.exit(0);
      }
    });
  }
} catch (err) {
  abort("Unexpected error: " + err);
}
