import {
	useActiveListings,
	useMarketplace,
	useListings,
	MediaRenderer,
} from '@thirdweb-dev/react';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LiveListing = () => {
	useEffect(() => {
		getListings();
	}, []);
	const marketplace = useMarketplace(
		'0xe0c59FC327296A717CC031F723425830253A4343'
	);
	const { data } = useListings(marketplace, { count: 10 });
	console.log('data', data);

	const { data: listings, isLoading: loadingListings } =
		useActiveListings(marketplace);

	async function getListings() {
		marketplace?.getAll().then((auc: any) => {
			console.log('auc', auc);
		});
	}
	console.log('listings', listings);

	return (
		<div>
			{
				// If the listings are loading, show a loading message
				loadingListings ? (
					<div>Loading listings...</div>
				) : (
					// Otherwise, show the listings
					<div>
						{listings?.map((listing) => (
							<div
								key={listing.id}
								onClick={() => console.log('listing', listing)}
							>
								<MediaRenderer src={listing.asset.image} />
								<h2>
									<a href={`/listing/${listing.id}`}>
										{listing.asset.name}
									</a>
								</h2>

								<p>
									<b>
										{
											listing.buyoutCurrencyValuePerToken
												.displayValue
										}
									</b>{' '}
									{listing.buyoutCurrencyValuePerToken.symbol}
								</p>
							</div>
						))}
					</div>
				)
			}
		</div>
	);
};

export default LiveListing;
