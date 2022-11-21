import styles from './ProductImage.module.scss';

const ProductImage = ({ dataImage }) => {
	return (
		<div className={styles.imageContainer}>
			<img
				className={styles.image}
				alt={dataImage[0]}
				src={`${process.env.PUBLIC_URL}/images/products/shirt-${dataImage[1]}--${dataImage[2]}.jpg`}
			/>
		</div>
	);
};

export default ProductImage;
