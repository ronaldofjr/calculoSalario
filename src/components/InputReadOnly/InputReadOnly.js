import React, { Component } from 'react';
import { formatBR } from '../../helpers/formatBR/formatBR.js';
import css from './style.module.css';

export default class InputReadOnly extends Component {
	render() {
		const { label, value, currentColor, percentage } = this.props;
		const formatted = formatBR(value);

		return (
			<div className={css.input}>
				<label>{label}</label>
				<input
					type="text"
					style={{ fontWeight: 'bold', color: `${currentColor}` }}
					id="baseINSS"
					value={
						percentage >= 0
							? `${formatted} (${percentage.toFixed(2)} %)`
							: formatted
					}
				/>
			</div>
		);
	}
}
