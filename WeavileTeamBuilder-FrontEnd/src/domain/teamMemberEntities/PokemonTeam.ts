import { TeamType } from "../enums/TeamType";
import { PokemonTeamMember } from "./PokemonTeamMember";

export interface PokemonTeam {

    // TODO: Implementar metagames y sus validaciones
    // TODO: Scrapear tiers
    
    id: number;
    teamType: TeamType;
    members: PokemonTeamMember[];
    
}