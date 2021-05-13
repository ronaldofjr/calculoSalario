import React, { Component } from 'react';
import css from './style.module.css';

export default class InputFullSalary extends Component {
	handleChange = (e) => {
		this.props.handleChange(e.target.value);
	};

	render() {
		const { label, value } = this.props;

		return (
			<div className={css.input}>
				<label>{label}</label>
				<input type="text" value={value} onChange={this.handleChange} />
			</div>
		);
	}
}
