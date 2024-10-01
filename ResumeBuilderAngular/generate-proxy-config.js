const fs = require('fs')
const path = require('path')

const apiTarget = process.env.apiTarget || 'http://localhost:4292' ;

const proxyConfig = {
    "/api" :{
        "target": apiTarget,
        "secure": false
    }
};

const proxyFilePath = path.join(__dirname, 'proxy.conf.json');
fs.writeFileSync(proxyFilePath, JSON.stringify(proxyConfig, null, 2));
console.log(`Proxy configuration generated with target: ${apiTarget}`);
