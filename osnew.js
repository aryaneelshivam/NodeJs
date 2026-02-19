const os = require('os')
console.log("OS Platform: ", os.platform());
console.log("Os type: ", os.type());
console.log("OS release: ", os.release());
console.log("OS architecture: ", os.arch());
console.log("OS Temp directory: ", os.tmpdir());
console.log("OS total memory: ", os.totalmem());
console.log("OS free memory: ", os.freemem());
console.log("OS Host name: ", os.hostname());
console.log("OS uptime: ", os.uptime());

//user informations
console.log("OS user information: ", os.userInfo());
console.log("user name1: ", os.userInfo().username);
console.log("user home directory: ", os.userInfo().homedir);
console.log("user shell: ", os.userInfo().shell);