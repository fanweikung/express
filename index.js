import express from "express";
import data from "./data/mock.json";

const app = express();
const PORT = 3000;

// GET
app.get("/", (request, response) => {
  response.send("This is a GET request!");
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
  console.log(data);
});
