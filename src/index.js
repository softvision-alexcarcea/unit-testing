import priceService from './price.service.js';
import { Component, DontOverReactDOM } from './dont-over-react.js';

const MONITOR_INTERVAL = 500;

class Trader extends Component {
	constructor() {
		super();
		this.lastPrice = 0;
	}
	update() {
		const currentPrice = priceService.get();
		this.variance = (currentPrice < this.lastPrice) ? 'falling' : 'rising';
		this.lastPrice = currentPrice;
		this.setState(currentPrice);
	}
	render(container) {
		container.className = `quote ${this.variance}`;
		container.innerHTML = `$${this.lastPrice}`; 
	}
	monitor() {
		this._monitorID = setInterval(() => {
			this.update();
		}, MONITOR_INTERVAL);
	}
};

const trader = new Trader();
trader.monitor();

DontOverReactDOM.render(
	document.getElementById('app-root'),
	trader
);

export default trader;

