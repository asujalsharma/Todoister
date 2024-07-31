const express = require("express");
const cors = require("cors");
const app = express();

const conn = require("./conn/conn");
conn();
const auth = require("./Routes/auth");
const list = require("./Routes/list");
app.use(express.json());
app.use(cors());

app.use("/api/v1",auth);
app.use("/api/v2",list);

app.listen(1000,()=>{
    console.log("CHal gya rey chal gya !!!!")
});