import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<div className="my-3">
				<Link to="/">
					<img
						src="https://static.coingecko.com/s/coingecko-logo-63f24b60e1d2d526c141fee733ad2a39fbce7dabedd187a0dba95220396ce9a0.png"
						alt="logo"
						style={{ width: "25%" }}
					/>
				</Link>
			</div>
		</header>
	);
}

export default Header;
