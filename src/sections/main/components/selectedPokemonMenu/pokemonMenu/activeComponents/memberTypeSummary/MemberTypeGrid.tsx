import { PokemonType } from "../../../../../../../domain/enums";
import { PokemonTypeGrid } from "./PokemonTypeGrid";

export const MemberTypeGrid = ({ paragraph, typeList }: { paragraph: string, typeList: PokemonType[] }) => {

    return (
        <div className="type-summary-div">
            <p>{paragraph}</p>
            <PokemonTypeGrid typeList={typeList} />
        </div>
    );
}