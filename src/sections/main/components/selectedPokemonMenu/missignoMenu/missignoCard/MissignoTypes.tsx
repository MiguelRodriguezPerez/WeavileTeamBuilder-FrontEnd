import { PokemonType } from "../../../../../../domain/enums";
import { assignPokemonTypeToPng } from "../../../../../../globalHelpers/assignPokemonTypeToPng";

import '../../../../styles/missignoMenu/missignoCard.css'

export const MissignoTypes = ({typeList} : {typeList : PokemonType[]}) => {
    return (
        <span className="missigno-types-list">
            {
                typeList.map((type, id) => (
                    <img src={assignPokemonTypeToPng(type)} alt={`${type.toLowerCase()}.png`} key={id} />
                ))
            }
        </span>
    );
}