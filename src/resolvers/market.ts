import { marketVendorSeed, vendorSeed } from "./../../src/seed"
import { Vendor } from './../interfaces'
import { MarketType } from "src/types"

function vendorResolver(market?: typeof MarketType):Vendor[] {
  let vendors: number[] = [];
  const marketVendorJoins = marketVendorSeed.filter(marketVendor => marketVendor.market_id === market.id);
  marketVendorJoins.forEach(marketVendor => vendors.push(marketVendor.vendor_id))

  return (
    vendorSeed.filter(vendor => vendors.includes(vendor.id))
  )
}

export {
  vendorResolver
};
