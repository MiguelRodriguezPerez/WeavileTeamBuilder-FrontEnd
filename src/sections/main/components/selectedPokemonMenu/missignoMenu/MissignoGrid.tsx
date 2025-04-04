import { useEffect, useState } from "react";
import { getSVPokemonsRequest } from "../../../../../api";
import { MissignoDTO } from './MissignoDTO';

import '../../../styles/missignoMenu/missignoGrid.css';
import { MissignoCard } from "./missignoCard/MissignoCard";
import { useSearchByName } from "../../../hooks/missignoGrid";

export const MissignoGrid = ({ search = '' } : { search : string} ) => {

    const [missignoDTOArr, setMissignoDTOArr] = useState<MissignoDTO[]>();
    const { filteredArr } = useSearchByName(search,missignoDTOArr!);

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
    }, []);

    // useEffect(() => {
    //     if (search.trim() === '') setFilteredArr(missignoDTOArr);
    //     else {
    //         const filtered = filteredArr!.filter(pokemon =>
    //             pokemon.name.toLowerCase().includes(search.toLowerCase())
    //         );
    //         setFilteredArr(filtered);
    //     }
    // },[search])

    return (
        <ul className="missigno-grid">
            {
                filteredArr?.length === 0 ? <p>AAAAA</p>
                    :
                    filteredArr?.map((missignoDTO) => (
                        <MissignoCard dto={missignoDTO} key={missignoDTO.id} />
                    ))
            }
        </ul>
    );
}