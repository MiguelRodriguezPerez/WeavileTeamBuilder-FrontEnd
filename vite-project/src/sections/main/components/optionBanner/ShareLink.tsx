import { useState } from "react";

import '../../styles/optionBanner/shareLink.css'

export const ShareLink = () => {

    // TODO: Recibir link actualizado

    const [linkText, setLinkText] = useState<string>('dasfawesfasdggfnsfgjngager');

    return (
        <div className="share-link">
            <textarea rows={1} value={linkText}></textarea>
            <input type="image" src="/images/main/optionBanner/copy_icon.png" alt="copy.png" />
        </div>
    );
}