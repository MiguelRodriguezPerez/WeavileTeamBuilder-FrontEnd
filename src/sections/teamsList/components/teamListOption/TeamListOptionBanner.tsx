import { CreateNewTeamButton } from '../teamListHeading/CreateNewTeamButton';
import { ShareLink } from '../../../main/components/optionBanner';

import '../../../main/styles/optionBanner/optionBanner.css'
import { HomeButton } from './HomeButton';

export const TeamListOptionBanner = () => {
    return (
        <section className='option-banner'>
            <HomeButton />
            <ShareLink />
        </section>
    );
}