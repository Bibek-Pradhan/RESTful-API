const express = require("express");
const app = express();
require("./db/connect");
const router = require("./routers/crickter");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})