import express from "express";
import cors from "cors";
import db from "./config/db.js";
import Router from "./routes/routes.js";
import multer from 'multer'


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer();
app.use(upload.none());
app.use(cors());

try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.use(Router);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));