import { useQuery } from "@tanstack/react-query";
import { PokemonDataApiFactory } from "../../../../../../api/requests/pokemonDataApi";
import { WeavileLoading } from "../../../../../ui/components";
import { filterMissignoGrid } from "../../../helpers/missigno";
import styles from '../../../styles/missignoMenu/missignoGrid.module.css';
import { MissignoCard } from "./missignoCard/MissignoCard";


export const MissignoGrid = ({ search = '' }: { search: string }) => {

    const pokemonDataApi = PokemonDataApiFactory();

    const { data, isLoading } = useQuery({
        queryKey: ['missignoGrid'],
        queryFn: () => pokemonDataApi.allSVPokemon().then(res => res.data),
    });

    /* Endpoint correcto. Tienes que depurar el lado servidor */
    // console.log(`${import.meta.env.VITE_SERVER_URL}`);
    

    /* No soy capaz de explicar porque, pero originalmente usabas únicamente la variable isLoading para definir
    si mostrabas el icono de cargar datos o no. Probablemente tenga que ver que el persistor de la cache 
    es asíncrono */
    if (!data || isLoading) return <WeavileLoading/>

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