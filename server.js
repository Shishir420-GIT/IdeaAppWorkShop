const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./configs/server.config');
const dbConfig = require('./configs/db.config');
const userModel = require('./models/user.model');
const bcrypt = require('bcrypt');

const app = express();

/**
 * Logic to connect and create user in Mango Db
 * You need to have mongo db up and running in your local machine. 
*/
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error", ()=>{
    console.log("Error while connecting to mango db");
});

db.once("open", ()=>{
    console.log("DB is connected");
    init();
});

async function init(){

    /**
     * Check if admin user is already present or not
     */
    let admin = await userModel.findOne({
        userId: "admin"
    })
    if(admin){
        console.log("Admin user is already present")
        console.log(admin)
        return;
    }
    admin = await userModel.create({
        name: "SHISHIR",
        userId: "admin",
        email: "shishir@gmail.com",
        userType: "ADMIN",
        password: bcrypt.hashSync("Welcome1",8)
    });
    console.log(admin);
}

app.listen(serverConfig.PORT, () => {
    console.log(`server started on post number ${serverConfig.PORT}`);
});

app.on("error", ()=>{
    console.log("Port already in use");
});

app.once("open", ()=>{
    console.log(`server started on post number ${serverConfig.PORT}`);
});