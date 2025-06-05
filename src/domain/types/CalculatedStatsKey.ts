import { CalculatedStats } from '../teamMemberEntities/CalculatedStats';

export type CalculatedStatsKey = keyof Pick<CalculatedStats,
    'final_hp' |
    'final_attack' |
    'final_defense'|
    'final_special_attack' |
    'final_special_defense' |
    'final_speed' 
>;