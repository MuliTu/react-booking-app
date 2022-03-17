const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();

app.use(compression());
app.use(express.static("build"));

app.get("*", function (req, res) {
  const index = path.join("build", "index.html");
  res.sendFile(index);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
