const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}
const session = require("express-session");
const flash = require("connect-flash");

const mainRoutes = require("./routes/mainAppRoutes");
const authRoutes = require("./routes/authRoutes");

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connection Established"))
    .catch(() => {
        console.log("Error while connecting to database");
    });

app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(flash());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/view"));

app.use("/", mainRoutes);
app.use("/", authRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
