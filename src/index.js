import app from "./app";
import "./database/database";
import {PORT} from './config'

app.listen(PORT);
console.log("Server running on port: ", PORT);
