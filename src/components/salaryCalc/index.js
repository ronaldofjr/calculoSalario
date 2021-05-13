import React, { Component } from 'react';
import css from './index.module.css';
import InputFullSalary from '../InputFullSalary/InputFullSalary.js';
import InputReadOnly from '../InputReadOnly/InputReadOnly.js';
import StatusBar from '../StatusBar/StatusBar.js';
import { calculateSalaryFrom } from '../../helpers/salary/salary.js';

export default class SalaryCalc extends Component {
	constructor() {
		super();

		this.state = { fullSalary: 0 };
	}

	componentDidMount() {
		this.setState({ fullSalary: 1000 });
	}

	changeSalary = (value) => {
		console.log(value);
		const valorRecebido = value;
		this.setState({ fullSalary: valorRecebido });
	};

	render() {
		const salario = this.state.fullSalary;

		const {
			baseINSS,
			discountINSS,
			baseIRPF,
			discountIRPF,
			netSalary,
		} = calculateSalaryFrom(salario);

		return (
			<div className={css.boxPrincipal}>
				<h1>Cálculo de Salário</h1>

				<div className={css.calculos}>
					<InputFullSalary
						label="Digite o salário bruto"
						value={salario}
						handleChange={this.changeSalary}
					/>
				</div>

				<div className={css.calculos}>
					<InputReadOnly
						label="Base INSS"
						currentColor="back"
						value={baseINSS}
					/>
					<InputReadOnly
						label="Desconto INSS"
						currentColor="#e67e22"
						value={discountINSS}
						percentage={(discountINSS / salario) * 100}
					/>
					<InputReadOnly
						label="Base IRPF"
						currentColor="black"
						value={baseIRPF}
					/>
					<InputReadOnly
						label="Desconto IRPF"
						currentColor="#c0392b"
						value={discountIRPF}
						percentage={(discountIRPF / salario) * 100}
					/>
					<InputReadOnly
						label="Salário Líquido"
						currentColor="#16a085"
						value={netSalary}
						percentage={(netSalary / salario) * 100}
					/>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<StatusBar value={(discountINSS / salario) * 100} color="#e67e22" />
					<StatusBar value={(discountIRPF / salario) * 100} color="#c0392b" />
					<StatusBar value={(netSalary / salario) * 100} color="#16a085" />
				</div>
			</div>
		);
	}
}
