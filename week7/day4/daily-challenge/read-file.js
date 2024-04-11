import fs from 'fs';
import path from 'path';

export function readFileContent() {
    const filePath = path.join(process.cwd(), 'files', 'file-data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

