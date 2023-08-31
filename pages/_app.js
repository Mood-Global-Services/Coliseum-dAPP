import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';
import { ChakraProvider,extendTheme,Button } from '@chakra-ui/react'
import App from "./index"
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { WagmiConfig, createConfig } from 'wagmi';
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultConfig,
} from "connectkit";

const config = createConfig(
	getDefaultConfig({
	  // Required API Keys
	  alchemyId: "MzUaa0A87yexjd8UKcHm8HIr1f4aghxT",
	  walletConnectProjectId: "a8024e8262cb4e7102941a3577b5a5c0",
  
	  // Required
	  appName: "0x Next.js Demo App",
  
	  // Optional
	  appDescription: "A Next.js demo app for 0x Swap API and ConnectKit",
	})
  );


const muiTheme = createTheme();
const theme = extendTheme();




  const wallet = new magicLink({
	apiKey: "pk_live_14E13E3D656CB582",
	type: "auth",
	// specify which Oauth providers to enable
	oauthOptions: {
	  providers: ["google", "facebook", "github", "bitbucket","twitter","linkedin"],
	},
  });

const activeChain = 'mumbai';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
		<ThemeProvider theme={muiTheme}>
		<WagmiConfig config={config}>
		<ConnectKitProvider>
		<ThirdwebProvider activeChain={activeChain}
		 supportedWallets={[
		   metamaskWallet(),
		   coinbaseWallet(),
		   walletConnect(),
		   localWallet(),
		   paperWallet({
			 paperClientId: "672c3881-c0f0-4d7f-a952-cdda78c4d869",
		   }),
		  wallet,
		  ]}
		>
		    <Component 
         {...pageProps} />
		</ThirdwebProvider>
		</ConnectKitProvider>
		</WagmiConfig>
		</ThemeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
