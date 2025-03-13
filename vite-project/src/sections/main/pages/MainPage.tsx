import { WeavileHeader } from "../../../ui/components/WeavileHeader";
import { OptionBanner } from "../components/optionBanner/OptionBanner";
import { SelectedTeamBanner } from "../components/SelectedTeamBanner";

export const MainPage = () => {
    return (
        <>
            <WeavileHeader/>
            <SelectedTeamBanner/>
            <OptionBanner/>
        </>
    );
}