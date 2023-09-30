import type { NextPage } from 'next';
import styles from './tool.module.css';

type ToolTipType = {
  	onClose?: () => void;
}

const ToolTip:NextPage<ToolTipType> = ({ onClose }) => {
  	
  	return (
    		<div className={styles.toolTip}>
      			<div className={styles.toolTipChild} />
      			<div className={styles.loremIpsumDolor1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at luctus turpis hendrerit non. Praesent sit amet ligula id orci venenatis auctor.</div>
    		</div>);
};

export default ToolTip;
