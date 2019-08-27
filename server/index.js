const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const upload = require("./multer");
const dp = require("./model/upload");
const SignUp = require("./model/Signup");
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("./config");
mongoose
  .connect(
    "mongodb+srv://Razi:123@cluster0-xe5n6.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Db run");
  })
  .catch(e => {
    console.log("error,", e);
  });
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "50mb"
  })
);

app.use(express.static(path.resolve(__dirname, "../dist")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.post("/uploads", upload.single("image"), (req, res) => {
  let data = new dp({
    path: `uploads/${req.file.filename}`,
    Author: req.body.Author,
    Title: req.body.Title,
    Details: req.body.details
  });
  data
    .save()
    .then(resp => res.json(resp))
    .catch(e => console.log(e));
});
app.get("/uploads", (req, res) => {
  dp.find().then(resp => res.json(resp));
});
app.post("/SignUp",upload.single("images"), async (req, res) => {
  // console.log(req.file)
  let q = (req.body.password = await Bcrypt.hashSync(req.body.password, 10));
  let signdata = new SignUp({
    image:`uploads/${req.file.filename}`,
    Phone: req.body.Phone,
    Fullname: req.body.Fullname,
    Email: req.body.Email,
    Password: q
  });
  signdata.save().then(resp => {
    res.json(resp);
    console.log(resp);
  })
});
app.post("/login", (req, res) => {
  SignUp.findOne({ Email: req.body.Email }).then(user => {
    // console.log(user);
    Bcrypt.compare(req.body.password, user.Password, (err, result) => {
      if (result == true) {
        const payload = {
          username: user.Phone,
          fullName: user.Fullname,
          email: user.Email,
          image:user.image
        };
        jwt.sign(payload, key.key, (err, response) => {
          if (err) {
            res.status(500).json({
              error: "Error In Token",
              type: err
            });
          } else {
            let token = {
              token: `Bearer ${response}`,
            };
            res.json(token).status(200);
          }
        });
        console.log("user",user);
      }
    });
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

app.listen(3300, () => {
  console.log("Server run");
});
