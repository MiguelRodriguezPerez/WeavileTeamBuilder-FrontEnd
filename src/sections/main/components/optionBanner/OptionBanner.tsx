import '../../styles/optionBanner/optionBanner.css'
import '/styles/buttons.css'
import { ShareLink } from './ShareLink';

export const OptionBanner = () => {
    return (
        <section className='option-banner'>
            <button className='weavile-button'>Change team</button>
            <ShareLink/>
        </section>
    );
}