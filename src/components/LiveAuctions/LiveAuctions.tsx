import { useNFTCollection, useBalance } from '@thirdweb-dev/react';
import React, { useEffect } from 'react';
import LiveAuctionCard from '../LiveAuctionCard/LiveAuctionCard';
import './LiveAuctions.scss';
const LiveAuctions = () => {
	return (
		<div className="live_acutions_contanier">
			<h4 className="header_title">Latest live auctions</h4>
			<div className="live_auctions">
				<LiveAuctionCard />
				<LiveAuctionCard />
				<LiveAuctionCard />
				<LiveAuctionCard />
				<LiveAuctionCard />
				<LiveAuctionCard />
				<LiveAuctionCard />
				<LiveAuctionCard />
				<LiveAuctionCard />
			</div>
		</div>
	);
};

export default LiveAuctions;
