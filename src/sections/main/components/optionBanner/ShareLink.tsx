
import styles from '../../styles/optionBanner/shareLink.module.css';

export const ShareLink = () => {

    // TODO: Recibir link actualizado

    // const [linkText, setLinkText] = useState<string>('dasfawesfasdggfnsfgjngager');

    // const copyLinkToClipBoard = () => {
    //     navigator.clipboard.writeText(linkText);
    // }

    return (
        <div className={ styles['share-link'] }>
            <input type="text" readOnly={ true } value={ '3' } />
            <input type="image" onClick={ () => console.log('hello') } 
                src="/images/main/optionBanner/copy_icon.png" alt="copy.png" />
        </div>
    );
}