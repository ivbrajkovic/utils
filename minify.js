const fs = require("fs");
const path = require("path");
const Terser = require("terser");
const options = require(process.env.TERSER_CONFIG || "./terserrc.json");

let oldSize = 0;
let newSize = 0;

/**
 * Get file size
 * @param {string} file File name
 */
const getFileSize = (file) => fs.statSync(file).size;

/**
 * Create directory if not exist
 * @param {string} filePath Full path to file
 */
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);

  if (fs.existsSync(dirname)) return true;

  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

/**
 * Minify file using Treser
 * @param {string} file Path input file
 * @param {string} newFile Path to output file
 */
async function minifyFile(file) {
  oldSize += getFileSize(file);

  // Read and minify
  const terserResult = await Terser.minify(
    fs.readFileSync(file, "utf8"),
    options
  );

  // Log error and return
  if (terserResult.error) {
    console.log(`Minifying ${file} error.`, terserResult.error);
    return;
  }

  // Write output
  fs.writeFileSync(file, terserResult.code, "utf8");

  size = getFileSize(file);
  console.log(`Minifying ${file} (${size}) success.`);
  newSize += size;
}

/**
 * Minify directory recursively
 * @param {string} root Path to directory
 */
module.exports = async function minifyDirectory(root) {
  // Read files from directory
  for (const file of fs.readdirSync(root)) {
    // Get full path
    const fullPath = path.join(root, file);

    // Get path type
    const type = fs.statSync(fullPath);

    // Check if path is a directory
    if (type.isDirectory()) {
      // recursively call minifyDirectory
      await minifyDirectory(fullPath);
      //
    } else if (type.isFile()) {
      // Create directory if not exist
      ensureDirectoryExistence(fullPath);

      if (fullPath.endsWith(".js")) {
        await minifyFile(fullPath);
      }
    }
  }

  console.log("--------------------------------");
  console.log(`Old size: ${oldSize}`);
  console.log(`New size: ${newSize}`);
  console.log(`Ratio: ${((oldSize / newSize) * 100).toFixed(2)}%`);
  console.log("--------------------------------");

  return { oldSize, newSize };
};

// minifyDirectory("dist");
