import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
	const getProductData = (e) => {
		e.preventDefault();
		console.log('Summary');
		console.log('=============');
		console.log('Name:', props.title);
		console.log('Price:', props.priceUpdated);
		console.log('Size:', props.currentSize);
		console.log('Color:', props.currentColor);
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
	title: PropTypes.string.isRequired,
	priceUpdated: PropTypes.number.isRequired,
	currentSize: PropTypes.string.isRequired,
	currentColor: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
};

export default Button;
