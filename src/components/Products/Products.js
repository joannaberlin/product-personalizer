import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
	const [products] = useState(productsData);

	return (
		<section>
			{products.map((product, index) => (
				<div key={product.id}>
					<Product {...products[index]} />
				</div>
			))}
		</section>
	);
};

export default Products;
