import Button from '../Button/Button.js';
import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
	return (
		<form>
			<OptionSize
				setCurrentSize={props.setCurrentSize}
				sizes={props.sizes}
				currentSize={props.currentSize}
			/>
			<OptionColor
				colors={props.colors}
				currentColor={props.currentColor}
				setCurrentColor={props.setCurrentColor}
			/>
			<Button
				title={props.title}
				priceUpdated={props.priceUpdated}
				currentSize={props.currentSize}
				currentColor={props.currentColor}
				className={styles.button}
			>
				<span className='fa fa-shopping-cart' />
			</Button>
		</form>
	);
};

ProductForm.propTypes = {
	setCurrentSize: PropTypes.func.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
	sizes: PropTypes.array.isRequired,
	colors: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
	currentColor: PropTypes.string.isRequired,
	priceUpdated: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
};

export default ProductForm;
