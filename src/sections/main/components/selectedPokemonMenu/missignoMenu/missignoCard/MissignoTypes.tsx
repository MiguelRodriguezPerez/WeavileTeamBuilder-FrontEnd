import { PokemonType } from "../../../../../../domain/enums";
import { assignTypeToPng } from "../../../../helpers/missignoGrid";

import '../../../../styles/missignoMenu/missignoCard.css'

export const MissignoTypes = ({typeList} : {typeList : PokemonType[]}) => {
    return (
        <span className="missigno-types-list">
            {
                typeList.map((type, id) => (
                    <img src={assignTypeToPng(type)} alt={`${type.toLowerCase()}.png`} key={id} />
                ))
            }
        </span>
    );
}