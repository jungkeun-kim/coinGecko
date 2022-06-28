class Api {
	getCoinList = async (page) => {
		try {
			let response = await fetch(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
			);
			return response.json();
		} catch (e) {
			console.log(e.message);
		}
	};
	getCoinChart = async (coin) => {
		try {
			let response = await fetch(
				`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
			);
			return response.json();
		} catch (e) {
			console.log(e.message);
		}
	};
}

export default new Api();
