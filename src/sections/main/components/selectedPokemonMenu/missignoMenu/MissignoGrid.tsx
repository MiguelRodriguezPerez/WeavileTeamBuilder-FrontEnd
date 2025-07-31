import { useEffect, useState } from "react";
import { getSVPokemonsRequest } from "../../../../../api/pokemonData";
import { useSearchByName } from "../../../hooks/missignoGrid";
import { MissignoDTO } from './MissignoDTO';
import { MissignoCard } from "./missignoCard/MissignoCard";

import { useQueryClient } from "@tanstack/react-query";
import { WeavileLoading } from "../../../../../ui/components";
import styles from '../../../styles/missignoMenu/missignoGrid.module.css';
import { PokemonTeam } from "../../../../../domain/teamMemberEntities";
import useWeavileStore from "../../../../../globalContext/WeavileStore";


export const MissignoGrid = ({ search = '' }: { search: string }) => {

    const [ missignoDTOArr, setMissignoDTOArr ] = useState<MissignoDTO[]>();
    const { filteredArr } = useSearchByName(search, missignoDTOArr!);

    const queryClient = useQueryClient();

    const selectedTeam: PokemonTeam | null = useWeavileStore((state) => state.selectedPokemonTeam);
    const allQueries = queryClient.getQueryCache().getAll();
        allQueries.forEach(query => {
        console.log('Query key:', query.queryKey);
    });

    useEffect(() => {
        const asyncWrapper = async () => {
            const request = await getSVPokemonsRequest();
            if (request.status === 200) setMissignoDTOArr(request.data); 
        }
        asyncWrapper();
    }, []);

    if(!filteredArr) return <WeavileLoading/>

    return (
        <ul className={ styles['missigno-grid'] }>
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