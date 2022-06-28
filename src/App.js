import { useState, useEffect } from "react";
import "./App.css";
import Api from "./components/Api";
import CoinList from "./components/CoinList";
import CoinChart from "./components/CoinChart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
	const [coinList, setCoinList] = useState("");
	const [coinId, setCoinId] = useState(0);
	const [LineData, setLineData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);

	const callCoinList = (page) => {
		Api.getCoinList(page).then((data) => {
			if (page > 1) {
				const updatedData = [...coinList, ...data];
				setCoinList(updatedData);
				setIsLoading(false);
			} else {
				setCoinList(data);
				setIsLoading(false);
			}
		});
	};

	useEffect(() => {
		callCoinList(page);
	}, [page]);

	if (isLoading) {
		return (
			<div>
				<p>....Loading</p>
			</div>
		);
	}

	return (
		<div className="App w-75 m-auto">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<>
								<CoinList
									coinList={coinList}
									setCoinId={setCoinId}
									page={page}
									setPage={setPage}
								/>
							</>
						}
					/>
					<Route
						path="coinchart/*"
						element={
							<>
								<CoinChart
									coinId={coinId}
									setCoinId={setCoinId}
									LineData={LineData}
									setLineData={setLineData}
								/>
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
