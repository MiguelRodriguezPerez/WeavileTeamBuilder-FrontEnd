Se pueden dar casos en los que los datos que solicites a la cache 
no se carguen aunque esten presentes en dicha cache.

Ya te ha pasado con missignoGrid y la solución fue comprobar que 
el objeto data de useQuery (No confundir con su propiedad data (data.data))
no es undefined. Ejemplo:

export const MissignoGrid = ({ search = '' }: { search: string }) => {

    const { data, isLoading } = useQuery({
        queryKey: ['missignoGrid'],
        queryFn: getSVPokemonsRequest,
    });

    if (!data || isLoading) return <WeavileLoading/>

Probablemente tenga que ver que el persistor de la cache sea asíncrono