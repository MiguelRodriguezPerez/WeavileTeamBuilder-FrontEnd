import { WeavileLogo } from './WeavileLogo';
import { LoginHeaderDiv } from '../../sections/login/components/LoginHeaderDiv';

import styles from '../styles/weavileHeader.module.css';

export const WeavileHeader = () => {
    return (
        <header className={ styles['weavile-header'] }>
            <WeavileLogo />
            <LoginHeaderDiv/>
        </header>
    );
}