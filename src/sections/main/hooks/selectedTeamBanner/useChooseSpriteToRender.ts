import { useWindowSize } from "react-use";
import { PokemonTeamMember } from "../../../../domain/teamMemberEntities";
import { getImgFromBase64 } from '../../../../globalHelpers/images/getImgFromBase64';

export const useChooseSpriteToRender = (member: PokemonTeamMember) => {

    const { width } = useWindowSize();
 
    const chooseSpriteToRender = (): string => {
        if (width > 700) 
            return member.front_default_sprite ? 
                getImgFromBase64(member.front_default_sprite) 
                : 
                '/images/main/selectedTeamBanner/missignoTeamBanner.png';

        else 
            return member.pc_sprite ? 
            getImgFromBase64(member.pc_sprite) 
            :
            '/images/main/selectedTeamBanner/missignoPhoneIcon.png' 
    }

    /* Todas las imágenes pc tienen altura 96px, incluido missigno
    Lo mismo ocurre con el teléfono en 68px */

    const chooseHeightAndWidthToRender = (): number => {
        return width > 700 ? 96 : 68;
    }



    return {
        chooseSpriteToRender,
        chooseHeightAndWidthToRender
    }
 
}