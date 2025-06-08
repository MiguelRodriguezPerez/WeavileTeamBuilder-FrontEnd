import { toPascalCase } from "../../../../../globalHelpers";

export const MemberAbility = ({ ability } : { ability: string}) => {
    return (
        <p className='pokemon-ability'> Ability <br /> { toPascalCase( ability )  || '-'}</p>
    );
}