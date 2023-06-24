/*const http = require("http");
const server = http.createServer((req, res) => {
  res.end("respondiendo a la solicitud v3");
});

const puerto = 3000;
server.listen(puerto, () => {
  console.log("escuchando solicitudes");
});*/
const express = require("express");
const app = express();

const port = 3000;
app.set("view engine", "ejs"); //para agregar plantillas ejs
app.set("views", __dirname + "/vistas");

app.use(express.static(__dirname + "/public")); //por detras lee un index
//__dirname ruta directorio donde se esta ejecutando el archivo

app.get("/", (req, res) => {
  res.render("index", { titulo: "mi titulo dinamico" });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", {
    titulo: "Services",
    tituloServicios: "Tiulo Servicio ejs",
  });
});

app.use((req, res) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "Titulo del sitio web 404",
  });
});

app.listen(port, () => {
  console.log("servidor a su servicio en el puerto", port);
});
