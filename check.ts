import fs from 'fs';
import path from 'path';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(publicImagesDir);

console.log(`Total files: ${files.length}`);
files.slice(0, 5).forEach(f => {
    const size = fs.statSync(path.join(publicImagesDir, f)).size;
    console.log(`${f}: ${size} bytes`);
});
