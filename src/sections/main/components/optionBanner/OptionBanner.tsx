import { ChangeTeamButton } from './ChangeTeamButton';
import { ShareLink } from './ShareLink';

import style from '../../styles/optionBanner/optionBanner.module.css'
import { CurrentTeamInfoButton } from './CurrentTeamInfoButton';

export const OptionBanner = () => {
    return (
        <section className={style['option-banner']}>
            <CurrentTeamInfoButton/>
            <ChangeTeamButton />
            {/* <ShareLink /> */}
        </section>
    );
}