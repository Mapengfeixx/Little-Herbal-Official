import fs from 'fs';

let content = fs.readFileSync('src/views/GameLevel.tsx', 'utf-8');
content = content.replace(/\\\$\{/g, '${');
fs.writeFileSync('src/views/GameLevel.tsx', content);
