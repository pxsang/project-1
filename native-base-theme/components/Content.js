import variable from './../variables/platform';

const Content = (variables = variable) => {
	const contentTheme = {
		'.padder': {
			padding: variables.contentPadding,
		},
		flex: 1,
		backgroundColor: 'transparent',
		'NativeBase.Segment': {
			borderWidth: 0,
			backgroundColor: 'transparent',
		},
	};

	return contentTheme;
};

export default Content;
