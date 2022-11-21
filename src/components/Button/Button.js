import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
	const getProductData = (e) => {
		e.preventDefault();
		console.log('Summary');
		console.log('=============');
		console.log('Name:', props.dataProduct[0]);
		console.log('Price:', props.dataProduct[1]);
		console.log('Size:', props.dataProduct[2]);
		console.log('Color:', props.dataProduct[3]);
	};
	return (
		<button
			onClick={getProductData}
			className={clsx(styles.button, props.className)}
		>
			{props.children}
		</button>
	);
};

Button.propTypes = {
	dataProduct: PropTypes.array.isRequired,
};

export default Button;
