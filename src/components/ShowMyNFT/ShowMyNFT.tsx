import React, { useEffect, useState } from 'react';
import Auctions_1 from '../../assets/images/Auctions_1.svg';
import Clock from '../../assets/images/Clock.svg';
import User_1 from '../../assets/images/Avatar/01.png';
import User_2 from '../../assets/images/Avatar/02.png';
import User_3 from '../../assets/images/Avatar/03.png';
import HeartIcon from '../../assets/images/heart.svg';
import Moment from 'react-moment';
import './ShowMyNFT.scss';
const ShowMyNFT = () => {
	const [nfts, setnft] = useState([]);
	useEffect(() => {
		getNFTCollection();
	}, []);
	const getNFTCollection = async () => {
		const nftCollection = await fetch(
			'https://testnets-api.opensea.io/api/v1/collections?asset_owner=0x9818e25A2302ffB93AeF10DAc19822ac9Cb7bA23&offset=0&limit=300'
		);
		const nftCollectionJson = await nftCollection.json();
		setnft(nftCollectionJson);
	};
	return (
		<div className='main_container'>
			<span className='title'>Our NFT</span>
			<div className="nft_container">
				{nfts.map((nft:[]|any, i) => {
					return (
						<div key={i}>
							<div className="card_container">
								<img
                                    className="image"
									src={nft["primary_asset_contracts"].map((details:any)=>{
                                        return details["image_url"]
                                    })}
                                    object-fit="cover"
									alt=""
                                    height={"100%"}
                                    
                                    
								/>
								<div className="header">
									<h6 className="name">
										{nft["primary_asset_contracts"].map((details:any)=>{
                                            return <span key={details["name"]}>{details["name"]}</span>
                                        })}
									</h6>
									<div className="price_contanier">
										{' '}
										3.19 ETH
									</div>
								</div>
								<div className="time_details">
									<img
										src={Clock}
										alt="Clock"
										className="clock_icon"
									/>
									{nft["primary_asset_contracts"].map((details:any)=>{
                                            return <Moment toNow key={details["created_date"]} className ="date">{details["created_date"]}</Moment>
                                        })}
                                        
								</div>
								<hr className="divider" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ShowMyNFT;
