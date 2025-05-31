import { useEffect, useState } from "react";
import { getSVPokemonsRequest } from "../../../../../api/pokemonData";
import { MissignoDTO } from './MissignoDTO';
import { MissignoCard } from "./missignoCard/MissignoCard";
import { useSearchByName } from "../../../hooks/missignoGrid";

import '../../../styles/missignoMenu/missignoGrid.css';
import { WeavileLoading } from "../../../../../ui/components";


export const MissignoGrid = ({ search = '' }: { search: string }) => {

    const [missignoDTOArr, setMissignoDTOArr] = useState<MissignoDTO[]>();
    const { filteredArr } = useSearchByName(search, missignoDTOArr!);

    useEffect(() => {
        const asyncWrapper = async () => {
            const request = await getSVPokemonsRequest();
            if (request.status === 200) setMissignoDTOArr(request.data); 
        }
        asyncWrapper();
    }, []);

    if(!filteredArr) return <WeavileLoading/>

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