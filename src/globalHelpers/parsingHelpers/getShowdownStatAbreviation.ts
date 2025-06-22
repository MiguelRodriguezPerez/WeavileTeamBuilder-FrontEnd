export const getShowdownStatAbbreviation = (statName: string): string => {
    const statMap: Record<string, string> = {
        "hp": "HP",
        "attack": "Atk",
        "defense": "Def",
        "special_attack": "SpA",
        "special_defense": "SpD",
        "speed": "Spe"
    };

    return statMap[statName] ?? statName;
};
