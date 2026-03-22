import fs from 'fs';
import path from 'path';

const src = "C:\\Users\\JayFornias\\.gemini\\antigravity\\brain\\6cc8b5ec-a693-4ee6-b96c-db9cf76e8c73\\media__1774139103657.png";
const destDir = "c:\\Users\\JayFornias\\Documents\\ReactProjects\\inventory-system\\src\\assets\\images";
const dest = path.join(destDir, "404-illustration.png");

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}
fs.copyFileSync(src, dest);
console.log("Copied successfully to " + dest);
