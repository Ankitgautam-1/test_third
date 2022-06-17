import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import './index.scss';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Deatils from './pages/Details/Details';
import NotFound404 from './pages/NotFound404/NotFound404';
import { QueryClient, QueryClientProvider } from 'react-query';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById('root');
const root = createRoot(container!);
const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThirdwebProvider desiredChainId={activeChainId}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<Routes>
							<Route path="/" caseSensitive element={<Home />} />
							<Route path="/details/:id" element={<Deatils />} />
							<Route path="/*" element={<NotFound404 />} />
						</Routes>
					</BrowserRouter>
				</QueryClientProvider>
			</ThirdwebProvider>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
