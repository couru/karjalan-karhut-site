import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const serverDirectory = fileURLToPath(new URL("../dist/server/", import.meta.url));
const hostingDirectory = fileURLToPath(new URL("../dist/.openai/", import.meta.url));

await mkdir(serverDirectory, { recursive: true });
await mkdir(hostingDirectory, { recursive: true });
await copyFile(`${projectRoot}worker/sites-entry.js`, `${serverDirectory}index.js`);
await copyFile(`${projectRoot}.openai/hosting.json`, `${hostingDirectory}hosting.json`);
