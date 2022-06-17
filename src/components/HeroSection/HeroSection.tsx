import React from 'react';
import Circle from '../Circle/Circle';
import './HeroSection.scss';
import Vector from '../../assets/images/Frame.svg';
import Frame from '../../assets/images/Frame.png';
import Image1 from '../../assets/images/image-1.svg';
import Image2 from '../../assets/images/image-2.svg';
import Image3 from '../../assets/images/image-3.svg';
import Image4 from '../../assets/images/image-4.svg';
import Companies from '../../assets/images/Logotypes.svg';
import {BiSearchAlt} from "react-icons/bi";
const HeroSection = ({}) => {
	return (
		<div className="hero_section_container">
			<div className="text_container">
				<span className="text_sm">Non Fungible Tokens</span>

				<div className="first_line">
					<span className="text_big">A new NFT</span>
					<img height={50} src={Vector} alt="angle_svg" />{' '}
				</div>
				<div className="secand_line">
					<img height={50} src={Frame} alt="angle_svg" />{' '}
					<span className="text_big">Experience</span>
				</div>
				<span className="text_last">Discover, collect and sell</span>
				<div className="search">
					<input
						className="search_box"
						type="search"
						placeholder="Items, collections and creators"
					/>
					<div className="category_container">
						<div className="line"></div>
						<select
							name="Category"
							id="Category"
							className="select"
						>
							<option value="Category">Category</option>
							<option value="Cyborg">Cyborg</option>
							<option value="Celeb">Celeb</option>
							<option value="Elec">Elec</option>
							<option value="Nature">Nature</option>
						</select>
						<BiSearchAlt className='search_icon'/>
					</div>
				</div>
				<div className="companies">
					<img src={Companies} alt="comapnies" />
				</div>
			</div>

			<Circle Width={80} Height={80} />
			<Circle Width={250} Height={250} />
			<Circle Width={400} Height={400} />
			<Circle Width={600} Height={600} />
			<Circle Width={800} Height={800} />
			<div className="nft_images">
				<img src={Image1} className="image1" alt="image1" />
				<span className='nft_price_1'>2.55 ETH</span>
				<img src={Image2} className="image2" alt="image2" />
				<span className='nft_price_2'>2.55 ETH</span>

				<img src={Image3} className="image3" alt="image3" />
				<img src={Image4} className="image4" alt="image4" />
			</div>
		</div>
	);
};

export default HeroSection;
