import { ShareLink } from '../../../main/components/optionBanner';
import { HomeButton } from './HomeButton';

import styles from '../../../main/styles/optionBanner/optionBanner.module.css';

export const TeamListOptionBanner = () => {
    return (
        <section className={styles['option-banner']}>
            <HomeButton />
            <ShareLink />
        </section>
    );
}