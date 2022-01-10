interface Market {
  id: number,
	name: string,
	location: string,
	description: string,
	hours: string,
	address1: string,
	address2: string | null,
	city: string,
	state: string,
	zip: string
}

export const marketSeed: Market[] = [
	{ id: 1, name: 'Clintonville Farmers Market', location: 'Clintonville', description: 'A farmers market in Clintonville, Columbus, Ohio', hours: '9-3', address1: '123 N High St', address2: null, city: 'Columbus', state: 'OH', zip: '43212' },
	{ id: 2, name: 'North Market', location: 'Arena District', description: 'A market in the arena district, Columbus, Ohio', hours: '9-3', address1: '456 High St', address2: null, city: 'Columbus', state: 'OH', zip: '44444' },
  { id: 3, name: 'Dublin Farmers Market', location: 'Dublin', description: 'A farmers market in Dublin, Ohio', hours: '9-3', address1: '111 Dublin Rd', address2: null, city: 'Dublin', state: 'OH', zip: '44333' },
];
