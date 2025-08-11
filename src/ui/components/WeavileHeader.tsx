import { WeavileLogo } from './WeavileLogo';

import styles from '../styles/weavileHeader.module.css';

export const WeavileHeader = () => {
    return (
        <header className={ styles['weavile-header'] }>
            <WeavileLogo />
            {/* <LoginHeaderDiv/> */}
        </header>
    );
}