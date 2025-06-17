import { useState } from "react";
import { MissignoGrid } from "./";

import styles from  '../../../styles/missignoMenu/missignoMenu.module.css'


export const MissignoMenu = () => {
    const [ search, setSearch ] = useState<string>('');

    return (
        <section>
            <div>
                <h3 className={ styles['missigno-header-h3'] }>Choose a pokemon</h3>
                <input type="text"  
                    className={ styles['missigno-header-input'] }
                    onChange={(e) => { setSearch( e.target.value ) }} />
            </div>
            <MissignoGrid search={ search }/>
        </section>
    );
}