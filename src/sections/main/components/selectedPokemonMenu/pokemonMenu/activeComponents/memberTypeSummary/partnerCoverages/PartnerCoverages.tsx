import { ResistancesPartnerCoverage } from "./ResistancesPartnerCoverage";
import { WeaknessPartnerCoverage } from "./WeaknessPartnerCoverage";

export const PartnerCoverages = () => {
  
    return (
        <section>
            <WeaknessPartnerCoverage/>
            <ResistancesPartnerCoverage/>
        </section>
    );
}