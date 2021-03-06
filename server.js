const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

app.get("/", (req, res) =>
  res.json({ msg: "welcome to the contact keeper Api" })
);

//define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
