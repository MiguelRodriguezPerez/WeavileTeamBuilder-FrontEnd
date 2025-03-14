import { useState } from "react";

import '../../styles/optionBanner/shareLink.css'

export const ShareLink = () => {

    // TODO: Recibir link actualizado

    const [linkText, setLinkText] = useState<string>('dasfawesfasdggfnsfgjngager');

    const copyLinkToClipBoard = () => {
        navigator.clipboard.writeText(linkText);
    }

    return (
        <div className="share-link">
            <input type="text" readOnly={ true } value={ linkText } />
            <input type="image" onClick={ copyLinkToClipBoard } 
                src="/images/main/optionBanner/copy_icon.png" alt="copy.png" />
        </div>
    );
}