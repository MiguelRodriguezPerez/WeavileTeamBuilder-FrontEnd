import { useState } from "react";
import { MissignoGrid } from "./";

import styles from  '../../../styles/missignoMenu/missignoMenu.module.css'
import searchInputStyle from '../../../../../globalStyles/searchInput.module.css'
import { SearchInput } from "../pokemonMenu";


export const MissignoMenu = () => {
    
    const [ search, setSearch ] = useState<string>('');

    return (
        <section>
            <div>
                <h3 className={ styles['missigno-header-h3'] }>Choose a pokemon</h3>
                <SearchInput propSearch={ search } setPropSearch={ setSearch }/>
            </div>
            <MissignoGrid search={ search }/>
        </section>
    );
}