const express = require('express');
const serverConfig = require('./configs/server.config');

console.log(serverConfig)

const app = express();

app.listen(serverConfig.PORT, () => {
    console.log(`server started on post number ${serverConfig.PORT}`);
})