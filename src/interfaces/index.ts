export interface ProductType {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	quantity: number;
	rating: { rate: number; count: number };
}
