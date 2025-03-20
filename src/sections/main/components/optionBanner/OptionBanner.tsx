import '../../styles/optionBanner/optionBanner.css'
import '/src/commonStyles/buttons.css'
import { ShareLink } from './ShareLink';

export const OptionBanner = () => {
    return (
        <section className='option-banner'>
            <button className='weavile-button'>Change team</button>
            <ShareLink/>
        </section>
    );
}