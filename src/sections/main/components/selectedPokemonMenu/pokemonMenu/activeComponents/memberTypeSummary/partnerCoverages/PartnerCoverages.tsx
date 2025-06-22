import { ResistancesPartnerCoverage } from "./ResistancesPartnerCoverage";
import { WeaknessPartnerCoverage } from "./WeaknessPartnerCoverage";

import styles from '../../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/partnerTypeCoverage.module.css';

export const PartnerCoverages = () => {
  
    return (
        <section className={ styles['partner-type-coverages-table'] }>
            <WeaknessPartnerCoverage/>
            <ResistancesPartnerCoverage/>
        </section>
    );
}