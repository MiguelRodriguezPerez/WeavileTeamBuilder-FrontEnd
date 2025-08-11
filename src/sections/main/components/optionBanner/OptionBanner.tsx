import { ChangeTeamButton } from './ChangeTeamButton';
import { CurrentTeamInfoButton } from './CurrentTeamInfoButton';


import style from '../../styles/optionBanner/optionBanner.module.css';


export const OptionBanner = () => {
    return (
        <section className={style['option-banner']}>
            <CurrentTeamInfoButton/>
            <ChangeTeamButton />
            {/* <ShareLink /> */}
        </section>
    );
}