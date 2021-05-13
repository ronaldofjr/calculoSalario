const formatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
});

function formatBR(numberToFormat) {
	return formatter.format(numberToFormat);
}

export { formatBR };
