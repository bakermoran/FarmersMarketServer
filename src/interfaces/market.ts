export default interface Market {
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
