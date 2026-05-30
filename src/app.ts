
import { requireAuth } from "./middlewares/authMiddleware";
import "./types/express-session";
import express from "express";
import { engine } from "express-handlebars";
import affiliateRoutes from "./routes/affiliateRoutes";
import session from "express-session";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(
  session({
    secret: "dentplus-secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(authRoutes);
app.use("/affiliates", requireAuth, affiliateRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
