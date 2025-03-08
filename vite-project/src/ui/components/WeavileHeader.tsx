import { LoginHeaderDiv } from '../../sections/login/components/LoginHeaderDiv';
import { WeavileLogo } from './WeavileLogo';

import '../styles/weavileHeader.css'

export const WeavileHeader = () => {
    return (
        <header className='weavile-header'>
            <WeavileLogo />
            <LoginHeaderDiv />
        </header>
    );
}