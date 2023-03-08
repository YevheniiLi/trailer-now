import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
import routes from "./src/routes/index.js";

const app =  express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
  });

app.use('/api/v1', routes)

const port = process.env.PORT || 3001

const server = http.createServer(app)

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb connected")
    server.listen(port, () => {
        console.log((`Server is listening on port ${port}`));
    });
}).catch((err) => {
    console.log({err});
    process.exit(1);
})
