import { getSVPokemonsRequest } from "../../../../../api/pokemonData";
import { MissignoCard } from "./missignoCard/MissignoCard";
import { useQuery } from "@tanstack/react-query";
import { WeavileLoading } from "../../../../../ui/components";
import { filterMissignoGrid } from "../../../helpers/missigno";
import styles from '../../../styles/missignoMenu/missignoGrid.module.css';


export const MissignoGrid = ({ search = '' }: { search: string }) => {

    const { data, isLoading } = useQuery({
        queryKey: ['missignoGrid'],
        queryFn: getSVPokemonsRequest
    })
    
    if (isLoading) return <WeavileLoading/>

    return (
        <ul className={ styles['missigno-grid'] }>
            {
                filterMissignoGrid(data!.data, search)
                    .map((pokemon) => (
                        <MissignoCard dto={pokemon} key={pokemon.name} />
                ))
            }
        </ul>
    );
}