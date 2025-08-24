import { useQuery } from "@tanstack/react-query";
import { getSVPokemonsRequest } from "../../../../../api/pokemonData";
import { WeavileLoading } from "../../../../../ui/components";
import { filterMissignoGrid } from "../../../helpers/missigno";
import styles from '../../../styles/missignoMenu/missignoGrid.module.css';
import { MissignoCard } from "./missignoCard/MissignoCard";
import { sortAlphabetically } from "../../../../../globalHelpers/entities";


export const MissignoGrid = ({ search = '' }: { search: string }) => {

    const { data, isLoading } = useQuery({
        queryKey: ['missignoGrid'],
        queryFn: getSVPokemonsRequest,
    });
    

    /* No soy capaz de explicar porque, pero originalmente usabas únicamente la variable isLoading para definir
    si mostrabas el icono de cargar datos o no. Probablemente tenga que ver que el persistor de la cache 
    es asíncrono */
    if (!data || isLoading) return <WeavileLoading/>

    return (
        <ul className={ styles['missigno-grid'] }>
            {
                data.data &&
                sortAlphabetically( filterMissignoGrid(data!.data, search) )
                    .map((pokemon) => (
                        <MissignoCard dto={pokemon} key={pokemon.name} />
                ))
            }
        </ul>
    );
}