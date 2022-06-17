import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import './Home.scss';
import HeroSection from '../components/HeroSection/HeroSection';
import LiveAuctions from '../components/LiveAuctions/LiveAuctions';
import Test from '../components/Test/Test';
import Creative from '../components/Creative/Creative';
import Counter from '../components/Counter/Counter';
import ShowMyNFT from '../components/ShowMyNFT/ShowMyNFT';
const Home = () => {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<LiveAuctions />
			<Creative />
			<Counter />
			<ShowMyNFT/>
		</div>
	);
};

export default Home;
