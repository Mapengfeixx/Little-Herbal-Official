import fs from "fs";
import path from "path";
import https from "https";
import crypto from "crypto";

const srcDir = path.join(process.cwd(), "src");
const publicImagesDir = path.join(process.cwd(), "public", "images");

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function getAllFiles(dirPath: string, arrayOfFiles?: string[]) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        arrayOfFiles!.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(srcDir);
const urlRegex =
  /https:\/\/(lh3\.googleusercontent\.com|storage\.googleapis\.com)[^"'\s\)]+/g;

const uniqueUrls = new Set<string>();
const urlMap: Record<string, string> = {};

if (fs.existsSync("image_mapping.txt")) {
  const lines = fs.readFileSync("image_mapping.txt", "utf8").split("\n");
  let lastUrl = "";
  for (const line of lines) {
    if (line.startsWith("https://")) {
      lastUrl = line.trim();
    } else if (line.startsWith("-> ")) {
      const localPath = line.replace("-> ", "").trim();
      uniqueUrls.add(lastUrl);
      urlMap[lastUrl] = localPath;
    }
  }
} else {
  // Fallback to reading files if mapping doesn't exist
  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(urlRegex);
    if (matches) {
      matches.forEach((url) => {
        uniqueUrls.add(url);
      });
    }
  });
}

console.log(`Found ${uniqueUrls.size} unique URLs.`);

async function downloadAll() {
  let mappingText = "Original Link -> Local File Name\n\n";
  for (const url of uniqueUrls) {
    const hash = crypto
      .createHash("md5")
      .update(url)
      .digest("hex")
      .substring(0, 10);
    let ext = ".png"; // default to png

    const fileName = `image_${hash}${ext}`;
    const localPath = `/images/${fileName}`;
    urlMap[url] = localPath;
    mappingText += `${url}\n-> ${localPath}\n\n`;

    const dest = path.join(publicImagesDir, fileName);

    await new Promise((resolve) => {
      https
        .get(url, (response) => {
          if (response.statusCode === 200) {
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              console.log(`Downloaded ${fileName}`);
              resolve(null);
            });
          } else {
            console.error(`Failed to download ${url}: ${response.statusCode}`);
            resolve(null);
          }
        })
        .on("error", (err) => {
          console.error(`Error downloading ${url}: ${err.message}`);
          resolve(null);
        });
    });
  }

  fs.writeFileSync("image_mapping.txt", mappingText);
  console.log("Saved image_mapping.txt");

  // Replace in files
  files.forEach((file) => {
    let content = fs.readFileSync(file, "utf8");
    let modified = false;

    for (const [url, localPath] of Object.entries(urlMap)) {
      if (content.includes(url)) {
        content = content.split(url).join(localPath);
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  });
}

downloadAll();
