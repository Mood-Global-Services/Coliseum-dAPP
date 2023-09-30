import qs from "qs";
import useSWR from "swr";
import { ConnectKitButton } from "connectkit";
import { useState, ChangeEvent } from "react";
import { formatUnits, parseUnits } from "ethers-stable";
import {
  erc20ABI,
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  type Address,
} from "wagmi";
import {
  POLYGON_TOKENS,
  POLYGON_TOKENS_BY_SYMBOL,
  MAX_ALLOWANCE,
  exchangeProxy,
} from "../../lib/constants";
import styles from "./swapping.module.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import Arrow from "../../public/ri_arrow-up-s-line.svg";
import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf",
});
const secondFont = localFont({
  src: "../../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf",
});
const thirdFont = localFont({
  src: "../../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf",
});
const fourthFont = localFont({
  src: "../../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf",
});

interface PriceRequestParams {
  sellToken: string;
  buyToken: string;
  buyAmount?: string;
  sellAmount?: string;
  takerAddress?: string;
}

export const fetcher = ([endpoint, params]: [string, PriceRequestParams]) => {
  const { sellAmount, buyAmount } = params;
  if (!sellAmount && !buyAmount) return;
  const query = qs.stringify(params);

  return fetch(`${endpoint}?${query}`).then((res) => res.json());
};

export default function PriceView({
  setPrice,
  setFinalize,
  takerAddress,
}: {
  price: any;
  setPrice: (price: any) => void;
  setFinalize: (finalize: boolean) => void;
  takerAddress: Address | undefined;
}) {
  // fetch price here
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");
  const [tradeDirection, setTradeDirection] = useState("sell");
  const [sellToken, setSellToken] = useState("wmatic");
  const [buyToken, setBuyToken] = useState("dai");

  const handleSellTokenChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSellToken(e.target.value);
  };

  function handleBuyTokenChange(e: ChangeEvent<HTMLSelectElement>) {
    setBuyToken(e.target.value);
  }

  const sellTokenDecimals = POLYGON_TOKENS_BY_SYMBOL[sellToken].decimals;

  const parsedSellAmount =
    sellAmount && tradeDirection === "sell"
      ? parseUnits(sellAmount, sellTokenDecimals).toString()
      : undefined;

  const buyTokenDecimals = POLYGON_TOKENS_BY_SYMBOL[buyToken].decimals;

  const parsedBuyAmount =
    buyAmount && tradeDirection === "buy"
      ? parseUnits(buyAmount, buyTokenDecimals).toString()
      : undefined;

  const { isLoading: isLoadingPrice } = useSWR(
    [
      "/api/price",
      {
        sellToken: POLYGON_TOKENS_BY_SYMBOL[sellToken].address,
        buyToken: POLYGON_TOKENS_BY_SYMBOL[buyToken].address,
        sellAmount: parsedSellAmount,
        buyAmount: parsedBuyAmount,
        takerAddress,
      },
    ],
    fetcher,
    {
      onSuccess: (data) => {
        setPrice(data);
        if (tradeDirection === "sell") {
          setBuyAmount(formatUnits(data.buyAmount, buyTokenDecimals));
        } else {
          setSellAmount(formatUnits(data.sellAmount, sellTokenDecimals));
        }
      },
    }
  );

  return (
    <form>
      <div className=" p-4 rounded-md mb-3">
        <div className={styles.property1swap}>
          <div className={styles.mingcutewallet4FillParent}></div>
          <div className={styles.property1swapItem} />
          <div style={secondFont.style} className={`${styles.youPay}`}>
            <h5 className="monument text-xl text-white">You Pay:</h5>
          </div>
          <div style={secondFont.style} className={styles.youReceive}>
            <h5 className="monument text-xl text-white">You Recieve:</h5>
          </div>
          <div style={secondFont.style} className={`${styles.balance323400}`}>
            <h5 className="monument text-xl text-white">Balance $0</h5>
          </div>
          <div style={secondFont.style} className={styles.div}>
            <h5 className="monument text-sm text-gray-500">= $23.00.00</h5>
          </div>
          <div style={secondFont.style} className={styles.div1}>
          <h5 className="monument text-sm text-gray-500">= $13.00.00</h5>
          </div>

          <div className={styles.frameDiv} />
          <div className={styles.div2}>
            <span className={styles.span}>
              <input
                id="sell-amount"
                style={{
                  background: "none",
                  width: "70%",
                  borderRadius: "15px",
                  border: "solid 1px #ffffff",
                  fontSize: "18px",
                  padding: "3% 3%"
                }}
                value={sellAmount}
                placeholder="0.00"
                onChange={(e) => {
                  setTradeDirection("sell");
                  setSellAmount(e.target.value);
                }}
              />
            </span>
          </div>
          <div className={styles.div3}>
            <span className={styles.span}>
              <input
                id="buy-amount"
                value={buyAmount}
                style={{
                  background: "none",
                  width: "70%",
                  borderRadius: "15px",
                  border: "solid 1px #ffffff",
                  fontSize: "18px",
                  padding: "3% 3%"
                }}
                disabled
                onChange={(e) => {
                  setTradeDirection("buy");
                  setBuyAmount(e.target.value);
                }}
              />
            </span>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.ellipseParent}>
              <img
                id="swapimg"
                alt={sellToken}
                className={styles.frameChild}
                src={POLYGON_TOKENS_BY_SYMBOL[sellToken].logoURI}
              />
              <div>
                <select
                  value={sellToken}
                  name="sell-token-select"
                  id="sell-token-select"
                  style={{ background: "none" }}
                  className={styles.swapNow}
                  onChange={handleSellTokenChange}
                >
                  {/* <option value="">--Choose a token--</option> */}
                  {POLYGON_TOKENS.map((token) => {
                    return (
                      <option
                        style={{ background: "black" }}
                        key={token.address}
                        value={token.symbol.toLowerCase()}
                      >
                        {token.symbol}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <Image className={styles.riarrowUpSLineIcon2} alt="" src={Arrow} />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <img
                id="swapimg"
                alt={buyToken}
                className={styles.frameChild}
                src={POLYGON_TOKENS_BY_SYMBOL[buyToken].logoURI}
              />
              <select
                name="buy-token-select"
                id="buy-token-select"
                value={buyToken}
                className={styles.swapNow}
                style={{ background: "none" }}
                onChange={(e) => handleBuyTokenChange(e)}
              >
                {/* <option value="">--Choose a token--</option> */}
                {POLYGON_TOKENS.map((token) => {
                  return (
                    <option
                      style={{ background: "black" }}
                      key={token.address}
                      value={token.symbol.toLowerCase()}
                    >
                      {token.symbol}
                    </option>
                  );
                })}
              </select>
            </div>
            <Image className={styles.riarrowUpSLineIcon2} alt="" src={Arrow} />
          </div>
          <div className={styles.ter033Wrapper}>
            <div style={{ fontFamily: "Inter" }} className={styles.ter033}>
              TER → 0.33%
            </div>
          </div>
          <div className={styles.antDesignswapOutlined}>
            <img className={styles.vectorIcon1} alt="" src="Vector.svg" />
          </div>
          <div className={styles.antDesignswapOutlined1}>
            <div className={styles.max}>max</div>
          </div>
        </div>
      </div>

      {takerAddress ? (
        <ApproveOrReviewButton
          sellTokenAddress={POLYGON_TOKENS_BY_SYMBOL[sellToken].address}
          takerAddress={takerAddress}
          onClick={() => {
            setFinalize(true);
          }}
        />
      ) : (
        <ConnectKitButton.Custom>
          {({
            isConnected,
            isConnecting,
            show,
            hide,
            address,
            ensName,
            chain,
          }) => {
            return (
              <button
                onClick={show}
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                {isConnected ? address : "Connect Wallet"}
              </button>
            );
          }}
        </ConnectKitButton.Custom>
      )}

      {isLoadingPrice && (
        <div className="text-center mt-2">Fetching the best price...</div>
      )}
    </form>
  );
}

function ApproveOrReviewButton({
  takerAddress,
  onClick,
  sellTokenAddress,
}: {
  takerAddress: Address;
  onClick: () => void;
  sellTokenAddress: Address;
}) {
  // 1. Read from erc20, does spender (0x Exchange Proxy) have allowance?
  const { data: allowance, refetch } = useContractRead({
    address: sellTokenAddress,
    abi: erc20ABI,
    functionName: "allowance",
    args: [takerAddress, exchangeProxy],
  });

  // 2. (only if no allowance): write to erc20, approve 0x Exchange Proxy to spend max integer
  const { config } = usePrepareContractWrite({
    address: sellTokenAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [exchangeProxy, MAX_ALLOWANCE],
  });

  const {
    data: writeContractResult,
    writeAsync: approveAsync,
    error,
  } = useContractWrite(config);

  const { isLoading: isApproving } = useWaitForTransaction({
    hash: writeContractResult ? writeContractResult.hash : undefined,
    onSuccess(data) {
      refetch();
    },
  });

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  if (allowance === 0n && approveAsync) {
    return (
      <>
        <button
          type="button"
          style={fourthFont.style}
          className={styles.mingcutewallet4FillParent}
          onClick={async () => {
            const writtenValue = await approveAsync();
          }}
        >
          
          <h5 className="text-xl text-blue-950 absolute z-50">SWAP NOW</h5>
        </button>
      </>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
    >
      Review Trade
    </button>
  );
}
