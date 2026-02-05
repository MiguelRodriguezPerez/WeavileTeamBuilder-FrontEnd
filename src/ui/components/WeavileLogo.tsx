import { useEffect, useState } from 'react';
import styles from '../styles/weavileHeader.module.css';

import { useWindowSize } from 'react-use';

export const WeavileLogo = () => {

    const [ measureState, setMeasureState ] = useState({ width: 100, height: 100});
    const { width } = useWindowSize();

    useEffect(() => {
        if ( width > 700 ) setMeasureState({ width: 100, height: 100})
        else setMeasureState({ width: 61, height: 61})
    }, [width]);


    return (
        <img src="/images/ui/logoVersions/logo2.webp" alt="logo2.png" className={ styles['weavile-logo'] } 
           height={ measureState.height } width={ measureState.width }
        />
    );
}