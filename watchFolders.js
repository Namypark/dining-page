import fs from 'fs';
import { basename, join } from 'path';
import chokidar from 'chokidar';

//function to create a jsx file and .module.css file

const createFiles = (folderPath) => {
    const folderName = basename(folderPath);
    const jsxFilePath = join(folderPath, `${folderName}.jsx`)
    const cssFilePath = join(folderPath, `${folderName}.module.css`);

    if (!fs.existsSync(jsxFilePath)) {
        fs.writeFileSync(jsxFilePath, `import styles from './${folderName}.module.css';\n\n// Your component code here\n`);
        console.log(`Created: ${jsxFilePath}`)
    }

    if (!fs.existsSync(cssFilePath)) {
        fs.writeFileSync(cssFilePath, "/* CSS Modules */\n")
        console.log(`Created: ${cssFilePath}`)
    }
}


//watcher to monitor the component and container directories

chokidar.watch(["./src/components", "./src/containers"], { persistent: true }).on('addDir', (folderPath) => {
    if (basename(folderPath) !== 'components' && basename(folderPath) !== 'containers') {
        createFiles(folderPath);
    }
}).on("error", (err) => console.error(`watch error: ${err}`));

console.log("watching for new folder in ./src/components && ./src/containers")