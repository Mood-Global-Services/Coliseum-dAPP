import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  paperWallet,
  magicLink,
} from "@thirdweb-dev/react";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.





const activeChain = "mumbai";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}
     supportedWallets={[
       metamaskWallet(),
       coinbaseWallet(),
       walletConnect(),
       localWallet(),
       paperWallet({
         paperClientId: "672c3881-c0f0-4d7f-a952-cdda78c4d869",
       }),
       magicLink({
         apiKey: "pk_live_14E13E3D656CB582",
         oauthOptions: {
           providers: [
             "google",
             "facebook",
             "twitter",
             "apple",
           ],
         },
       }),
      ]}
    >
    <Auth0Provider
    domain="dev-47ue6putburnnyx3.us.auth0.com"
    clientId="zow1WMxXOg0PbR8WoMLm06VShIJC7xqA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ChakraProvider>
      <App />
      </ChakraProvider>
      </Auth0Provider>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
