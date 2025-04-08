import { MemberAbilitiesDropdown, MemberHeader, MemberItem, MemberIvsEvs, MemberMoveList } from ".";


export const MemberCard = () => {
    // ?????
    // const currentPokemonData = useContext(SelectedPokemonContext)!.currentPokemonData!;

    return (
        <div>
            <MemberHeader />
            <MemberItem />
            <MemberAbilitiesDropdown />
            <MemberMoveList />
            <MemberIvsEvs />
        </div>
    );
}