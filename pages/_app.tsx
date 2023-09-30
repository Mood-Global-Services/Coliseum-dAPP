import "@/styles/globals.css";
import i18n from "../utils/i18n";
import { useTranslation, I18nextProvider } from "react-i18next";
import type { AppProps } from "next/app";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { useEffect, useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { WagmiConfig, createConfig } from "wagmi";
import { polygonMumbai, polygon, mainnet } from "wagmi/chains";
import { Magic } from "magic-sdk";
import { MagicLink } from "@thirdweb-dev/wallets";
import MenuIPadPro1291 from "../components/menumobile";
import PortalPopup from "../components/portalpopup";

import 'bootstrap/dist/css/bootstrap.min.css';



const chains = [polygonMumbai, polygon, mainnet];

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

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if(typeof window !== "undefined"){
      require('bootstrap/dist/js/bootstrap.min.js')
    }
  },[]
  );


  return (
    
    <I18nextProvider i18n={i18n}>
      <div>
        <ChakraProvider theme={theme}>
          <ThemeProvider theme={muiTheme}>
            <WagmiConfig config={config}>
              <ConnectKitProvider>
                <ThirdwebProvider
                  activeChain={"mumbai"}
                  supportedWallets={[
                    metamaskWallet(),
                    coinbaseWallet(),
                    walletConnect(),
                    localWallet(),
                    paperWallet({
                      paperClientId: "f3938e08-d7dc-4bf2-8244-e1cfc3401550",
                    }),
                    magicLink({
                      apiKey: "pk_live_14E13E3D656CB582",
                      type: "auth",
                      oauthOptions: {
                        providers: ["github"],
                      },
                    }),
                  ]}
                >
                  {mounted && <Component {...pageProps} />}
                 
                </ThirdwebProvider>
              </ConnectKitProvider>
            </WagmiConfig>
          </ThemeProvider>
        </ChakraProvider>
      </div>
    </I18nextProvider>
  );
}
