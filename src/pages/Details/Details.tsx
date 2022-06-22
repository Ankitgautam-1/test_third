import { useAddress } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Details.scss';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';

const sdk = new ThirdwebSDK('rinkeby');

const listofnft: string[] = [];

const Deatils = () => {
	const [listofasset, setListofasset] = useState([]);
	const navigate = useNavigate();
	const address = useAddress();
	const [marketnfts, setMarketnfts] = useState([]);
	useEffect(() => {
		console.log('address', address);
		if (address) {
			getCollectionassets();
		}
	}, [address]);
	if (address == '') {
		return <div>No address</div>;
	}

	const getCollectionassets = async () => {
		const contract = sdk.getNFTCollection(
			'0x5c9e7E0215455AE8b6D12da3621A714D7929513c'
		);
		contract.getAll().then((data) => {
			console.log('getAllData', data);
		});

		const collectionassets = await fetch(
			`https://testnets-api.opensea.io/api/v1/assets?owner=${address}`
		);
		const collectionassetsJson = await collectionassets.json();
		console.log('collectionassets', collectionassetsJson);
		setListofasset(collectionassetsJson.assets);

		for (let index = 3; index < 6; index++) {
			const list = `https://gateway.ipfscdn.io/ipfs/QmRPK2zjmkM8sodgCpyiCbLTvKGJwU3mWcwXwL2AWEBWym/marketplace.html?contract=0x5c9e7E0215455AE8b6D12da3621A714D7929513c&chainId=4&listingId=${index}`;
			console.log(list);
			listofnft.push(list);
		}
	};
	console.log('listofasset', listofasset);

	return (
		<div className="deatils_container">
			<nav className="navbar">
				<button
					className="back_button"
					onClick={() => {
						navigate('/', { replace: true });
					}}
				>
					back
				</button>
			</nav>

			<div className="nftcollections">
				{listofnft.map((list, i) => {
					return (
						<iframe
							key={i}
							src={list}
							width="400px"
							frameBorder={0}
							height="500px"
						></iframe>
					);
				})}
			</div>
		</div>
	);
};

export default Deatils;
