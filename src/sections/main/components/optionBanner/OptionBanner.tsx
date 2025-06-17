import { ChangeTeamButton } from './ChangeTeamButton';
import { ShareLink } from './ShareLink';

import style from '../../styles/optionBanner/optionBanner.module.css'

export const OptionBanner = () => {
    return (
        <section className={style['option-banner']}>
            <ChangeTeamButton />
            <ShareLink />
        </section>
    );
}