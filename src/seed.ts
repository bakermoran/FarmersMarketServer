import * as interfaces from './interfaces'

export const marketSeed: interfaces.Market[] = [
	{ id: 1, name: 'Clintonville Farmers Market', location: 'Clintonville', description: 'A farmers market in Clintonville, Columbus, Ohio', hours: '9-3', address1: '123 N High St', address2: null, city: 'Columbus', state: 'OH', zip: '43212' },
	{ id: 2, name: 'North Market', location: 'Arena District', description: 'A market in the arena district, Columbus, Ohio', hours: '9-3', address1: '456 High St', address2: null, city: 'Columbus', state: 'OH', zip: '44444' },
  { id: 3, name: 'Dublin Farmers Market', location: 'Dublin', description: 'A farmers market in Dublin, Ohio', hours: '9-3', address1: '111 Dublin Rd', address2: null, city: 'Dublin', state: 'OH', zip: '44333' },
];

export const vendorSeed: interfaces.Vendor[] = [
	{ id: 1, name: 'Los Pollos Hermanos', location: 'Clintonville', description: 'A taco restaurant in Columbus, Ohio', address1: '123 N High St', address2: null, city: 'Columbus', state: 'OH', zip: '43212' },
	{ id: 2, name: 'Les Deux Magots', location: 'St. Germain-des-pres', description: 'A classic french bistro', address1: '456 High St', address2: null, city: 'Columbus', state: 'OH', zip: '44444' },
  { id: 3, name: 'The French Laundry', location: 'Napa', description: 'A three michellin starred restaurant in Napa valley', address1: '111 Napa Rd', address2: null, city: 'Napa', state: 'CA', zip: '99742' },
];

export const marketVendorSeed: interfaces.MarketVendorJoin[] = [
	{ market_id: 1, vendor_id: 1 },
	{ market_id: 1, vendor_id: 2 },
  { market_id: 1, vendor_id: 3 },
	{ market_id: 2, vendor_id: 2 },
  { market_id: 2, vendor_id: 3 },
	{ market_id: 3, vendor_id: 2 },
];
