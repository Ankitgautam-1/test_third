import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Details.scss';
const Deatils = () => {
	const navigate = useNavigate();
	const address = useParams().id;

	useEffect(() => {
		getCollectionassets();
	}, []);
	if (address == '') {
		return <div>No address</div>;
	}
	const getCollectionassets = async () => {
		const collectionassets = await fetch(
			`https://testnets-api.opensea.io/api/v1/assets?owner=${address}`
		);
		const collectionassetsJson = await collectionassets.json();
		console.log('collectionassets', collectionassetsJson);
	};

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
		</div>
	);
};

export default Deatils;
