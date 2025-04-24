import { TeamType } from "../enums/TeamType";
import { PokemonTeamMember } from "./PokemonTeamMember";

export interface PokemonTeam {

    id: number;
    name: string;
    teamType: TeamType;
    teamMembers: PokemonTeamMember[];
    
}