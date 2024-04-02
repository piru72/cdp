const fs = require('fs');
const os = require('os');

const nodeVersion = process.version;
const platform = process.platform;
const cpuUsage = process.cpuUsage().user / 1000;

const cpuDetaills = os.cpus();


const data = 
`Node.js Version: ${nodeVersion}
\nPlatform: ${platform}\n
User CPU time: ${cpuUsage} seconds\n`
+ cpuDetaills.map((cpu, index) =>
`\nCPU ${index}:
Model: ${cpu.model}
Speed: ${cpu.speed} MHz
User Time: ${cpu.times.user}
Sys Time: ${cpu.times.sys}
Idle Time: ${cpu.times.idle}`
).join('\n------------------\n')
;

fs.writeFileSync('classWorkDetails.txt', data);








