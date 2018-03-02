import variable from './../variables/platform';

const H3 = (variables = variable) => {
	const h3Theme = {
		color: variables.textColor,
		fontSize: variables.fontSizeH3,
		lineHeight: variables.lineHeightH3,
		fontWeight: '900',
	};

	return h3Theme;
};

export default H3;
