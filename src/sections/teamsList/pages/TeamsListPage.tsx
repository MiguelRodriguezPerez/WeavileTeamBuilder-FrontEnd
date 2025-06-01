import { WeavileHeader } from "../../../ui/components";
import { OptionBanner } from "../../main/components/optionBanner/OptionBanner";
import { SelectedTeamBanner } from "../../main/components/selectedTeamBanner/SelectedTeamBanner";
import { TeamListWrapper } from "../components";

export const TeamsListPage = () => {

    return (
        <>
            <WeavileHeader />
            <SelectedTeamBanner />
            <OptionBanner />
            <TeamListWrapper/>
        </>
    );
}