import clsx from 'clsx';
import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
	return (
		<div className={styles.sizes}>
			<h3 className={styles.optionLabel}>Sizes</h3>
			<ul className={styles.choices}>
				{props.sizes.map((item) => (
					<li key={item.name}>
						<button
							onClick={() => props.setCurrentSize(item.name)}
							type='button'
							className={clsx(item.name === props.currentSize && styles.active)}
						>
							{item.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

OptionSize.propTypes = {
	setCurrentSize: PropTypes.func.isRequired,
	sizes: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
};

export default OptionSize;
