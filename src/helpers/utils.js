const utils = {
	formatMoney(n) {
		const re = '\\d(?=(\\d{' + 3 + '})+' + '$' + ')';
		const num = n.toFixed(Math.max(0, ~~0));

		return num.replace(new RegExp(re, 'g'), '$&' + '.');
	}
};

export default utils;
