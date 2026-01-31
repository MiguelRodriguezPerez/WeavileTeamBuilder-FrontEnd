import { useQuery } from "@tanstack/react-query";
import { PokemonDataApiFactory } from "../../../../../../api/requests/pokemonDataApi";
import { WeavileLoading } from "../../../../../ui/components";
import { filterMissignoGrid } from "../../../helpers/missigno";
import styles from '../../../styles/missignoMenu/missignoGrid.module.css';
import { MissignoCard } from "./missignoCard/MissignoCard";


export const MissignoGrid = ({ search = '' }: { search: string }) => {

    const pokemonDataApi = PokemonDataApiFactory();

    /* Te están llegando solo las filas de los pokemón disponibles en sv. Esto es porque localStorage
    no puede persistir todas las filas porque pesan más de 5MB. 
    
    Tienes que implementar indexedDB y de alguna manera integrarlo en tanstack*/

    const { data, isLoading, status } = useQuery({
        queryKey: ['missignoGrid'],
        queryFn: () => pokemonDataApi.allMissignoGridPokemonDtoAvaliableInSV().then(res => res.data),
        staleTime: Infinity,
        gcTime: Infinity
    });

    

    /* No soy capaz de explicar porque, pero originalmente usabas únicamente la variable isLoading para definir
    si mostrabas el icono de cargar datos o no. Probablemente tenga que ver que el persistor de la cache 
    es asíncrono */
    if (status !== 'success' || isLoading) return <WeavileLoading/>

    return (
        <ul className={ styles['missigno-grid'] }>
            {
                data &&
                filterMissignoGrid(data, search)
                    .map((pokemon, index) => (
                        <MissignoCard dto={pokemon} key={index} />
                ))
                    
            }
        </ul>
    );
}