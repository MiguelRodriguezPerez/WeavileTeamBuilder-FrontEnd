import { WeavileHeader } from "../../../ui/components/WeavileHeader";
import { OptionBanner } from "../components/optionBanner/OptionBanner";
import { SelectedTeamBanner } from "../components/selectedTeamBanner/SelectedTeamBanner";
import { TeamInfoList, NewMemberButton } from "../components/teamInfo/";

export const TeamInfoPage = () => {

    return (
        <>
            <WeavileHeader />
            <SelectedTeamBanner />
            <OptionBanner />
            <TeamInfoList/>
            <NewMemberButton/>
        </>
    );
    
}