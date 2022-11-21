import Button from '../Button/Button.js';
import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
	return (
		<form>
			{/* tu component OptionSize */}
			<OptionSize
				setCurrentSize={props.setCurrentSize}
				sizes={props.sizes}
				dataProductForm={props.dataProductForm}
			/>
			{/* tu component OptionColor */}
			<OptionColor
				colors={props.colors}
				dataProductForm={props.dataProductForm}
				setCurrentColor={props.setCurrentColor}
			/>
			<Button dataProduct={props.dataProduct} className={styles.button}>
				<span className='fa fa-shopping-cart' />
			</Button>
		</form>
	);
};

ProductForm.propTypes = {
	setCurrentSize: PropTypes.func.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
	dataProduct: PropTypes.array.isRequired,
	dataProductForm: PropTypes.array.isRequired,
	sizes: PropTypes.array.isRequired,
	colors: PropTypes.array.isRequired,
};

export default ProductForm;
