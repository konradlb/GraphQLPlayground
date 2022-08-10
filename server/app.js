const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const { mongoCode } = require("./config");

const app = express();

mongoose.connect(mongoCode);
mongoose.connection.once("open", () => {
  console.log("conection open to mongoose");
});

// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
