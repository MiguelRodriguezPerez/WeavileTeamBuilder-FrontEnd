
export const MemberAbility = ({ ability } : { ability: string}) => {
    return (
        <p className='pokemon-ability'> Habilidad: <br /> { ability }</p>
    );
}