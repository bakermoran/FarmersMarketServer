import { GraphQLList } from "graphql";
import { MarketType } from "../types";
import { marketSeed } from "../seed";

export const markets = {
  type: new GraphQLList(MarketType),
  // resolve: {
  //   resolve: (_source: any, _args: any) => {
  //     return marketSeed;
  //   },
  // }
  resolve: (_source: any, _args: any) => marketSeed
};

// export const market = {
//   type: MarketType,
//   args:{
//     id: {type: GraphQLString}
//   },
//   resolve: {
//     resolve: (_parent: any, args: { id: number }) => {
//       return marketSeed.find(market => market.id === args.id);
//     },
//   }
// };
