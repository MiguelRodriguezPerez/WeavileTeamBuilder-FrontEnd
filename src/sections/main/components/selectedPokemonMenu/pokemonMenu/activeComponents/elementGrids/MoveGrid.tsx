import { useContext, useState } from "react";
import { WeavileLoading } from "../../../../../../../ui/components";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveCard } from "../elementCards";
import { ElementHeader } from "../ElementHeader";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css';
import { SearchInput } from "../SearchInput";

export const MoveGrid = () => {
  const { currentPokemonData } = useContext(SelectedPokemonDataContext)!;
  const [ searchInput, setSearchInput ] = useState('');

  if (!currentPokemonData?.move_list) return <WeavileLoading />;

  return (
    <div>
      <ElementHeader elementName="Moves" />
      <SearchInput propSearch={searchInput} setPropSearch={setSearchInput} />
      <ul className={styles['element-grid']}>
        {
          currentPokemonData.move_list
            .filter(move => move.name.toLowerCase().includes(searchInput.toLowerCase()))
            .map((move) => (
              <MoveCard moveProp={move} key={move.id} />
            ))
        }
      </ul>
    </div>
  );
};
