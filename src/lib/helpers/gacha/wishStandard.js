import { getAllChars } from '$lib/helpers/gacha/wishBase.js';

const standardWish = {
	init({ stdver, version, phase }) {
		this._stdver = stdver;
		this._version = version;
		this._phase = phase;
		return this;
	},

	get() {
		const index = parseInt(window.localStorage.getItem('itemIndex') || 0);
		window.localStorage.setItem('itemIndex', index + 1);
		
		const list = getAllChars();
		
		return list[index % list.length];
	}
};

export default standardWish;

