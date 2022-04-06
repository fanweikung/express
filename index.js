import express from "express";
import { response } from "express";
import data from "./data/mock.json";

const app = express();
const PORT = 3000;

// Use the public folder at the root diretory
app.use(express.static("public"));

// Use  the images folder at route /images
app.use("/images", express.static("images"));

app.get("/class/:id", (request, response) => {
  console.log(request.params);
});

// GET
app.get("/", (request, response) => {
  response.json(data);
});

// POST
app.post("/create", (request, response) => {
  response.send("This is a POST request at /create");
});

// PUT
app.put("/edit", (request, response) => {
  response.send("This is a PUT request at /edit");
});

// DELETE
app.delete("/delete", (request, response) => {
  response.send("This is a DELETE request at /delete");
});

app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}!`);
  //   console.log(data);
});
