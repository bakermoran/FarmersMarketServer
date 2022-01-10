import { GraphQLObjectType } from "graphql";
// import * as queries from "./queries";
import { GraphQLList, GraphQLInt } from "graphql";
import { MarketType, VendorType } from "./types";
import { marketSeed, vendorSeed } from "./seed";

const markets = {
  type: new GraphQLList(MarketType),
  resolve: (_source: any, _args: any) => marketSeed
};

const market = {
  type: MarketType,
  args:{
    id: {type: GraphQLInt}
  },
  resolve: (_parent: any, args: { id?: number }) => {
    return marketSeed.find(market => market.id === args.id);
  },
};

const vendors = {
  type: new GraphQLList(VendorType),
  resolve: (_source: any, _args: any) => vendorSeed
};

const vendor = {
  type: VendorType,
  args:{
    id: {type: GraphQLInt}
  },
  resolve: (_parent: any, args: { id?: number }) => {
    return vendorSeed.find(vendor => vendor.id === args.id);
  },
};

const queries = {
  markets: markets,
  market: market,
  vendors: vendors,
  vendor: vendor
}

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
   fields: queries
});
