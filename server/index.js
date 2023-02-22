import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
require('dotenv').config();


const configuration = new Configuration({
    organization: "org-vZ5plwtUxRSAWgx4eUDma7cE",
    apiKey:process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);
import routes from "./src/routes/index.js";

const app =  express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', routes)

const port = process.env.PORT || 3000

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
