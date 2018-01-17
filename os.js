const os = require('os');

const userInfo = os.userInfo();
console.log('name:', userInfo.username);
console.log('home:', userInfo.homedir);
console.log('shell:', userInfo.shell);

console.log('plaform:', os.platform());
console.log('type:', os.type());
console.log('hostname:', os.hostname());
console.log('totalmem:', os.totalmem());
const cpus = os.cpus();
for (const [index, cpu] of cpus.entries()) {
    console.log(`Logical core${index}:`, cpu.model);
}