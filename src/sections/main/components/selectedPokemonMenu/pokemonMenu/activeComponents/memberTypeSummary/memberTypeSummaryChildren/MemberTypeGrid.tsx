import { PokemonType } from "../../../../../../../../domain/enums";
import { TypeGrid } from "../TypeGrid";

export const MemberTypeGrid = ( { paragraph, typeList } : { paragraph: string, typeList: PokemonType[]}) => {

    return (
        <div className="type-summary-div">
            <p>{paragraph}</p>
            <TypeGrid typeList={typeList} />
        </div>
    );
}