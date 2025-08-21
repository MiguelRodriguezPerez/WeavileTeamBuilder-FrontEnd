import { useWindowSize } from "react-use";
import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";

export const useChooseSpriteToRender = (member: PokemonTeamMember) => {

    const { width } = useWindowSize();
 
    const chooseSpriteToRender = (): string => {
        if (member.name !== null) {
            return (width > 700) ? 
                `data:image/jpeg;base64,${ member.front_default_sprite }` 
                : 
                `data:image/jpeg;base64,${ member.pc_sprite }`;
        } 
        else return (width > 700) ? '/images/main/selectedTeamBanner/missignoTeamBanner.png' : '/images/main/selectedTeamBanner/missignoPhoneIcon.png';
    }

    return {
        chooseSpriteToRender
    }
 
}