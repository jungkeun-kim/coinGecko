import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CoinPage({ coinList, setCoinId }) {
	const navigate = useNavigate();
	let coinIds = [];
	coinList.forEach((coin) => {
		let url = coin.image;
		let coinId = url.substring(
			url.indexOf("/images") + 8,
			url.indexOf("/large")
		);
		coinIds[coin.id] = coinId;
	});

	const setFontColor = (value) => {
		return value > 0 ? "text-success" : "text-danger";
	};

	return (
		<>
			{coinList.map((item, index) => {
				const {
					image,
					id,
					current_price,
					price_change_percentage_1h_in_currency: change_1h,
					price_change_percentage_24h_in_currency: change_24h,
					price_change_percentage_7d_in_currency: change_7d,
					total_volume,
					market_cap,
				} = item;

				return (
					<tr
						component={Link}
						key={index}
						onClick={() => navigate(`/coinchart/${id}`)}
					>
						<td>{index + 1}</td>
						<td className="fw-bold text-capitalize">
							<img
								src={image}
								alt="coin"
								className="mx-1"
								style={{ width: "7%" }}
							/>
							{id}
						</td>
						<td>${current_price.toLocaleString()}</td>
						<td className={setFontColor(change_1h)}>
							{change_1h.toFixed(1)}%
						</td>
						<td className={setFontColor(change_24h)}>
							{change_24h.toFixed(1)}%
						</td>
						<td className={setFontColor(change_7d)}>
							{change_7d.toFixed(1)}%
						</td>
						<td>${total_volume.toLocaleString()}</td>
						<td>${market_cap.toLocaleString()}</td>
						<td>
							<Link
								to={`/coinchart/${id}`}
								onClick={() => {
									setCoinId(id);
								}}
							>
								<img
									src={`https://www.coingecko.com/coins/${coinIds[id]}/sparkline`}
									alt="last 7 days chart"
								/>
							</Link>
						</td>
					</tr>
				);
			})}
		</>
	);
}

export default CoinPage;
