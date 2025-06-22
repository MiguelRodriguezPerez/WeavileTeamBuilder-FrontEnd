import { PokemonTeamMember } from "../../../../../domain/teamMemberEntities";
import { getAlteredEvs, getAlteredIvs } from "../../../helpers/teamInfo";

export const TeamInfoIvsEvsChanges = ({ member } : { member: PokemonTeamMember }) => {
  
    return (
        <div className="team-info-ivs-evs">
            <div>
                <h3>Evs</h3>
                <p>{ getAlteredEvs(member) ?? 'No evs' }</p>
            </div>
            <div>
                <h3>Ivs</h3>
                <p>{ getAlteredIvs(member) }</p>
            </div>
        </div>
    );
}