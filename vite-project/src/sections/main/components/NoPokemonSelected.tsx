import '../styles/selectedPokemon.css'

export const NoPokemonSelected = () => {
    return (
        <>
            <div className='selected-pokemon-sprite'>
                <img src="/images/main/missigno.png" className='heading-pokemon-sprite'/>
            </div>
            <div className='selected-pokemon-info'>
                <p className='pokemon-name'>-</p>
                <p className='pokemon-ability'>Habilidad: <br/></p>
            </div>
            
        </>
        
    );
}