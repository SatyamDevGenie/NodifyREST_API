// Create s HTTP server in NODE JS..........

const http = require("http");

// import the particular requests from methods folder......

const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");

// import sample data of movies.json file........

let movies = require("./data/movies.json");

require("dotenv").config(); // server will run according to .env

const PORT = process.env.PORT || 5001; // By defaultly run on 5001

const server = http.createServer((req, res) => {
  req.movies = movies; // data in movies.json file___sample data
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({
          title: "Not found",
          message: "Route not found",
        })
      );
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
