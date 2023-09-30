import type { NextPage } from 'next';
import { useCallback } from 'react';
import styles from './minting.module.css';
import Image from 'next/image';
import Logo from '../public/Group 7.svg';
import CommitLogo from '../public/Group 1000000931.svg';
import Tokens from '../public/Ellipse 74.svg';
import Arrow from '../public/ri_arrow-up-s-line.svg';
import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/Ellipse 59.svg';
import Headlogo from '../public/logo.png';
import Circles from '../public/Group 6.png';
import { ConnectWallet } from '@thirdweb-dev/react';


import localFont from 'next/font/local';


const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});





const HomepageTradeSubpage:NextPage = () => {
  	
  	const onBackToTradeBtnClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onHomeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutText1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onEllipseIcon1Click = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	return (
    		<div className={styles.homepageTradeSubpage}>


      			<div className={styles.homepageTradeSubpageChild} />
				


      			<Image className={styles.homepageTradeSubpageItem} alt="" src={Circles} />

      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			
      			<div className={styles.homepageTradeSubpageInner} />
				
      			<div style={myFont.style} className={styles.titaEtf}>Tita ETF</div>
      			<div className={styles.wrapper}>
        				<div className={styles.div}>128.68</div>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>1G</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>1M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>3M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>6M</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>1A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>3A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>5A</div>
        				</div>
        				<div className={styles.gWrapper}>
          					<div className={styles.g}>YTD</div>
        				</div>
        				<div className={styles.maxWrapper}>
          					<div className={styles.g}>MAX</div>
        				</div>
      			</div>
      			<div className={styles.ter033}>TER → 0.33%</div>
      			<div className={styles.vectorParent}>
        				<img className={styles.vectorIcon1} alt="" src="Vector.svg" />
        				<div className={styles.div}>
          					<span>{`+1,03  `}</span>
          					<span className={styles.span}>|</span>
          					<span> +0,83%</span>
        				</div>
      			</div>
      			<div className={styles.frame1}>
        				<div className={styles.lineParent}>
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
          					<div className={styles.frameChild} />
        				</div>
        				<img className={styles.groupIcon5} alt="" src="Group.svg" />
        				<img className={styles.groupIcon6} alt="" src="Group.svg" />
        				<img className={styles.groupIcon7} alt="" src="Group.svg" />
        				<img className={styles.groupIcon8} alt="" src="Group.svg" />
        				<img className={styles.frameChild9} alt="" src="Vector 7.svg" />
        				<img className={styles.frameChild10} alt="" src="Vector 6.svg" />
      			</div>
      			<div className={styles.rectangleDiv} />
      			<div className={styles.backToTradeBtn1} onClick={onBackToTradeBtnClick}>
        				<img className={styles.pharrowDownBoldIcon1} alt="" src="ph:arrow-down-bold.svg" />
        				<div className={styles.g}>Back to trade</div>
      			</div>
      			<div className={styles.swapMintburn}>
        				<div className={styles.swapMintburnChild} />
        				<div className={styles.groupParent}>
          					<Image className={styles.frameChild11} src={CommitLogo} alt={CommitLogo} />
          					<div className={styles.g}>Commit Mint</div>
        				</div>
        				<div className={styles.swapMintburnItem} />
        				<div className={styles.swapMintburnInner} />
        				<div className={styles.swapMintburnChild1} />
        				<div className={styles.antDesignswapOutlined}>
          					<div className={styles.max1}>max</div>
        				</div>
        				<div className={styles.mint}>Mint</div>
        				<div className={styles.burn}>Burn</div>
        				<div className={styles.swapMintburnChild2} />
        				<div className={styles.swap}>Swap</div>
        				<button className={styles.mintburn}>Mint/Burn</button>
        				<div className={styles.youPay}>you pay</div>
        				<div className={styles.totalCost}>Total cost</div>
        				<div className={styles.div2}>$13.85</div>
        				<div className={styles.expectedTokensMinted1}>Expected Tokens Minted</div>
        				<div className={styles.div3}>$12.45</div>
        				<div className={styles.expectedEquivalentExpousure1}>Expected Equivalent Expousure</div>
        				<div className={styles.div4}>$0.21</div>
        				<div className={styles.frameDiv} />
        				<div className={styles.balance323400}>balance: $3,234.00</div>
        				<div className={styles.expectedPrice124681}>Expected Price: $124.68</div>
        				<img className={styles.swapMintburnChild3} alt="" src="Vector 12.svg" />
        				<img className={styles.swapMintburnChild4} alt="" src="Vector 13.svg" />
        				<div className={styles.div5}>$
          					<span className={styles.span1}>12.45</span>
        				</div>
					
        				<div className={styles.frameGroup}>
          					<div className={styles.ellipseParent}>
            						<Image className={styles.frameChild12} alt={Tokens} src={Tokens} />
            						<div className={styles.g}>apt</div>
          					</div>
          					<Image className={styles.riarrowUpSLineIcon1} alt={Arrow} src={Arrow} />
        				</div>
						
      			</div>

				  
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.maskGroupParent}>
          					<img className={styles.maskGroupIcon1} alt="" src="Mask group.png" />
          					<div className={styles.mediaInquiresForCmaxContParent}>
            						<div className={styles.mediaInquiresForContainer}>{`All Rights Reserved - © 2023 CMax `}
              							<span className={styles.mediacmaxcom}>media@cmax.com</span>
            						</div>
            						<div className={styles.copyRight20231}>Copy Right 2023 - CMax. All Rights Reserved</div>
          					</div>
          					<div className={styles.tradeParent}>
            						<div className={styles.trade}>Trade</div>
            						<div className={styles.trade}>Stake</div>
            						<div className={styles.trade}>About</div>
            						<div className={styles.trade}>Privacy Policy</div>
            						<div className={styles.trade}>{`Terms & Conditions`}</div>
          					</div>
        				</div>
      			</div>
      			<Image className={styles.homepageTradeSubpageChild1} src={Logo} alt={Logo} />
      			<div className={styles.homeParent}>
        				<div className={styles.home} ><a href='/'>Home</a></div>
        				<div className={styles.trade1}><a href='/mint'>Trade</a></div>
        				<div className={styles.home} ><a href='/stake'>Stake</a></div>
						<div className={styles.home}><a href='/about'>About</a></div>
        				<div className={styles.home}><a href='/profile'>Profile</a></div>
      			</div>
      			<div className={styles.mingcutewallet4FillParent}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt={Wallet} src={Wallet} />
        				<ConnectWallet
						style={{textTransform:'uppercase',background:'none',fontWeight:'500'}}
						/>
      			</div>
      			<Image className={styles.homepageTradeSubpageChild2} alt={User} src={User} onClick={onEllipseIcon1Click} />
    		</div>);
};

export default HomepageTradeSubpage;
