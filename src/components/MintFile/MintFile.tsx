import { useAddress, useMetamask } from '@thirdweb-dev/react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import React, { useEffect, useState } from 'react';
import fs from 'fs';
import { Buffer } from 'buffer';
import { ethers } from 'ethers';
import { verify } from 'crypto';
const sdk = new ThirdwebSDK('rinkeby');
const MintFile = () => {
	const [image, setImage]: any | null = useState(null);
	const address = useAddress();
	const connectWithMetamask = useMetamask();
	return (
		<div>
			{address}
			<input
				type="file"
				onChange={(e) => {
					const file = e.target.files;
					setImage(file);
				}}
				name=""
				id=""
			/>
			<button onClick={connectWithMetamask}>connect</button>
			<button
				onClick={async () => {
					if (image === null) {
						alert('Please select image');
					} else {
						if (address) {
							const contractlist = await sdk.getContractList(
								address
							);
							console.log('contractlist', contractlist);
							contractlist.map(async (list) => {
								const metadata = {
									name: 'Cool NFT',
									description: 'This is a cool NFT',
									image: Buffer.from(image), // This can be an image url or file
								};
								if (list.contractType === 'nft-collection') {
									const contract = sdk.getNFTCollection(
										list.address
									);
									console.log('image uploading');
									console.log('metadata', metadata);
									// get a signer from somewhere (createRandom is being used purely for example purposes)

									const data = contract.mintToSelf(metadata);
									console.log('data', data);
								} else {
									console.log('not nft-drop');
								}
							});
						}
					}
				}}
			>
				mint
			</button>
		</div>
	);
};

export default MintFile;
