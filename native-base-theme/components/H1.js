import variable from './../variables/platform';

const H1 = (variables = variable) => {
	const h1Theme = {
		color: variables.textColor,
		fontSize: variables.fontSizeH1,
		lineHeight: variables.lineHeightH1,
		fontWeight: '900',
	};

	return h1Theme;
};

export default H1;
