const usersRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes")

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

app.use("/api", postRoutes);
app.use("/api", usersRoutes);