import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth.js";

dotenv.config();

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true,
}

app.get('/', (req, res) => {
    res.send('Api is working');
});

//database connection
mongoose.set("strictQuery", false);
const connectBD = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected');
    } catch (err) {
        console.log('Database connection failed');
    }
};

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));9
app.use('/api/v1/auth', authRoute);

app.listen(port, () => {
    connectBD();
    console.log(`Listening on port ${port}`);
});