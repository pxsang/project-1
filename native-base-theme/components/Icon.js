import variable from './../variables/platform';

const Icon = (variables = variable) => {
	const iconTheme = {
		fontSize: variables.iconFontSize,
		color: '#000',
	};

	return iconTheme;
};

export default Icon;
