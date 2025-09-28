import { PokemonTypeEnum } from "../../../../../../../domain/enums";
import { PokemonTypeGrid } from "./PokemonTypeGrid";

import styles from '../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/typeSummarySection.module.css';

export const MemberTypeGrid = ({ paragraph, typeList }: { paragraph: string, typeList: PokemonTypeEnum[] }) => {

    return (
        <div className={styles['type-summary-div']}>
            <p>{paragraph}</p>
            <PokemonTypeGrid typeList={typeList} />
        </div>
    );
}