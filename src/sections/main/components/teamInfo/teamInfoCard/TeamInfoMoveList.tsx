import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";

export const TeamInfoMoveList = ({ member } : { member: PokemonTeamMember }) => {
  
    return (
        <ul>
            {
                Array.from({ length: 4 }, (_, i) => (
                    <p key={i}>{ member.move_list[i]?.name ?? '' }</p>
                ))
            }
        </ul>
    );
}