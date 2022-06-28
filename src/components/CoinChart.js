import React, { useEffect } from "react";
import Chart from "react-google-charts";
import Api from "./Api";
import { useLocation } from "react-router-dom";

function CoinChart({ coinId, setCoinId, LineData, setLineData }) {
	setCoinId(useLocation().pathname.slice(11));

	const callChart = (coinId) => {
		Api.getCoinChart(coinId).then((data) => {
			data.prices.forEach((item) => {
				item[0] = new Date(item[0]);
			});

			data.prices.unshift(["Day", "Price"]);

			setLineData(data.prices);
		});
	};

	useEffect(() => {
		callChart(coinId);
	}, [coinId]);

	const LineChartOptions = {
		hAxis: {
			title: "Day",
			format: "dd. MMM",
		},
		vAxis: {
			title: "Price",
			format: "$##,###.#####",
		},
		series: {
			1: { curveType: "function" },
		},
		chartArea: {
			top: 30,
		},
	};

	return (
		<div className="container mt-5">
			<h3 style={{ fontFamily: "fantasy" }}>
				<span className="text-capitalize">{coinId}</span> Price Change
				over the Last 7 Days
			</h3>
			<Chart
				width={"1000px"}
				height={"410px"}
				chartType="LineChart"
				loader={<div>Loading Chart</div>}
				data={LineData}
				options={LineChartOptions}
				rootProps={{ "data-testid": "2" }}
			/>
		</div>
	);
}

export default CoinChart;
