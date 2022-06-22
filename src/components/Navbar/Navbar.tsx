import React, { useEffect } from 'react';
import './Navbar.scss';
import Logo from '../../assets/images/Logo.svg';
import {
	useAddress,
	useDisconnect,
	useMetamask,
	useAccount,
} from '@thirdweb-dev/react';
import { useDispatch } from 'react-redux';
import { SignIn, SignOut } from '../../Store/Users/userActions';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const address = useAddress();
	const account = useAccount();
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const connectWithMetamask = useMetamask();
	const disconnectWallet = useDisconnect();
	return (
		<div className="navbar_head">
			<nav className="nav_head">
				<div>
					<img src={Logo} alt="Logo" />
				</div>
				<div className="nav_links_container">
					<li>Auctions</li>
					<li>Roadmap</li>
					<li>Discover</li>
					<li>Community</li>
				</div>
				<div className="nav_buttons">
					{address && (
						<button
							className="nav_button_contact"
							onClick={() => {
								navigate('/mywallet');
							}}
						>
							My Wallet
						</button>
					)}
					{address ? (
						<>
							<button
								className="nav_button_wallet_disconnect"
								onClick={disconnectWallet}
							>
								Disconnect
							</button>
						</>
					) : (
						<button
							className="nav_button_myaccount"
							onClick={connectWithMetamask}
						>
							My Account
						</button>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
