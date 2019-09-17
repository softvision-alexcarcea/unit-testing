const trader = {
	lastPrice: 0,
	render: function() {
		const currentPrice = priceService.get();
		return (currentPrice < this.lastPrice) ? 'red' : 'green';
	}
};

