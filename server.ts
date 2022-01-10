import { Request, Response } from "express";
const { graphqlHTTP } = require('express-graphql');
const express = require('express');
// const {
//   GraphQLSchema,
  // GraphQLObjectType,
  // GraphQLString,
  // GraphQLList,
  // GraphQLInt,
  // GraphQLNonNull
// } = require('graphql')
const app = express();
const PORT = 4000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.get("/", (_req: Request, res: Response) => {
    res.send("Hello World!");
});

//localhost setup
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});