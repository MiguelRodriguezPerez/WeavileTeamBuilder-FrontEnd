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

    /* Todas las imágenes pc tienen altura 96px, incluido missigno */
    /* El sprite del pokemón en el teléfono tiene un poco de padding-bottom por lo que su altura no será la 
    misma que si fuera missigno */

    const chooseHeightToRender = (): number => {
         if (width > 700) return 96
         else return (member.name !== null) ? 68 : 71
    }

    const chooseWidthToRender = (): number => {
         if (width > 700) return 96;
         else return 68;
    }



    return {
        chooseSpriteToRender,
        chooseWidthToRender,
        chooseHeightToRender
    }
 
}