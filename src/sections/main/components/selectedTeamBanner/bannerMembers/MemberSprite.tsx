import useWeavileStore from "../../../../../globalContext/WeavileStore";

export const MemberSprite = ({ sprite, memberId } : { sprite: string | undefined, memberId: number }) => {

    const selectedMember = useWeavileStore(state => state.selectedPokemonMember)!;

    /* Para mostrar el sprite la debes convertir en una url temporal
    que pueda usar el atributo src de img */

    return (
        <div className="selected-pokemon-sprite">
            <img
                src={sprite ? `data:image/jpeg;base64,${sprite}` : "/images/main/missignoTeamBanner.png"}
                className={`heading-pokemon-sprite ${memberId === selectedMember.id ? 'member-selected' : ''}`}
            />
        </div>
    );

}