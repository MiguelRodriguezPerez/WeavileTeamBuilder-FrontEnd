import { useState } from "react";

import '../../../styles/selectedMemberMenu/missignoMenu.css'
import { MissignoGrid } from "./";



export const MissignoMenu = () => {
    const [search, setSearch] = useState<string>('');

    return (
        <section className="missigno-menu">
            <div className="missigno-header">
                <h3>Choose a pokemon</h3>
                <input type="text" onChange={(e) => { setSearch( e.target.value ) }} />
            </div>
            <MissignoGrid search={search}/>
        </section>
    );
}