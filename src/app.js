import express from "express";
import { create } from "express-handlebars";
import path from "path";

import router from "./routes/index.routes";

// objeto de express
const app = express();

// configurar la ruta de las vistas de handlebars
app.set("views", path.join(__dirname, "views"));

// configurar el motor de plantillas handlebars
const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  partialsDir: path.join(app.get("views"), "partials"),
  extname: ".hbs",
});


// Registrar la devolución de llamada del motor de plantilla dada
app.engine(".hbs", exphbs.engine);

// decirle a express que use la configuración de motor de plantilla
app.set("view engine", ".hbs");

// usar el archivo de rutas
app.use(router);

//exportar el objeto app
export default app;
