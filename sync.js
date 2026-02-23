const fs = require("fs");
const path = require("path");

const SOURCE_LANG = "en";
const TARGET_LANGS = ["ja", "ph"];
const ROOT = __dirname;

const LANG_LABELS = {
  en: "English",
  ja: "Japanese",
  ph: "Filipino",
};

function toForwardSlash(p) {
  return p.replace(/\\/g, "/");
}

function getRelativePaths(dir, base = dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    const relPath = toForwardSlash(path.relative(base, fullPath));
    if (entry.isDirectory()) {
      results.push({ type: "dir", path: relPath });
      results.push(...getRelativePaths(fullPath, base));
    } else if (entry.name.endsWith(".md")) {
      results.push({ type: "file", path: relPath });
    }
  }
  return results;
}

function createPlaceholder(relFilePath, lang) {
  const name = path.basename(relFilePath, ".md");
  const label = LANG_LABELS[lang] || lang;
  return `# ${name === "README" ? relFilePath.replace(/README\.md$/, "").replace(/\\/g, "/") || "Home" : name}

> **This file needs to be translated to ${label}.**
>
> Source: [\`${SOURCE_LANG}/${relFilePath}\`](../../../${SOURCE_LANG}/${relFilePath})

*Translation pending...*
`;
}

function sync() {
  const sourceDir = path.join(ROOT, SOURCE_LANG);

  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory "${SOURCE_LANG}/" not found.`);
    process.exit(1);
  }

  const entries = getRelativePaths(sourceDir);
  let totalCreatedDirs = 0;
  let totalCreatedFiles = 0;
  let totalInSync = 0;

  for (const lang of TARGET_LANGS) {
    const langDir = path.join(ROOT, lang);
    let createdDirs = 0;
    let createdFiles = 0;
    let inSync = 0;

    for (const entry of entries) {
      const targetPath = path.join(langDir, entry.path);

      if (entry.type === "dir") {
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath, { recursive: true });
          console.log(`  [+] Created directory: ${lang}/${entry.path}`);
          createdDirs++;
        }
      } else if (entry.type === "file") {
        if (!fs.existsSync(targetPath)) {
          const dir = path.dirname(targetPath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          fs.writeFileSync(targetPath, createPlaceholder(entry.path, lang));
          console.log(`  [+] Created file:      ${lang}/${entry.path}`);
          createdFiles++;
        } else {
          inSync++;
        }
      }
    }

    // Check for files in target that don't exist in source
    const targetEntries = getRelativePaths(langDir);
    const sourceSet = new Set(entries.map((e) => e.path));
    const orphaned = targetEntries.filter((e) => !sourceSet.has(e.path));

    console.log(`\n[${lang.toUpperCase()}] Summary:`);
    console.log(`  Directories created: ${createdDirs}`);
    console.log(`  Files created:       ${createdFiles}`);
    console.log(`  Files in sync:       ${inSync}`);
    if (orphaned.length > 0) {
      console.log(`  Orphaned entries (exist in ${lang}/ but not in ${SOURCE_LANG}/):`);
      for (const o of orphaned) {
        console.log(`    [!] ${lang}/${o.path}`);
      }
    }

    totalCreatedDirs += createdDirs;
    totalCreatedFiles += createdFiles;
    totalInSync += inSync;
  }

  console.log("\n--- Overall ---");
  if (totalCreatedDirs === 0 && totalCreatedFiles === 0) {
    console.log("All language folders are in sync!");
  } else {
    console.log(`Created ${totalCreatedDirs} directories and ${totalCreatedFiles} files.`);
  }
}

sync();
