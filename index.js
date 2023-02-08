import express from "express";
import cors from "cors";
import ContactRouter from "./router/ContactRouter.js";
import Auth_Regis_login from "./router/Auth.Router.js";
import AboutRouter from "./router/AboutRouter.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(ContactRouter);
app.use(Auth_Regis_login);
app.use(AboutRouter);

app.listen(5000, () => {
  console.log("Server berjalan di port : 5000");
});
