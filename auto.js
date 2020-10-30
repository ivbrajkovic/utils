const fs = require("fs");
const childProcess = require("child_process");

// Parse package.json into object
const packageJson = require("./package.json");
if (!packageJson || !packageJson.version)
  throw new Error("Can't find valid package.json");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let version;
let isLintAndCompile = true;
let isBump = true;
let isGit = true;
let isNpm = true;

const myArgs = process.argv.slice(2);
myArgs.forEach((arg) => {
  if (arg.includes("v:")) version = /v:(.)/.exec(arg)[1];
  else if (arg.includes("b:")) isBump = /b:(.+)/.exec(arg)[1] === "true";
  else if (arg.includes("g:")) isGit = /g:(.+)/.exec(arg)[1] === "true";
  else if (arg.includes("n:")) isNpm = /n:(.+)/.exec(arg)[1] === "true";
  else if (arg.includes("l:"))
    isLintAndCompile = /l:(.+)/.exec(arg)[1] === "true";
});

// prettier-ignore
console.log(
  "isLintAndCompile", isLintAndCompile, "\n",
  "version", version, "\n",
  "isBump", isBump, "\n",
  "isGit", isGit, "\n",
  "isNpm", isNpm, "\n");

/***********************************************************
 * Print helpers
 */
function printHeader(value, nl = false) {
  console.log("------------------------------");
  console.log("\x1b[33m", value, "\x1b[0m");
  console.log("------------------------------");
  nl && console.log();
}
function printFooter(value) {
  console.log("\x1b[32m", value, "\x1b[0m");
  console.log("------------------------------\n");
}
function printErrorAndExit(value) {
  console.log("\x1b[31m\n", value, "\x1b[0m");
  process.exit(0);
}
function printInfo(info, value) {
  console.log(info, "\x1b[33m", value, "\x1b[0m");
}

/***********************************************************
 * Execute command on child process
 */
function execCommand(command, args) {
  const { status } = childProcess.spawnSync(command, args, {
    cwd: process.cwd(),
    env: process.env,
    stdio: [process.stdin, process.stdout, process.stderr],
    encoding: "utf-8",
    shell: true,
  });
  if (status !== 0) throw new Error(`Error: '${command}' failed`);
}

/***********************************************************
 * Read line from console
 */
async function readLineAsync(question) {
  return new Promise((resolve, reject) => {
    readline.question(question, (msg) => resolve(msg));
  });
}

/***********************************************************
 * Lint and compile TS
 */
function lintAndCompile() {
  try {
    // Lint typescript
    printHeader("Start lint");
    execCommand("npm run lint");
    printFooter("Success");

    // Compile typescript
    printHeader("Compile typescript");
    execCommand("npm run tsc");
    printFooter("Success");
  } catch (error) {
    printErrorAndExit(error.message);
  }
}

/***********************************************************
 * Update version in package.json
 */
async function updateVersion(ch) {
  if (!/r|m|p|s/.test(ch)) ch = null;

  try {
    printHeader("Bump 'package.json'", true);

    // Get version from package.json
    const regex = /^(\d+).(\d+).(\d+)$/g;
    const ver = regex.exec(packageJson.version);
    if (!ver || ver.length !== 4)
      throw new Error("Invalid version in package.json");

    printInfo("Current version", packageJson.version);

    let skip = false;
    for (;;) {
      // Input version update (r-release, m-minor, p-patch, s-skip)
      if (!ch) ch = await readLineAsync("Update version (r|m|p|s): ");
      if (ch === "r" || ch === "R") {
        ver[1] = +ver[1] + 1;
        break;
      } else if (ch === "m" || ch === "M") {
        ver[2] = +ver[2] + 1;
        break;
      } else if (ch === "p" || ch === "P") {
        ver[3] = +ver[3] + 1;
        break;
      } else if (ch === "s" || ch === "S") {
        skip = true;
        break;
      }
    }

    if (!skip) {
      // Save new version
      packageJson.version = `${ver[1]}.${ver[2]}.${ver[3]}`;
      printInfo("New version", packageJson.version);

      // Vrite new version to package.json
      fs.writeFileSync("package.json", JSON.stringify(packageJson));
      printInfo("'package.json'", "updated");
    }
    console.log("Skip updating version\n");
  } catch (error) {
    printErrorAndExit(error.message);
  }
}

async function gitPush() {
  try {
    // Track all files
    printHeader("Push to github", true);
    execCommand("git add .");

    let comment = await readLineAsync(
      `Enter comment (Release v${packageJson.version}): `
    );
    if (!comment) comment = `Release v${packageJson.version}`;
    console.log("gitPush -> comment", comment);

    execCommand(`git commit -m "${comment}"`);
    execCommand(`git push`);
    printFooter("Success");
  } catch (error) {
    printErrorAndExit(error.message);
  }
}

async function npmPublish() {
  try {
    // NPM publish
    printHeader("Publish package to NPM");
    execCommand("npm run publish");
    printFooter("Success");
  } catch (error) {
    printErrorAndExit(error.message);
  }
}

printHeader("Automation script", true);

(async () => {
  isLintAndCompile && lintAndCompile();
  isBump && (await updateVersion(version));
  isGit && (await gitPush());
  isNpm && npmPublish();

  process.exit(0);
})();
