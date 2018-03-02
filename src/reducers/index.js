import status from './status';
import member from './member';
import recipes from './recipes';

const rehydrated = (state = false, action) => {
	switch (action.type) {
		case 'persist/REHYDRATE':
			return true;
		default:
			return state;
	}
};

const index = {
	rehydrated,
	status,
	member,
	recipes,
};

export default index;
