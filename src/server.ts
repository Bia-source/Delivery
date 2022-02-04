import express from "express";
// import "dotenv/config";
import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(routes);
app.listen(2022, () => console.log("Server is running"));