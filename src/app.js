import express from "express";
import exphbs from "express-handlebars";
import path from "path";

import router from "./routes/index.routes";

// objeto de express
const app = express();

// configurar la ruta de las vistas
app.set("views", path.join(__dirname, "views"));

// configurar el engine template de handlebars
// .engine(extension, engine): Sirve para configurar el motor de plantillas.
app.engine(
  ".hbs",
  exphbs({
    // configuraciones
    // directorio donde se va a guardar las template del proyecto
    layoutsDir: path.join(app.get("views"), "layouts"),
    // Fichero que contiene el layout del proyecto
    defaulLayout: "main",
    // extensión de las templates que vamos a utilizar
    extname: ".hbs",
  })
);

// decirle a express que use la configuración del engine de handlebars
app.set("view engine", ".hbs");

// usar el archivo de rutas
app.use(router);

//exportar el objeto app
export default app;
