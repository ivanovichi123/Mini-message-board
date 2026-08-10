import express from "express";

const app = express();

const PORT = 3000;
app.listen(PORT, (error) => {
    if(error) {
        throw error;
    }
    console.log("Hi");     //Erase this later
});