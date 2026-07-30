import XLSX from "xlsx";
import fs from "fs-extra";
import path from "path";

const INPUT_FILE = path.resolve("input/Denim-Library.xlsx");
const OUTPUT_FILE = path.resolve("src/data/fabrics.json");
const CATEGORY_FILE = path.resolve("src/data/categories.json");
const IMAGE_FOLDER = path.resolve("public/images");

// --------------------------------------------------
// Check Excel
// --------------------------------------------------

if (!fs.existsSync(INPUT_FILE)) {
  console.error("❌ Excel file not found.");
  console.error(INPUT_FILE);
  process.exit(1);
}

// --------------------------------------------------
// Read Workbook
// --------------------------------------------------

const workbook = XLSX.readFile(INPUT_FILE);

// --------------------------------------------------
// Read Images
// --------------------------------------------------

let imageFiles = [];

if (fs.existsSync(IMAGE_FOLDER)) {
  imageFiles = fs.readdirSync(IMAGE_FOLDER);
}

const fabrics = [];
const categories = [];

let id = 1;

// --------------------------------------------------
// Process Every Sheet
// --------------------------------------------------

workbook.SheetNames.forEach((sheetName, index) => {

  const categoryName = sheetName.trim();

  categories.push({
    id: index + 1,
    name: categoryName
  });

  console.log(`Processing ${categoryName}`);

  const worksheet = workbook.Sheets[sheetName];

  const rows = XLSX.utils.sheet_to_json(worksheet, {
    defval: ""
  });

  rows.forEach((row) => {

    const sortNo = String(
      row["SORT NO"] ??
      row["Sort No"] ??
      row["SORT"] ??
      ""
    ).trim();

    const sortLower = sortNo.toLowerCase();

    const images = imageFiles
      .filter((file) => {

        const lower = file.toLowerCase();

        const valid =
          lower.endsWith(".jpg") ||
          lower.endsWith(".jpeg") ||
          lower.endsWith(".png") ||
          lower.endsWith(".webp");

        return valid && lower.startsWith(sortLower);

      })
      .sort((a, b) =>
        a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: "base"
        })
      )
      .map(file => `/images/${file}`);

    fabrics.push({

      id: id++,

      sortNo,

      category: categoryName,

      construction: row["CONSTRUCTION"] || "",

      weave: row["WEAVE"] || "",

      width: row["WIDTH"] || "",

      weight: Number(row["WEIGHT"]) || 0,

      shade: row["SHADE"] || "",

      warpShrinkage:
        row["WARP SHR%"] ||
        row["WARP SHR"] ||
        "",

      weftShrinkage:
        row["WEFT SHR%"] ||
        row["WEFT SHR"] ||
        "",

      composition:
        row["COMPOSITION"] ||
        "",

      finish:
        row["FINISH"] ||
        "",

      type:
        row["TYPE"] ||
        row["TYPES"] ||
        "",

      images

    });

  });

});

// --------------------------------------------------
// Save JSON Files
// --------------------------------------------------

fs.ensureDirSync(path.dirname(OUTPUT_FILE));

fs.writeJsonSync(
  OUTPUT_FILE,
  fabrics,
  {
    spaces: 2
  }
);

fs.writeJsonSync(
  CATEGORY_FILE,
  categories,
  {
    spaces: 2
  }
);

// --------------------------------------------------
// Summary
// --------------------------------------------------

console.log("");
console.log("======================================");
console.log(" Denim Library Import Completed");
console.log("======================================");
console.log(`Sheets      : ${workbook.SheetNames.length}`);
console.log(`Categories  : ${categories.length}`);
console.log(`Fabrics     : ${fabrics.length}`);
console.log(`Images      : ${imageFiles.length}`);
console.log(`Fabric JSON : ${OUTPUT_FILE}`);
console.log(`Category JSON : ${CATEGORY_FILE}`);
console.log("======================================");
console.log("");