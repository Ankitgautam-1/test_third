import { useAddress } from '@thirdweb-dev/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LiveListing = () => {
	const navigate = useNavigate();
	const [listofasset, setListofasset] = useState([]);
	const listofnft: string[] = [];
	const address = useAddress();

	useEffect(() => {
		getCollectionassets();
	}, []);
	if (address == '') {
		return <div>No address</div>;
	}
	const getCollectionassets = async () => {
		for (let index = 0; index < 3; index++) {
			const list = `https://gateway.ipfscdn.io/ipfs/QmRPK2zjmkM8sodgCpyiCbLTvKGJwU3mWcwXwL2AWEBWym/marketplace.html?contract=0xabB77D2d6c7dbb3A81ce950B61faf98Ec9bFc53f&chainId=4&listingId=${index}`;
			console.log(list);
			listofnft.push(list);
		}
	};
	console.log('listofasset', listofasset);

	return (
		<div className="deatils_container">
			{listofnft.map((list) => {
				return (
					<iframe
						key={list}
						src={list}
						width="400px"
						height="450px"
					></iframe>
				);
			})}
		</div>
	);
};

export default LiveListing;
