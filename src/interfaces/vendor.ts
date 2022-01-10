export default interface Vendor {
  id: number,
	name: string,
	location: string,
	description: string,
	address1: string,
	address2: string | null,
	city: string,
	state: string,
	zip: string
}
