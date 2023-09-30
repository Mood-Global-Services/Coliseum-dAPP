import type { NextPage } from 'next';
import { useCallback } from 'react';
import {useRouter} from "next/router";
import styles from './menu.module.css';
import Headlogo from '../public/logs.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import Image from 'next/image';

import Github from '../public/mdi_github.svg';
import Twitter from '../public/mdi_twitter.svg';
import Linkedin from '../public/entypo-social_linkedin-with-circle.svg';
import Notion from '../public/mingcute_notion-fill.svg';

import localFont from 'next/font/local';

import Wallet from '../public/mingcute_wallet-4-fill.svg';
import User from '../public/rrr.jpg';
import Circles from '../public/Group 6.png';
import Snake from '../public/Vector 19.png';

import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	PopoverAnchor,
  } from '@chakra-ui/react'

  import { Button, ButtonGroup } from '@chakra-ui/react'

  import { ConnectKitButton } from "connectkit";

  import Home from '../public/Home.png';
  import Trade from '../public/Trade.png';
  import Stake from '../public/Stake.png';
  import Profile from '../public/Profile.png';
  import About from '../public/About.png';
  import LanguageSelector from './selectcoun';


const myFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/MonumentExtended-Regular.otf"});
const secondFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Light.otf"});
const thirdFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Medium.otf"});
const fourthFont = localFont({src: "../public/font/MonumentExtended-FreeForPersonalUse/NeueMontreal-Regular.otf"});




type MenuIPadPro1291Type = {
  	onClose?: () => void;
}

const MenuIPadPro1291:NextPage<MenuIPadPro1291Type> = ({ onClose }) => {
  	const router = useRouter();
  	
  	const onHomeTextClick = useCallback(() => {
    		router.push("/");
  	}, [router]);
  	
  	
  	const onTradeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onStakeTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onAboutTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	
  	const onProfileTextClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.menuIpadPro1291}>
      			<img className={styles.unionIcon1} alt="" src="Union.svg" />
      			<Image className={styles.maskGroupIcon} alt="" src={Headlogo} />
      			<div style={myFont.style}   className={styles.home} onClick={onHomeTextClick}><a href='/'>
				  <Image style={{margin:"auto"}} src={Home} alt='' />
					</a></div>
      			<div style={myFont.style}    className={styles.trade} onClick={onTradeTextClick}><a href='/trade'>
				  <Image style={{margin:"auto"}}  src={Trade} alt='' />
					</a></div>
      			<div  style={myFont.style}   className={styles.stake} onClick={onStakeTextClick}><a href='/stake'>
				  <Image style={{margin:"auto"}}  src={Stake} alt='' />
					</a></div>
      			<div style={myFont.style}    className={styles.about} onClick={onAboutTextClick}><a href='/profile'>
				  <Image style={{margin:"auto"}}  src={Profile} alt='' />
					</a></div>
      			<div style={myFont.style}    className={styles.profile} onClick={onProfileTextClick}><a href='/about'>
				  <Image style={{margin:"auto"}}  src={About} alt='' />
					</a></div>
      			<div className={styles.menuIpadPro1291Child} />
      			<div className={styles.menuIpadPro1291Item} />
      			<div className={styles.menuIpadPro1291Inner} />
      			<div className={styles.rectangleDiv} />
      			<div className={styles.mingcutewallet4FillParent} style={{left: "55px",right:'21px'}}>
        				<Image className={styles.mingcutewallet4FillIcon1} alt="" src={Wallet} />
        				<div className={styles.connectWallet}>
				
						
                        <Popover>
  <PopoverTrigger>
    <Button  style={fourthFont.style}>Connect Wallet</Button>
  </PopoverTrigger>
  <PopoverContent style={{marginBottom:'18px'}}>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody> <ConnectKitButton
						customTheme={{
							"--ck-connectbutton-background": "#fbec50",
							"--ck-connectbutton-color": "#373737",
						  }}
						  
						/> </PopoverBody>
<PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody> 
	<ConnectWallet
		btnTitle='Tita Login'
						style={{background:'yellow',fontWeight:'500',fontFamily:'__thirdFont_3ea4f2',border:'none',color:'black'}}
						/>
		 </PopoverBody>




  </PopoverContent>
</Popover>




					
						</div>

      			</div>
      			
    		</div>);
};

export default MenuIPadPro1291;
