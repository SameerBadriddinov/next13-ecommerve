import Cta from '@/components/cta';
import Feature from '@/components/feature';
import Product from '@/components/product';
import { ProductType } from '@/interfaces';

const ProductsPage = async () => {
	const res = await fetch('https://fakestoreapi.com/products');
	const products: ProductType[] = await res.json();

	return (
		<main className='min-h-screen max-w-7xl mx-auto px-8 xl:px-0 '>
			<Feature />
			<section className='flex flex-col space-y-12'>
				<div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map(product => (
						<Product key={product.id} product={product} />
					))}
				</div>
			</section>
			<Cta />
		</main>
	);
};

export default ProductsPage;
