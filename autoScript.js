const fs = require('fs');
const childProcess = require('child_process');

// Parse package.json into object
const packageJson = require('./package.json');
if (!packageJson || !packageJson.version)
  throw new Error("Can't find valid package.json");

// Readline for stdIO
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Minifying script using Teaser
const minifyDirectory = require('./minify');

// -------------------------------------------------------
// Local variables and const
//
const DIST_DIR = process.env.AUTO_DIST_DIR || 'dist';
//
let verIncrement;
let isLint = true;
let isCompile = true;
let isMinify = true;
let isBump = true;
let isGit = true;
let isNpm = true;
let isDefaultComment = true;

// -------------------------------------------------------
// Parse command line args
//
const myArgs = process.argv.slice(2);
myArgs.forEach((arg) => {
  let match;
  if ((match = /ver:(.)/.exec(arg))) verIncrement = match[1];
  else if ((match = /lint:(\d)/.exec(arg))) isLint = match[1] === '1';
  else if ((match = /comp:(\d)/.exec(arg))) isCompile = match[1] === '1';
  else if ((match = /min:(\d)/.exec(arg))) isMinify = match[1] === '1';
  else if ((match = /bump:(\d)/.exec(arg))) isBump = match[1] === '1';
  else if ((match = /npm:(\d)/.exec(arg))) isNpm = match[1] === '1';
  else if ((match = /git:(\d):?(\d)?/gm.exec(arg))) {
    // if (!match) return;
    isGit = match[1] === '1';
    isDefaultComment = match[2] === '1';
  }
});

printHeader('Automation script');
// prettier-ignore
console.log(
  "isLint", isLint, "\n",
  "isCompile", isCompile, "\n",
  "isMinify", isMinify, "\n",
  "version", verIncrement, "\n",
  "isBump", isBump, "\n",
  "isGit", isGit, "\n",
  "isDefaultComment", isDefaultComment, "\n",
  "isNpm", isNpm, "\n"
);

/***********************************************************
 * Print helpers
 */
function printHeader(value, nl = false) {
  console.log('------------------------------');
  console.log('\x1b[33m', value, '\x1b[0m');
  console.log('------------------------------');
  nl && console.log();
}
function printFooter(value) {
  console.log('\x1b[32m', value, '\x1b[0m');
  console.log('------------------------------\n');
}
function printErrorAndExit(value) {
  console.log('\x1b[31m\n', value, '\x1b[0m');
  process.exit(0);
}
function printInfo(info, value) {
  console.log(info, '\x1b[33m', value, '\x1b[0m');
}

/***********************************************************
 * Execute command on child process
 */
function execCommand(command, args) {
  const { status } = childProcess.spawnSync(command, args, {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
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

/**
 * Delete directory
 * @param {string} dir Directory to delete
 */
function deleteDirectory(dir) {
  fs.rmdirSync(dir, { recursive: true });
  console.log(`${dir} is deleted!`);
}

/***********************************************************
 * Lint TS
 */
function lint() {
  printHeader('Lint and TS compile');
  execCommand('npm.cmd', ['run', 'lint']);
  printFooter('Success');
}

/***********************************************************
 * Compile TS
 */
function compile() {
  printHeader('Lint and TS compile');
  execCommand('npm.cmd', ['run', 'tsc']);
  printFooter('Success');
}

/***********************************************************
 * Update version in package.json
 */
async function updateVersion(ch) {
  printHeader("Bump 'package.json'");

  // Get version from package.json
  const regex = /^(\d+).(\d+).(\d+)$/g;
  const ver = regex.exec(packageJson.version);
  if (!ver || ver.length !== 4)
    throw new Error('Invalid version in package.json');

  printInfo('Current version', packageJson.version);

  let skip = false;
  for (;;) {
    // Input version update (r-release, m-minor, p-patch, s-skip)
    if (!/r|m|p|s/.test(ch))
      ch = await readLineAsync('Update version (r|m|p|s): ');
    if (ch === 'r' || ch === 'R') {
      ver[1] = +ver[1] + 1;
      ver[2] = 0;
      ver[3] = 0;
      break;
    } else if (ch === 'm' || ch === 'M') {
      ver[2] = +ver[2] + 1;
      ver[3] = 0;
      break;
    } else if (ch === 'p' || ch === 'P') {
      ver[3] = +ver[3] + 1;
      break;
    } else if (ch === 's' || ch === 'S') {
      skip = true;
      break;
    }
  }

  if (!skip) {
    // Save new version
    packageJson.version = `${ver[1]}.${ver[2]}.${ver[3]}`;
    printInfo('New version', packageJson.version);

    // Write new version to package.json
    fs.writeFileSync('package.json', JSON.stringify(packageJson));
    printInfo("'package.json'", 'updated\n');
    //
  } else console.log('Skip updating version\n');
}

async function gitPush() {
  try {
    // Track all files
    printHeader('Push to github');
    execCommand('git', ['add', '.']);

    let message;
    if (!isDefaultComment) {
      message = await readLineAsync(
        `Commit message (Release v${packageJson.version}): `
      );
    }
    if (!message) message = `Release v${packageJson.version}`;

    printInfo('Commit message', message);

    execCommand('git', ['commit', '-m', `"${message}"`]);
    execCommand('git', ['push']);
    printFooter('Success');
  } catch (error) {
    printErrorAndExit(error.message);
  }
}

async function npmPublish() {
  try {
    // NPM publish
    printHeader('Publish package to NPM');
    execCommand('npm', ['publish', '--access=public']);
    printFooter('Success');
  } catch (error) {
    printErrorAndExit(error.message);
  }
}

(async () => {
  try {
    deleteDirectory(DIST_DIR);
    isLint && lint();
    isCompile && compile();
    isMinify && (await minifyDirectory(DIST_DIR));
    isBump && (await updateVersion(verIncrement));
    isGit && (await gitPush());
    isNpm && npmPublish();

    process.exit(0);
  } catch (error) {
    printErrorAndExit(error.message);
  }
})();
