const {
  GraphQLSchema,
} = require('graphql')
import { RootQuery } from "./query";


const schema = new GraphQLSchema({
  query: RootQuery
  // mutation: RootMutationType
});

export default schema;
