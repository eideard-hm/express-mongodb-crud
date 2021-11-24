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
  // configurar el directorio donde se encuentra la carpeta layouts
  layoutsDir: path.join(app.get("views"), "layouts"),
  // configurar el fichero que contiene el layout
  defaultLayout: "main",
  // configurar el directorio de los partials o porciones de la plantilla
  partialsDir: path.join(app.get("views"), "partials"),
  // mencionar la extensión que van a tener las plantillas
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
