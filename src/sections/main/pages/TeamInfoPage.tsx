import { WeavileHeader } from "../../../ui/components/WeavileHeader";
import { OptionBanner } from "../components/optionBanner/OptionBanner";
import { SelectedTeamBanner } from "../components/selectedTeamBanner/SelectedTeamBanner";
import { TeamInfoList } from "../components/teamInfo/TeamInfoList";

export const TeamInfoPage = () => {
    return (
        <>
            <WeavileHeader />
            <SelectedTeamBanner />
            <OptionBanner />
            <TeamInfoList/>
        </>
    );
}