const express = require('express');
const cors = require('cors');
require("dotenv").config();
const app = express();
const mongoose = require('mongoose');
const usersRoute = require('./routes/usersRoute');
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5000;
const chatsRoute = require("./routes/chatsRoute")
const messagesRoute = require("./routes/messagesRoute");

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/chats", chatsRoute);
app.use("/api/messages", messagesRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
