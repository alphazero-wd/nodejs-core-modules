const os = require('os');

// platform (win32, darwin, etc)
console.log(os.platform());

// cpu architecture (x64, x32, etc)
console.log(os.arch());

// get info about each cpu core
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home directory
console.log(os.homedir());

// uptime(amount of time your system has been running)
console.log(os.uptime());
