import variable from './../variables/platform';

const View = (variables = variable) => {
	const viewTheme = {
		'.padder': {
			padding: variables.contentPadding,
		},
	};

	return viewTheme;
};

export default View;
