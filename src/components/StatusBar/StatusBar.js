import React, { Component } from 'react';
import css from './style.module.css';

export default class InputFullSalary extends Component {
	render() {
		const { value, color } = this.props;

		return (
			<div
				style={{
					height: '30px',
					width: `${value}%`,
					backgroundColor: `${color}`,
				}}
			></div>
		);
	}
}
