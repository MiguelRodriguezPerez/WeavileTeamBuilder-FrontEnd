import { OptionButton } from './OptionButton';
import { ShareLink } from './ShareLink';

import '../../styles/optionBanner/optionBanner.css'

export const OptionBanner = () => {
    return (
        <section className='option-banner'>
            <OptionButton/>
            <ShareLink/>
        </section>
    );
}