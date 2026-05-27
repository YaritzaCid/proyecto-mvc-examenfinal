import express from "express";
import { engine } from "express-handlebars";
import affiliateRoutes from "./routes/affiliateRoutes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/affiliates", affiliateRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

