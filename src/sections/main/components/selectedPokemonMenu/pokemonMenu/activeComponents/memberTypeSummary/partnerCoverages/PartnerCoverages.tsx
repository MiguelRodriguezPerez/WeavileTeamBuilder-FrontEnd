import { ResistancesPartnerCoverage } from "./ResistancesPartnerCoverage";
import { WeaknessPartnerCoverage } from "./WeaknessPartnerCoverage";

import '../../../../../../styles/selectedMemberMenu/typeCoverageTable/typeCoverageTableChildren/partnerTypeCoverage.css';

export const PartnerCoverages = () => {
  
    return (
        <section className="partner-type-coverages-table">
            <WeaknessPartnerCoverage/>
            <ResistancesPartnerCoverage/>
        </section>
    );
}