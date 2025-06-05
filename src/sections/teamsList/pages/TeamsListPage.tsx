import { WeavileHeader } from "../../../ui/components";
import { SelectedTeamBanner } from "../../main/components/selectedTeamBanner/SelectedTeamBanner";
import { TeamListOptionBanner, TeamListWrapper } from "../components";

export const TeamsListPage = () => {

    return (
        <>
            <WeavileHeader />
            <SelectedTeamBanner />
            <TeamListOptionBanner/>
            <TeamListWrapper/>
        </>
    );
}