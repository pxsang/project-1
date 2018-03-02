const devMode = process.env.NODE_ENV !== 'development';

const config = {
	// App Details
	appName: 'Nau Jukebox',

	// Build Configuration - eg. Debug or Release?
	DEV: devMode,

	// Google Analytics - uses a 'dev' account while we're testing
	gaTrackingId: devMode ? 'UA-XXXXXXXX-2' : 'UA-XXXXXXXX-1',
};

export default config;
