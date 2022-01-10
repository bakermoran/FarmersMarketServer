import { marketVendorSeed, marketSeed } from "./../../src/seed"
import { Market } from './../interfaces'
import { VendorType } from "src/types"

function marketResolver(vendor?: typeof VendorType):Market[] {
  let markets: number[] = [];
  const vendorMarketJoins = marketVendorSeed.filter(vendorMarket => vendorMarket.vendor_id === vendor.id);
  vendorMarketJoins.forEach(vendorMarket => markets.push(vendorMarket.market_id))

  return (
    marketSeed.filter(market => markets.includes(market.id))
  )
}

export {
  marketResolver
};
