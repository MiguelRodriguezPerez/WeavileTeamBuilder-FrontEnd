import { toPascalCase } from "../../../../../globalHelpers";

export const MemberName = ({ name } : { name: string }) => {
    
    return (
        <p className='banner-pokemon-name'>{ toPascalCase(name) }</p>
    );
}