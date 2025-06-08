import { toPascalCase } from "../../../../../globalHelpers";

export const MemberName = ({ name } : { name: string }) => {
    
    return (
        <p className='pokemon-name'>{ toPascalCase(name) }</p>
    );
}