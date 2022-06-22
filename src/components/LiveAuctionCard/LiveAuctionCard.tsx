import React from 'react';
import './LiveAuctionCard.scss';
import Auctions_1 from '../../assets/images/Auctions_1.svg';
import Clock from '../../assets/images/Clock.svg';
import User_1 from '../../assets/images/Avatar/01.png';
import User_2 from '../../assets/images/Avatar/02.png';
import User_3 from '../../assets/images/Avatar/03.png';
import HeartIcon from '../../assets/images/heart.svg';
const LiveAuctionCard = ({}) => {
	return (
		<div className="card_container">
			<img src={Auctions_1} alt="" className="auction_image" />
			<div className="header">
				<h6 className="title">
					Vulputate felis purus viverra morbi facilisi eget
				</h6>
				<div className="price_contanier"> 3.19 ETH</div>
			</div>
			<div className="time_details">
				<img src={Clock} alt="Clock" className="clock_icon" />
				<span className="time">2:41 min left</span>
			</div>
			<hr className="divider" />
			<div className="biding">
				<div className="people_biding">
					<img src={User_1} alt="User_1" className="image" />
					<img src={User_2} alt="User_2" className="image" />
					<img src={User_3} alt="User_3" className="image" />
					<h6 className="num_people">35 people are biding</h6>
				</div>
				<div className="likes">
					<img src={HeartIcon} alt="HeartIcon" />
					<h6> 120</h6>
				</div>
			</div>
		</div>
	);
};

export default LiveAuctionCard;
