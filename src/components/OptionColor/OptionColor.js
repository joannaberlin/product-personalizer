import styles from '../ProductForm/Options.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
	const prepareColorClassName = (color) => {
		return styles[
			'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
		];
	};
	return (
		<div className={styles.colors}>
			<h3 className={styles.optionLabel}>Colors</h3>
			<ul className={styles.choices}>
				{props.colors.map((item) => (
					<li key={item}>
						<button
							onClick={() => props.setCurrentColor(item)}
							type='button'
							className={clsx(
								prepareColorClassName(item),
								item === props.dataProductForm[0] && styles.active
							)}
						></button>
					</li>
				))}
			</ul>
		</div>
	);
};

OptionColor.propTypes = {
	setCurrentColor: PropTypes.func.isRequired,
	colors: PropTypes.array.isRequired,
	dataProductForm: PropTypes.array.isRequired,
};

export default OptionColor;
