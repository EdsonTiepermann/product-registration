import express from "express";
import "dotenv/config";
import productsRouter from "./routes/product-registration-router.js";
import userRouter from "./routes/user-route.js";

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/products", productsRouter);

app.listen(process.env.API_PORT, () => {
  console.log("Server is running on port " + process.env.API_PORT);
});
