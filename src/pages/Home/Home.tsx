import { useAddress } from '@thirdweb-dev/react';
import Counter from '../../components/Counter/Counter';
import Creative from '../../components/Creative/Creative';
import HeroSection from '../../components/HeroSection/HeroSection';
import LiveAuctions from '../../components/LiveAuctions/LiveAuctions';

import Navbar from '../../components/Navbar/Navbar';
import ShowMyNFT from '../../components/ShowMyNFT/ShowMyNFT';
import Deatils from '../Details/Details';
import LiveListing from '../LiveListing/LiveListing';

const Home = () => {
	const address = useAddress();
	console.log('address', address);

	return (
		<div>
			<Navbar />
			<Counter />
			<HeroSection />

			<Creative />

			<LiveAuctions />
			{address && <Deatils />}
		</div>
	);
};

export default Home;
