import { useContext, useState } from "react";
import { WeavileLoading } from "../../../../../../../ui/components";
import { SelectedPokemonDataContext } from "../../../../../context/pokemonData";
import { MoveCard } from "../elementCards";
import { ElementHeader } from "../ElementHeader";

import { SearchInput } from "../SearchInput";

import styles from '../../../../../styles/selectedMemberMenu/elementGrids/elementGrid.module.css';

export const MoveGrid = () => {
  const { currentPokemonData, isLoading } = useContext(SelectedPokemonDataContext)!;
  const [ searchInput, setSearchInput ] = useState('');

  if ( !currentPokemonData || isLoading ) return <WeavileLoading />;
  
  return (
    <div>
      <ElementHeader elementName="Moves" />
      <SearchInput propSearch={searchInput} setPropSearch={setSearchInput} />
      <ul className={styles['element-grid']}>
        {
          currentPokemonData.move_list
            .filter(move => move.name.toLowerCase().includes(searchInput.toLowerCase()))
            .map((move) => (
              <MoveCard moveProp={move} key={ move.name } />
            ))
        }
      </ul>
    </div>
  );
};
