import React from 'react';
import './Counter.scss';
import User from '../../assets/images/User.png';
import Art from "../../assets/images/art.png";
import Group from "../../assets/images/Group.png";
import Wallet from "../../assets/images/wallet.png";
const Counter = () => {
	return (
		<div className="counter_conatanier">
			<div className="user">
				<img src={User} alt="User" />
				<h1>300 K</h1>
				<h5>Users Active</h5>
			</div>
			<div className="user">
				<img src={Group} alt="User" />
				<h1>52,7 K</h1>
				<h5>Artworks</h5>
			</div>
			<div className="user">
				<img src={Art} alt="Art" />
				<h1>15,9k</h1>
				<h5>Artists</h5>
			</div>
			<div className="user">
				<img src={Wallet} alt="Art" />
				<h1>30.50</h1>
				<h5>ETH Spent</h5>
			</div>
			
		</div>
	);
};

export default Counter;
