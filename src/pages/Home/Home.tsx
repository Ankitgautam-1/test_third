import Counter from '../../components/Counter/Counter';
import Creative from '../../components/Creative/Creative';
import HeroSection from '../../components/HeroSection/HeroSection';
import LiveAuctions from '../../components/LiveAuctions/LiveAuctions';
import LiveListing from '../../components/LiveListing/LiveListing';
import Navbar from '../../components/Navbar/Navbar';
import ShowMyNFT from '../../components/ShowMyNFT/ShowMyNFT';

const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<Counter />
			<Creative />

			<LiveAuctions />

			<ShowMyNFT />
			<LiveListing />
		</div>
	);
};

export default Home;
