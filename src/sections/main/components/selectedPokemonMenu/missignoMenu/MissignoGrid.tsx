import { useEffect, useState } from "react";
import { getSVPokemonsRequest } from "../../../../../api";
import { MissignoDTO } from './MissignoDTO';

import '../../../styles/missignoMenu/missignoGrid.css';
import { MissignoCard } from "./missignoCard/MissignoCard";

export const MissignoGrid = () => {

    const [missignoDTOArr, setMissignoDTOArr] = useState<MissignoDTO[]>();
    

    useEffect(() => {
        
        const inicio = performance.now();

        const asyncWrapper = async () => {
            const request = await getSVPokemonsRequest();
            if (request.status === 200) {
                setMissignoDTOArr(request.data);
                console.log(performance.now() - inicio / 1000);
            }
        }
        asyncWrapper();
    }, [])

    console.log(missignoDTOArr);


    return (
        <ul className="missigno-grid">
            {
                missignoDTOArr?.length === 0 ? <p>AAAAA</p>
                    :
                    missignoDTOArr?.map((missignoDTO) => (
                        <MissignoCard dto={missignoDTO} key={missignoDTO.id} />
                    ))
            }
        </ul>
    );
}