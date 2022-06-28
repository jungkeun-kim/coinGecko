import React from "react";
import CoinPage from "./CoinPage";

function CoinList({ coinList, setCoinId, page, setPage }) {
	return (
		<>
			<table className="table table-striped table-borderless">
				<thead>
					<tr>
						<td>#</td>
						<td>Coin</td>
						<td>Price</td>
						<td>1h</td>
						<td>24h</td>
						<td>7d</td>
						<td>Trade Vol</td>
						<td>Mkt Cap</td>
						<td>Last 7 Days</td>
					</tr>
				</thead>
				<tbody>
					<CoinPage coinList={coinList} setCoinId={setCoinId} />
				</tbody>
			</table>
			<button
				className="btn btn-success fw-bold mb-5"
				onClick={() => {
					setPage(++page);
					// alert("We are showing up to 100 coins for now");
				}}
			>
				Show More
			</button>
		</>
	);
}

export default CoinList;
