const express = require("express");
const mongoose = require("mongoose");
const { uri, options } = require("./mongodb.info");
const { rootRouters } = require("./routers/rootRouters");

mongoose
  .connect(uri, options)
  .then(console.log("Connect to mongodb"))
  .catch(console.log);

const server = express();
server.use(express.json());
server.use("/api/v1", rootRouters);

const port = 8888;
server.listen(port, console.log(`Connect to server at port ${port}`));
