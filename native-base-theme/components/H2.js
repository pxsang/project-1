import variable from './../variables/platform';

const H2 = (variables = variable) => {
	const h2Theme = {
		color: variables.textColor,
		fontSize: variables.fontSizeH2,
		lineHeight: variables.lineHeightH2,
		fontWeight: '900',
	};

	return h2Theme;
};

export default H2;
