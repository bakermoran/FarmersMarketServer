const {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

export const VendorType = new GraphQLObjectType({
  name: 'Vendor',
  description: 'This represents a single vendor at a market',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    address1: { type: GraphQLNonNull(GraphQLString) },
    address2: { type: GraphQLString },
    city: { type: GraphQLNonNull(GraphQLString) },
    state: { type: GraphQLNonNull(GraphQLString) },
    zip: { type: GraphQLNonNull(GraphQLString) }
  })
})
