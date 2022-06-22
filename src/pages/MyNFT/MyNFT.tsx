import { useAddress } from '@thirdweb-dev/react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import React, { useEffect, useState } from 'react';
import './MyNFT.scss';
const sdk = new ThirdwebSDK('rinkeby');

const MyNFT = () => {
	const [nftDrop, setNftDrop]: any = useState([]);
	const [nfts, setNfts]: any[] = useState([]);
	const address = useAddress();

	const getNfts = async () => {
		if (address !== undefined) {
			const contractlist = await sdk.getContractList(address);
			console.log('contractlist', contractlist);
			contractlist.map((list) => {
				if (list.contractType === 'nft-drop') {
					const contract = sdk.getNFTDrop(list.address);
					contract.getAll().then((data) => {
						console.log('getAllData', data);
						setNftDrop(data);
					});
				} else {
					console.log('not nft-drop');
				}
			});
		}
	};
	const getNftofOwner = async () => {
		if (address !== undefined) {
			const collectionassets = await fetch(
				`https://testnets-api.opensea.io/api/v1/assets?owner=${address}`
			);
			const collectionassetsJson = await collectionassets.json();
			console.log('collectionassets', collectionassetsJson);
			setNfts(collectionassetsJson.assets);
		}
	};
	useEffect(() => {
		console.log(address);

		if (address) {
			getNfts();
		}
	}, [address]);
	useEffect(() => {
		getNftofOwner();
	}, [address]);
	if (address === '') {
		return <div>Pls login {address}</div>;
	}
	return (
		<div className="nft-drop">
			<h3>NFT Drop</h3>
			{nftDrop.map((nft: any, i: any) => {
				return (
					<div className="nftdrop_contanier" key={i}>
						<img
							src={nft.metadata.image}
							alt={nft.metadata.image}
						/>
						<div>{nft.metadata.name}</div>
						<div>{nft.image}</div>
						<div>
							{nft.metadata.attributes.map(
								(attr: any, i: any) => {
									return (
										<div key={i}>
											{attr.trait_type}:{attr.value}
										</div>
									);
								}
							)}
						</div>
						{nft.owner ===
						'0x0000000000000000000000000000000000000000' ? (
							<div>Not owned</div>
						) : (
							<div style={{ width: '250px', overflow: 'hidden' }}>
								Owned by {nft.owner}
							</div>
						)}
						<div>{nft.tokenId}</div>
					</div>
				);
			})}

			<h3>Your NFT's</h3>
			<div className="users_nfts">
				{nfts.length > 0 ? (
					nfts.map((nft: any, i: any) => {
						return (
							<div key={i} className="nft_card">
								<img
									src={nft.image_url}
									className="nft_image"
									alt={nft.image_url}
								/>
								<div className="desc">
									<div className="nft_name">{nft.name}</div>
									<div className="num_sales">
										{nft.num_sales}
									</div>
									<div className="nft_description">
										{'Desc:'}
										{nft.description}
									</div>
									<div className="token">{nft.token_id}</div>
									<div className="creater">
										<img
											src={nft.creator.profile_img_url}
											className="creater_profile"
											alt=""
										/>
										<h4>{nft.owner.user.username}</h4>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<h1>No Data</h1>
				)}
			</div>
		</div>
	);
};

export default MyNFT;
