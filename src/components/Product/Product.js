import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = (props) => {
	const [currentColor, setCurrentColor] = useState(props.colors[0]);
	const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

	const getPrice = () => {
		const currentElement = props.sizes.find(
			(item) => item.name === currentSize
		);

		if (currentElement) {
			let price;
			price = props.basePrice + currentElement.additionalPrice;
			return price;
		}
	};

	const dataProduct = [props.title, getPrice(), currentSize, currentColor];
	const dataImage = [props.title, props.name, currentColor];
	const dataProductForm = [currentColor, currentSize];

	return (
		<article className={styles.product}>
			<ProductImage dataImage={dataImage} />
			<div>
				<header>
					<h2 className={styles.name}>{props.title}</h2>
					<span className={styles.price}>Price: {getPrice()}$</span>
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
