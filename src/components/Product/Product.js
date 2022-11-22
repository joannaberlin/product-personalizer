import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = (props) => {
	const [currentColor, setCurrentColor] = useState(props.colors[0]);
	const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

	const priceUpdated = useMemo(() => {
		const currentElement = props.sizes.find(
			(item) => item.name === currentSize
		);
		if (currentElement) {
			return props.basePrice + currentElement.additionalPrice;
		}
	}, [currentSize, props.sizes, props.basePrice]);

	const dataProduct = [props.title, priceUpdated, currentSize, currentColor];
	const dataImage = [props.title, props.name, currentColor];
	const dataProductForm = [currentColor, currentSize];

	return (
		<article className={styles.product}>
			<ProductImage dataImage={dataImage} />
			<div>
				<header>
					<h2 className={styles.name}>{props.title}</h2>
					<span className={styles.price}>Price: {priceUpdated}$</span>
				</header>
				<ProductForm
					setCurrentSize={setCurrentSize}
					setCurrentColor={setCurrentColor}
					dataProduct={dataProduct}
					dataProductForm={dataProductForm}
					sizes={props.sizes}
					colors={props.colors}
				/>
			</div>
		</article>
	);
};

Product.propTypes = {
	title: PropTypes.string.isRequired,
	basePrice: PropTypes.number.isRequired,
	colors: PropTypes.array.isRequired,
	sizes: PropTypes.array.isRequired,
};

export default Product;
